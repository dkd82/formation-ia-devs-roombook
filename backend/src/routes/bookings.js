import { Router } from "express";
import { store } from "../data/store.js";

export const bookingsRouter = Router();

// Liste des réservations (filtre optionnel par salle)
bookingsRouter.get("/", (req, res) => {
  let result = store.bookings;
  if (req.query.roomId) {
    result = result.filter((b) => b.roomId === Number(req.query.roomId));
  }
  res.json(result);
});

// Création d'une réservation
bookingsRouter.post("/", (req, res) => {
  const { roomId, title, organizer, start, end } = req.body;

  // Validation
  const errors = [];
  if (!roomId) errors.push("roomId est obligatoire");
  if (!title || typeof title !== "string" || title.trim() === "") {
    errors.push("title est obligatoire");
  }
  if (!organizer || typeof organizer !== "string" || organizer.trim() === "") {
    errors.push("organizer est obligatoire");
  }
  if (!start || isNaN(new Date(start).getTime())) errors.push("start invalide");
  if (!end || isNaN(new Date(end).getTime())) errors.push("end invalide");
  if (errors.length === 0 && new Date(end) <= new Date(start)) {
    errors.push("end doit être après start");
  }
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  const room = store.rooms.find((r) => r.id === Number(roomId));
  if (!room) {
    return res.status(404).json({ error: "Salle introuvable" });
  }

  // Détection des conflits de créneau
  const newStart = new Date(start).getTime();
  const newEnd = new Date(end).getTime();
  for (const b of store.bookings) {
    if (b.roomId !== Number(roomId)) continue;
    const bStart = new Date(b.start).getTime();
    const bEnd = new Date(b.end).getTime();
    if (newStart < bEnd && bStart < newEnd) {
      return res.status(409).json({ error: "Créneau déjà réservé", conflictWith: b.id });
    }
  }

  const booking = {
    id: store.nextBookingId++,
    roomId: Number(roomId),
    title: title.trim(),
    organizer: organizer.trim(),
    start: new Date(start).toISOString(),
    end: new Date(end).toISOString(),
  };
  store.bookings.push(booking);
  res.status(201).json(booking);
});

// Annulation d'une réservation
bookingsRouter.delete("/:id", (req, res) => {
  const index = store.bookings.findIndex((b) => b.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Réservation introuvable" });
  store.bookings.splice(index, 1);
  res.status(204).end();
});
