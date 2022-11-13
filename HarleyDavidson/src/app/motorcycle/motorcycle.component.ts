import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-motorcycle',
  templateUrl: './motorcycle.component.html',
  styleUrls: ['./motorcycle.component.scss']
})
export class MotorcycleComponent implements OnInit {

  @Input() motos:any[] = []

  constructor() { }


  ngOnInit(): void {
  }

}
