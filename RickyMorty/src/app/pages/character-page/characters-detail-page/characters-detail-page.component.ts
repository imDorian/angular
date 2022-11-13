import { ActivatedRoute } from '@angular/router';
import { CharacterDetailService } from './../../../shared/services/character-detail.service';
import { Component, OnInit, Input } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-characters-detail-page',
  templateUrl: './characters-detail-page.component.html',
  styleUrls: ['./characters-detail-page.component.scss']
})
export class CharactersDetailPageComponent implements OnInit {


  character:any
  characterID:number=1 //tiene que copiar al params.id
  constructor(private characterDetailService: CharacterDetailService, private activatedRoute: ActivatedRoute) { }



  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(params => {
      this.characterID = Number(params.get('id'))
    })

    this.characterDetailService.getCharacters(this.characterID).subscribe((res:any) => {
      console.log(res)
      this.character = res
      console.log(this.character)
    })
}





}
