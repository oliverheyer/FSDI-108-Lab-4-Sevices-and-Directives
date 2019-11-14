import { User } from '../models/user';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  userList : User[] = [];

constructor(private data : DataService) {
// read data from service
this.userList = data.getAllUsers();
console.log("User list has: ", this.userList.length);
}
}
