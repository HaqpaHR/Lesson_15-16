const MilitaryResource = require('./resources');
const Squad = require('./squad');
let tanks = new MilitaryResource('tanks', 1000, 400);
let mashineGunner = new MilitaryResource('Mashine Gunner', 1000, 200);
let squad = new Squad([tanks, mashineGunner]);
console.log(tanks);
console.log(squad);