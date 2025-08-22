import { Property } from '../types';

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Modern Luxury Villa',
    price: 850000,
    location: 'Beverly Hills, CA',
    address: '1234 Sunset Boulevard, Beverly Hills, CA 90210',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
    type: 'house',
    status: 'for-sale',
    images: [
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    ],
    description: 'Stunning modern villa with panoramic city views, featuring an open-concept design, high-end finishes, and a resort-style backyard with pool and spa.',
    features: ['Pool', 'Spa', 'Gourmet Kitchen', 'Walk-in Closets', 'Home Theater', 'Wine Cellar'],
    yearBuilt: 2019,
    agent: {
      name: 'Sarah Johnson',
      phone: '(555) 123-4567',
      email: 'sarah.johnson@realestate.com'
    }
  },
  {
    id: '2',
    title: 'Downtown Penthouse',
    price: 1200000,
    location: 'Manhattan, NY',
    address: '789 Park Avenue, Manhattan, NY 10021',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2800,
    type: 'apartment',
    status: 'for-sale',
    images: [
      'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/2029719/pexels-photo-2029719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    ],
    description: 'Luxurious penthouse with breathtaking skyline views, floor-to-ceiling windows, and premium amenities in the heart of Manhattan.',
    features: ['City Views', 'Floor-to-Ceiling Windows', 'Hardwood Floors', 'Modern Kitchen', 'Balcony'],
    yearBuilt: 2020,
    agent: {
      name: 'Michael Chen',
      phone: '(555) 987-6543',
      email: 'michael.chen@realestate.com'
    }
  },
  {
    id: '3',
    title: 'Cozy Family Home',
    price: 3500,
    location: 'Austin, TX',
    address: '456 Oak Street, Austin, TX 78701',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1800,
    type: 'house',
    status: 'for-rent',
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    ],
    description: 'Charming family home in a quiet neighborhood with a large backyard, perfect for families. Recently updated with modern amenities.',
    features: ['Large Backyard', 'Updated Kitchen', 'Hardwood Floors', 'Two-Car Garage', 'Central AC'],
    yearBuilt: 2015,
    agent: {
      name: 'Emily Rodriguez',
      phone: '(555) 456-7890',
      email: 'emily.rodriguez@realestate.com'
    }
  },
  {
    id: '4',
    title: 'Waterfront Condo',
    price: 2800,
    location: 'Miami, FL',
    address: '321 Ocean Drive, Miami, FL 33139',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    type: 'condo',
    status: 'for-rent',
    images: [
      'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    ],
    description: 'Beautiful waterfront condo with direct ocean access, featuring a private balcony and resort-style amenities including pool and fitness center.',
    features: ['Ocean View', 'Private Balcony', 'Pool Access', 'Fitness Center', 'Concierge Service'],
    yearBuilt: 2018,
    agent: {
      name: 'David Martinez',
      phone: '(555) 234-5678',
      email: 'david.martinez@realestate.com'
    }
  }
];