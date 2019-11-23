import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clickCount = [];
  count = 0;
  displaySecretPassword = true;
  onClickHandler() {
    console.log('button clicked...');
    this.displaySecretPassword = this.displaySecretPassword ? false : true;
    console.log('display = ' + this.displaySecretPassword);
    this.count++;
    this.clickCount.push(this.count);
    console.log(this.clickCount);
  }
}
