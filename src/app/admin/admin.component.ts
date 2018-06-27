import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public details;
  constructor(private _admin:UserService) { }

  ngOnInit() {
    this._admin.getadmins().subscribe((res:any)=>{
      this.details=res.resultData})
  }

}
