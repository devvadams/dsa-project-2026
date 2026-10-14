import bookings from "./objects.js";
import Counter from "./class.js";

const counter = new Counter();

console.log(counter.Value); // 0

counter.increment();

console.log(counter.Value); // 1

// Add a new booking
bookings.set("P9MX", {
  owner: "Fatima Ali",
  seat: 7
});

// Check the number of bookings
console.log("Number of bookings:", bookings.size);
// 3

// Check whether a booking exists
console.log("Booking exists:", bookings.has("P9MX"));
// true

// Retrieve the owner safely
const booking = bookings.get("P9MX");

if (booking) {
  console.log("Owner:", booking.owner);
  // Fatima Ali
} else {
  console.log("Booking not found.");
}

// Delete an existing booking
// console.log("Booking deleted:", bookings.delete("K8TR"));
// true

console.log("Remaining bookings:", bookings.size);
// 2


for(const [referrence, booking] of bookings){
    console.log(referrence,booking.owner,booking.seat);
}

 const existingBooking = bookings.has("B123");
 if (existingBooking) {
     console.log("Booking exits");
 } else {
    console.log("Booking not found");
 }

//update seat number 
const updateBooking = bookings.get("G5LN");
if (updateBooking) {
   updateBooking.seat = 8;
   console.log("Booking updated:", updateBooking);

} else {
    console.log("Booking not found");
}
//print every booking
for(const [referrence, booking] of bookings){
    console.log(referrence,booking.owner,booking.seat);
}

// Number of Booking 
console.log("Number of Bookings:",bookings.size);
