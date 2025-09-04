import { Component, Input } from '@angular/core';

interface Task {
  id: number, 
  userId: number,
  title: string,
  summary: string,
  dueDate: string,  
}

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
}
