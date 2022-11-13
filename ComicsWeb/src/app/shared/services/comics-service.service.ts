import { Product } from './models/product.model';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComicsServiceService {

  url:string ="http://localhost:3000/comics"

  comic:Product = {
    id:"",
    title: "",
    author: "",
    cover: "",
    company:""
  }

  comics?:Product[]


  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }

  getComics(){
   return this.http.get(this.url)
  }

  getComicsID(comicsID:number){
    return this.http.get(this.url + "/" + comicsID)
  }

  postNewComic(newComic:any){
    return this.http.post(this.url, newComic)
  }

  editComic(comic:Product){
    return this.http.put(this.url + "/" + comic.id, comic)

  }

  deleteComic(comicID:number){
    return this.http.delete(this.url + "/" + comicID)
  }

  resetComic(){
    this.comic.title = ""
    this.comic.author = ""
    this.comic.cover = ""
    this.comic.id = ""
    this.comic.company = ""
  }
}

