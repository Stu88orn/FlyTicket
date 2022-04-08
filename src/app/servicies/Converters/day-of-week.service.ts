import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DayOfWeekService {

  constructor() {
  }

  getDayOfWeek(checkDate: string) {
    const dayOfWeek = new Date(checkDate).getDay();
    return isNaN(dayOfWeek) ? null :
      ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'][dayOfWeek];
  }

  getHour(date: string | undefined, hour: number) {
    let result = []
    if(date){
      const spilted = date.split(':', 2);
      let spiltedHour: number = parseInt(spilted[0]);
      const spiltedMin: number = parseInt(spilted[1]);
      if (spiltedHour <= 10 && spiltedHour >= 0) {
        result[0] = "0" + (spiltedHour - hour).toString();
      } else {
        result[0] = (spiltedHour - hour).toString();
      }

      if (spiltedMin <= 10 && spiltedMin >= 0) {
        result[0] = result[0] + ":" + "0" + spiltedMin.toString();
      } else {
        result[0] = result[0] + ":" + spiltedMin.toString();
      }

      if (spiltedHour >= 0 && spiltedHour <= 10) {
        result[1] = (spiltedHour + hour).toString();
      } else {
        result[1] = (spiltedHour + hour).toString();
      }

      if (spiltedMin >= 0 && spiltedMin <= 10) {
        result[1] = result[1] + ":" + "0" + spiltedMin.toString();
      } else {
        result[1] = result[1] + ":" + spiltedMin.toString();
      }
    }
    return result
  }

}
