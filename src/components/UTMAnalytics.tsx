import React, { useEffect, useState } from 'react';
import { BarChart3, ExternalLink, Copy } from 'lucide-react';

interface UTMData {
  source: string | null;
  medium: string | null;
  campaign: string | null;
  content: string | null;
  term: string | null;
}

const UTMAnalytics: React.FC = () => {
  const [utmData, setUtmData] = useState<UTMData>({
    source: null,
    medium: null,
    campaign: null,
    content: null,
    term: null
  });

  const [showAnalytics, setShowAnalytics] = useState(false);

  useEffect(() => {
    // Get UTM parameters from URL
    const urlParams = new URLSearchParams(window.location.search);
    
    const data: UTMData = {
      source: urlParams.get('utm_source'),
      medium: urlParams.get('utm_medium'),
      campaign: urlParams.get('utm_campaign'),
      content: urlParams.get('utm_content'),
      term: urlParams.get('utm_term')
    };

    setUtmData(data);

    // Show analytics if UTM parameters are present
    if (data.source || data.medium || data.campaign) {
      setShowAnalytics(true);
      
      // Log UTM data for Meta Pixel tracking
      console.log('UTM Data Detected:', data);
      
      // Store in localStorage for later use
      localStorage.setItem('utm_data', JSON.stringify(data));
    }
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  if (!showAnalytics) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm z-50">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <BarChart3 className="h-5 w-5 text-blue-600" />
          <h3 className="font-semibold text-gray-900">Campaign Analytics</h3>
        </div>
        <button
          onClick={() => setShowAnalytics(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          ×
        </button>
      </div>

      <div className="space-y-2 text-sm">
        {utmData.source && (
          <div className="flex justify-between">
            <span className="text-gray-600">Source:</span>
            <span className="font-medium">{utmData.source}</span>
          </div>
        )}
        
        {utmData.medium && (
          <div className="flex justify-between">
            <span className="text-gray-600">Medium:</span>
            <span className="font-medium">{utmData.medium}</span>
          </div>
        )}
        
        {utmData.campaign && (
          <div className="flex justify-between">
            <span className="text-gray-600">Campaign:</span>
            <span className="font-medium">{utmData.campaign}</span>
          </div>
        )}
        
        {utmData.content && (
          <div className="flex justify-between">
            <span className="text-gray-600">Content:</span>
            <span className="font-medium">{utmData.content}</span>
          </div>
        )}
        
        {utmData.term && (
          <div className="flex justify-between">
            <span className="text-gray-600">Term:</span>
            <span className="font-medium">{utmData.term}</span>
          </div>
        )}
      </div>

      <div className="mt-3 pt-3 border-t border-gray-200">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>Current URL:</span>
          <button
            onClick={() => copyToClipboard(window.location.href)}
            className="flex items-center space-x-1 hover:text-gray-700"
          >
            <Copy className="h-3 w-3" />
            <span>Copy</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UTMAnalytics;
