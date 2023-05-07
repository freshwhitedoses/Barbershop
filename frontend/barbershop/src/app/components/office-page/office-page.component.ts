import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {OfficeService} from "../../services/office.service";
import {User} from "../../models/users";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-office-page',
  templateUrl: './office-page.component.html',
  styleUrls: ['./office-page.component.scss']
})
export class OfficePageComponent implements OnInit{

  constructor(public userService:UserService, public officeService:OfficeService) {}

  type = [
    {id:1, name:'Haircut'},
    {id:2, name:'BreadCutting'},
    {id:3, name:'HairStyling'}
  ]
  experience = [
    {id:1, name:'SIMPLE'},
    {id:2, name:'TOP'},
    {id:3, name:'PRO'}
  ]
  details = false
  current_user:User
  form_for_adding_office = new FormGroup({
    type: new FormControl<string>('',Validators.required),
    photo: new FormControl<string>('',Validators.required),
    price: new FormControl<string>('$',Validators.required),
    experience: new FormControl<string>('',Validators.required),
    description: new FormControl<string>('',Validators.required)
  })

  ngOnInit(): void {
    this.userService.getUser().subscribe((user) => this.current_user = user)
    this.officeService.getAllOffices().subscribe()
    this.form_for_adding_office.value.experience = this.experience[0].name;
  }

  submit(){
    this.officeService.addOffice({
      type: this.form_for_adding_office.value.type as string,
      photo: this.form_for_adding_office.value.photo as string,
      price: this.form_for_adding_office.value.price as string,
      experience: this.form_for_adding_office.value.experience as string,
      description: this.form_for_adding_office.value.description as string
    }).subscribe(value => {
      console.log(this.form_for_adding_office.value)
    }, error => {
      console.log(error)
    })
  }
}
