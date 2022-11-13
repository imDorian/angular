import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input() img_url:string="https://assets.reedpopcdn.com/gotham-knights-isnt-an-rpg-where-you-start-as-a-weakling_gudx.png/BROK/resize/1200x1200%3E/format/jpg/quality/70/gotham-knights-isnt-an-rpg-where-you-start-as-a-weakling_gudx.png"
  @Input() img_alt:string="alt"
  @Input() video_url:string="https://www.youtube.com/watch?v=BRtidafbtW4"
  @Input() discount:any = 10 + "%"
  constructor() { }




  ngOnInit(): void {
  }

}
