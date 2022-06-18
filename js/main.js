"use strict";

function randomIntInRange(min, max) {

  if ( !min || !max || typeof min !== 'number' || typeof max !== 'number' || min < 0 || max < 0 || !Number.isInteger(min) || !Number.isInteger(max) || min >= max) {
    return null;
  }
  return Math.round(Math.random() * (max - min)) + min;
}
