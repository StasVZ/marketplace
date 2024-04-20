'use strict';


const productName = 'Ford Mustang';
console.log('productName' ,typeof productName);
const productQuantity = 5;
console.log('productQuantity ' ,typeof productQuantity );
const productCategory = 'muscle car';
console.log('productCategory' ,typeof productCategory);
const productPrice = 71000;
console.log('productPrice' ,typeof productPrice);

console.log (productQuantity*productPrice);
console.log (`В гараже ${productQuantity} автомобилей ${productName} на сумму ${productQuantity*productPrice} евро. `)

{
  const productName  = prompt('Наименование товара')
  const productQuantity  = prompt('Количество товара')
  const productCategory  = prompt('Категория товара')
  const productPrice  = prompt('Цена товара')
}