import { calcTotalPrice } from "../utils/calcTotalPrice";

describe('calculate total price', () => {
  let items: any[];

  beforeEach(() => {
    items = [{
      id: 17,
      price: 40,
      count: 5
    },
    {
      id: 16,
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