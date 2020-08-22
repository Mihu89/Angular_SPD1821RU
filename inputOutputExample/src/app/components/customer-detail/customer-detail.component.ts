import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  @Input() customer: Customer; // for getting info from parent

  @Output() customerChange:EventEmitter<Customer> = new EventEmitter<Customer>();
  constructor() { }

  ngOnInit(): void {
  }

  update() {
    this.customerChange.emit(this.customer);
  }

}
