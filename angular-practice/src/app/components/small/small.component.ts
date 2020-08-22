import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small',
  template: '<h2>Hello from {{title}} component</h2>',
  styles: ['h2 {font-wheight: bold; color: violet;}']
})
export class SmallComponent implements OnInit {

  title="Small/tiny";
  constructor() { }

  ngOnInit(): void {
  }

}
