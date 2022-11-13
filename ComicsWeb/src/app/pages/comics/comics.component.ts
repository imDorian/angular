import { ComicsServiceService } from './../../shared/services/comics-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  comics:any[]=[]

  constructor(private comicsServiceService: ComicsServiceService) { }

  ngOnInit(): void {
    this.comicsServiceService.getComics().subscribe((res:any)=>{
      console.log(res);
      this.comics= res
    })
  }

}
