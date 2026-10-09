import { fetchRooms, fetchBookings, createBooking, deleteBooking } from "./api.js";

const roomSelect = document.getElementById("room");
const list = document.getElementById("bookings");
const form = document.getElementById("booking-form");
const message = document.getElementById("message");

let rooms = [];

function formatDate(iso) {
  return new Date(iso).toLocaleString("fr-FR", { dateStyle: "short", timeStyle: "short" });
}

function renderRooms() {
  roomSelect.innerHTML = rooms.map((r) => `<option value="${r.id}">${r.name}</option>`).join("");
}

async function renderBookings() {
  const bookings = await fetchBookings();
  list.innerHTML = bookings
    .map((b) => {
      const room = rooms.find((r) => r.id === b.roomId);
      return `<li>
        <strong>${b.title}</strong><br />
        ${room ? room.name : "Salle ?"} · ${formatDate(b.start)} → ${formatDate(b.end)}<br />
        <small>Organisé par ${b.organizer}</small><br />
        <button type="button" data-cancel="${b.id}">Annuler</button>
      </li>`;
    })
    .join("");
}

list.addEventListener("click", async (event) => {
  const id = event.target.dataset.cancel;
  if (!id || !confirm("Annuler cette réservation ?")) return;
  await deleteBooking(id);
  await renderBookings();
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const result = await createBooking({
    roomId: Number(roomSelect.value),
    title: document.getElementById("title").value,
    organizer: document.getElementById("organizer").value,
    start: new Date(document.getElementById("start").value).toISOString(),
    end: new Date(document.getElementById("end").value).toISOString(),
  });
  if (result.ok) {
    message.textContent = "Réservation créée";
    message.className = "ok";
    form.reset();
    await renderBookings();
  } else {
    message.textContent = result.data.error || (result.data.errors || []).join(", ");
    message.className = "error";
  }
});

async function init() {
  rooms = await fetchRooms();
  renderRooms();
  await renderBookings();
}

init();
