import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface NewTask {
  title: string,
  summary: string,
  dueDate: string,  
}

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() close = new EventEmitter<void>();
  @Output() create = new EventEmitter<NewTask>();
  enteredTitle : string = '';
  enteredSummary : string = ''
  enteredDueDate : string = '';

  onCloseNewTask(){
    this.close.emit();
  }

  onCreateNewTask(){
    const newTask : NewTask = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate,
    };
    this.create.emit(newTask);
  }
}
