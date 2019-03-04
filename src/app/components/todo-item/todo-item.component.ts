import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todoitem: Todo

  constructor(private srv:TodoService) { }

  ngOnInit() {
  }

//which css classes to add to html
setClass(){
  let cssClass= {
    todoClass: true,
    'is-complete': this.todoitem.completed
  }
  return cssClass;
}

toggleTodo( t:Todo ){
  //Toggle on UI
  this.todoitem.completed = !t.completed;

  //Toggle on server
  this.srv.toggleCompleted(t).subscribe(t =>
    console.log(t));
}

deleteTodo(){
alert('Not yet implemented!')
}

}
