import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  cositas: string[] = ["Sacar la ropa", "Jugar con chapas", "Bailar musica clasica", "Faldar de falda"]
  constructor() { }

  ngOnInit(): void {
  }

}
