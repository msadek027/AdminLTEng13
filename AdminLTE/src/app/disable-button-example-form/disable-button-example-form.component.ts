import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-disable-button-example-form',
  templateUrl: './disable-button-example-form.component.html',
  styleUrls: ['./disable-button-example-form.component.css']
})
export class DisableButtonExampleFormComponent implements OnInit {
 
  UserName = '';
  Address = '';
  Phone= '';
  Email='';

  constructor() { }

  ngOnInit(): void {
  }

  public contactFormData = 
 {
  UserName: "Mir Ahyaan ",
  Address: "Rahman",
  Phone: "01914224060",
  Email: "engr.msadek027@gmail.com",

};
resetItems()
{
  this.UserName = '';
  this.Address = '';
  this.Phone= '';
  this.Email='';

}
  saveItems()
  {
    debugger;
    console.log("Full Address", this.UserName,this.Address,this.Phone);
  }
  viewItems()
  {
    debugger;
    
    this.UserName=this.contactFormData.UserName;
    this.Address=this.contactFormData.Address;
    this.Phone=this.contactFormData.Phone;
    this.Email=this.contactFormData.Email;
  }
  deleteItems()
  {
    debugger;
    console.log("Full Address", this.UserName,this.Address,this.Phone);
  }
}


//-------------

export class InputModel {
  UserName: string;
  Address: string;

  constructor(UserName: string, Address: string) {
    this.UserName = UserName;
    this.Address = Address;
   
  }
}