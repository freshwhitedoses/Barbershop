import {Component, Input} from '@angular/core';
import {Barber} from "../../models/barber";
import {Office} from "../../models/office";

@Component({
  selector: 'app-office-info',
  templateUrl: './office-info.component.html',
  styleUrls: ['./office-info.component.scss']
})
export class OfficeInfoComponent {
  details = false
  @Input() office:Office
}
