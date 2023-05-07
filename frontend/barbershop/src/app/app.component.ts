import {Component, OnInit} from '@angular/core';
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'barbershop';

  constructor(private userService:UserService) {
  }

  ngOnInit(): void {
    const potentialToken= localStorage.getItem('accessToken')
    if(potentialToken!==null){
      this.userService.setToken(potentialToken)
    }
  }
}
