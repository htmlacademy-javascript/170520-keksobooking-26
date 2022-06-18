"use strict";

/*
  Нужно по заданию, но ниже эта функция поглащается более общей randomPositivePrecisedNumberInRange()
*/
function randomPositiveIntegerNumberInRange(min, max) {
  if ( !min || !max || typeof min !== 'number' || typeof max !== 'number' || min < 0 || max < 0 || !Number.isInteger(min) || !Number.isInteger(max) || min >= max) {
    return null;
  }
  return Math.round(Math.random() * (max - min)) + min;
}


/* Задаёт точность числу с плавающей точкой. Обрезает количество десятичных знаков более precision.
 * В отличии от встроенное в JS функции toPrecision(), которая может возвращать значение вроде 1.009 при точности 2,
 * эта функция будет и обрезать десятичную часть и округлять до заданной точности. Достигаятся это путём домножения
 * на число типа 10, 100, 1000, округления, и последующего деления на этого же число обратно.
 *
 * precision -- количество знаков после запятой, целочисленное, больше либо равно нуля.
 */
function precisionWithRounding(number, precision) {

  /* Оба параметра обязательны. При этом важно разрешить численный 0, но не пропустить undefined, false, пустую строку и прочее */
  if ( !number && number !== 0 || !precision && precision !== 0) {
    return null;
  }

  /* Пропускаем только числа */
  if( typeof number !== 'number' || typeof precision !== 'number') {
    return null;
  }

  /* Количество знаков после запятой не может быть отрицательным */
  if( precision < 0 ) {
    return null;
  }

  /* Вычисления */
  const factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}


/* Возвращает случайное число больше либо равное нулю в диапазоне [min, max] с precision знаков после запятой */
function randomPositivePrecisedNumberInRange(min, max, precision) {

  /* min и max переданы. При этом важно разрешить численный 0, но не пропустить undefined, false, пустую строку и прочее */
  if ( !min && min !== 0 || !max && max !==0) {
    return null;
  }

  /* Пропускаем только числа */
  if( typeof min !== 'number' || typeof max !== 'number') {
    return null;
  }

  /* Разрешаем только значения больше нуля (и сам ноль). Пример использования: координаты на карте */
  if( min < 0 || max < 0  ) {
    return null;
  }

  /* Если точность не задана, то по умолчанию задаём точность равную нулю. Т.е. результат будет без десятичной части, что позволяет генерировать интеджеры. */
  if( !precision && precision!==0 ) {
    precision = 0;
  }

  /* Весьма неочевидная проверка на случай если точность задана жосче чем может позволить заданный диапазон.
   * Например при диапазаоне [1.46, 1.47] возможны варианты с точностью в три и более знаков после запятой: 1.462, 1.465, 1.469, но невозможны варианты с точностью от нуля до двух.
   * Одновременно эта функция так же проверяет чтобы max было строго больше min.
   */
  if(precisionWithRounding(min, precision) >= precisionWithRounding(max, precision)) {
    return null;
  }

  /* Считаем рандом по логике random * (max-min) + min и обрезаем знаки после запятой функцией precisionWithRounding() */
  return precisionWithRounding( (Math.random() * (max - min) + min), precision);
}




/* Пример использования */
for ( let i=0; i<30; i++ ) {
  console.log(randomPositivePrecisedNumberInRange(1.46,1.47, 4));
}
