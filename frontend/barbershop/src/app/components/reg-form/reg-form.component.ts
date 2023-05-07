import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.scss']
})
export class RegFormComponent implements OnInit{

  ngOnInit(): void {
  }

  registration_form = new FormGroup({
    name:new FormControl<string>('',Validators.required),
    surname: new FormControl<string>('',Validators.required),
    email: new FormControl<string>('',Validators.required),
    phone: new FormControl<string>('',Validators.required),
    password: new FormControl<string>('',Validators.required)
  })
  constructor(private userService:UserService,private router:Router) {
  }
  submit(){
    console.log(this.registration_form.value)
    this.userService.register({
      name: this.registration_form.value.name as string,
      surname: this.registration_form.value.surname as string,
      email: this.registration_form.value.email as string,
      phone: this.registration_form.value.phone as string,
      password: this.registration_form.value.password as string
    }).subscribe(value => {
        this.router.navigate(['/auth'])
    },
      error => {
        if(error.statusText == 'Ok') this.router.navigate(['/auth'])
        else console.log(error)
      })
  }
}
