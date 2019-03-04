import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  dataURL:string = 'https://jsonplaceholder.typicode.com/todos';
  limit:string = '?_limit=8';

  constructor(private http:HttpClient) { }

  toggleCompleted(todo:Todo):Observable<any>{
    const url = `${this.dataURL}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

  getTodoList(): Observable<Todo[]>{
    return this.http.get<Todo[]>(`${this.dataURL}${this.limit}`);
  }
  
  /*getTodoList(){
    return [
      {
      id : 1,
      title:'Todo task1',
      completed : false
      },
      {
      id : 2,
      title:'Todo task2',
      completed : true
      },
      {
      id : 3,
      title:'Todo task3',
      completed : false
      }
    ]

  }*/
}
