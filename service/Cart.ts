import Buyable from '../domain/Buyable';

export default class Cart {
  private readonly itemsList: Buyable[] = [];

  add(item: Buyable): void {
    this.itemsList.push(item);
  }

  get items(): readonly Buyable[] {
    return [...this.itemsList];
  }

  getTotalCost(): number {
    return this.itemsList.reduce((total, item) => total + item.price, 0);
  }

  getTotalCostWithDiscount(discount: number): number {
    if (discount < 0 || discount > 100) {
      throw new Error('Discount must be between 0 and 100');
    }
    const totalCost = this.getTotalCost();
    return totalCost * (1 - discount / 100);
  }

  removeById(id: number): void {
    const index = this.itemsList.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error(`Item with id ${id} not found`);
    }
    this.itemsList.splice(index, 1);
  }
}
