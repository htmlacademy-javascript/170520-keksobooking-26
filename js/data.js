/* Пример данных -- массив bookings */
import { getRandomPositiveFloat, getRandomSubSet } from './utils.js';

const placeType = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const guestsTiming = ['12:00', '13:00', '14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const gallery = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const bookings = [];

function getBookings() {
  for ( let i=0; i<10; i++ ) {
    bookings.push({
      'author': {
        'avatar': `img/avatars/user${i.toString().padStart(2, '0')}.png`
      },
      'offer': {
        'title': `Offer #${i+1}`,
        'address': `${getRandomPositiveFloat(35.65, 35.7, 5).toString()} ${getRandomPositiveFloat(139.7, 139.8, 5).toString()}`,
        'price': getRandomPositiveFloat(100, 200),
        'type': placeType[i % placeType.length],
        'rooms': getRandomPositiveFloat(1, 5),
        'guests': getRandomPositiveFloat(1, 10),
        'checkin': guestsTiming[i % guestsTiming.length],
        'checkout': guestsTiming[i % guestsTiming.length],
        'features': getRandomSubSet(features),
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim, nibh eu pellentesque semper, nulla lectus feugiat quam, vitae consectetur mi massa vulputate dolor. Nulla nec porta nibh.',
        'photos': getRandomSubSet(gallery),
      },
      'location': {
        'lat': getRandomPositiveFloat(35.65, 35.7, 5),
        'lng': getRandomPositiveFloat(139.7, 139.8, 5)
      },
    });
  }
  return bookings;
}

export { getBookings };

