import { Movie } from './models/Movie';
import { addToCart } from './utils/addToCart';

const movie = new Movie(
  1,
  'Мстители',
  500,
  2012,
  'США',
  'Avengers Assemble!',
  ['фантастика', 'боевик', 'фэнтези', 'приключения'],
  137,
);

console.log(movie.getInfo());
addToCart(movie);
