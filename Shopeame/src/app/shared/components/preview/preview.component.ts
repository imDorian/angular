import { Product } from './../../models/product.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  @Input() product:any={
    name:"",
    description:"",
    price:"",
    image:"",
    stars:""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
