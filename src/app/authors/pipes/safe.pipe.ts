import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ds-safe'
})
export class SafePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
