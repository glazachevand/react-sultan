import { calcTotalPrice } from "../utils/calcTotalPrice";
import { CartItemType } from '../types/cart';

describe('calculate total price', () => {
  let items: CartItemType[];

  beforeEach(() => {
    items = [{
      id: 17,
      title: "Шампунь для волос Ромашка",
      url: "product17.webp",
      brand: "Каждый день",
      description: "Шампунь для мытья волос 'Ромашка'. без силикона и парабенов прекрасно промывает волосы и восстанавливает кожу головы",
      typesize: "объем",
      size: "500 мл",
      price: 40,
      count: 5
    },
    {
      id: 16,
      title: 'Бальзам для волос оттеночный Шоколад',
      url: 'product16.webp',
      brand: 'Каждый день',
      description: 'Оттеночный бальзам от «Каждый день» - мягкое окрашивающее средство с шоколадным оттенкам. Из качественного сырья.',
      typesize: 'объем',
      size: '150 мл',
      price: 100,
      count: 3
    }]
  })

  test('should return correct value', () => {
    expect(calcTotalPrice(items)).toBe(500);
    expect(calcTotalPrice([])).toBeDefined();
    expect(calcTotalPrice([])).toBe(0);
  });

});