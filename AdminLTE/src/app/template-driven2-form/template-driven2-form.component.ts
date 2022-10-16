
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven2-form',
  templateUrl: './template-driven2-form.component.html',
  styleUrls: ['./template-driven2-form.component.css']
})
export class TemplateDriven2FormComponent implements OnInit {
  title = 'Template driven2 forms';
 
  @ViewChild('templateForm')
  templateForm!: NgForm;
 
  isDisabled = true;
  UserID3='';
  countryList: country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];

  constructor() { }

  contact!: contact;
  

 
  onSubmit() {
    console.log(this.templateForm.value);
  }
 
  ngOnInit() {
   
    setTimeout(() => { 
      this.setDefault();
    });
    
  }
 
 
  setDefault() {
    let contact = {
      firstname: "Sachin",
      lastname: "Tendulkar",
      email: "sachin@gmail.com",
      gender: "male",
      isMarried: true,
      country: "2",
      address: {
        city: "Mumbai",
        street: "Perry Cross Rd",
        pincode: "400050"
      }
    };
 
    this.templateForm.control.setValue(contact);
}
saveItems()
{
  console.log(this.templateForm.value);
}
viewItems() {
  this.isDisabled = false;
  let contact = {
    firstname: "Rahul",
    lastname: "Dravid",
    email: "rahul@gmail.com",
    gender: "male",
    isMarried: true,
    country: "1",
    address: {
      city: "Bangalore",
      street: "Brigade Road",
      pincode: "600070"
    }
  };

  this.templateForm.setValue(contact);
}
resetItems() {
  this.templateForm.reset();
  this.isDisabled = true;
}
deleteItems()
{

}
}

//-------------------------------
export interface contact {
  firstname: string;
  lastname: string;
  email: string;
  gender: string;
  isMarried: boolean;
  country: string;
  address: {
    city: string;
    street: string;
    pincode: string;
  }
}
 
 
export class country {
  id: string;
  name: string;
 
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}