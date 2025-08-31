import { Component } from '@angular/core';
import { UsersData } from '../user/user-data';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = UsersData[0];

  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }

  onSelectUser(){
    console.log('Clicked!');
  }
}
