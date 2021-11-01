import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLogedIn: boolean = false;

  constructor(private loginService: LoginService) {}

  logout() {
    this.isLogedIn = !this.isLogedIn;
    localStorage.setItem('isLogedIn', 'false');
    this.loginService.setLogedIn();
  }

  ngOnInit(): void {
    this.isLogedIn = this.loginService.getLogedInLocalStorage();

    this.loginService.getLogedIn().subscribe((data) => {
      this.isLogedIn = data;
    });
  }
}
