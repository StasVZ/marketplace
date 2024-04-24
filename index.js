'use strict';


const productName = 'Ford Mustang';
const productQuantity = 5;
const productCategory = 'muscle car';
const productPrice = 71000;


console.log('productName' ,typeof productName);
console.log('productQuantity ' ,typeof productQuantity );
console.log('productCategory' ,typeof productCategory);
console.log('productPrice' ,typeof productPrice);

console.log (productQuantity*productPrice);
console.log (`В гараже ${productQuantity} автомобилей ${productName} на сумму ${productQuantity*productPrice} евро. `)

/*{
  const productName  = prompt('Наименование товара');
  const productQuantity  = prompt('Количество товара');
  const productCategory  = prompt('Категория товара');
  const productPrice  = prompt('Цена товара');
}*/


if (Number.isFinite(productQuantity)){
}else {
  console.log('Вы ввели некорректные данные');
}
if (Number.isFinite(productPrice)){
}else {
  console.log('Вы ввели некорректные данные');
}
