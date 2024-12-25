import addToCart from '../../src/utils/addToCart';
import Movie from '../../domain/Movie';

describe('addToCart', () => {
  it('should log correct message for a movie', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    const movie = new Movie(
      1,
      'Мстители',
      500,
      2012,
      'США',
      'Avengers Assemble!',
      ['фантастика', 'боевик', 'фэнтези', 'приключения'],
      '137 мин.',
    );

    addToCart(movie);

    expect(consoleSpy).toHaveBeenCalledWith('Добавлено в корзину: Мстители');
    consoleSpy.mockRestore();
  });

  it('should log correct message for other buyable items', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    const item = new Movie(2, 'Товар', 300, 2020, 'Россия', '', ['драма'], '120 мин.');
    addToCart(item);

    expect(consoleSpy).toHaveBeenCalledWith('Добавлено в корзину: Товар');
    consoleSpy.mockRestore();
  });
});
