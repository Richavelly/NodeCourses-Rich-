// "PLANETS TIME": функции вычисления человеческого времени для разных планет.
const planetList = [
    {name: 'Mercury', timeRate: 59},
    {name: 'Venus', timeRate: 243},
    {name: 'Mars', timeRate: 1.02},
    {name: 'Jupiter', timeRate: 0.42},
    {name: 'Saturn', timeRate: 0.44},
    {name: 'Uranus', timeRate: 0.72},
    {name: 'Neptune', timeRate: 0.65},
];

const timeEarth = 10;
const selectedPlanet ='Venus';

function timeConverter(timeEarth, selectedPlanet) {
    let resultTime;
    let samePlanet = planetList.find(planet => {
        if (planet.name === selectedPlanet) {
          return true; 
        }
    });
    resultTime = Math.round(timeEarth * samePlanet.timeRate);
    console.log(`${timeEarth} ч. на планете "Earth" = ${resultTime} ч. на планете "${samePlanet.name}"`);
};

timeConverter(timeEarth, selectedPlanet);

