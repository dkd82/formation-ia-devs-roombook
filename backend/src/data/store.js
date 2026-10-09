// Stockage en mémoire (pas de base de données dans ce projet pédagogique)
const initialRooms = [
  { id: 1, name: "Mont Blanc", floor: 1 },
  { id: 2, name: "Vercors", floor: 1 },
  { id: 3, name: "Chartreuse", floor: 2 },
];

const initialBookings = [
  {
    id: 1,
    roomId: 1,
    title: "Daily équipe produit",
    organizer: "Alice",
    start: "2026-10-12T09:00:00.000Z",
    end: "2026-10-12T09:15:00.000Z",
  },
  {
    id: 2,
    roomId: 2,
    title: "Revue d'architecture",
    organizer: "Karim",
    start: "2026-10-12T14:00:00.000Z",
    end: "2026-10-12T15:30:00.000Z",
  },
];

export const store = {
  rooms: [],
  bookings: [],
  nextBookingId: 1,
};

export function resetStore() {
  store.rooms = structuredClone(initialRooms);
  store.bookings = structuredClone(initialBookings);
  store.nextBookingId = store.bookings.length + 1;
}

resetStore();
