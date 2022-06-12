let originalNumber = 10;
let degreeNumber = "fmlgml";
let resultNumber;

if (typeof originalNumber === "number" && typeof degreeNumber === "number") {
    resultNumber = originalNumber ** degreeNumber;
    console.log("Резултат: ", resultNumber);
} else {
    console.log("ОШИБКА!\nНедопустимый тип файла!");
}

