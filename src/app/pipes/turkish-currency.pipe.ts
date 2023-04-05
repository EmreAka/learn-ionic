import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'turkishCurrency',
  standalone: true
})
export class TurkishCurrencyPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    const stringValue = value.toString();
    return `${stringValue}.00₺`;
  }

}
