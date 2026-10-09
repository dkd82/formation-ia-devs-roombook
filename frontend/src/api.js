const API_URL = "http://localhost:3000";

export async function fetchRooms() {
  const res = await fetch(`${API_URL}/rooms`);
  return res.json();
}

export async function fetchBookings() {
  const res = await fetch(`${API_URL}/bookings`);
  return res.json();
}

export async function createBooking(booking) {
  const res = await fetch(`${API_URL}/bookings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(booking),
  });
  const data = await res.json();
  return { ok: res.ok, data };
}

export async function deleteBooking(id) {
  const res = await fetch(`${API_URL}/bookings/${id}`, { method: "DELETE" });
  return res.ok;
}
