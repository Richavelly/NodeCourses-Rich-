//#3-Task.
const resultFight = [
{name: 'Richard "Adamant"', win: true, loose: false, draw: false},
{name: 'Lewis "Bullet"', win: false, loose: true, draw: false},
{name: 'Freddy "Krueger"', win: false, loose: false, draw: true},
{name: 'Lewis "Bullet"', win: true, loose: false, draw: false},
];

const fighterName = 'Franko "Axe"';
const fighterWin = '14';
const fighterLoose = '2';
const fighterDraw = '4';
const fighterAge = '40';
const fighterDivision = 'heavyweight';

const rivalArray = [];
const fighterProfile = {
    name: fighterName,
    win: +fighterWin,
    loose: +fighterLoose,
    draw: +fighterDraw,
    age: +fighterAge,
    division: fighterDivision,
    rivals: rivalArray
};

const userProfile = {login: 'Administrator', password: 'AccessLevel777'};
//const myLog = 'Administrator';
//const myPass = 'AccessLevel777';
let myLog = process.argv[2];
let myPass = process.argv[3];

if (userProfile.login === myLog && userProfile.password === myPass) {
    for (let fight of resultFight) {                 //перебераем массив боёв.
        let isExist = false;                        // Ставим "флаг", который решает будет ли добавлено имя в массив
       
        for (let name of fighterProfile.rivals) {   // перебираем массив соперников, чтобы проверить не совпадает ли текущий элемент(чей бой мы сейчас вносим) с именами, которые уже там есть
            if (fight.name === name) {              // сравним имя текущего бойца, с каждым из имен в массиве всех соперников
                isExist = true                      // если такое имя уже есть, меняем флаг.
            }
        }
        if (!isExist) {                             // здесь проверяем флаг. Если существует, то не добавляем
            fighterProfile.rivals.push(fight.name); // если флаг не переключился - добавляем
        } 
        if (fight.win) {
            fighterProfile.win = fighterProfile.win + 1;
        } else if (fight.loose) {
            fighterProfile.loose = fighterProfile.loose + 1;
        } else if (fight.draw) {
            fighterProfile.draw = fighterProfile.draw + 1; 
        }
    } 
    console.log(`===FIGHTER PROFILE===\n       (2022)\nName: ${fighterProfile.name}\nW-L-D: ${fighterProfile.win}-${fighterProfile.loose}-${fighterProfile.draw}\nAge: ${fighterProfile.age}\nDivision: ${fighterProfile.division}\nRivals: ${fighterProfile.rivals}`);
} else {
    console.log('!!!ERROR!!!\nPlease check your "Login" and "Password".');
}
//node .\FightClubScrumble.js Administrator AccessLevel777