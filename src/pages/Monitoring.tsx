import React from 'react';
import { LineChart, ArrowUp, ArrowDown } from 'lucide-react';

const Monitoring: React.FC = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">System Monitoring</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <LineChart className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold">CPU Usage</h3>
              </div>
              <span className="flex items-center text-green-600">
                <ArrowDown className="w-4 h-4 mr-1" />
                12%
              </span>
            </div>
            <div className="text-3xl font-bold">45%</div>
            <div className="text-sm text-gray-500 mt-2">Last updated 5 min ago</div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <LineChart className="w-6 h-6 text-purple-600 mr-2" />
                <h3 className="text-lg font-semibold">Memory Usage</h3>
              </div>
              <span className="flex items-center text-red-600">
                <ArrowUp className="w-4 h-4 mr-1" />
                8%
              </span>
            </div>
            <div className="text-3xl font-bold">78%</div>
            <div className="text-sm text-gray-500 mt-2">Last updated 5 min ago</div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <LineChart className="w-6 h-6 text-orange-600 mr-2" />
                <h3 className="text-lg font-semibold">Network Traffic</h3>
              </div>
              <span className="flex items-center text-green-600">
                <ArrowDown className="w-4 h-4 mr-1" />
                5%
              </span>
            </div>
            <div className="text-3xl font-bold">1.2 GB/s</div>
            <div className="text-sm text-gray-500 mt-2">Last updated 5 min ago</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monitoring;