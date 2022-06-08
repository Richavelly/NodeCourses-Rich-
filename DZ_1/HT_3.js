const nameBoss = "Геннадий Адольфович";
const amountPurchases = 100;
const primeCost = 150;
const deliveryCost = 50;
const sellingPrice = 450;
const currentMonth = "Январь (2022г)"

let companyIncome = amountPurchases * sellingPrice; // Доходы компании
let tradingResult = amountPurchases * primeCost; // Сумма продаж по себестоимости
let deliveryResult = amountPurchases * deliveryCost; // Затраты на доставку
let companyExpenses = tradingResult + deliveryResult; // Расходы компании
let companyProfit = companyIncome - companyExpenses; // Прибыль компании

console.log(`Добрый день, ${nameBoss}!\nВысылаю Вам отчет за ${currentMonth}.`);
console.log("-Доходы компании: ", companyIncome);
console.log("-Расходы компании: ", companyExpenses);
// Отчёт директору по расходам и доходам

if (companyProfit>=0) {
    console.log("-------------------------")
    console.log("-Прибыль компании: ", companyProfit);
    console.log("-------------------------");
}
// Отчёт директору в случае прибыли
else {
    console.log("--------------------------------------------------------------");
    console.log("К сожалению в этом месяце, наша компания осталась без прибыли.");
    console.log("-Убыток компании: ", companyProfit);
    console.log("--------------------------------------------------------------");
}
// Отчёт директору в случае убытка
