// src/components/olha/Dashboard.tsx
import { useMemo, useState } from 'react';
import { useBookings } from '../../hooks/useBookings';
import EmptyState from './EmptyState';
import ItemFilters from './ItemFilters';
import {
  filterAndSortBookings,
  getAverageGuests,
  getCategories,
  getExpectedRevenue,
  getRecentReservations,
  getStatusCounts,
  getTotalReservations,
} from './dashboardHelpers';
import { statusLabels, type BookingFilters } from './types';

const defaultFilters: BookingFilters = {
  search: '',
  category: 'all',
  status: 'all',
  sort: 'newest',
};

const currencyFormatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
});

export default function Dashboard() {
  const { useGetAll } = useBookings();
  const { data: bookings = [], isLoading, isError } = useGetAll();
  const [filters, setFilters] = useState<BookingFilters>(defaultFilters);

  const categories = useMemo(() => getCategories(bookings), [bookings]);
  const filteredBookings = useMemo(() => filterAndSortBookings(bookings, filters), [bookings, filters]);
  const total = getTotalReservations(bookings);
  const statusCounts = getStatusCounts(bookings);
  const recent = getRecentReservations(bookings);
  const avgGuests = getAverageGuests(bookings);
  const revenue = getExpectedRevenue(bookings);

  if (isLoading) {
    return <div className="p-6 text-center font-medium">Dashboard-Daten werden geladen...</div>;
  }

  if (isError) {
    return <div className="p-6 text-center font-medium text-red-500">Fehler beim Laden der Daten.</div>;
  }

  return (
    <div className="mx-auto max-w-6xl space-y-6 p-6">
      <h1 className="text-3xl font-bold text-gray-800">Café Dashboard</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-blue-100 bg-blue-50 p-4 shadow-sm">
          <h3 className="text-sm font-medium text-blue-600">Gesamte Reservierungen</h3>
          <p className="mt-1 text-2xl font-bold">{total}</p>
        </div>

        <div className="rounded-xl border border-green-100 bg-green-50 p-4 shadow-sm">
          <h3 className="text-sm font-medium text-green-600">Aktive Reservierungen</h3>
          <p className="mt-1 text-2xl font-bold">{statusCounts.active}</p>
        </div>

        <div className="rounded-xl border border-yellow-100 bg-yellow-50 p-4 shadow-sm">
          <h3 className="text-sm font-medium text-yellow-600">Ø Gäste pro Tisch</h3>
          <p className="mt-1 text-2xl font-bold">{avgGuests}</p>
        </div>

        <div className="rounded-xl border border-purple-100 bg-purple-50 p-4 shadow-sm">
          <h3 className="text-sm font-medium text-purple-600">Erwarteter Umsatz</h3>
          <p className="mt-1 text-2xl font-bold">{currencyFormatter.format(revenue)}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {Object.entries(statusCounts).map(([status, count]) => (
          <div key={status} className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
            <h3 className="text-sm font-medium text-gray-600">{statusLabels[status as keyof typeof statusLabels]}</h3>
            <p className="mt-1 text-2xl font-bold">{count}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold text-gray-700">Neueste Reservierungen</h2>
        {recent.length === 0 ? (
          <p className="text-gray-500">Keine Reservierungen vorhanden.</p>
        ) : (
          <ul className="divide-y divide-gray-100">
            {recent.map((booking) => (
              <li key={booking.id} className="flex items-center justify-between py-3">
                <div>
                  <p className="font-medium text-gray-900">{booking.title}</p>
                  <p className="text-sm text-gray-500">
                    {booking.guestsCount} Gäste • Tisch {booking.tableNumber} • {booking.category}
                  </p>
                </div>
                <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-700">
                  {statusLabels[booking.status]}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <ItemFilters
        filters={filters}
        categories={categories}
        onChange={setFilters}
        onReset={() => setFilters(defaultFilters)}
      />

      <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold text-gray-700">Gefilterte Reservierungen</h2>
        {filteredBookings.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {filteredBookings.map((booking) => (
              <article key={booking.id} className="rounded-xl border border-gray-100 p-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold text-gray-900">{booking.title}</h3>
                  <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-700">
                    {statusLabels[booking.status]}
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-500">{booking.description}</p>
                <p className="mt-3 text-sm font-medium text-gray-700">
                  {booking.guestName} • {booking.guestsCount} Gäste • Tisch {booking.tableNumber}
                </p>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
