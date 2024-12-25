// __tests__/Movie.test.ts
import Movie from '../../domain/Movie';
import Cart from '../../service/Cart';

describe('Movie', () => {
  it('should create a Movie object with correct properties', () => {
    const avengers = new Movie(
      1,
      'The Avengers',
      500,
      2012,
      'USA',
      'Avengers Assemble!',
      ['fantasy', 'action', 'adventure'],
      '137 мин./02:17',
    );

    expect(avengers.id).toBe(1);
    expect(avengers.name).toBe('The Avengers');
    expect(avengers.price).toBe(500);
    expect(avengers.year).toBe(2012);
    expect(avengers.country).toBe('USA');
    expect(avengers.slogan).toBe('Avengers Assemble!');
    expect(avengers.genre).toEqual(['fantasy', 'action', 'adventure']);
    expect(avengers.duration).toBe('137 мин./02:17');
  });
});

describe('Cart with Movie', () => {
  let cart: Cart;

  beforeEach(() => {
    cart = new Cart();
  });

  it('should add Movie objects to the cart', () => {
    const avengers = new Movie(
      1,
      'The Avengers',
      500,
      2012,
      'USA',
      'Avengers Assemble!',
      ['fantasy', 'action', 'adventure'],
      '137 мин./02:17',
    );

    cart.add(avengers);
    expect(cart.items).toEqual([avengers]);
  });

  it('should calculate total cost including Movie objects', () => {
    const avengers = new Movie(
      1,
      'The Avengers',
      500,
      2012,
      'USA',
      'Avengers Assemble!',
      ['fantasy', 'action', 'adventure'],
      '137 мин./02:17',
    );

    cart.add(avengers);
    expect(cart.getTotalCost()).toBe(500);
  });

  it('should remove a Movie object by id', () => {
    const avengers = new Movie(
      1,
      'The Avengers',
      500,
      2012,
      'USA',
      'Avengers Assemble!',
      ['fantasy', 'action', 'adventure'],
      '137 мин./02:17',
    );

    cart.add(avengers);
    cart.removeById(1);
    expect(cart.items).toEqual([]);
  });
});
