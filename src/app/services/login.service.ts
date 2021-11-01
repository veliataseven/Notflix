import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private subject = new BehaviorSubject<boolean>(false);

  isLogedIn: boolean = false;

  constructor() { }

  setLogedIn(isLogedIn:boolean) {
    this.isLogedIn = isLogedIn;
    console.log('this.isLogedIn in Services:>> ', this.isLogedIn);
    this.subject.next(isLogedIn);
  }

  getLogedIn(): Observable<boolean> {
    return this.subject.asObservable();
  }

  

}
