import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {


  countryList = [
    {id: 1, name: "United States"},
    {id: 2, name: "Australia"},
    {id: 3, name: "Canada"},
    {id: 4, name: "Brazil"},
    {id: 5, name: "England"}
  ];

  contactForm = new FormGroup({
    firstname: new FormControl('pvc'),//Setting Default value as string
    lastname: new FormControl({value: 'Rahul', disabled: true}),//Setting Default value & disabled state as object
     email: new FormControl('', [Validators.required,Validators.minLength(10)]),//built-in Validators such as required and minLength
     gender: new FormControl(),
     isMarried: new FormControl(),
     country: new FormControl(),
     address:new FormGroup({
       city: new FormControl(),
       street: new FormControl(),
       pincode:new FormControl()
     })
   })
  constructor() { }

  ngOnInit(): void {
    
  }
  onSubmit() {
    debugger;
    console.log(this.contactForm.value);
  }
}
