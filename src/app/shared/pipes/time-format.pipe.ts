import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import * as timezone from 'moment-timezone';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {
  // | timeFormat:'DD/MM/YYYY'
  private RESULT = '';

  transform(date: string, method: string) {;
    this.RESULT = '';
    
    switch (method){
      case 'DD/MM/YYYY':
        this.RESULT =  moment(date).format('DD/MM/YYYY');
        break;
      default:
        this.RESULT =  date;
    }
    return this.RESULT;
  }
}
