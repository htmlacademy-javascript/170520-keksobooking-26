/*
  Нужно по заданию, но ниже эта функция поглощается более общей randomPositivePrecisedNumberInRange()
*/

function randomPositiveIntegerNumberInRange(min, max) {
  if ( !min || !max || typeof min !== 'number' || typeof max !== 'number' || min < 0 || max < 0 || !Number.isInteger(min) || !Number.isInteger(max) || min >= max) {
    return null;
  }
  return Math.round(Math.random() * (max - min)) + min;
}


/* Задаёт точность числу с плавающей точкой. Обрезает количество десятичных знаков более precision.
 * В отличие от встроенное в JS функции toPrecision(), которая может возвращать значение вроде 1.009 при точности 2,
 * эта функция будет обрезать десятичную часть и округлять до заданной точности. Достигается это путём домножения
 * на числа задающие порядок (10, 100, 1000), округления, и последующего деления на обратно.
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


/* Возвращает случайное число больше либо равное нулю в диапазоне [min, max] с precision знаков после запятой.
 * Если точность не задана, то по умолчанию задаём точность равную нулю. Т.е. результат будет без десятичной части, что позволяет генерировать целые числа. */
function randomPositivePrecisedNumberInRange(min, max, precision = 0) {

  /* min и max переданы. При этом важно разрешить численный 0, но не пропустить undefined, false, пустую строку и прочее */
  if ( !min && min !== 0 || !max && max !==0) {
    return null;
  }

  /* Пропускаем только числа */
  if( typeof min !== 'number' || typeof max !== 'number') {
    return null;
  }

  /* Разрешаем только значения больше ноля (и сам ноль). Например, координаты на карте */
  if( min < 0 || max < 0  ) {
    return null;
  }


  /* Весьма неочевидная проверка на случай если точность задана жёстче чем может позволить заданный диапазон.
   * Например при диапазоне [1.46, 1.47] возможны варианты с точностью в три и более знака после запятой: 1.462, 1.465, 1.469, но невозможны варианты с точностью от нуля до двух.
   * Одновременно эта функция так же проверяет чтобы max был строго больше min.
   */
  if(precisionWithRounding(min, precision) >= precisionWithRounding(max, precision)) {
    return null;
  }

  /* Считаем рандом по логике random * (max-min) + min и обрезаем знаки после запятой функцией precisionWithRounding() */
  return precisionWithRounding( (Math.random() * (max - min) + min), precision);
}


/* Пример использования */

for ( let i=0; i<30; i++ ) {
  randomPositiveIntegerNumberInRange(1, 3);
}

for ( let i=0; i<30; i++ ) {
  randomPositivePrecisedNumberInRange(1.46,1.47, 4);
}

