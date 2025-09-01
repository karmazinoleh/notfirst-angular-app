import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user/user.component";
import { UsersData } from './user/user/user-data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = UsersData;

  onSelectUser(id: number){
    console.log('Selected user with id: ', id);
  }
}
