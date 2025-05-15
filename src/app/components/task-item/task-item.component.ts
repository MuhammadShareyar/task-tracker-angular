import { Component, input, output } from '@angular/core';
import { Task } from '../../interfaces/task';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-task-item',
  imports: [FaIconComponent,NgClass],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  task = input.required<Task>();
  faTimes = faTimes;
  onDeleteClick = output<Task>();

  onDelete(taskItem: Task) {
    this.onDeleteClick.emit(taskItem);
  }
}
