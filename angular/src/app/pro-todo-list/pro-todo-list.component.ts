import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pro-todo-list',
  templateUrl: './pro-todo-list.component.html',
  styleUrls: ['./pro-todo-list.component.scss']
})
export class ProTodoListComponent implements OnInit {

  constructor() { }
  list = [
    {title: 'Comer calabazas',isDone: true},
    {title: 'Pagar fantas', isDone: false},
    {title: 'Conquistar su corazon', isDone: false},
  ];
  tareaNueva:string=""
  ngOnInit(): void {
  }

  add(){
    this.list.push({title: this.tareaNueva, isDone: false})
  }

  deleteMe(index:number){
    this.list.splice(index, 1)
  }

  deleteAll(){
    this.list = []
  }
}
