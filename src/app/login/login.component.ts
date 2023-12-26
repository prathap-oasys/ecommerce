import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private route:Router){}
  username: string = '';
  password: string = '';

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form submitted:', this.username, this.password);
    } else {
      console.log("Form not submitted");
    }
  }
  sing() {
    this.route.navigate(['regi']);

  }

}
