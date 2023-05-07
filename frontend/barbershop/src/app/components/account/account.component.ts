import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/users";
import {Observable} from "rxjs";
import {EntryService} from "../../services/entry.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit{
  constructor(private userService:UserService,public entryService:EntryService) {
  }
  user_: User
  logout() {
    this.userService.logout()
  }

  ngOnInit(): void {
    this.entryService.getAllEntries().subscribe()
    this.userService.getAccount().subscribe((next) => {this.user_=next})
  }

}
