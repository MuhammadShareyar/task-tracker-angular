import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/task';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskService } from '../../services/task.service';
import { Observable } from 'rxjs';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskItemComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private readonly tasksService: TaskService) {}

  ngOnInit(): void {
    this.tasksService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  addTask(task: Task) {
    this.tasksService.create(task).subscribe((task) => this.tasks.push(task));
  }

  deleteTask(task: Task) {
    this.tasksService
      .delete(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  toggleTaskReminder(task: Task) {
    task.reminder = !task.reminder;
    this.tasksService.toggleReminder(task).subscribe();
  }
}
