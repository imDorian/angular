import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-uno',
  templateUrl: './componente-uno.component.html',
  styleUrls: ['./componente-uno.component.scss']
})
export class ComponenteUnoComponent implements OnInit {

  @Input() imageUrl: string = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Pac-Man_Cutscene.svg/283px-Pac-Man_Cutscene.svg.png"

  constructor() { }

  ngOnInit(): void {
  }

}
