import { Component, Input, Output, EventEmitter, output } from '@angular/core';
import { UsersData } from '../user/user-data';
import { type User } from '../user/user.model'; 
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-user',
  //imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  standalone: false
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<number>();

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(){  
    this.select.emit(this.user.id)
  }
}
