import { ComicsServiceService } from './../../services/comics-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-comics',
  templateUrl: './gallery-comics.component.html',
  styleUrls: ['./gallery-comics.component.scss']
})
export class GalleryComicsComponent implements OnInit {

  comics:any[]=[]

  constructor(private comicsServiceService: ComicsServiceService) { }

  ngOnInit(): void {
    this.comicsServiceService.getComics().subscribe((res:any)=>{
      console.log(res);

      this.comics=res
    })
  }

}
