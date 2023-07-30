# Ionic-Tutorial-COMP2068

- Documents: 
  - Presentations
  - Presentaions Document
  - Configuration Guidance
- Demo Application - TodoList App:
  - Task class
  - Task service:  `ng generate service services/task`
    - `taskList`
    - `addTask()`
    - `toggleTask()`
  - Home components:
    - Import task service and inject in the constructor
    - submitInput() - call the `addTask()` method in `TaskService` to add the new task to the `taskList`
  - Update `home.page.html`
    - Input
    - Labels - iterate and display `taskList`
    - Checkboxes - call the `toggleTask` method when clicked
    - Action Button - call `submitInput` method when clicked

