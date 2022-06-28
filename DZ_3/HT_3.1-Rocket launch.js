// "ROCKET LAUNCH": функция с обратным отсчётом перед запуском ракеты.
const boardName = 'FALCON 9';
const stopWatch = 10;

console.log('Обратный остчёт: ');

function rocketLaunch(boardName, stopWatch) {
    let endTime = stopWatch;
    
    let timer = setInterval(() => {
        console.log(endTime);
        if (endTime === 0) {
            clearInterval(timer);  
            setTimeout(() => { 
                console.log(`Пуск!!!\nРакета "${boardName}" - успешно запущена!`);
            }, 1000);
        };
        endTime--;
    }, 1000);
};

rocketLaunch(boardName, stopWatch);
