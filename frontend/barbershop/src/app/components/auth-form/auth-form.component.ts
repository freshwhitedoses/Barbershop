import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit{
  ngOnInit(): void {
    this.route.queryParams.subscribe((params:Params)=> {
      if(params['registered']){
        //теперь вы можете зайти в систему используя свои данные
      } else if(params['accessDenied']){
        //для начала авторизуйтесь в систему
      }
    })
  }
  auth_form = new FormGroup({
    phone: new FormControl<string>('',Validators.required),
    password: new FormControl<string>('',Validators.required)
  })
  constructor(private userService:UserService, private router:Router, private route:ActivatedRoute) {
  }
  submit(){
    console.log(this.auth_form.value)
    this.userService.login(this.auth_form.value.phone as string,this.auth_form.value.password as string)
      .subscribe(value => {console.log(value);
        this.router.navigate(['/account'])}, error => (console.log(error)))
  }
}
