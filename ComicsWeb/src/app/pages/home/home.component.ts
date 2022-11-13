import { ComicsServiceService } from './../../shared/services/comics-service.service';
import { Component, OnInit } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  comics:any[]=[]


  constructor(private comicsServiceService: ComicsServiceService) { }

  ngOnInit(): void {

    this.comicsServiceService.getComics().subscribe((res:any)=>{
      console.log(res)
      this.comics = res
    })

}

}
