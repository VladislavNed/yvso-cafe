import { createFileRoute } from "@tanstack/react-router";
import { ReservationForm } from "../../components/reservations/ReservationForm";
import { useBookings } from "../../hooks/useBookings";

export const Route = createFileRoute("/_protected/reservation")({
  component: RouteComponent,
});

function RouteComponent() {
  const { useCreate } = useBookings();
  const createBooking = useCreate();

  return (
    <main className="p-4">
      <h1>Neue Reservierung</h1>

      <ReservationForm
        isSubmitting={createBooking.isPending}
        submitError={createBooking.error?.message}
        submitLabel="Reservierung erstellen"
        onSubmit={async (values) => {
          await createBooking.mutateAsync(values);
        }}
      />
    </main>
  );
}
