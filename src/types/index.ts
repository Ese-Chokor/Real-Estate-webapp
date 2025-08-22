export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  type: 'house' | 'apartment' | 'condo' | 'townhouse';
  status: 'for-sale' | 'for-rent';
  images: string[];
  description: string;
  features: string[];
  yearBuilt: number;
  agent: {
    name: string;
    phone: string;
    email: string;
  };
}

export interface Booking {
  id: string;
  propertyId: string;
  date: string;
  time: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  message: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  isBooked: boolean;
  isAvailable: boolean;
}