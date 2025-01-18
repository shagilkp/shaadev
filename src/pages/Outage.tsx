import React from 'react';
import { AlertTriangle, Clock, CheckCircle2 } from 'lucide-react';

const Outage: React.FC = () => {
  const outages = [
    {
      id: 1,
      service: 'Database Cluster',
      status: 'ongoing',
      startTime: '2024-03-18 14:30 UTC',
      description: 'Experiencing high latency in the primary database node',
      impact: 'Medium',
    },
    {
      id: 2,
      service: 'Message Queue',
      status: 'resolved',
      startTime: '2024-03-17 09:15 UTC',
      endTime: '2024-03-17 11:45 UTC',
      description: 'Message processing delays due to network partition',
      impact: 'High',
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">System Outages</h2>
        <button className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center">
          <AlertTriangle className="w-5 h-5 mr-2" />
          Report New Outage
        </button>
      </div>

      <div className="space-y-6">
        {outages.map((outage) => (
          <div key={outage.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                {outage.status === 'ongoing' ? (
                  <Clock className="w-6 h-6 text-yellow-500 mr-2" />
                ) : (
                  <CheckCircle2 className="w-6 h-6 text-green-500 mr-2" />
                )}
                <h3 className="text-lg font-semibold">{outage.service}</h3>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                outage.status === 'ongoing' 
                  ? 'bg-yellow-100 text-yellow-800' 
                  : 'bg-green-100 text-green-800'
              }`}>
                {outage.status.charAt(0).toUpperCase() + outage.status.slice(1)}
              </span>
            </div>
            
            <p className="text-gray-600 mb-4">{outage.description}</p>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Start Time</p>
                <p className="font-medium">{outage.startTime}</p>
              </div>
              {outage.endTime && (
                <div>
                  <p className="text-gray-500">End Time</p>
                  <p className="font-medium">{outage.endTime}</p>
                </div>
              )}
              <div>
                <p className="text-gray-500">Impact Level</p>
                <p className="font-medium">{outage.impact}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Outage;