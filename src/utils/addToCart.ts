import Buyable from '../../domain/Movie';

export default function addToCart(item: Buyable): void {
  console.log(`Добавлено в корзину: ${item.name}`);
}
