import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

export interface PeriodicElement {
  office: string;
  price: string;
  type: string
}

const prices:PeriodicElement[] = [
  {office: 'Haircut', price:'$40', type: 'SIMPLE'},
  {office: 'Haircut', price:'$50', type: 'TOP'},
  {office: 'Haircut', price:'$60', type: 'PRO'},
  {office: 'BreadCutting', price:'$20', type: 'SIMPLE'},
  {office: 'BreadCutting', price:'$30', type: 'TOP'},
  {office: 'BreadCutting', price:'$40', type: 'PRO'},
  {office: 'HairStyling', price:'$15', type: 'SIMPLE'},
  {office: 'HairStyling', price:'$20', type: 'TOP'},
  {office: 'HairStyling', price:'$20', type: 'PRO'},
]
@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent {
  displayedColumns: string[] = ['office', 'type', 'price'];
  dataSource = prices;
}
