import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterDetailService {



  constructor(private http: HttpClient) { }

  getCharacters(characterID:number){
    return this.http.get("https://rickandmortyapi.com/api/character/" + characterID)
  }


}
