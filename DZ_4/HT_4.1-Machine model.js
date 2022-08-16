// "MACHINE MODEL": Програмная начинка для автоматов. Kофе и снеки.
const coffeeList = [
    {position: 'Americano', price: 15, reserve: 30},
    {position: 'Latte', price: 30, reserve: 30},
    {position: 'Espresso', price: 20, reserve: 30},
    {position: 'Cappuccino', price: 40, reserve: 30},
    {position: 'Coffee with milk', price: 30, reserve: 30},
];

const snacksList = [
    {position: 'Chips', price: 20, reserve: 30},
    {position: 'Crackers', price: 25, reserve: 30},
    {position: 'Nuts mix', price: 40, reserve: 30},
    {position: 'Energy bar', price: 15, reserve: 30},
    {position: 'Corn sticks', price: 10, reserve: 30},
];

function StandartModel(store, inventory) {
    console.log('----------------------------');
    console.log(`        ~${store}~`);
    console.log('----------------------------');

    let currentShop = inventory;
    let depozit = 0;
    let bank = 0;
    let income = 0;

    function setBank(cash) {
        bank = bank + cash;
    }

    function getProfit() {
        let moneySum = bank + income;
        console.log('----------------------------');
        console.log('         ИНКАССАЦИЯ');
        console.log('----------------------------');
        console.log(`-> ТЕКУЩИЙ СЧЁТ: ${moneySum} грн`);
        console.log(`Начальный банк: ${bank} грн`);
        console.log(`Доход автомата: ${income} грн\n`);
    }

    function payIn(payment) {
        depozit = depozit + payment;
        console.log('----------------------------');
        console.log(`     Ваш баланс: ${depozit} грн`);
        console.log('----------------------------');
    }

    function takeChange() {
        let change = depozit;
        depozit = 0;
        console.log('----------------------------');
        console.log('      ЗАБЕРИТЕ ДЕНЬГИ!');
        console.log('----------------------------');
        console.log(`-> Сдача: ${change} грн`);
        console.log(`Ваш баланс: ${depozit} грн\n`);
    }

    function showList() {
        console.log('----------------------------');
        console.log('     ДОСТУПНО К ЗАКАЗУ:');
        console.log('----------------------------');
        currentShop.forEach(element => {
            console.log(`-> ${element.position} [Цена: ${element.price} грн]`);
            console.log(`Остаток: ${element.reserve} шт\n`);
        });
    }

    function purchase(product, amount) {
        let pickProduct = currentShop.find(search => {
            if (search.position === product) {
                return true; 
            }
        });
        let totalPrice = pickProduct.price * amount;
        
        if (depozit < totalPrice) {
            console.log('------------------------------');
            console.log('НЕ ХВАТАЕТ СРЕДСТВ НА ПОКУПКУ!');
            console.log('------------------------------');
            console.log(`-> Сумма заказа: ${totalPrice} грн\nВаш баланс: ${depozit} грн\n`);
        } else if (amount > pickProduct.reserve) {
            console.log('------------------------------');
            console.log('   ПРЕВЫШЕН ОСТАТОК ПОЗИЦИИ');
            console.log('------------------------------');
            console.log(`-> ${product}`);
            console.log(`Доступно: ${pickProduct.reserve} шт\n`);
        } else {
            depozit = depozit - totalPrice;
            income = income + totalPrice;
            pickProduct.reserve = pickProduct.reserve - amount;
            console.log('----------------------------');
            console.log('     СПАСИБО ЗА ПОКУПКУ!');
            console.log('----------------------------');
            console.log(`-> ${product} - ${amount} шт = ${totalPrice} грн`);
            console.log(`Ваш баланс: ${depozit} грн\n`);
        }
    }

    return {setBank, getProfit, payIn, takeChange, showList, purchase};
}

const SnackStore = StandartModel('SNACK-SHOP', snacksList);
SnackStore.setBank(1000);
SnackStore.payIn(50);
SnackStore.showList();
SnackStore.purchase('Energy bar', 2);
SnackStore.takeChange();
SnackStore.getProfit();

const CoffeeStore = StandartModel('COFFEE-SHOP', coffeeList);
CoffeeStore.setBank(1000);
CoffeeStore.payIn(25);
CoffeeStore.showList();
CoffeeStore.purchase('Americano', 31);
CoffeeStore.takeChange();
CoffeeStore.getProfit();
