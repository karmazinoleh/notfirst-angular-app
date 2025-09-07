import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

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
  @Input({required: true}) userId!: number;
  @Output() close = new EventEmitter<void>();
  enteredTitle : string = '';
  enteredSummary : string = ''
  enteredDueDate : string = '';
  private tasksService = inject(TasksService);

  onCloseNewTask(){
    this.close.emit();
  }

  onCreateNewTask(){
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate,
    }, this.userId);
    this.close.emit();
  }

}
