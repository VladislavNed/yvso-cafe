import type { Booking } from '../../types/booking';

export type BookingStatus = Booking['status'];

export type BookingSortOption = 'newest' | 'oldest' | 'titleAsc' | 'titleDesc' | 'guestsAsc' | 'guestsDesc';

export type BookingFilters = {
  search: string;
  category: string;
  status: 'all' | BookingStatus;
  sort: BookingSortOption;
};

export const statusLabels: Record<BookingStatus, string> = {
  planned: 'Geplant',
  active: 'Aktiv',
  completed: 'Abgeschlossen',
};
