import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/users";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BarberService} from "../../services/barber.service";

@Component({
  selector: 'app-barber-page',
  templateUrl: './barber-page.component.html',
  styleUrls: ['./barber-page.component.scss']
})
export class BarberPageComponent implements OnInit{
  experience = [
    {id:1, name:'SIMPLE'},
    {id:2, name:'TOP'},
    {id:3, name:'PRO'}
  ]
  details = false
  current_user:User
  constructor(private userService:UserService, public barberService:BarberService) {
  }

  ngOnInit(): void {
    this.userService.getUser().subscribe(
      (user) => this.current_user=user
    )
    this.barberService.getAllBarbers().subscribe()
  }
      form_for_adding_barber = new FormGroup({
      name: new FormControl<string>('',Validators.required),
      surname: new FormControl<string>('',Validators.required),
      experience: new FormControl<string>('',Validators.required),
      image: new FormControl<string>('',Validators.required),
      description: new FormControl<string>('',Validators.required),
  })
  submit(){
    this.barberService.addBarber({
      name: this.form_for_adding_barber.value.name as string,
      surname: this.form_for_adding_barber.value.surname as string,
      experience: this.form_for_adding_barber.value.experience as string,
      description: this.form_for_adding_barber.value.description as string,
      photo: this.form_for_adding_barber.value.image as string
    }).subscribe(value => {
      console.log(this.form_for_adding_barber.value)
    },error => {
      console.log(error)
    })
  }
}
