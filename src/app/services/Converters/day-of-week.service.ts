import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DayOfWeekService {
  _actualDate : any;
  constructor() {
  }

  getDate(){
    return this._actualDate;
  }

  setActualDate(value:any){
    return this._actualDate = value;
  }

  getDayOfWeek(checkDate: string) {
    const dayOfWeek = new Date(checkDate).getDay();
    console.log(dayOfWeek);
    return isNaN(dayOfWeek) ? null :
      ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'][dayOfWeek];
  }

  getHour(date: string | undefined, hour: number) {
    let result = []
    if(date){
      const spilted = date.split(':', 2);
      let splitedHourMin: number = parseInt(spilted[0]);
      let splitedHourMax: number = parseInt(spilted[0]);
      const spiltedMin: number = parseInt(spilted[1]);

      if (splitedHourMin <= 10 && splitedHourMin >= 0) {
        result[0] = "0" + (splitedHourMin - hour).toString();
      } else {
        result[0] = (splitedHourMin - hour).toString();
      }

      if (splitedHourMax <= 10 && splitedHourMax >= 0) {
        result[1] = "0" +  (+(splitedHourMax) + (+hour)).toString()
      } else {
        result[1] = (+(splitedHourMax) + (+hour)).toString()
      }

      if (spiltedMin <= 10 && spiltedMin >= 0) {
        result[0] = result[0] + ":" + "0" + spiltedMin.toString();
      } else {
        result[0] = result[0] + ":" + spiltedMin.toString();
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
