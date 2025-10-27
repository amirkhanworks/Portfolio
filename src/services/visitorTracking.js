// Optimized Visitor Tracking Service
class VisitorTrackingService {
  constructor() {
    this.visitorId = this.getOrCreateVisitorId();
    this.isTracking = false;
  }

  // Generate or retrieve visitor ID
  getOrCreateVisitorId() {
    let visitorId = localStorage.getItem('portfolio_visitor_id');
    if (!visitorId) {
      visitorId = 'v_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);
      localStorage.setItem('portfolio_visitor_id', visitorId);
    }
    return visitorId;
  }

  // Generate a friendly visitor name
  generateVisitorName(visitorInfo) {
    // Try LinkedIn profile name first
    if (visitorInfo.linkedinProfile?.profileName) {
      return visitorInfo.linkedinProfile.profileName;
    }
    
    // Try LinkedIn profile ID
    if (visitorInfo.linkedinProfile?.profileId) {
      return visitorInfo.linkedinProfile.profileId.replace(/-/g, ' ');
    }
    
    // Generate friendly name based on traffic source and location
    const location = visitorInfo.location?.country || 'Unknown';
    const source = visitorInfo.trafficSource || 'Direct';
    const device = visitorInfo.device?.type || 'Desktop';
    
    // Create friendly names based on source and location
    const friendlyNames = [
      `${source} Visitor from ${location}`,
      `${device} User from ${location}`,
      `Portfolio Visitor`,
      `Anonymous User`
    ];
    
    // Use a simple hash of visitorId to consistently pick the same name for the same visitor
    const hash = this.simpleHash(visitorInfo.visitorId);
    return friendlyNames[hash % friendlyNames.length];
  }

  // Simple hash function for consistent name generation
  simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash);
  }

  // Lightweight visitor info collection
  async getVisitorInfo() {
    try {
      const referrer = document.referrer;
      const isLinkedIn = referrer.includes('linkedin.com');
      
      // Extract LinkedIn profile info if available
      let linkedinProfile = null;
      if (isLinkedIn) {
        linkedinProfile = this.extractLinkedInInfo(referrer);
      }

      const visitorInfo = {
        visitorId: this.visitorId,
        timestamp: new Date().toISOString(),
        referrer: referrer,
        trafficSource: this.getTrafficSource(referrer),
        isLinkedIn: isLinkedIn,
        linkedinProfile: linkedinProfile,
        browser: this.getBrowserInfo(),
        device: this.getDeviceInfo(),
        location: await this.getLocationAsync()
      };

      // Generate friendly name
      visitorInfo.friendlyName = this.generateVisitorName(visitorInfo);

      return visitorInfo;
    } catch (error) {
      // Silently handle errors in production
      return {
        visitorId: this.visitorId,
        timestamp: new Date().toISOString(),
        referrer: document.referrer,
        error: error.message
      };
    }
  }

  // Extract LinkedIn information from referrer URL
  extractLinkedInInfo(referrer) {
    try {
      const url = new URL(referrer);
      const pathname = url.pathname;
      
      let profileId = null;
      let profileName = null;
      
      if (pathname.includes('/in/')) {
        profileId = pathname.split('/in/')[1]?.split('/')[0];
        // Try to extract a readable name from the profile ID
        if (profileId) {
          profileName = profileId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        }
      } else if (pathname.includes('/company/')) {
        profileId = pathname.split('/company/')[1]?.split('/')[0];
        profileName = profileId?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      }
      
      return {
        profileId: profileId,
        profileName: profileName,
        isCompany: pathname.includes('/company/'),
        isPersonal: pathname.includes('/in/')
      };
    } catch (error) {
      return null;
    }
  }

  // Determine traffic source
  getTrafficSource(referrer) {
    if (!referrer) return 'Direct';
    
    const domain = new URL(referrer).hostname.toLowerCase();
    
    if (domain.includes('linkedin.com')) return 'LinkedIn';
    if (domain.includes('google.com')) return 'Google';
    if (domain.includes('facebook.com')) return 'Facebook';
    if (domain.includes('twitter.com')) return 'Twitter';
    if (domain.includes('github.com')) return 'GitHub';
    
    return 'Other';
  }

  // Simplified browser info
  getBrowserInfo() {
    const ua = navigator.userAgent;
    
    if (ua.includes('Chrome')) return { name: 'Chrome', isMobile: /Mobile/.test(ua) };
    if (ua.includes('Firefox')) return { name: 'Firefox', isMobile: /Mobile/.test(ua) };
    if (ua.includes('Safari')) return { name: 'Safari', isMobile: /Mobile/.test(ua) };
    if (ua.includes('Edge')) return { name: 'Edge', isMobile: /Mobile/.test(ua) };
    
    return { name: 'Unknown', isMobile: /Mobile/.test(ua) };
  }

  // Simplified device info
  getDeviceInfo() {
    const ua = navigator.userAgent;
    
    if (/Mobile|Android|iPhone/.test(ua)) return { type: 'Mobile' };
    if (/iPad|Tablet/.test(ua)) return { type: 'Tablet' };
    return { type: 'Desktop' };
  }

  // Async location fetching (non-blocking)
  async getLocationAsync() {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      
      return {
        country: data.country_name,
        city: data.city,
        timezone: data.timezone
      };
    } catch (error) {
      return null;
    }
  }

  // Optimized visitor logging
  async logVisitor(visitorInfo) {
    try {
      const visitors = JSON.parse(localStorage.getItem('portfolio_visitors') || '[]');
      visitors.push(visitorInfo);
      
      // Keep only last 100 visitors for performance
      if (visitors.length > 100) {
        visitors.splice(0, visitors.length - 100);
      }
      
      localStorage.setItem('portfolio_visitors', JSON.stringify(visitors));
      return true;
    } catch (error) {
      // Silently handle errors in production
      return false;
    }
  }

  // Track page views (optimized)
  async trackPageView(pageName) {
    if (this.isTracking) return; // Prevent duplicate tracking
    
    this.isTracking = true;
    
    try {
      const visitorInfo = await this.getVisitorInfo();
      visitorInfo.page = pageName;
      visitorInfo.action = 'page_view';
      
      // Log asynchronously without blocking
      setTimeout(() => {
        this.logVisitor(visitorInfo);
        this.isTracking = false;
      }, 100);
      
      return true;
    } catch (error) {
      this.isTracking = false;
      return false;
    }
  }

  // Get visitor logs (for admin panel)
  getVisitorLogs() {
    try {
      return JSON.parse(localStorage.getItem('portfolio_visitors') || '[]');
    } catch (error) {
      return [];
    }
  }

  // Clear visitor logs
  clearVisitorLogs() {
    localStorage.removeItem('portfolio_visitors');
    localStorage.removeItem('portfolio_visitor_id');
  }
}

// Create singleton instance
const visitorTracking = new VisitorTrackingService();

export default visitorTracking;
