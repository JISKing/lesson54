import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alphabetical'
})
export class AlphabeticalPipe implements PipeTransform {
  transform(array: any[], property: string): any[] {
    if (!Array.isArray(array) || !property) {
      return array;
    }

    return array.sort((a, b) => {
      const nameA = a[property].toLowerCase();
      const nameB = b[property].toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }
}
