import ReceiptCalculator from './receipt-calculator';

describe('when calculating receipt', () => {
  const products = [
    { id: 'BAX003', name: 'Coca Cola', price: 3 },
    { id: 'BAX021', name: 'Pepsi', price: 4 },
    { id: 'BAX303', name: 'Dr. Pepper', price: 2 },
  ];

  it('should calculate total price', () => {
    const calculator = new ReceiptCalculator(products);
    const totalPrice = calculator.getTotalPrice(['BAX003', 'BAX021']);
    expect(totalPrice).toEqual(7);
  });

  it('should calculate total prices when select duplicated products', () => {
    const calculator = new ReceiptCalculator(products);
    const totalPrice = calculator.getTotalPrice(['BAX003', 'BAX021', 'BAX003']);
    expect(totalPrice).toEqual(10);
  });

  it('should calculate total prices when select none', () => {
    const calculator = new ReceiptCalculator(products);
    const totalPrice = calculator.getTotalPrice([]);
    expect(totalPrice).toEqual(0);
  });

  it('should throw if selected product is null or undefined', () => {
    const calculator = new ReceiptCalculator(products);
    expect(() => calculator.getTotalPrice(null)).toThrow(
      'Please provide selected product ids.'
    );
    expect(() => calculator.getTotalPrice(undefined)).toThrow(
      'Please provide selected product ids.'
    );
  });

  it('should throw if product is not found', () => {
    const calculator = new ReceiptCalculator(products);
    expect(() => calculator.getTotalPrice(['What the hell is this?'])).toThrow(
      'Product not found.'
    );
  });
});
