import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  users:any = [
    {name:"Dorian", id:1},
    {name:"Liliana", id:2},
    {name:"Alexandru", id:3}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
