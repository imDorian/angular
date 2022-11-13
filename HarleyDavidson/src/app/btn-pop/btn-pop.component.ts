import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-pop',
  templateUrl: './btn-pop.component.html',
  styleUrls: ['./btn-pop.component.scss']
})
export class BtnPopComponent implements OnInit {

  constructor() { }
  @Output() removeEmitter = new EventEmitter();


  ngOnInit(): void {
  }
  removePop(){
    this.removeEmitter.emit();
  }
}
