import { Component, signal, computed } from '@angular/core';
import { UsersData } from '../user/user-data';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = signal(UsersData[0]);
  imagePath = computed( () => 'assets/users/' + this.selectedUser().avatar);

  //get imagePath() {
  //  return 'assets/users/' + this.selectedUser.avatar;
  //}

  onSelectUser(){
    this.selectedUser.set(UsersData[1]);
    console.log('Clicked!');
  }
}
