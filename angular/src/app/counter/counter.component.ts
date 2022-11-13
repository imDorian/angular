import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor() { }
  age: number = 5
  ngOnInit(): void {
  }
 suma(){
  this.age++
 }
 resta(){
  this.age--
 }
}
