'use strict';

const firstCharUp = (str) => {
  return str.slice(0,1).toUpperCase() + str.slice(1);
}

console.log(firstCharUp('это предложение начинатеся с большой буквы'));