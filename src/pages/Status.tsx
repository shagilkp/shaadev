import React from 'react';
import { CheckCircle, XCircle, Clock } from 'lucide-react';

const Status: React.FC = () => {
  const services = [
    { name: 'API Gateway', status: 'operational', uptime: '99.99%' },
    { name: 'Authentication Service', status: 'operational', uptime: '99.95%' },
    { name: 'Database Cluster', status: 'degraded', uptime: '98.45%' },
    { name: 'Storage Service', status: 'operational', uptime: '99.98%' },
    { name: 'Message Queue', status: 'down', uptime: '95.50%' }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'degraded':
        return <Clock className="w-6 h-6 text-yellow-500" />;
      case 'down':
        return <XCircle className="w-6 h-6 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Status</h2>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="divide-y divide-gray-200">
          {services.map((service) => (
            <div key={service.name} className="p-6 flex items-center justify-between">
              <div className="flex items-center">
                {getStatusIcon(service.status)}
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{service.name}</h3>
                  <p className="text-sm text-gray-500 capitalize">{service.status}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">Uptime</p>
                <p className="text-sm text-gray-500">{service.uptime}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Status;