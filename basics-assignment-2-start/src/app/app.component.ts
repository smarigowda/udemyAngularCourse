import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Santosh Marigowda';

  isUserNameEmpty() {
    return this.userName.length === 0;
  }

  clearUserName() {
    this.userName = '';
  }
}
