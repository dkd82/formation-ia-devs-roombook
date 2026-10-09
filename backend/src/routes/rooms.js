import { Router } from "express";
import { store } from "../data/store.js";

export const roomsRouter = Router();

roomsRouter.get("/", (req, res) => {
  res.json(store.rooms);
});

roomsRouter.get("/:id", (req, res) => {
  const room = store.rooms.find((r) => r.id === Number(req.params.id));
  if (!room) return res.status(404).json({ error: "Salle introuvable" });
  res.json(room);
});
