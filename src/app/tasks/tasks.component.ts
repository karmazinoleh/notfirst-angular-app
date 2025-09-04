import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: number;
  @Input({required: true}) name?: string;
  tasks = [
    {
      id: 1,
      userId: 1,
      title: 'Task One',
      summary: 'This is task one',
      dueDate: '2025-12-31',
    },
    {
      id: 2,
      userId: 2,
      title: 'Task 2',
      summary: 'This is task 2',
      dueDate: '2026-12-8',
    },
    {
      id: 3,
      userId: 3,
      title: 'Task 3',
      summary: 'This is task 3',
      dueDate: '2025-10-10',
    },
  ]

  get selectedUserTasks(){
    return this.tasks.filter(task => task.userId === this.userId);
  }

  onCompleteTast(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  addNewTask() {
    const newTask = {
      id: this.tasks.length + 1,
      userId: this.userId,
      title: `Task ${this.tasks.length + 1}`,
      summary: `This is task ${this.tasks.length + 1}`,
      dueDate: '2025-12-31',
    };
    this.tasks.push(newTask);
  }
}
