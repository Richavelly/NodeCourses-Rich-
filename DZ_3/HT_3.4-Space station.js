// "SPACE STATION":'ЗАМЫКАНИЕ'.Функция управления космической станцией.

const astronautOptions = {
    foodSupply: 30, // kg - доставляет пищи на станцию
    foodConsumption: 2.5, // kg - потребляет пищи+воды в день
    oxygenConsumption: 12000, // liters - потребляет кислорода в день 
};

function spaceStation(initialAstro, initialFood, initialOxy) {
    let astro = initialAstro || 0;
    let food = initialFood;
    let oxy = initialOxy;
    let skipWeekCount = 0;

    function addAstro(addAs) {
        astro = astro + addAs;
        food = food + addAs * astronautOptions.foodSupply;
    }
    function goHome(lucky) {
        astro = astro - lucky;
    }
    function skipWeek(week) {
        let spaceAstro = 5 * week;
        skipWeekCount = skipWeekCount + week;
        food = food - 7 * week * astro * astronautOptions.foodConsumption;
        oxy = oxy - 7 * week * astro * astronautOptions.oxygenConsumption;
        console.log('Прошло недель на станции: ', skipWeekCount);
        console.log('Совершено выходов в космос: ', spaceAstro);
        console.log('Остаток провизии на станции: ', food, 'кг');
        console.log('Остаток кислорода на станции: ', oxy, 'л');
        console.log('Сейчас астронавтов на станции:',astro);
            if (food <= 250) {
                console.log('ВНИМАНИЕ! НИЗКИЙ ЗАПАС ПРОВИЗИИ!')
            }
            if ( oxy <= 250000) {
                console.log('ВНИМАНИЕ! НИЗКИЙ ЗАПАС КИСЛОРОДА!')
            }
    }
    return {addAstro, skipWeek, goHome};
}

const myStation = spaceStation(10, 1000, 5000000);

myStation.addAstro(2);
myStation.goHome(4);
myStation.skipWeek(3);

