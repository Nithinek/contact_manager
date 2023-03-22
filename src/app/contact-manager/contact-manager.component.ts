import { Component, OnInit } from '@angular/core';
import { MyContact } from 'src/model/myContact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {

  ///display date and time
loginDate:any;
searchKey:string='';

//heading='Contact Details'

  // allContacts:any
//string interpolation
allContacts:MyContact[]=[]//empty array

  constructor(private api:ApiService) { 
    this.loginDate=new Date()
  }

ngOnInit(): void{
  this.api.getAllContacts().subscribe((data:any)=>{
console.log(data);//array(6) all contact details
this.allContacts=data
  })

  }

  getAllContacts(){
    this.api.getAllContacts().subscribe((data:any)=>{
      this.allContacts=data
  })
  }

  //event binding
 // nameChange(){
  //  alert('value changed')
 // }
 search(event:any){
  console.log(event.target.value);
  this.searchKey=event.target.value
console.log(this.searchKey);

  
 }

deleteContact(contactId:any){
  this.api.deleteContact(contactId).subscribe((data:any)=>{
    alert("contact deleted")
    this.getAllContacts()
  })
}

  }
  

