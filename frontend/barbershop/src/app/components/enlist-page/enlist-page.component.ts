import {Component, OnInit} from '@angular/core';
import {BarberService} from "../../services/barber.service";
import {User} from "../../models/users";
import {UserService} from "../../services/user.service";
import {EntryService} from "../../services/entry.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {of, tap} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {Router} from "@angular/router";

@Component({
  selector: 'app-enlist-page',
  templateUrl: './enlist-page.component.html',
  styleUrls: ['./enlist-page.component.scss']
})
export class EnlistPageComponent implements OnInit{

  constructor(public barberService:BarberService, public userService:UserService, private entryService:EntryService,private router:Router) {
  }
  current_user:User
  times = [
    {date: '12', time: ['11:00', '13:00', '15:00', '17:00']},
    {date: '13', time: ['11:00', '13:00', '15:00', '17:00']},
    {date: '14', time: ['11:00', '13:00', '15:00', '17:00']},
    {date: '15', time: ['11:00', '13:00', '15:00', '17:00']},
    {date: '16', time: ['11:00', '13:00', '15:00', '17:00']},
    {date: '17', time: ['11:00', '13:00', '15:00', '17:00']},
    {date: '18', time: ['11:00', '13:00', '15:00', '17:00']},
    {date: '19', time: ['11:00', '13:00', '15:00', '17:00']},
    {date: '20', time: ['11:00', '13:00', '15:00', '17:00']},
    {date: '21', time: ['11:00', '13:00', '15:00', '17:00']},
    {date: '22', time: ['11:00', '13:00', '15:00', '17:00']},
    {date: '23', time: ['11:00', '13:00', '15:00', '17:00']},
    {date: '24', time: ['11:00', '13:00', '15:00', '17:00']},
    {date: '25', time: ['11:00', '13:00', '15:00', '17:00']},
    {date: '26', time: ['11:00', '13:00', '15:00', '17:00']},
    {date: '27', time: ['11:00', '13:00', '15:00', '17:00']},
    {date: '28', time: ['11:00', '13:00', '15:00', '17:00']},
    {date: '29', time: ['11:00', '13:00', '15:00', '17:00']},
    {date: '30', time: ['11:00', '13:00', '15:00', '17:00']}]

  type = [
    {id: 1, name: 'Haircut'},
    {id: 2, name: 'BreadCutting'},
    {id: 3, name: 'HairStyling'}

]
  getDate(index:number):string{
    return this.times[index].date as string
  }


  ngOnInit(): void {
    this.userService.getUser().subscribe(
      (user) => this.current_user=user
    )
    this.barberService.getAllBarbers().subscribe()
  }
  form_for_adding_entry = new FormGroup({
    office: new FormControl<string>('',Validators.required),
    barber: new FormControl<string>('',Validators.required),
    day: new FormControl<number>(0,Validators.required),
    time: new FormControl<string>('',Validators.required)
  })
  prices = [
    {type: 'SIMPLE', office: 'Haircut', price:'$40'},
    {type: 'TOP', office: 'Haircut', price:'$50'},
    {type: 'PRO', office: 'Haircut', price:'$60'},
    {type: 'SIMPLE', office: 'BreadCutting', price:'$20'},
    {type: 'TOP', office: 'BreadCutting', price:'$30'},
    {type: 'PRO', office: 'BreadCutting', price:'$40'},
    {type: 'SIMPLE', office: 'HairStyling', price:'$15'},
    {type: 'TOP', office: 'HairStyling', price:'$20'},
    {type: 'PRO', office: 'HairStyling', price:'$20'},
  ]
  getExperience(name:string):string{
    return this.barberService.barbers.find(it=>it.name==name)?.experience as string;
  }
  getPrice(type:string, office:string): string{
     return this.prices.find((it)=>it.type==type&&it.office==office)?.price as string
  }
  index:number | undefined
  deleteInd(day:string, time:string){
    this.index = this.times.find(it=>it.date==day)?.time.indexOf(time) as number
    this.times.find(it=>it.date==day)?.time.slice(this.index,1)
  }
  tim = [
    {date: '12', time: ['11:00', '13:00', '15:00', '17:00']},
    {date: '13', time: ['11:00', '13:00', '15:00', '17:00']},
    {date: '14', time: ['11:00', '13:00', '15:00', '17:00']},
    {date: '15', time: ['11:00', '13:00', '15:00', '17:00']}]
  temp_date:string
  submit(){
    this.temp_date = "2023-05-" + this.getDate(this.form_for_adding_entry.value.day as number) + 'T'
      + (this.form_for_adding_entry.value.time as string) + ":00.000"
    this.entryService.addEntry({
      office: this.form_for_adding_entry.value.office as string,
      barber: this.form_for_adding_entry.value.barber as string,
      price: this.getPrice(this.getExperience(this.form_for_adding_entry.value.barber as string), this.form_for_adding_entry.value.office as string) as string,
      date: this.temp_date as string,
      phone: this.current_user.phone as string
   }).subscribe(value => {
      console.log(this.form_for_adding_entry.value);
      this.router.navigate(['/account']);
        //this.index = this.tim.find(it=>it.date==this.temp_date)?.time
          //.indexOf(this.form_for_adding_entry.value.time as string) as number;
        //this.tim.find(it=>it.date==this.temp_date)?.time.slice(this.index,1)
      //console.log(this.form_for_adding_entry.value.time as string)
      //console.log(this.tim)
      }
      ,error=>{
     console.log(error)
    })
  }

}
