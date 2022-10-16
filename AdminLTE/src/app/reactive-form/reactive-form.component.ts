import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  isDisabled=true;
  countryList: country[] = [
    new country("1", "Bangladesh"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];



 public contactFormData = 
 {
 firstname: "Mir Ahyaan ",
 lastname: "Rahman",
 email: "engr.msadek027@gmail.com",
 gender: "male",
 isMarried: "True",
 country: "Bangladesh",
 address:{city: "",street: "",pincode: ""}
};

  contactForm = new FormGroup({
     firstname: new FormControl('pvc'),//Setting Default value as string
     lastname: new FormControl({value: 'Rahul', disabled: true}),//Setting Default value & disabled state as object
     email: new FormControl('', [Validators.required,Validators.minLength(10)]),//built-in Validators such as required and minLength
     gender: new FormControl(),
     isMarried: new FormControl('', [Validators.required]),
     country: new FormControl(),
     address:new FormGroup({
       city: new FormControl(),
       street: new FormControl(),
       pincode:new FormControl()
     })
   })
   



  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }


  onSubmit() {
    debugger;
    console.log(this.contactForm.value);
  }
  saveItems()
  {
    debugger;
  }
  resetItems()
  {
    this.contactForm.reset();
    this.isDisabled=true;
  }
   setValue() {
 
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
 
    this.contactForm.setValue(contact);
  }
  viewItems()
  {  
    try
    {
    
     debugger;
     this.isDisabled=false;
     let vl= this.contactFormData.firstname;
     this.setValue() ;
   
 // this.http.get('http://localhost:8080/app-rest/api/empresasAereas/nome/').subscribe(data => {
  //    this.contactForm.setValue(data);
  //    console.log(this.contactForm); // this return my data with values
   // });
  }
  catch(error)
  {
   console.log(error);
   alert(error);
  }
  
  }
}



//--------------------------
export class country {
  id: string;
  name: string;
 
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}