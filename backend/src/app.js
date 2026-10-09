import express from "express";
import cors from "cors";
import { roomsRouter } from "./routes/rooms.js";
import { bookingsRouter } from "./routes/bookings.js";

export function createApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.get("/health", (req, res) => res.json({ status: "ok" }));
  app.use("/rooms", roomsRouter);
  app.use("/bookings", bookingsRouter);

  return app;
}
