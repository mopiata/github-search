import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date =new Date();
    let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(), today.getDate());

    var dateDifference = Math.abs(todayWithNoTime-value)

    const secondsInADay=86400;
    
    //convert to milliseconds then to days
    var dateCounter = dateDifference * 0.001 /secondsInADay;

    if (dateCounter>=1 && value < todayWithNoTime){
      return dateCounter;
    }else{
      return 0;
    }

    return null;
  }

}
