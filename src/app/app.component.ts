import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  date: string = '';
  amount: number = 0;
  height: number = 0;
  miles: number = 0;


  onMilesChange(value: any) {
    this.miles = parseFloat(value.target.value);
  }


  onHeightChange(value: any) {
    this.height = parseFloat(value.target.value);
  }


  onNameChange(value: any) {
    this.name = value.target.value;
  }

  onDateChange(value: any) {
    this.date = value.target.value;
  }

  onAmountChange(value: any) {
    this.amount = parseFloat(value.target.value);
  }
}


