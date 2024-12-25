import Cart from '../service/Cart';
import Buyable from '../domain/Buyable';

describe('Cart', () => {
  let cart: Cart;

  beforeEach(() => {
    cart = new Cart();
  });

  it('should add items to the cart', () => {
    const item: Buyable = { id: 1, name: 'Book', price: 20 };
    cart.add(item);
    expect(cart.items).toEqual([item]);
  });

  it('should return a copy of items array to ensure immutability', () => {
    const item: Buyable = { id: 1, name: 'Book', price: 20 };
    cart.add(item);
    const { items } = cart;
    (items as Buyable[]).push({ id: 2, name: 'Pen', price: 5 });
    expect(cart.items).toEqual([item]);
  });

  it('should calculate total cost without discount', () => {
    cart.add({ id: 1, name: 'Book', price: 20 });
    cart.add({ id: 2, name: 'Pen', price: 5 });
    expect(cart.getTotalCost()).toBe(25);
  });

  it('should calculate total cost with discount', () => {
    cart.add({ id: 1, name: 'Book', price: 20 });
    cart.add({ id: 2, name: 'Pen', price: 5 });
    expect(cart.getTotalCostWithDiscount(10)).toBe(22.5);
  });

  it('should throw an error for invalid discount values', () => {
    expect(() => cart.getTotalCostWithDiscount(-10)).toThrow('Discount must be between 0 and 100');
    expect(() => cart.getTotalCostWithDiscount(110)).toThrow('Discount must be between 0 and 100');
  });

  it('should remove an item by id', () => {
    const item1: Buyable = { id: 1, name: 'Book', price: 20 };
    const item2: Buyable = { id: 2, name: 'Pen', price: 5 };
    cart.add(item1);
    cart.add(item2);
    cart.removeById(1);
    expect(cart.items).toEqual([item2]);
  });

  it('should throw an error if trying to remove an item that does not exist', () => {
    expect(() => cart.removeById(1)).toThrow('Item with id 1 not found');
  });

  it('should handle an empty cart', () => {
    expect(cart.items).toEqual([]);
    expect(cart.getTotalCost()).toBe(0);
    expect(cart.getTotalCostWithDiscount(10)).toBe(0);
  });
});
