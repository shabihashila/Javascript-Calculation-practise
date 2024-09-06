/***this is question task

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

// this is answer of this question
const age = 83;
const TicketBill = 800;

if (age < 10) {
  console.log("you don't have to pay for this ticket");
} else if (age > 10 && age < 30) {
  const discount = TicketBill * (50 / 100);
  const totalBill = TicketBill - discount;
  console.log("price :" + totalBill);
  console.log("you will get a 50% discount");
} else if (age >= 60) {
  const discount = TicketBill * (15 / 100);
  const totalBill = TicketBill - discount;
  console.log("Senior citizens price: " + totalBill);

  console.log("you will get a 15% discount");
} else {
  console.log("you have to pay for this regular ticket fare 800tk you");
}
