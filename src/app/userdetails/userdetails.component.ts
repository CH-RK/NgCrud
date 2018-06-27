import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  public details;
  
  constructor(private _userd:UserService) { }

  ngOnInit() {
    debugger;
    this._userd.getuserd().subscribe((res:any)=> 
    {
      this.details=res.json().resultData;
    });
  }

}
