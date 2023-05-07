import {Component, Input} from '@angular/core';
import {EntryService} from "../../services/entry.service";
import {Entry} from "../../models/entry";

@Component({
  selector: 'app-user-entry',
  templateUrl: './user-entry.component.html',
  styleUrls: ['./user-entry.component.scss']
})
export class UserEntryComponent {
  @Input() entry:Entry
}
