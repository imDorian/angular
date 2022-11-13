import { ComicsServiceService } from './../../../shared/services/comics-service.service';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-comics',
  templateUrl: './detail-comics.component.html',
  styleUrls: ['./detail-comics.component.scss']
})
export class DetailComicsComponent implements OnInit {

  comicID:number=1
  @Input() comic!:any
  @Input() display:string="d-grid"

  constructor(private activatedRoute:ActivatedRoute, private comicsServiceService: ComicsServiceService, private router:Router) { }

  ngOnInit(): void {


    this.activatedRoute.paramMap.subscribe((param)=>{
      this.comicID = Number(param.get('id'))
  })

  this.comicsServiceService.getComicsID(this.comicID).subscribe((res:any)=>{
    console.log(res)
    this.comic = res
    console.log(this.comic)
  })
}

goToEdit(){
  this.comicsServiceService.getComicsID(this.comicID).subscribe((res:any)=>{
    this.comicsServiceService.comic = res
    this.router.navigate(['/post'])
    console.log(this.comicsServiceService.comic)
  })
}

deleteComic(){
  this.comicsServiceService.deleteComic(this.comicID).subscribe((res:any)=>{
  this.router.navigate(["/comics"])
  })

}


}


