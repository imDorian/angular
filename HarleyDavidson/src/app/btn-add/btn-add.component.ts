import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-add',
  templateUrl: './btn-add.component.html',
  styleUrls: ['./btn-add.component.scss']
})
export class BtnAddComponent implements OnInit {

  @Output() addEmitter = new EventEmitter()

  // moto: any ={img:"", name:"", price: "" , colors:[{name:"default", color:""}]}
  img:string=""
  name:string=""
  price:number=0
  colors: string=""
  constructor() { }



  ngOnInit(): void {
  }

  addMoto(){
    // this.moto.colors=[...this.moto.colors]
    this.addEmitter.emit({img:this.img , name:this.name, price:this.price , colors:[{name:"default", color: this.colors}]})
  }

}
