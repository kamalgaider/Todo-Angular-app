import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodoList(){
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

  }
}
