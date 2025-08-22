import React, { useState } from 'react';
import { MapPin, Bed, Bath, Square, Calendar, Phone, Mail, ArrowLeft, Star } from 'lucide-react';
import { Property } from '../types';
import { ImageSlider } from './ImageSlider';
import { BookingModal } from './BookingModal';

interface PropertyDetailProps {
  property: Property;
  onBack: () => void;
}

export const PropertyDetail: React.FC<PropertyDetailProps> = ({ property, onBack }) => {
  const [showBookingModal, setShowBookingModal] = useState(false);

  const formatPrice = (price: number, status: string) => {
    if (status === 'for-rent') {
      return `$${price.toLocaleString()}/month`;
    }
    return `$${price.toLocaleString()}`;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <button
        onClick={onBack}
        className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Listings
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Section */}
        <div>
          <ImageSlider images={property.images} alt={property.title} />
        </div>

        {/* Property Details */}
        <div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                property.status === 'for-sale' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-blue-100 text-blue-800'
              }`}>
                {property.status === 'for-sale' ? 'For Sale' : 'For Rent'}
              </span>
              <div className="text-3xl font-bold text-green-600">
                {formatPrice(property.price, property.status)}
              </div>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">{property.title}</h1>
            
            <div className="flex items-center text-gray-600 mb-6">
              <MapPin className="w-5 h-5 mr-2" />
              <span>{property.address}</span>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Bed className="w-6 h-6 mx-auto text-gray-600 mb-2" />
                <div className="text-2xl font-bold text-gray-900">{property.bedrooms}</div>
                <div className="text-sm text-gray-600">Bedrooms</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Bath className="w-6 h-6 mx-auto text-gray-600 mb-2" />
                <div className="text-2xl font-bold text-gray-900">{property.bathrooms}</div>
                <div className="text-sm text-gray-600">Bathrooms</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Square className="w-6 h-6 mx-auto text-gray-600 mb-2" />
                <div className="text-2xl font-bold text-gray-900">{property.sqft}</div>
                <div className="text-sm text-gray-600">Sq Ft</div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <button
                onClick={() => setShowBookingModal(true)}
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Viewing
              </button>
              
              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Agent
                </button>
                <button className="flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Agent
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description and Features */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
            <p className="text-gray-700 leading-relaxed mb-6">{property.description}</p>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">Property Features</h3>
            <div className="grid grid-cols-2 gap-3">
              {property.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-2" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Property Type:</span>
                  <div className="font-semibold capitalize">{property.type}</div>
                </div>
                <div>
                  <span className="text-gray-600">Year Built:</span>
                  <div className="font-semibold">{property.yearBuilt}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Agent Info */}
        <div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Agent</h3>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">
                  {property.agent.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{property.agent.name}</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center justify-center">
                  <Phone className="w-4 h-4 mr-2" />
                  {property.agent.phone}
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="w-4 h-4 mr-2" />
                  {property.agent.email}
                </div>
              </div>
              <button className="w-full mt-4 bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
                Contact Agent
              </button>
            </div>
          </div>
        </div>
      </div>

      {showBookingModal && (
        <BookingModal
          property={property}
          onClose={() => setShowBookingModal(false)}
        />
      )}
    </div>
  );
};