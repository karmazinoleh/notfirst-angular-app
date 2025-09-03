import { Component, Input, Output, EventEmitter, output } from '@angular/core';
import { UsersData } from '../user/user-data';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: {
    id: number, 
    name: string, 
    avatar: string
  };
  @Output() select = new EventEmitter<number>();

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(){  
    this.select.emit(this.user.id)
  }
}
