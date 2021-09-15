import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { DataSource } from '@angular/cdk/table';
export interface PeriodicElement {
  name: string;
 
  weight: string;
  symbol: string;
  plan:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {plan: "plan", name: 'free', weight:"", symbol: 'Update Plan'},
  {plan: "profile", name: '5 inculde social profiles', weight: "Free with plan", symbol: 'Manage Profiles'},
  {plan: "payment", name: 'Monthly Payments', weight: "", symbol: 'Update billing'},
  
];
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent  {
  displayedColumns: string[] = ['plan', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  

}
