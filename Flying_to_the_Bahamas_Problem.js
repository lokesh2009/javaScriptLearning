/* Problem 4 - Flying to the Bahamas
 A travel company wants to fly a plane to the Bahamas. Flying the plane costs 5000 dollars. 
So far, 29 people have signed up for the trip. If the company charges 200 dollars per ticket,
 what is the profit made by the company?

*/

let costOfFlyimgPlane=5000;
let no_of_passenger=29;
let price_of_ticket=200;
let profit =0;

profit=(price_of_ticket*no_of_passenger)/costOfFlyimgPlane;
console.log(`The company makes of a profit of ${profit} dollars`)

/*

Out of the 29 people who took the flight, only 12 buy tickets to return from the Bahamas on the same plane. 
If the flying the plane back also costs 5000 dollars, and does the company make an overall profit or loss? 
The company charges the same fee of 200 dollars per ticket for the return flight.

*/

let no_of_return_passenger=12;
let return_profit_loss=(no_of_return_passenger*price_of_ticket)/costOfFlyimgPlane;
console.log(`profit or loss in return flight ${return_profit_loss}`)
let total_profit = profit+return_profit_loss;
console.log(total_profit);

