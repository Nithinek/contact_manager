import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyContact } from 'src/model/myContact';
import { MyGroup } from 'src/model/myGroup';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {
contactId:string='';
contact:MyContact={}
groups:MyGroup[]=[] //array of data
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService, private route:Router) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data.Id);//id- id=3
      this.contactId = data.Id;
      //call a Api getting particuar contact details
  this.api.viewContact(this.contactId).subscribe((data:any)=>{
    console.log(data);
    this.contact=data
    //call a Api for getting all group details
    this.api.getAllGroups().subscribe((data:any)=>{
      console.log(data);
      this.groups=data
      
    })
  })
    })
  }

updateContact(){
  this.api.updateContact(this.contactId,this.contact).subscribe((data:any)=>{
  this.route.navigateByUrl('')
  alert('updated successfully')
    
  })
}
  
}

