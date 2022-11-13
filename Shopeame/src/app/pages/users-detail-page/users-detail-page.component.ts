import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-detail-page',
  templateUrl: './users-detail-page.component.html',
  styleUrls: ['./users-detail-page.component.scss']
})
export class UsersDetailPageComponent implements OnInit {

  userId:string | null=""

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id')
    })
  }

}
