import { inject, Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private url = 'http://localhost:5000/tasks';
  private http = inject(HttpClient);

  constructor() {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }

  delete(task: Task): Observable<Task> {
    return this.http.delete<Task>(`${this.url}/${task.id}`);
  }
}
