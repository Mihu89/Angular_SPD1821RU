import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-name',
  templateUrl: './show-name.component.html',
  styleUrls: ['./show-name.component.css']
})
export class ShowNameComponent implements OnInit {

  @Input() name: string;
  constructor() { }

  ngOnInit(): void {
  }

}
