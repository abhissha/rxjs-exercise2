import { Component, OnInit } from '@angular/core';
import { UserService } from "./user.service";

@Component({
  selector: 'app-paging-example',
  templateUrl: './paging-example.component.html',
  styleUrls: ['./paging-example.component.css']
})
export class PagingExampleComponent {

  constructor(public userService: UserService) { }

}
