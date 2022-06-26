// Создание объекта авторизации:
const userProfile = {login: 'Administrator', password: 'AccessLevel777'};
console.log(userProfile);

// Ещё один способ создания объекта:
/*const userProfile = {};
userProfile.login = 'Administrator';
userProfile.password = 'AccessLevel777';
console.log(userProfile);*/

// И ещё один способ:
/*const userProfile = new Object();
userProfile.login = 'Administrator';
userProfile.password = 'AccessLevel777';
console.log(userProfile);*/

// Создание массива "Юзеров":
const usersArray = ['login 1','login 1', 'login 1','login 1', 'login 1'];
console.log(usersArray);

// Ещё один способ создания массива:
/*const usersArray = [];
usersArray[0] = 'login 1';
usersArray[1] = 'login 2';
usersArray[2] = 'login 3';
usersArray[3] = 'login 4';
usersArray[4] = 'login 5';
console.log(usersArray);*/

// Создание массива через конструктор Array:
/*const usersArray = new Array('login 1','login 1', 'login 1','login 1', 'login 1');
console.log(usersArray);*/

// Также можно добавить элементы в массив с помощью методов вставки: 
/*сonst usersArray = [];
usersArray.push('login 1', 'Login 2', 'Login 3', 'Login 4', 'Login 5');
console.log(usersArray);*/