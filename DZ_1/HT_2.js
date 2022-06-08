const myWallet = 230;
const pastaPrice = 40;
const meatPrice = 100;
const milkPrice = 30;
const porridgePrice = 50;
const sugarPrice = 30;
/*let myBalance = myWallet - pastaPrice - meatPrice - milkPrice - porridgePrice - sugarPrice;

if (myBalance < 0) {
    console.log("На все покупки не хватает: ", myBalance * -1);
} else {
    console.log("Остаток средств: ", myBalance);
}
*/

let myWallet2 = myWallet;
let purchasesMeter = 0;
console.log("СПИСОК ПОКУПОК ");
    if (myWallet2 >= meatPrice) {
        myWallet2 = myWallet2 - meatPrice;
        purchasesMeter ++;
        console.log("-Мясо 1кг: ", meatPrice);
    } 
    
    if (myWallet2 >= porridgePrice) {
        myWallet2 = myWallet2 - porridgePrice;
        purchasesMeter ++;
        console.log("-Каша 1кг: ", porridgePrice);
    } 
    
    if (myWallet2 >= pastaPrice) {
        myWallet2 = myWallet2 - pastaPrice;
        purchasesMeter ++;
        console.log("-Макароны 1кг: ", pastaPrice);
    } 
    
    if (myWallet2 >= milkPrice) {
        myWallet2 = myWallet2 - milkPrice;
        purchasesMeter ++;
        console.log("-Молоко 1л: ", milkPrice);
    }
    
    if (myWallet2 >= sugarPrice) {
        myWallet2 = myWallet2 - sugarPrice;
        console.log("-Сахар 1кг: ", sugarPrice);
        purchasesMeter ++;

        console.log("----------------------");
        console.log("Остаток средств: ", myWallet2);
        console.log("Количество покупок: ", purchasesMeter);
    } 
    
    else if (myWallet2 <= milkPrice ) {
        console.log("----------------------------------");
        console.log("Не хватает средств на все покупки!");
        console.log("----------------------------------");
        console.log("Количество успешных покупок: ", purchasesMeter);
        console.log("Остаток средств: ", myWallet2);
    }