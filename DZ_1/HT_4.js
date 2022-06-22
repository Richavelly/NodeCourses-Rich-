let originalNumber = "10";
let degreeNumber = '2';
let resultNumber;

if ((typeof originalNumber === "number" || typeof originalNumber === "string") && (typeof degreeNumber === "number" || typeof degreeNumber === "string")) {
    resultNumber = originalNumber ** degreeNumber;
    
    if (Number.isNaN(resultNumber)) {
        console.log("ОШИБКА!\nНедопустимый тип файла!");
    } else {
        console.log("Результат: ", resultNumber);
    }
} else {
    console.log("ОШИБКА!\nНедопустимый тип файла!");
}
