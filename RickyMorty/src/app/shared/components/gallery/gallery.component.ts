import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() list:any
  @Input() characterPage:number=1
  words:string=""

  constructor() { }

  ngOnInit(): void {
    console.log(this.list)


  }

  previousPage(){
    if(this.characterPage > 1)
    this.characterPage --
  }

  nextPage(){
    this.characterPage++
  }

  search(){
   console.log(this.words);



  }


}
