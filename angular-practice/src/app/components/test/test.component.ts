import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  currentDay = "Saturday";
  isDisabled = false;
  closeLabel = "ASD";
  cssVariable = 'red';
  cssClass : CssClass = new CssClass();
  status: string = 'payed';
  size= 10;
  president = "Boris";
  constructor() { }

  ngOnInit(): void {
  }

  closeMe() {
    console.log("Is closing");
    if(this.cssVariable == 'red'){
      this.cssVariable = 'blue';
    }else{
      this.cssVariable = 'red';
    }
  }
  setColor(){
    // console.log(this.status);
    // var a = this.status == 'payed' ? 'red': 'blue';
    // console.log('### ',a);
    // return a;
    return this.status == 'payed' ? 'red': 'blue';
  }

}
class CssClass {
  red: boolean = false;
  size18: boolean = true;
  blue: boolean = true;
}
