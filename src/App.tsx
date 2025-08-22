import React, { useState } from 'react';
import { Header } from './components/Header';
import { PropertyListings } from './components/PropertyListings';
import { PropertyDetail } from './components/PropertyDetail';
import { Footer } from './components/Footer';
import { mockProperties } from './data/mockData';
import { Property } from './types';

function App() {
  const [currentView, setCurrentView] = useState('listings');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const handlePropertySelect = (property: Property) => {
    setSelectedProperty(property);
    setCurrentView('detail');
  };

  const handleBackToListings = () => {
    setSelectedProperty(null);
    setCurrentView('listings');
  };

  const handleViewChange = (view: string) => {
    setCurrentView(view);
    if (view === 'listings') {
      setSelectedProperty(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentView={currentView} onViewChange={handleViewChange} />
      
      <main>
        {currentView === 'listings' && (
          <PropertyListings
            properties={mockProperties}
            onPropertySelect={handlePropertySelect}
          />
        )}
        
        {currentView === 'detail' && selectedProperty && (
          <PropertyDetail
            property={selectedProperty}
            onBack={handleBackToListings}
          />
        )}
        
        {currentView === 'search' && (
          <div className="max-w-7xl mx-auto px-4 py-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Search</h2>
            <p className="text-gray-600">Advanced search functionality would be implemented here.</p>
          </div>
        )}
        
        {currentView === 'bookings' && (
          <div className="max-w-7xl mx-auto px-4 py-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">My Bookings</h2>
            <p className="text-gray-600">Your scheduled property viewings would appear here.</p>
          </div>
        )}
        
        {currentView === 'contact' && (
          <div className="max-w-7xl mx-auto px-4 py-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600">Contact information will be set later on</p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;