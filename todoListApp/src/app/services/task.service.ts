import { Injectable } from '@angular/core';
import { Task } from '../task';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  formTask: Task = new Task();
  public taskList: Task[] = [];

  constructor() {}

  // Create a new task
  addTask(taskName: string, status: boolean = false) {
    this.formTask = new Task();
    this.formTask.taskName = taskName;
    this.formTask.status = status;
    // add the task to the top of the list
    this.taskList.unshift(this.formTask);
  }

  // Change the display position of task when completed
  toggleTask(index: number) {
    this.taskList[index].status = !this.taskList[index].status;
    // move it to the bottom of the list
    let task = this.taskList[index];
    this.taskList.splice(index, 1);
    this.taskList.push(task);
  }
}
