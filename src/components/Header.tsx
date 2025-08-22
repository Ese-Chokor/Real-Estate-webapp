import React from 'react';
import { Home, Search, Calendar, Phone } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onViewChange }) => {
  const navItems = [
    { id: 'listings', label: 'Listings', icon: Home },
    { id: 'search', label: 'Search', icon: Search },
    { id: 'bookings', label: 'My Bookings', icon: Calendar },
    { id: 'contact', label: 'Contact', icon: Phone }
  ];

  return (
    <header className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Home className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">EliteHomes</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => onViewChange(id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                  currentView === id
                    ? 'text-blue-600 bg-blue-50 border border-blue-200'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </nav>

          <div className="md:hidden">
            <button className="p-2 rounded-md text-gray-700">
              <Search className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};