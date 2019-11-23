import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clickCounts = [];
  count = 0;
  displaySecretPassword = true;
  onClickHandler() {
    console.log('button clicked...');
    this.displaySecretPassword = this.displaySecretPassword ? false : true;
    console.log('display = ' + this.displaySecretPassword);
    this.count++;
    this.clickCounts.push(this.count);
    console.log(this.clickCounts);
  }
}
