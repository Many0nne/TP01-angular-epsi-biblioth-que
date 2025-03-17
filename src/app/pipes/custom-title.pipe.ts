import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customTitle',
  standalone: true
})
export class CustomTitlePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    value = value.replace(/_/g, ' ');
    const words = value.split(' ');
    words[0] = words[0].toUpperCase();
    for (let i = 1; i < words.length; i++) {
      words[i] = words[i].toLowerCase();
    }
    return words.join(' ');
  }
}