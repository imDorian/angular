import { CharacterDetailService } from './../../shared/services/character-detail.service';
import { CharactersService } from './../../shared/services/characters.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CharactersDetailPageComponent } from './characters-detail-page/characters-detail-page.component';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.scss']
})
export class CharacterPageComponent implements OnInit {

  charactersPage:number= 1
  reload:any
  characters: any
  constructor(private charactersService: CharactersService) { }



  ngOnInit(): void {

    this.reload = () => {this.charactersService.getCharacters(this.charactersPage).subscribe((res:any) => {
      console.log(res);

      this.characters = res.results
      console.log("page" + this.charactersPage)
    })}
    this.reload()
  }


  previousPage(){
    if(this.charactersPage > 1)
    this.charactersPage--;
    this.reload()

  }

  nextPage(){
    if(this.charactersPage < 43)
  this.charactersPage++;
  this.reload()
  }

}
