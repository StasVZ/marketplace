'use strict';

let tax;
let tax2;
let tax3;
const sum = +prompt('Введите сумму');

if (sum <= 15000){
  tax = sum * 0.13;
} 
if (sum > 15000 & sum <= 50000){
  tax2 = (sum - 15000)*0.2 + tax;
}
if (sum >= 50000){
  tax3 = (sum - 50000)*0.3 + tax2;
}

console.log(tax);