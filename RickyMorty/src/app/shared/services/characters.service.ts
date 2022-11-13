import { getLocaleDirection } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getCharacters(charactersPage:number){
    return this.http.get("https://rickandmortyapi.com/api/character/?page=" + charactersPage)
  }

}
