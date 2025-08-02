import { useEffect } from 'react';

export const useAnalytics = () => {
  useEffect(() => {
    // Track page views and interactions
    const trackEvent = (eventName, data = {}) => {
      // This would integrate with Google Analytics or similar
      console.log('Analytics Event:', eventName, data);
    };

    // Track resume downloads
    const trackResumeDownload = () => {
      trackEvent('resume_download', {
        timestamp: new Date().toISOString(),
        source: 'portfolio'
      });
    };

    // Track contact form submissions
    const trackContactSubmission = (method) => {
      trackEvent('contact_submission', {
        method,
        timestamp: new Date().toISOString()
      });
    };

    // Track section views
    const trackSectionView = (sectionName) => {
      trackEvent('section_view', {
        section: sectionName,
        timestamp: new Date().toISOString()
      });
    };

    // Expose tracking functions globally
    window.trackResumeDownload = trackResumeDownload;
    window.trackContactSubmission = trackContactSubmission;
    window.trackSectionView = trackSectionView;

    return () => {
      delete window.trackResumeDownload;
      delete window.trackContactSubmission;
      delete window.trackSectionView;
    };
  }, []);
}; 