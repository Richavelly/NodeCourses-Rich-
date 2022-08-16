// "COFFEE CONSTRUCTOR": Конструктор для кофе машины.
const coffeeList = [
    {position: 'Espresso', price: 25, reserve: 30},
    {position: 'Americano', price: 20, reserve: 30},
    {position: 'Latte', price: 40, reserve: 30},
    {position: 'Cappuccino', price: 15, reserve: 30},
    {position: 'Coffee with milk', price: 30, reserve: 30},
];

const Barista = function(store, inventory) {
    this.store = store;
    this.inventory = inventory;
    
    this.bank = 0;
    this.depozit = 0;
    this.income = 0;
    
    this.water = 10000;
    this.sugar = 1000;
    this.coffee = 1000;
    this.milk = 1000;
    this.cream = 100;

    this.supplies = refill;
    this.purchase = purchase;
    this.payIn = payIn;
    this.cash = bank;
    this.menu = menu;
    this.change = change;

    console.log('----------------------------');
    console.log(`        ~${this.store}~`);
    console.log('----------------------------');
}

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

const refill = function(water, sugar, coffee, milk ,cream ) {
    this.water = water;
    this.sugar = sugar;
    this.coffee = coffee;
    this.milk = milk;
    this.cream = cream;
}

const purchase = function(product, amount, sugar) {
    let pickProduct = this.inventory.find(search => {
        if (search.position === product) {
            return true; 
        }
    });
    let totalPrice = pickProduct.price * amount;
    const context = this;

    let process = function() {
        let cups = amount;

        switch (pickProduct.position) {
            case 'Espresso':
                console.log('----------------------------');
                console.log(`Ваш ${pickProduct.position} (${cups} шт) готов!`);

                Espresso(cups, context); 
                break;

            case 'Americano':
                console.log('----------------------------');
                cconsole.log(`Ваш ${pickProduct.position} (${cups} шт) готов!`);

                Americano(cups, context); 
                break;
                
            case 'Latte':
                console.log('----------------------------');
                console.log(`Ваш ${pickProduct.position} (${cups} шт) готов!`);

                Latte(cups, context); 
                break;

            case 'Cappuccino':
                console.log('----------------------------');
                console.log(`Ваш ${pickProduct.position} (${cups} шт) готов!`);

                Cappuccino(cups, context); 
                break;

            case 'Coffee with milk':
                console.log('----------------------------');
                console.log(`Ваш ${pickProduct.position} (${cups} шт) готов!`);

                CWM(cups, context); 
                break;
        }

        if (sugar > 0) {
            console.log(`+Сахар: ${sugar} шт`);
            console.log('----------------------------');
            console.log(`-> Ваш баланс: ${context.depozit} грн`);
            console.log('----------------------------');
        } else {
            console.log('[БЕЗ САХАРА]');
            console.log('----------------------------');
            console.log(`-> Ваш баланс: ${context.depozit} грн`);
            console.log('----------------------------');
        }
    }
    
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
        this.sugar = this.sugar - sugar;
        pickProduct.reserve = pickProduct.reserve - amount;

        console.log('----------------------------');
        console.log('     СПАСИБО ЗА ПОКУПКУ!');
        console.log('----------------------------');
        console.log(`Ваш ${pickProduct.position} (${amount} шт) готовится!`);
        console.log('----------------------------');

        process(amount, pickProduct);
    }
}

const change = function() {
    let change = this.depozit;
    this.depozit = 0;

    console.log('----------------------------');
    console.log('      ЗАБЕРИТЕ ДЕНЬГИ!');
    console.log('----------------------------');
    console.log(`Сдача: ${change} грн\n`);
    console.log(`-> Ваш баланс: ${this.depozit} грн`);
}

const Espresso = function(cups, context) {
    context.water = context.water - 35 * cups;
    context.coffee = context.coffee - 10 * cups;
}

const Americano = function(cups, context) {
    context.water = context.water - 180 * cups;
    context.coffee = context.coffee - 20 * cups;
}

const Latte = function(cups, context) {
    context.water = context.water - 70 * cups;
    context.coffee = context.coffee - 15 * cups;
    context.milk = context.milk - 130 * cups;
}

const Cappuccino = function(cups, context) {
    context.water = context.water - 75 * cups;
    context.coffee = context.coffee - 25 * cups;
    context.milk = context.milk - 150 * cups;
}

const CWM = function(cups, context) {
    context.water = context.water - 180 * cups;
    context.coffee = context.coffee - 20 * cups;
    context.milk = context.milk - 120 * cups;
}

console.log('============== 1 ==============');

const CoffeeStore = new Barista("COFFEE TIME", coffeeList);
CoffeeStore.payIn(100);
CoffeeStore.menu();
CoffeeStore.purchase('Espresso', 2, 2);           
CoffeeStore.change();
CoffeeStore.cash();

console.log('============== 2 ==============');

const CoffeeStore2 = new Barista("COFFEE TIME #2", coffeeList);
CoffeeStore2.payIn(100);
CoffeeStore2.menu();
CoffeeStore2.purchase('Cappuccino', 2, 0);         
CoffeeStore2.change();
CoffeeStore2.cash();