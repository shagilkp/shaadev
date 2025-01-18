import React from 'react';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../config/authConfig';
import { LogIn, LogOut } from 'lucide-react';

export const SignInButton: React.FC = () => {
  const { instance, accounts } = useMsal();

  const handleLogin = () => {
    instance.loginPopup(loginRequest).catch(error => {
      console.error('Login failed:', error);
    });
  };

  const handleLogout = () => {
    instance.logoutPopup().catch(error => {
      console.error('Logout failed:', error);
    });
  };

  return accounts.length > 0 ? (
    <button
      onClick={handleLogout}
      className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
    >
      <LogOut className="w-5 h-5" />
      Sign Out
    </button>
  ) : (
    <button
      onClick={handleLogin}
      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
    >
      <LogIn className="w-5 h-5" />
      Sign in with Microsoft
    </button>
  );
};