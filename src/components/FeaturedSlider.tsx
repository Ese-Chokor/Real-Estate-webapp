import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Bed, Bath, Square, DollarSign } from 'lucide-react';
import { Property } from '../types';

interface FeaturedSliderProps {
  properties: Property[];
  onPropertySelect: (property: Property) => void;
}

export const FeaturedSlider: React.FC<FeaturedSliderProps> = ({ properties, onPropertySelect }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Filter to get only apartments and limit to 6
  const featuredApartments = properties
    .filter(property => property.type === 'apartment' || property.type === 'condo')
    .slice(0, 6);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === featuredApartments.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredApartments.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? featuredApartments.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === featuredApartments.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const formatPrice = (price: number, status: string) => {
    if (status === 'for-rent') {
      return `$${price.toLocaleString()}/mo`;
    }
    return `$${price.toLocaleString()}`;
  };

  if (featuredApartments.length === 0) return null;

  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Apartments</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover our handpicked selection of premium apartments and condos in prime locations
          </p>
        </div>

        <div className="relative">
          {/* Main Slider */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {featuredApartments.map((apartment) => (
                <div key={apartment.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-2xl overflow-hidden shadow-2xl">
                    {/* Image Section */}
                    <div className="relative h-96 lg:h-auto">
                      <img
                        src={apartment.images[0]}
                        alt={apartment.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                          apartment.status === 'for-sale' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {apartment.status === 'for-sale' ? 'For Sale' : 'For Rent'}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                        {apartment.images.length} Photos
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-3xl font-bold text-gray-900">{apartment.title}</h3>
                        <div className="flex items-center text-green-600 font-bold text-2xl">
                          <DollarSign className="w-6 h-6" />
                          {formatPrice(apartment.price, apartment.status)}
                        </div>
                      </div>

                      <div className="flex items-center text-gray-600 mb-6">
                        <MapPin className="w-5 h-5 mr-2" />
                        <span className="text-lg">{apartment.location}</span>
                      </div>

                      <div className="grid grid-cols-3 gap-6 mb-6">
                        <div className="text-center">
                          <Bed className="w-8 h-8 mx-auto text-gray-600 mb-2" />
                          <div className="text-2xl font-bold text-gray-900">{apartment.bedrooms}</div>
                          <div className="text-sm text-gray-600">Bedrooms</div>
                        </div>
                        <div className="text-center">
                          <Bath className="w-8 h-8 mx-auto text-gray-600 mb-2" />
                          <div className="text-2xl font-bold text-gray-900">{apartment.bathrooms}</div>
                          <div className="text-sm text-gray-600">Bathrooms</div>
                        </div>
                        <div className="text-center">
                          <Square className="w-8 h-8 mx-auto text-gray-600 mb-2" />
                          <div className="text-2xl font-bold text-gray-900">{apartment.sqft}</div>
                          <div className="text-sm text-gray-600">Sq Ft</div>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-8 leading-relaxed">
                        {apartment.description}
                      </p>

                      <button
                        onClick={() => onPropertySelect(apartment)}
                        className="bg-blue-600 text-white py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 p-3 rounded-full shadow-lg transition-all z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 p-3 rounded-full shadow-lg transition-all z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {featuredApartments.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-white scale-125'
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Auto-play Control */}
        <div className="text-center mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-white text-sm hover:text-gray-300 transition-colors"
          >
            {isAutoPlaying ? 'Pause Auto-play' : 'Resume Auto-play'}
          </button>
        </div>
      </div>
    </section>
  );
};