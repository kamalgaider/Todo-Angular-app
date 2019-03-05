import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/Todo';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];

  constructor(private srv:TodoService) { 
    
  }

  ngOnInit() {
  //  this.todos = this.srv.getTodoList(); //could have been added in constructor as well
  this.srv.getTodoList().subscribe(todos=>{
    this.todos = todos;
  });
  }

  deleteTodoItem(todo: Todo){
    //delete on UI
    this.todos = this.todos.filter(t => t.id !== todo.id);
    //delete on server
    this.srv.deleteIt(todo).subscribe();
    }

    addTodo(todo:Todo){
      this.srv.addTodo(todo).subscribe(
        todo=>{ this.todos.push(todo)});
    }
}
