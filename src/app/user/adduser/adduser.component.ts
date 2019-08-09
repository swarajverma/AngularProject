import { Component, OnInit } from '@angular/core';
import { users } from '../users';
import { UsersService } from 'src/app/services/users.service';



@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  user: users = new users();
  submitted = false;
 
  constructor(private addUserService: UsersService) { }
 
  ngOnInit() {
  }
 
  newUser(): void {
    this.submitted = false;
    this.user = new users();
  }
 
  save() {
    this.addUserService.addUser(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new users();
  }
 
  onSubmit() {
    console.log("user.racfid - "+this.user.racfid);
    this.submitted = true;
    this.save();
  }

}
