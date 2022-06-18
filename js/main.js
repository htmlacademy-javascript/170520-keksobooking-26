"use strict";

function randomIntInRange(min, max) {

  if ( !min || !max || typeof min !== 'number' || typeof max !== 'number' || min < 0 || max < 0 || !Number.isInteger(min) || !Number.isInteger(max) || min >= max) {
    return null;
  }
  return Math.round(Math.random() * (max - min)) + min;
}


function randomFloatInRange(min, max, precision) {

  if ( !min && min !== 0 || !max && max !==0 || typeof min !== 'number' || typeof max !== 'number' || min < 0 || max < 0 || precisionWithRounding(min, precision) >= precisionWithRounding(max,precision)) {
    return null;
  }

  return precisionWithRounding( (Math.random() * (max - min) + min), precision);
}



/*
* toPrecision() не подходит потому что даёт 1.009
*/
function precisionWithRounding(number, precision) {
  const factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}



for ( let i=0; i<30; i++ ) {
  console.log(randomFloatInRange(1.46,1.47, 2));
}
