import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Format',
  standalone: true
})
export class Format implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    value = value.replace(/_/g, ' ');
    value = value.replace(/([A-Z])/g, ' $1');
    
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
}