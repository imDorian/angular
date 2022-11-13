import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
 constructor() { }

 tareas = [{name:"example task", isDone: false}];
 newTask:string="";

  ngOnInit(): void {
  }

  addTask(){
    if(this.newTask){
      this.tareas.push({name: this.newTask, isDone: false})
    }

    this.newTask =""
  }

  deleteTask(index:number){
    if(this.tareas[index].isDone === true){
    this.tareas.splice(index,1)
  }else{
    alert("You're task isnt done!")
    // confirm("You're task isnt done!")
  }
}

  check(index:number){
  if(this.tareas[index].isDone === false){
    this.tareas[index].isDone = true
  } else{
    this.tareas[index].isDone = false
  }}


  deleteAll(){
    this.tareas = []
  }

  // deleteAllDone(){
  //   for (let i = 0; i < this.tareas.length; i++) {
  //     const tarea = this.tareas[i];
  //     const isDone = tarea.isDone
  //     if(isDone===true){
  //     this.tareas[i]=
  //     }
  //   }

  // }



}





