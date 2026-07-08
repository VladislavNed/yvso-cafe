// src/components/olha/dashboardHelpers.ts
import type { Booking } from '../../types/booking';
import { bookingCategories, type BookingFilters } from './types';
import type { BookingStatus } from '../../types/booking';

export const getTotalReservations = (data: Booking[]) => data.length;

export const getStatusCounts = (data: Booking[]) => {
  return data.reduce(
    (acc, booking) => {
      acc[booking.status] += 1;
      return acc;
    },
    { planned: 0, active: 0, completed: 0 } satisfies Record<BookingStatus, number>,
  );
};

export const getRecentReservations = (data: Booking[], count = 3) => {
  return [...data]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, count);
};

export const getAverageGuests = (data: Booking[]) => {
  if (data.length === 0) return '0.0';

  const totalGuests = data.reduce((sum, booking) => sum + Number(booking.guestsCount), 0);
  return (totalGuests / data.length).toFixed(1);
};

export const getExpectedRevenue = (data: Booking[]) => {
  const totalGuests = data.reduce((sum, booking) => sum + Number(booking.guestsCount), 0);
  return totalGuests * 20;
};

export const getCategories = (data: Booking[]) => {
  const usedCategories = new Set(data.map((booking) => booking.category));
  return bookingCategories.filter((category) => usedCategories.has(category) || data.length === 0);
};

export const filterAndSortBookings = (data: Booking[], filters: BookingFilters) => {
  const search = filters.search.trim().toLowerCase();

  return [...data]
    .filter((booking) => {
      const matchesSearch =
        search.length === 0 ||
        booking.title.toLowerCase().includes(search) ||
        booking.description.toLowerCase().includes(search) ||
        booking.guestName.toLowerCase().includes(search);
      const matchesCategory = filters.category === 'all' || booking.category === filters.category;
      const matchesStatus = filters.status === 'all' || booking.status === filters.status;

      return matchesSearch && matchesCategory && matchesStatus;
    })
    .sort((a, b) => {
      switch (filters.sort) {
        case 'oldest':
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        case 'titleAsc':
          return a.title.localeCompare(b.title, 'de');
        case 'titleDesc':
          return b.title.localeCompare(a.title, 'de');
        case 'guestsAsc':
          return a.guestsCount - b.guestsCount;
        case 'guestsDesc':
          return b.guestsCount - a.guestsCount;
        case 'newest':
        default:
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
    });
};
