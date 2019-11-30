import SendCurrency from './send-currency';

describe('SEND_CURRENCY_SET_ADDRESS', () => {
  test('When btc addres is correct should be not error', () => {
    // Arrange
    const btcAddress = '1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2';
    const expectType = 'SEND_CURRENCY_SET_ADDRESS';

    // Action
    const result = SendCurrency.setAddress(btcAddress);

    // Assert
    expect(result.type).toEqual(expectType);
    expect(result.payload.address).toEqual(btcAddress);
    expect(result.payload.errorAddress).toBeUndefined();
  });

  test('When btc addres is incorrect should return error', () => {
    // Arrange
    const btcAddress = 'bad-address';
    const expectType = 'SEND_CURRENCY_SET_ADDRESS';
    const expecError = 'Dirección de bitcoin Invalida';

    // Action
    const result = SendCurrency.setAddress(btcAddress);

    // Assert
    expect(result.type).toEqual(expectType);
    expect(result.payload.address).toEqual(btcAddress);
    expect(result.payload.errorAddress).toEqual(expecError);
  });
});
