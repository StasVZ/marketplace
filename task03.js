'use strict';

const calculate = (sum, quantity, promo) => {
  let discount1 = 0;
  let discount2 = 0;
  let discount3 = 0

  if (quantity >= 10){
    discount1 = sum * 0.03;
  }

  if (sum >= 30000){
    discount2 = (sum+(sum * 0.15)) - 30000;
  }
  else if (sum < 30000){
    discount2 = 0;
  }

  if (promo === 'METHED'){
    discount3 = sum * 0.1;
  }
  if (promo === 'G3H2Z1' && (discount1 + discount2) > 2000){
    discount3 = 500;
  }

  return discount1 + discount2 + discount3;
}

console.log(calculate(35000, 10, 'G3H2Z1'))
console.log(calculate(25000, 15, 'METHED'))