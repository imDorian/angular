import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  count:number=1
  inputValue:string=""
  list:any[]=[]
  constructor() { }

  ngOnInit(): void {
  }

  addCount(index:number){
    this.list[index].count++
  }

  restCount(index:number){
    this.list[index].count--
  }

  addValue(){
    this.list.push({name: this.inputValue, count: this.count })
  }

  removeMe(index:number){
    this.list.splice(index, 1)
  }

  start(){
    // for (let i = 0; i < this.list.length; i++) {
    //   const value = this.list[i];
    //   const name = value.name;
    //   const count = value.count
    // }
    let resp = this.list
    console.log(Math.floor((Math.random()*resp.length)))

  }




}

