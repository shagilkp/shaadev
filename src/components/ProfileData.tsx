import React, { useEffect, useState } from 'react';
import { useMsal } from '@azure/msal-react';
import { loginRequest, graphConfig } from '../config/authConfig';
import { User } from 'lucide-react';

interface GraphData {
  displayName?: string;
  email?: string;
  jobTitle?: string;
}

export const ProfileData: React.FC = () => {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState<GraphData | null>(null);

  useEffect(() => {
    const getGraphData = async () => {
      if (accounts[0]) {
        try {
          const response = await instance.acquireTokenSilent({
            ...loginRequest,
            account: accounts[0],
          });

          const graphResponse = await fetch(graphConfig.graphMeEndpoint, {
            headers: {
              Authorization: `Bearer ${response.accessToken}`,
            },
          });

          const data = await graphResponse.json();
          setGraphData(data);
        } catch (error) {
          console.error('Error fetching graph data:', error);
        }
      }
    };

    getGraphData();
  }, [instance, accounts]);

  if (!graphData) return null;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-blue-100 p-3 rounded-full">
          <User className="w-6 h-6 text-blue-600" />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800">Profile</h2>
      </div>
      <div className="space-y-3">
        <div>
          <label className="text-sm text-gray-500">Name</label>
          <p className="text-gray-800 font-medium">{graphData.displayName}</p>
        </div>
        <div>
          <label className="text-sm text-gray-500">Email</label>
          <p className="text-gray-800 font-medium">{graphData.email}</p>
        </div>
        {graphData.jobTitle && (
          <div>
            <label className="text-sm text-gray-500">Job Title</label>
            <p className="text-gray-800 font-medium">{graphData.jobTitle}</p>
          </div>
        )}
      </div>
    </div>
  );
};