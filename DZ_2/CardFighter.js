//#4-Task.
const myFighter = {
  name: 'Franko "Axe"',
  win: 16,
  loose: 3,
  draw: 5,
  age: 40,
  division: 'heavyweight',
  rivals: [ 'Richard "Adamant"', 'Lewis "Bullet"', 'Freddy "Krueger"' ]
};

// [{ key: 'name', value: 'Franko"Axe"'}, {...}]
const fighterArray = [];

// prop - ключ на данном шаге цикла
// myFighter - объект
for (let prop in myFighter) {
    const element = {
        key: prop,
        value: myFighter[prop]
    }
    fighterArray.push(element);
}
console.log(fighterArray);

const cardFighter = {};
for (let nameAge of fighterArray) {
    if (nameAge.key === 'name') {
        cardFighter.name = nameAge.value;
    }
    if (nameAge.key === 'age') {
        cardFighter.age = nameAge.value;
    }
}
console.log(cardFighter);