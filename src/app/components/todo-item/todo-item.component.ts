import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todoitem: Todo

  constructor() { }

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
this.todoitem.completed = !t.completed;
}

deleteTodo(){
alert('Not yet implemented!')
}

}
