import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';  
@Injectable({  
  providedIn: 'root'  
})  
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model : any={};    
    
  errorMessage!: string; 
  constructor() { }

  ngOnInit(): void {
  }


  login()
  {    
    debugger;    
   
  }  
     


}
