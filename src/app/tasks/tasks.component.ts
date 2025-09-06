import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: number;
  @Input({required: true}) name?: string;
  isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId); 
  }

  onCompleteTast(id: number) {
    this.tasksService.removeTask(id);
  }

  addNewTask() {
    this.isAddingTask = true;
  }

  onActionFromNewTask(){
    this.isAddingTask = false;
  }

  onCreateNewTask(newTask: any){
    this.isAddingTask = false;
  }
}
