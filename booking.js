document.getElementById("bookingForm").addEventListener("submit", function(e) {
e.preventDefault();
const name = document.getElementById("name").value;
const service = document.getElementById("service").value;
const date = document.getElementById("date").value;
const time = document.getElementById("time").value;
const notes = document.getElementById("notes").value;
const booking = { name, service, date, time, notes };
const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
bookings.push(booking);
localStorage.setItem("bookings", JSON.stringify(bookings));
alert("تم الحجز بنجاح!");
this.reset();
});
