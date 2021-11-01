import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private subject = new Subject<boolean>();

  isLogedIn!: boolean;

  constructor() { }

  setLogedIn() {

    this.isLogedIn = this.getLogedInLocalStorage();

    this.subject.next(this.isLogedIn);
  }

  getLogedIn(): Observable<boolean> {
    return this.subject.asObservable();
  }

  getLogedInLocalStorage() {
    if (localStorage.getItem("isLogedIn") === null || localStorage.getItem("isLogedIn") === "false") {
      return false;
    } else {
      return true;
    }
  }

}
