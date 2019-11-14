import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // create an empty user array
  users : User[] = [];
  constructor() {}

  public sayHello(){
    console.log('Hello from a Service');
  }
  public saveUser(theNewUser){
    //get a user and add it to the array
    this.users.push(theNewUser);
  }
  public getAllUsers() {
    // return all the users
    return this.users;
  }
}
