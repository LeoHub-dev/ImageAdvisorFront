import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

	public users_list: User[] = [];

  constructor(private UsersService: UsersService) { }

  ngOnInit() {
  	
  	this.UsersService.getAll().subscribe((users) => {
  		this.users_list = users; 
  	});

  }

}
