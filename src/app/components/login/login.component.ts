import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email!: string;
  password!: string;

  constructor(private loginService: LoginService) { }

  login() {
    if(this.password === "veli123" && this.email === "veli@gmail.com") {
      localStorage.setItem('isLogedIn', "true");
      this.loginService.setLogedIn();
    }
  }

}
