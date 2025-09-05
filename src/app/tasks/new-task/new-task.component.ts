import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() action = new EventEmitter<boolean>();

  onCloseNewTask(){
    this.action.emit(false);
  }
  onCreateNewTask(){
    this.action.emit(false);
  }
}
