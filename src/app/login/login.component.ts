import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login={};
  public userobject;
  public msg;
  public user;
  public userId;
  public errorMessage;
  constructor(private _log:UserService,private _router: Router) { }
  
  ngOnInit() {
  }
  userlogin(login){
      var creditials = "username=" + login.username + "&password=" +login.password;
      debugger;
      this._log.login(creditials).subscribe((res:any)=>{
        this.userobject = res.json();
        this.user = this.userobject.resultData;
        this.msg = this.userobject.message;
        this.errorMessage = this.userobject.errorMessage;
       // console.log(this.userobject);
      // console.log(this.msg);
      localStorage.setItem('userId', this.user.user.id)
        if(this.userobject.status=="Success"){
          this._router.navigate(['home']);
          alert(this.msg);
        }
        else{
          this._router.navigate(['login']);
          alert(this.errorMessage);
        }
      }

    );
  }
}
