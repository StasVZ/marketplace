'use strict';

let tax;
const sum = +prompt('Введите сумму');

if (sum <= 15000){
  tax = sum * 0.13;
} 
if (sum >= 15000 & sum <= 50000){
  tax = sum * 0.2;
}
if (sum >= 50000){
  tax = sum * 0.3;
}

console.log(tax);
