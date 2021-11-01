import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogedIn!:boolean;

  constructor(private loginService: LoginService) { }

  logout() {
    this.isLogedIn = !this.isLogedIn;
    this.loginService.setLogedIn(false);
  }

  ngOnInit(): void {
    this.loginService.getLogedIn().subscribe(data => this.isLogedIn = data); 
    console.log('this.isLogedIn In Navbar :>> ', this.isLogedIn);
    console.log('this.loginService.getLogedIn() in Navbar :>> ', this.loginService.getLogedIn());
  }

}
