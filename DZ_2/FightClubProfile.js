//#2-Task 
const fighterName = 'Franko "Axe"';
const fighterWin = '14';
const fighterLoose = '2';
const fighterDraw = '4';
const fighterAge = '40';
const fighterDivision = 'heavyweight';

const fighterProfile = {
    name: fighterName,
    win: fighterWin,
    loose: fighterLoose,
    draw: fighterDraw,
    age: fighterAge,
    division: fighterDivision,
};

console.log(`===FIGHTER PROFILE===\n       (2022)\nName: ${fighterProfile.name}\nW-L-D: ${fighterProfile.win}-${fighterProfile.loose}-${fighterProfile.draw}\nAge: ${fighterProfile.age}\nDivision: ${fighterProfile.division}\n`);

fighterProfile.age = +fighterAge+1;
fighterProfile.division = 'superheavyweight';

console.log(`===FIGHTER PROFILE===\n       (2023)\nName: ${fighterProfile.name}\nW-L-D: ${fighterProfile.win}-${fighterProfile.loose}-${fighterProfile.draw}\nAge: ${fighterProfile.age}\nDivision: ${fighterProfile.division}\n`);


