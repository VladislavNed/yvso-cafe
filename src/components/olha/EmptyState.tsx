// src/components/olha/EmptyState.tsx

export default function EmptyState() {
  return (
    <div className="rounded-xl border-2 border-dashed border-gray-200 p-8 text-center dark:border-gray-700">
      <p className="font-medium text-gray-500 dark:text-gray-300">Keine Ergebnisse gefunden.</p>
      <p className="mt-1 text-sm text-gray-400 dark:text-gray-500">Bitte ändern Sie die Filter oder erstellen Sie eine neue Reservierung.</p>
    </div>
  );
}
