import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  name: string = '';
  date: string = '';
  reminder: boolean = false;

  onAddTask = output<Task>();

  onSubmit() {
    const newTask: Task = {
      name: this.name,
      date: this.date,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);

    this.name = '';
    this.date = '';
    this.reminder = false;
  }
}
