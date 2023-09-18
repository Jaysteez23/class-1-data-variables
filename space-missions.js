// Declare and assign the variables below
let shuttlename = 'Determiation';
let shuttlespeedmph = 17500;
let distanceToMarskm = 225000000;
let distanceToMoonkm = 3384400;
const milesPerkm = 0.621;
let data = [shuttlename,shuttlespeedmph,distanceToMarskm,distanceToMoonkm,milesPerkm];

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttlename);
console.log(typeof shuttlespeedmph);
console.log(typeof distanceToMarskm);

// Calculate a space mission below
let milesToMars = distanceToMarskm * milesPerkm;
let hoursToMars = milesToMars / shuttlespeedmph;
let daysToMars = hoursToMars / 24;
// Print the results of the space mission calculations below
console.log("%s will take %d days to reach Mars.", shuttlename, daysToMars)

// Calculate a trip to the moon below
let milesToMoon = distanceToMoonkm * milesPerkm;
let hoursToMoon = milesToMoon / shuttlespeedmph;
let daysToMoon = hoursToMoon / 24;


// Print the results of the trip to the moon below
console.log("%s will take %d days to reach the Moon.", shuttlename, daysToMoon )