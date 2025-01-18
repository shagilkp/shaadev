import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import { SignInButton } from './components/SignInButton';
import { ProfileData } from './components/ProfileData';
import { Microscope as Microsoft } from 'lucide-react';
import Navigation from './components/Navigation';
import Monitoring from './pages/Monitoring';
import Status from './pages/Status';
import Outage from './pages/Outage';

function App() {
  const { accounts } = useMsal();

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Microsoft className="w-8 h-8 text-blue-600" />
                <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
              </div>
              <SignInButton />
            </div>
          </div>
        </header>

        <AuthenticatedTemplate>
          <Navigation />
          <main className="max-w-7xl mx-auto">
            <Routes>
              <Route path="/monitoring" element={<Monitoring />} />
              <Route path="/status" element={<Status />} />
              <Route path="/outage" element={<Outage />} />
              <Route path="/" element={<Navigate to="/monitoring" replace />} />
            </Routes>
          </main>
        </AuthenticatedTemplate>

        <UnauthenticatedTemplate>
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Welcome 
              </h2>
              <p className="text-gray-600 mb-8">
                Please sign in with your Microsoft account to access your profile and protected resources.
              </p>
              <div className="inline-block">
                <SignInButton />
              </div>
            </div>
          </main>
        </UnauthenticatedTemplate>
      </div>
    </Router>
  );
}

export default App;