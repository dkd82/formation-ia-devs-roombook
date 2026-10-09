import { test, before, after, beforeEach } from "node:test";
import assert from "node:assert/strict";
import { createApp } from "../src/app.js";
import { resetStore } from "../src/data/store.js";

let server;
let base;

before(async () => {
  server = createApp().listen(0);
  await new Promise((resolve) => server.once("listening", resolve));
  base = `http://localhost:${server.address().port}`;
});

after(() => server.close());
beforeEach(() => resetStore());

const post = (body) =>
  fetch(`${base}/bookings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

test("GET /rooms retourne les salles", async () => {
  const res = await fetch(`${base}/rooms`);
  assert.equal(res.status, 200);
  const rooms = await res.json();
  assert.equal(rooms.length, 3);
});

test("POST /bookings crée une réservation valide", async () => {
  const res = await post({
    roomId: 3,
    title: "Atelier",
    organizer: "Sam",
    start: "2026-10-13T10:00:00.000Z",
    end: "2026-10-13T11:00:00.000Z",
  });
  assert.equal(res.status, 201);
  const booking = await res.json();
  assert.equal(booking.roomId, 3);
});

test("POST /bookings refuse un chevauchement franc", async () => {
  const res = await post({
    roomId: 1,
    title: "Conflit",
    organizer: "Sam",
    start: "2026-10-12T09:05:00.000Z",
    end: "2026-10-12T09:30:00.000Z",
  });
  assert.equal(res.status, 409);
});

test("POST /bookings accepte deux réservations dos à dos", async () => {
  const res = await post({
    roomId: 1,
    title: "Suite",
    organizer: "Bob",
    start: "2026-10-12T09:15:00.000Z",
    end: "2026-10-12T10:00:00.000Z",
  });
  assert.equal(res.status, 201);
});

test("DELETE /bookings/:id annule une réservation", async () => {
  const res = await fetch(`${base}/bookings/1`, { method: "DELETE" });
  assert.equal(res.status, 204);
  const list = await (await fetch(`${base}/bookings`)).json();
  assert.equal(
    list.some((b) => b.id === 1),
    false,
  );
});

test("DELETE /bookings/:id renvoie 404 si inconnue", async () => {
  const res = await fetch(`${base}/bookings/999`, { method: "DELETE" });
  assert.equal(res.status, 404);
});
