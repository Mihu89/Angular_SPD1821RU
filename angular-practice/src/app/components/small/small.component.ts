import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small',
  // template: '<h2>Hello from {{title}} component</h2>',
  template: `<h2>Hello from {{title}} component</h2>
            <p>Tiny details info section</p>
            <ol><li>First section</li><li>Seccond section</li>
            <ol>
            <div>Made by <b>{{firstName}} {{lastName}}</b></div>
            <ul *ngFor="let city of cities; let i = index;let o = odd; let e = even;" [ngClass]="{odd: o, even: e}">
              <li><b>{{i}}</b> {{city}}</li></ul>
            <span *ngFor="let city of cities; trackBy:trackByFn;">{{city}}, </span>
            <div [ngSwitch]="num"> 
              <div *ngSwitchCase="'1'"> First Template</div>
              <div *ngSwitchCase="'2'">Second template</div> 
              <div *ngSwitchCase="'3'">Third Template</div> 
              <div *ngSwitchCase="'4'">Third Template</div> 
              <div *ngSwitchDefault?>Default Template</div>
          </div><br />
          <div *ngIf="isManager">I 'm the Manager</div>
            `,
  styles: ['h2 {font-wheight: bold; color: violet;}', '.even {background-color: grey;}','.odd {background-color: green;}']
})

// <ul *ngFor="let city of cities; let i = index;let f = first; let l = last;" [ngClass]="{first: f, last: l}">
//               <li><b>{{i}}</b> {{city}}</li></ul>
export class SmallComponent implements OnInit {

  title="Small/tiny";
  firstName: string = "John"; // display on tremplate this is interpolation, one way binding
  lastName = 'Doe';
  cities:string[] = ['Paris', 'London', 'Lisabona', 'Berlin'];
  num: number = 2;
  isManager = false;
  constructor() { }

  ngOnInit(): void {
  }

  trackByFn(index, item){
    return item.title;
  }

}
