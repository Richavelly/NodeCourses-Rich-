// "ASTRONAUT'S FOOD": генератор приёма пищи космонавта.
// level#1 + level#2
const spaceMenu = [
    {dish: 'Cottage cheese with nuts', time: 'morning', weekday: 'monday'},
    {dish: 'Rice with dried apricots', time: 'morning', weekday: 'tuesday'},
    {dish: 'Meat with prunes', time: 'day', weekday: 'wednesday'},
    {dish: 'Ukrainian borsch', time: 'day', weekday: 'thursday'},
    {dish: 'Chicken soup', time: 'evening', weekday: 'friday'},
    {dish: 'Roast with vegetables', time: 'evening', weekday: 'saturday'},
    {dish: 'Spaghetti with cheese', time: 'day', weekday: 'sunday'},
];

const selectedTime = 'morning';
const selectedDay = 'monday';

function menuGenerator(selectedTime, selectedDay) {
    let timer = setInterval(() => {
        let randomDish = spaceMenu[Math.floor(Math.random() * spaceMenu.length)];
        if (randomDish.time === selectedTime && randomDish.weekday === selectedDay) {
            clearInterval(timer);
            console.log(`Предложу блюдо: "${randomDish.dish}"!`);
            console.log(`Оно соответствует нашему времени суток: '${selectedTime}'.`);
            console.log(`И соответствует нашему дню недели: '${selectedDay}'.`);
        };
    }, 100);
};

menuGenerator(selectedTime, selectedDay);




