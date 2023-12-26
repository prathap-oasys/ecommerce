import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {



  constructor(private rout:Router,private ser:UserService,private route:Router){}

  loginForm=new FormGroup({
    username:new FormControl(),
    password:new FormControl()
  })

  postData() {

    const ss=this.loginForm.value as User;

    this.ser.postData(ss).subscribe((res)=>{

      this.route.navigate(['login']);



    })

    

  }


  

  sing() {
    this.rout.navigate(['login']);

  }

}
