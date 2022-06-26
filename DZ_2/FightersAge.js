//#5-Task.
const allFighters = [
    {name: 'Franko "Axe"' , age: 40},
    {name: 'Lewis "Bullet"', age: 32},
    {name: 'Freddy "Krueger"', age: 37},
    {name: 'Tomas "Slayer"', age: 30},
];

const juniorFighter = {};
const olderFighter = {};

let min;
let max;
//console.log (allFighters[1]);

while (!(allFighters[0].age < allFighters[1].age && allFighters[1].age < allFighters[2].age && allFighters[2].age < allFighters[3].age)) {
    if (allFighters[0].age > allFighters[1].age) {
        min = allFighters[1];
        max = allFighters[0];
        allFighters[0] = min;
        allFighters[1] = max;

    }
    if (allFighters[1].age > allFighters[2].age) { 
        min = allFighters[2];
        max = allFighters[1];
        allFighters[1] = min;
        allFighters[2] = max;
    }
    if (allFighters[2].age > allFighters[3].age) { 
        min = allFighters[3];
        max = allFighters[2];
        allFighters[2] = min;
        allFighters[3] = max;
    }
}
console.log(allFighters);
console.log('Самый молодой боец: ',  allFighters[0]);
console.log('Самый взрослый боец: ', allFighters[3]);

// node .\FightersAge.js
