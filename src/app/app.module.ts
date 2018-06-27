import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { AdminComponent } from './admin/admin.component';
import { Routes , RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
  //for routing  
  const routes :Routes=[
    {
      path:'login',
      component:LoginComponent
    },
    {
      path:'home',
      component:UserdetailsComponent
    }
    
]
@NgModule({
  declarations: [
    AppComponent,
    UserdetailsComponent,
    AdminComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
