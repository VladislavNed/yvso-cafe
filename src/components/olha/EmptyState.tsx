// src/components/olha/EmptyState.tsx

export default function EmptyState() {
  return (
    <div className="p-8 text-center border-2 border-dashed border-gray-200 rounded-xl">
      <p className="text-gray-500 font-medium">Keine Ergebnisse gefunden.</p>
      <p className="text-sm text-gray-400 mt-1">Bitte ändern Sie die Filter oder erstellen Sie eine neue Reservierung.</p>
    </div>
  );
}
