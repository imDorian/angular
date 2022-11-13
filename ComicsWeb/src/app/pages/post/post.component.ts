import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { Product } from './../../shared/services/models/product.model';
import { Router, RouterModule } from '@angular/router';
import { ComicsServiceService } from './../../shared/services/comics-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  postNewComic!: FormGroup
  isSubmit:boolean=false
  id:string =""
  noDisplay:string="d-none"


  constructor( private formBuilder:FormBuilder, private comicsServiceService:ComicsServiceService, private router: Router) { }


  ngOnInit(): void {
      this.id = this.comicsServiceService.comic.id
      this.postNewComic = this.formBuilder.group({
      title:[this.comicsServiceService.comic.title, [Validators.required]],
      author:[this.comicsServiceService.comic.author, [Validators.required]],
      cover:[this.comicsServiceService.comic.cover, [Validators.required]],
      company:[this.comicsServiceService.comic.company, [Validators.required]]

    })

}

  submit(){
    this.isSubmit=true
    console.log(this.postNewComic.value)
    if(this.id === "")
    if(this.postNewComic.valid){
      this.comicsServiceService.postNewComic(this.postNewComic.value).subscribe()
    }

      const editProduct: Product ={
        id: this.id,
        title: this.postNewComic.get("title")?.value,
        author: this.postNewComic.get("author")?.value,
        cover: this.postNewComic.get("cover")?.value,
        company: this.postNewComic.get("company")?.value
      }

      this.comicsServiceService.editComic(editProduct).subscribe()

      this.comicsServiceService.resetComic()
      // }
      this.isSubmit=false
      this.router.navigate(['/comics'])
  }




}
