import { Component, Input, Output, EventEmitter, output } from '@angular/core';
import { UsersData } from '../user/user-data';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) id!: number;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  @Output() select = new EventEmitter<number>();
  // selector = outpit<number>();

  get imagePath(){
    return 'assets/users/' + this.avatar;
  }

  onSelectUser(){
    this.select.emit(this.id)
  }
}
