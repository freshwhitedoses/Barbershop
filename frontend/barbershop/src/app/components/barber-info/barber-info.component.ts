import {Component, Input} from '@angular/core';
import {Barber} from "../../models/barber";

@Component({
  selector: 'app-barber-info',
  templateUrl: './barber-info.component.html',
  styleUrls: ['./barber-info.component.scss']
})
export class BarberInfoComponent {
  @Input() barber:Barber
  details = false
}
