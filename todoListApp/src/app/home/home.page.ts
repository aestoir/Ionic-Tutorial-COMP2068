import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  inputValue: string = '';

  // Inject the TaskService in the constructor
  constructor(public taskService: TaskService) {}

  // Create a new task when the user clicks the Add button
  submitInput() {
    if (this.inputValue != '') {
      this.taskService.addTask(this.inputValue);
      this.inputValue = '';
    }
  }
}
