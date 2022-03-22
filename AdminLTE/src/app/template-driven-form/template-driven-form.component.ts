import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  countryData: any[] = ['India', 'US', 'UK'];
  model: addressModel = {
    address: '',
    city: '',
    state:'',
    postcode: 0,
    country: [],
    aggrement: false
  };
  constructor() { }

  ngOnInit(): void {
  }
  onFormSubmit() {
    console.log("Full Address", this.model);  
  }
}

export interface addressModel{
  address: string,
  city: string,
  state: string,
  postcode: number,
  country: any[],
  aggrement: boolean
}
