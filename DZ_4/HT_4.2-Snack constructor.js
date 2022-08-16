// "SNACK CONSTRUCTOR": Конструктор для снек автомата.
const snacksList = [
    {position: 'Chips', price: 20, reserve: 30},
    {position: 'Crackers', price: 25, reserve: 30},
    {position: 'Nuts mix', price: 40, reserve: 30},
    {position: 'Energy bar', price: 15, reserve: 30},
    {position: 'Corn sticks', price: 10, reserve: 30},
];
const snacksList2 = [
    {position: 'Salty straw', price: 20, reserve: 50},
    {position: 'Donut', price: 25, reserve: 15},
    {position: 'Cotton candy', price: 30, reserve: 100},
];
const snacksList3 = [
    {position: 'Sneakers', price: 20, reserve: 30},
    {position: 'Bounty', price: 20, reserve: 30},
    {position: 'Nuts', price: 20, reserve: 30},
    {position: 'Twix', price: 20, reserve: 30},
    {position: 'Mars', price: 20, reserve: 30},
];

const Machine = function(store, inventory) { 
    this.store = store;
    this.inventory = inventory;
    this.bank = 0;
    this.depozit = 0;
    this.income = 0;
    
    this.purchase = purchase; 
    this.payIn = payIn;
    this.cash = bank;
    this.menu = menu;
    this.change = change;

    console.log('----------------------------');
    console.log(`        ~${this.store}~`);
    console.log('----------------------------');
};

const bank = function() {
    let finalBank = this.bank + this.income
    console.log('----------------------------');
    console.log('         ИНКАССАЦИЯ');
    console.log('----------------------------');
    console.log(`ТЕКУЩИЙ СЧЁТ: ${finalBank} грн`);
    console.log(`-> Начальный банк: ${this.bank} грн`);
    console.log(`-> Доход автомата: ${this.income} грн\n`);
}
const payIn = function(payment) {
    this.depozit = this.depozit + payment;
    console.log('----------------------------');
    console.log(`     Ваш баланс: ${this.depozit} грн`);
    console.log('----------------------------');
}
const menu = function() {
    console.log('----------------------------');
    console.log('     ДОСТУПНО К ЗАКАЗУ:');
    console.log('----------------------------');
    this.inventory.forEach(element => {
        console.log(`-> ${element.position} [Цена: ${element.price} грн]`);
        console.log(`Остаток: ${element.reserve} шт\n`);
    });
}
const purchase = function(product, amount) {
    let pickProduct = this.inventory.find(search => {
        if (search.position === product) {
          return true; 
        }
    });
    let totalPrice = pickProduct.price * amount;
    if (this.depozit < totalPrice) {
        console.log('------------------------------');
        console.log('НЕ ХВАТАЕТ СРЕДСТВ НА ПОКУПКУ!');
        console.log('------------------------------');
        console.log(`-> Сумма заказа: ${totalPrice} грн\nВаш баланс: ${this.depozit} грн\n`);
    } else if (amount > pickProduct.reserve) {
        console.log('------------------------------');
        console.log('   ПРЕВЫШЕН ОСТАТОК ПОЗИЦИИ');
        console.log('------------------------------');
        console.log(`${product}`);
        console.log(`-> Доступно: ${pickProduct.reserve} шт\n`);
    } else {
        this.depozit = this.depozit - totalPrice;
        this.income = this.income + totalPrice;
        pickProduct.reserve = pickProduct.reserve - amount;
        console.log('----------------------------');
        console.log('     СПАСИБО ЗА ПОКУПКУ!');
        console.log('----------------------------');
        console.log(`${product} - ${amount} шт = ${totalPrice} грн`);
        console.log(`-> Ваш баланс: ${this.depozit} грн\n`);
    }
}
const change = function() {
    let change = this.depozit;
    this.depozit = 0;
    console.log('----------------------------');
    console.log('      ЗАБЕРИТЕ ДЕНЬГИ!');
    console.log('----------------------------');
    console.log(`Сдача: ${change} грн`);
    console.log(`-> Ваш баланс: ${this.depozit} грн\n`);
}

Machine.prototype.temperature = function(lowTemp, highTemp, setTemp) {
    const low = lowTemp;
    const high = highTemp;
    const mean = (low + high)/2;
    const NormTemp = (`Рекомедуемая температура:\n+${mean} °C`);
    
    if (setTemp <= low) {
        console.log('     НИЗКАЯ ТЕМПЕРАТУРА!');
        console.log(`-> Температура: ${setTemp} °C`);
        console.log(NormTemp);
    } else if(setTemp >= high) {
        console.log('     ВЫСОКАЯ ТЕМПЕРАТУРА!');
        console.log(`-> Температура: ${setTemp} °C`)
        console.log(NormTemp);
    } else {
    console.log(`-> Температура: ${setTemp} °C`);
    }
}

Machine.prototype.overbalance = function(fullBank) {
    const full = fullBank;
    let finalBank = this.bank + this.income
    if (this.income === full) {
        console.log('----------------------------');
        console.log('     $-ЯЧЕЙКА ЗАПОЛНЕНА!');
        console.log('----------------------------');
        console.log(`-> Текущий счёт: ${finalBank} грн\n`);
    } else {
        console.log('----------------------------');
        console.log('          $-ЯЧЕЙКА');
        console.log('----------------------------');
        console.log(`ТЕКУЩИЙ СЧЁТ: ${finalBank} грн`);
        console.log(`-> Предел ячейки: ${full} грн\n`)
    }
}

console.log('============== 1 ==============');

const SnackStore = new Machine("SNACK-STORE", snacksList);
SnackStore.payIn(100);
SnackStore.menu();
SnackStore.purchase('Nuts mix', 2);
SnackStore.change();
SnackStore.cash();

console.log('============== 2 ==============');

const SnackStore2 = new Machine("SNACK-STORE #2", snacksList2);
SnackStore2.payIn(100);
SnackStore2.menu();
SnackStore2.purchase('Cotton candy', 3);
SnackStore2.change();
SnackStore2.overbalance(15000);
SnackStore2.cash();

console.log('============== 3 ==============');

const SnackStore3 = new Machine("SNACK-STORE #3", snacksList3);
SnackStore3.temperature(15, 22, '+11');
SnackStore3.payIn(100);
SnackStore3.menu();
SnackStore3.purchase('Sneakers', 5);
SnackStore3.change();
SnackStore3.cash();