import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small',
  // template: '<h2>Hello from {{title}} component</h2>',
  template: `<h2>Hello from {{title}} component</h2>
            <p>Tiny details info section</p>
            <ol><li>First section</li><li>Seccond section</li>
            <ol>
            <div>Made by <b>{{firstName}} {{lastName}}</b></div>`,
  styles: ['h2 {font-wheight: bold; color: violet;}']
})
export class SmallComponent implements OnInit {

  title="Small/tiny";
  firstName: string = "John"; // display on tremplate this is interpolation, one way binding
  lastName = 'Doe';
  constructor() { }

  ngOnInit(): void {
  }

}
