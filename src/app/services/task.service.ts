import { inject, Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
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
    let url = `${this.url}/${task.id}`;
    return this.http.delete<Task>(`${url}`);
  }

  toggleReminder(task: Task): Observable<Task> {
    let url = `${this.url}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }
}
