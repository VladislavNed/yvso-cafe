import type { BookingCategory, BookingStatus } from '../../types/booking';

export type BookingSortOption = 'newest' | 'oldest' | 'titleAsc' | 'titleDesc' | 'guestsAsc' | 'guestsDesc';

export type BookingFilters = {
  search: string;
  category: 'all' | BookingCategory;
  status: 'all' | BookingStatus;
  sort: BookingSortOption;
};

export const bookingCategories: BookingCategory[] = ['dinner', 'meeting', 'birthday', 'other'];

export const categoryLabels: Record<BookingCategory, string> = {
  dinner: 'Abendessen',
  meeting: 'Meeting',
  birthday: 'Geburtstag',
  other: 'Sonstiges',
};

export const statusLabels: Record<BookingStatus, string> = {
  planned: 'Geplant',
  active: 'Aktiv',
  completed: 'Abgeschlossen',
};
