import { Component } from '@angular/core';
import { Moment } from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dateValue: any;

  getDateValueType(): string {
    if (this.dateValue === null) {
      return 'null';
    }

    if (this.dateValue === undefined) {
      return 'undefined';
    }

    return typeof this.dateValue;
  }


  onDateChange(value: Moment) {
    const date: Date = value.toDate();
    console.log(date);
  }
}
