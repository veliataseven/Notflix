import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  isRatedOne!: boolean;
  isRatedTwo!: boolean;
  isRatedThree!: boolean;
  isRatedFour!: boolean;
  isRatedFive!: boolean;

  rate: any = {
    rateOne: 1,
    rateTwo: 2,
    rateThree: 3,
    rateFour: 4,
    rateFive: 5,
  };

  ratingNumber: number = 0;
  constructor() {}

  changeRating(id: string) {
    if (this.ratingNumber === 0) {
      if (id === 'rateOne') {
        this.ratingNumber = 1;
        this.isRatedOne = !this.isRatedOne;
      } else if (id === 'rateTwo') {
        this.ratingNumber = 2;
        this.isRatedOne = !this.isRatedOne;
        this.isRatedTwo = !this.isRatedTwo;
      } else if (id === 'rateThree') {
        this.ratingNumber = 3;
        this.isRatedOne = !this.isRatedOne;
        this.isRatedTwo = !this.isRatedTwo;
        this.isRatedThree = !this.isRatedThree;
      } else if (id === 'rateFour') {
        this.ratingNumber = 4;
        this.isRatedOne = !this.isRatedOne;
        this.isRatedTwo = !this.isRatedTwo;
        this.isRatedThree = !this.isRatedThree;
        this.isRatedFour = !this.isRatedFour;
      } else if (id === 'rateFive') {
        this.ratingNumber = 5;
        this.isRatedOne = !this.isRatedOne;
        this.isRatedTwo = !this.isRatedTwo;
        this.isRatedThree = !this.isRatedThree;
        this.isRatedFour = !this.isRatedFour;
        this.isRatedFive = !this.isRatedFive;
      }
    } else if (this.ratingNumber > this.rate[id]) {
      if (id === 'rateOne') {
        switch (this.ratingNumber) {
          case 2:
            this.isRatedTwo = !this.isRatedTwo;
            break;
          case 3:
            this.isRatedTwo = !this.isRatedTwo;
            this.isRatedThree = !this.isRatedThree;
            break;
          case 4:
            this.isRatedTwo = !this.isRatedTwo;
            this.isRatedThree = !this.isRatedThree;
            this.isRatedFour = !this.isRatedFour;
            break;
          case 5:
            this.isRatedTwo = !this.isRatedTwo;
            this.isRatedThree = !this.isRatedThree;
            this.isRatedFour = !this.isRatedFour;
            this.isRatedFive = !this.isRatedFive;
            break;

          default:
            break;
        }
        this.ratingNumber = 1;
      } else if (id === 'rateTwo') {
        switch (this.ratingNumber) {
          case 3:
            this.isRatedThree = !this.isRatedThree;
            break;
          case 4:
            this.isRatedThree = !this.isRatedThree;
            this.isRatedFour = !this.isRatedFour;
            break;
          case 5:
            this.isRatedThree = !this.isRatedThree;
            this.isRatedFour = !this.isRatedFour;
            this.isRatedFive = !this.isRatedFive;
            break;

          default:
            break;
        }
        this.ratingNumber = 2;
      } else if (id === 'rateThree') {
        switch (this.ratingNumber) {
          case 4:
            this.isRatedFour = !this.isRatedFour;
            break;
          case 5:
            this.isRatedFour = !this.isRatedFour;
            this.isRatedFive = !this.isRatedFive;
            break;

          default:
            break;
        }
        this.ratingNumber = 3;
      } else if (id === 'rateFour') {
        switch (this.ratingNumber) {
          case 5:
            this.isRatedFive = !this.isRatedFive;
            break;

          default:
            break;
        }
        this.ratingNumber = 4;
      } else if (id === 'rateFive') {
        this.ratingNumber = 5;
      }
    } else {
      if (id === 'rateOne') {
        console.log('id :>> ', id);
        console.log('this.ratingNumber :>> ', this.ratingNumber);
        this.ratingNumber = 1;
      } else if (id === 'rateTwo') {
        console.log('id :>> ', id);
        console.log('this.ratingNumber :>> ', this.ratingNumber);
        switch (this.ratingNumber) {
          case 1:
            this.isRatedTwo = !this.isRatedTwo;
            break;

          default:
            break;
        }
        this.ratingNumber = 2;
      } else if (id === 'rateThree') {
        console.log('id :>> ', id);
        console.log('this.ratingNumber :>> ', this.ratingNumber);
        switch (this.ratingNumber) {
          case 1:
            this.isRatedTwo = !this.isRatedTwo;
            this.isRatedThree = !this.isRatedThree;
            break;
          case 2:
            this.isRatedThree = !this.isRatedThree;
            break;

          default:
            break;
        }
        this.ratingNumber = 3;
      } else if (id === 'rateFour') {
        console.log('id :>> ', id);
        console.log('this.ratingNumber :>> ', this.ratingNumber);
        switch (this.ratingNumber) {
          case 1:
            this.isRatedTwo = !this.isRatedTwo;
            this.isRatedThree = !this.isRatedThree;
            this.isRatedFour = !this.isRatedFour;
            break;
          case 2:
            this.isRatedThree = !this.isRatedThree;
            this.isRatedFour = !this.isRatedFour;
            break;
          case 3:
            this.isRatedFour = !this.isRatedFour;
            break;

          default:
            break;
        }
        this.ratingNumber = 4;
      } else if (id === 'rateFive') {
        console.log('id :>> ', id);
        console.log('this.ratingNumber :>> ', this.ratingNumber);
        switch (this.ratingNumber) {
          case 1:
            this.isRatedTwo = !this.isRatedTwo;
            this.isRatedThree = !this.isRatedThree;
            this.isRatedFour = !this.isRatedFour;
            this.isRatedFive = !this.isRatedFive;
            break;
          case 2:
            this.isRatedThree = !this.isRatedThree;
            this.isRatedFour = !this.isRatedFour;
            this.isRatedFive = !this.isRatedFive;
            break;
          case 3:
            this.isRatedFour = !this.isRatedFour;
            this.isRatedFive = !this.isRatedFive;
            break;
          case 4:
            this.isRatedFive = !this.isRatedFive;
            break;

          default:
            break;
        }
        this.ratingNumber = 5;
      }
    }
  }

  ngOnInit(): void {
    this.isRatedOne = false;
    this.isRatedTwo = false;
    this.isRatedThree = false;
    this.isRatedFour = false;
    this.isRatedFive = false;
  }
}
