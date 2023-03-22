import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {

  contactId:string=''
  contact:any;
  groupId:any;
  groupName:any;
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService) { }

ngOnInit(): void {
  this.activatedRoute.params.subscribe((data:any)=>{
    console.log(data); //id- contactid=1
    this.contactId=data.contactId //1

    // view particular data - Api call
    this.api.viewContact(this.contactId).subscribe((data:any)=>{
      console.log(data);//data of particular contact
      this.contact=data
      this.groupId=data.groupId
      console.log(this.groupId);
      

      //view groupname
      this.api.getGroupName(this.groupId).subscribe((data:any)=>{
        this.groupName=data.name
        console.log(this.groupName);
        
      })
      
    })
    })

}

}
