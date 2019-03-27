import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public usersText: string = '';
  public showDetails: boolean = true;
  public numbers: number[] = [];
  public counter = 1;

  public usersData: {name: string, age?: number}[] = [
    {name: 'first name'},
    {name: 'second name'},
    {name: 'third Name'},
    {name: 'Fourth Name'},
    {name: 'Fifth Name', age: 18},
  ];

  public resetUserName() {
    this.usersText = '';
  }

  public validateInputData(): string {
    if (!this.usersText.trim()) {
      return 'red'
    }
  }

  public onButtonClick() {
    this.showDetails = !this.showDetails;
    this.numbers.push(this.counter++);
  }

}
