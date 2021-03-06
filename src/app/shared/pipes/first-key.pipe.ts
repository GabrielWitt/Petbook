import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'first'
})
export class FirstKeyPipe implements PipeTransform {

  transform(obj) {
    if(!obj){ return '' }
    var keys = Object.keys(obj);
    if (keys && keys.length>0) {
      return keys[0];
    }
    return '';
  }
}
