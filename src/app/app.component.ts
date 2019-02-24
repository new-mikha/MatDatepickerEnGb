import { Component } from '@angular/core';

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
}
