import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
    private tasks = [
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
    
    getUserTasks(userId: number) {
        return this.tasks.filter(task => task.userId === userId);
    }

    addTask(newTask: any, userId: number) {
        this.tasks.unshift({
            id: new Date().getTime(),
            userId: userId,
            title: newTask.title,
            summary: newTask.summary,
            dueDate: newTask.dueDate,
        });
    }

    removeTask(id: number) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
}