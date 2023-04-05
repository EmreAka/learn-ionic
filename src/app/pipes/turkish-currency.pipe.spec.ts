import { TurkishCurrencyPipe } from './turkish-currency.pipe';

describe('TurkishCurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new TurkishCurrencyPipe();
    expect(pipe).toBeTruthy();
  });
});
