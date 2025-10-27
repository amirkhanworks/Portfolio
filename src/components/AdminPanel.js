import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye, User, MapPin, Clock, ExternalLink, Trash2, Download, RefreshCw, Globe, Smartphone } from 'lucide-react';
import visitorTracking from '../services/visitorTracking';

const AdminPanel = () => {
  const [visitors, setVisitors] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [stats, setStats] = useState({
    totalVisitors: 0,
    uniqueVisitors: 0,
    linkedinVisitors: 0,
    googleVisitors: 0,
    directVisitors: 0,
    countries: {},
    devices: {}
  });

  // Simple password protection (in production, use proper authentication)
  const ADMIN_PASSWORD = process.env.REACT_APP_ADMIN_PASSWORD || 'akash2025'; // Fallback for development

  useEffect(() => {
    // Check if already authenticated
    const authStatus = localStorage.getItem('admin_authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      loadVisitorData();
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('admin_authenticated', 'true');
      setError('');
      loadVisitorData();
    } else {
      setError('Invalid password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin_authenticated');
    setPassword('');
  };

  const loadVisitorData = () => {
    const visitorLogs = visitorTracking.getVisitorLogs();
    setVisitors(visitorLogs.reverse()); // Show newest first
    
    // Calculate simplified stats
    const uniqueVisitors = new Set(visitorLogs.map(v => v.visitorId)).size;
    const linkedinVisitors = visitorLogs.filter(v => v.isLinkedIn).length;
    const googleVisitors = visitorLogs.filter(v => v.trafficSource === 'Google').length;
    const directVisitors = visitorLogs.filter(v => v.trafficSource === 'Direct').length;
    
    const countries = {};
    const devices = {};
    
    visitorLogs.forEach(visitor => {
      // Country stats
      if (visitor.location?.country) {
        countries[visitor.location.country] = (countries[visitor.location.country] || 0) + 1;
      }
      
      // Device stats
      if (visitor.device?.type) {
        devices[visitor.device.type] = (devices[visitor.device.type] || 0) + 1;
      }
    });

    setStats({
      totalVisitors: visitorLogs.length,
      uniqueVisitors,
      linkedinVisitors,
      googleVisitors,
      directVisitors,
      countries,
      devices
    });
  };

  const clearLogs = () => {
    if (window.confirm('Are you sure you want to clear all visitor logs?')) {
      visitorTracking.clearVisitorLogs();
      setVisitors([]);
      setStats({
        totalVisitors: 0,
        uniqueVisitors: 0,
        linkedinVisitors: 0,
        googleVisitors: 0,
        directVisitors: 0,
        countries: {},
        devices: {}
      });
    }
  };

  const exportLogs = () => {
    const dataStr = JSON.stringify(visitors, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `visitor-logs-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  const getCountryFlag = (country) => {
    // Simple country flag emoji mapping
    const flags = {
      'United States': '🇺🇸',
      'India': '🇮🇳',
      'United Kingdom': '🇬🇧',
      'Canada': '🇨🇦',
      'Germany': '🇩🇪',
      'France': '🇫🇷',
      'Australia': '🇦🇺',
      'Japan': '🇯🇵',
      'China': '🇨🇳',
      'Brazil': '🇧🇷'
    };
    return flags[country] || '🌍';
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-8 w-full max-w-md border border-white/20"
        >
          <div className="text-center mb-6">
            <Eye className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-white mb-2">Admin Panel</h1>
            <p className="text-gray-300">Enter password to access visitor logs</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-cyan-400"
                required
              />
            </div>
            
            {error && (
              <p className="text-red-400 text-sm text-center">{error}</p>
            )}
            
            <button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-lg font-medium transition-colors"
            >
              Access Admin Panel
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-6 mb-6 border border-white/20"
        >
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Visitor Analytics</h1>
              <p className="text-gray-300">Track who's viewing your portfolio</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={loadVisitorData}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                Refresh
              </button>
              <button
                onClick={exportLogs}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Download className="w-4 h-4" />
                Export
              </button>
              <button
                onClick={clearLogs}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                Clear
              </button>
              <button
                onClick={handleLogout}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">Total Visits</p>
                <p className="text-2xl font-bold text-white">{stats.totalVisitors}</p>
              </div>
              <Eye className="w-8 h-8 text-cyan-400" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">Unique Visitors</p>
                <p className="text-2xl font-bold text-white">{stats.uniqueVisitors}</p>
              </div>
              <User className="w-8 h-8 text-green-400" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">LinkedIn Visitors</p>
                <p className="text-2xl font-bold text-white">{stats.linkedinVisitors}</p>
              </div>
              <ExternalLink className="w-8 h-8 text-blue-400" />
            </div>
          </motion.div>
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">Google Visitors</p>
                <p className="text-2xl font-bold text-white">{stats.googleVisitors}</p>
              </div>
              <Globe className="w-8 h-8 text-orange-400" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">Direct Visitors</p>
                <p className="text-2xl font-bold text-white">{stats.directVisitors}</p>
              </div>
              <MapPin className="w-8 h-8 text-indigo-400" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">Mobile Visitors</p>
                <p className="text-2xl font-bold text-white">{stats.devices.Mobile || 0}</p>
              </div>
              <Smartphone className="w-8 h-8 text-pink-400" />
            </div>
          </motion.div>
        </div>

        {/* Visitor Logs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
        >
          <h2 className="text-xl font-bold text-white mb-4">Recent Visitors</h2>
          
          {visitors.length === 0 ? (
            <div className="text-center py-8">
              <Eye className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-300">No visitors yet. Share your portfolio to start tracking!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {visitors.map((visitor, index) => (
                <motion.div
                  key={visitor.visitorId + index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white/5 rounded-lg p-4 border border-white/10"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">
                          {visitor.friendlyName || visitor.linkedinProfile?.profileName || visitor.linkedinProfile?.profileId || `Visitor ${visitor.visitorId.slice(-6)}`}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <Clock className="w-4 h-4" />
                          {formatDate(visitor.timestamp)}
                          {visitor.location?.country && (
                            <>
                              <span>•</span>
                              <span>{getCountryFlag(visitor.location.country)} {visitor.location.country}</span>
                            </>
                          )}
                          {visitor.trafficSource && (
                            <>
                              <span>•</span>
                              <span className={`${
                                visitor.trafficSource === 'LinkedIn' ? 'text-blue-400' :
                                visitor.trafficSource === 'Google' ? 'text-orange-400' :
                                visitor.trafficSource === 'Direct' ? 'text-green-400' :
                                'text-gray-400'
                              }`}>
                                {visitor.trafficSource}
                              </span>
                            </>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                          {visitor.browser?.name && (
                            <span>{visitor.browser.name}</span>
                          )}
                          {visitor.device?.type && (
                            <>
                              <span>•</span>
                              <span>{visitor.device.type}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      {visitor.linkedinProfile?.profileId && (
                        <p className="text-sm text-gray-300 mb-1">
                          LinkedIn: {visitor.linkedinProfile.profileId}
                        </p>
                      )}
                      <p className="text-xs text-gray-400">
                        {visitor.action || 'page_view'}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AdminPanel;
