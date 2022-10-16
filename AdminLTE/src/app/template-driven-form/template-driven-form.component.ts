import { Component, OnInit,ViewChild } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { NgForm } from '@angular/forms';

import { NgxSpinnerService } from "ngx-spinner"; 


@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})


export class TemplateDrivenFormComponent implements OnInit {
  
  @ViewChild('modelForm')  modelForm!: NgForm;
  UserID2='';
  countryData: any[] = ['India', 'US', 'UK'];
  isDisabled = true;
 
  onChangeEvent(event: any){
    debugger;
    console.log(event.target.value);

  }
  onChangeEvent2(event: any){
    debugger;
    console.log(event.target.value);
    if(event.target.value.length==0)
    {
      this.isDisabled = true;
    }
    else
    {
      this.isDisabled = false;
    }
   
  }

  model: addressModel = {
    address: '',
    city: '',
    state:'',
    postcode: 0,
    country: [],
    aggrement: false
  };
  
  constructor(private SpinnerService: NgxSpinnerService) {  }

  ngOnInit(): void {
     /** spinner starts on init */
     this.SpinnerService.show();

     setTimeout(() => {
       /** spinner ends after 5 seconds */
       this.SpinnerService.hide();
     }, 5000);
  }
  onFormSubmit() {
    console.log("Full Address", this.model); 
  }

  resetItems()
  {

   this.modelForm.reset();
  }
  saveItems()
  {
    debugger;
    console.log("Full Address", this.model);

    console.log("Full Address", this.modelForm);
  }
  viewItems()
  {
    debugger;
    this.SpinnerService.show(); 
   let dataObj = {
    address: "Dhaka",
    city: "Bangalore",
      state:"Brigade Road",
      postcode:600070,
      country: ["India"],
      aggrement: true
    };
    this.modelForm.setValue(dataObj);
    this.SpinnerService.hide(); 
  }
  deleteItems()
  {
    
  }
}


//--------------------
export interface addressModel{
  address: string,
  city: string,
  state: string,
  postcode: number,
  country: any[],
  aggrement: boolean
}
