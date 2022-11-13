import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  constructor() { }
  planets: any[]= [{
      name: 'Mercurio',
      img: 'https://media.gq.com.mx/photos/623f7ab8eaa378c48316e6db/16:9/w_2560%2Cc_limit/mercurio.jpg',
    },{
      name: "Venus",
      img: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg"
    },
    {
      name: "Tierra",
      img: "https://upload.wikimedia.org/wikipedia/commons/1/1f/As08-16-2593.jpg"
    },{
      name: "Marte",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Schiaparelli_Hemisphere_Enhanced.jpg/640px-Schiaparelli_Hemisphere_Enhanced.jpg"
    }
  ];



  ngOnInit(): void {
  }

}
