import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user/user.component";
import { UsersData } from './user/user/user-data';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = UsersData;
  name = 'Select a user';

  onSelectUser(id: number){
    console.log('Selected user with id: ', id);
    let selectedUser = this.users.find(user => user.id === id);
    this.name = selectedUser ? selectedUser.name : 'Select a user';
  }
}
