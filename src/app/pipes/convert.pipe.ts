import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {
  transform(value: number, course: number) {
    return (value / course).toFixed(2) + '$';
  }
}
