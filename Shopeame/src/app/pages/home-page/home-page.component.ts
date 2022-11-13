import { ServiceExampleService } from './../../shared/services/service-example.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private serviceExampleService: ServiceExampleService) { } //entramos en privado, le damos un nombre y le decimos que servicio es.

  ngOnInit(): void {
    console.log(this.serviceExampleService.getName()) //service example imprime Dorian en consola
  }

}
