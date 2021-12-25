import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.css']
})
export class TableUserComponent implements OnInit {
  
  tableUser:User;
  inputSearch :string;

  constructor(
    private service: ServiceService  
  ) { }

  ngOnInit(): void {
    this.callApiUser();
  }
  
  //Function callApi 
  callApiUser(){
    this.service.getAllData().subscribe((data)=>{
      this.tableUser = data;
      console.log(this.tableUser);
    })
  }


}
