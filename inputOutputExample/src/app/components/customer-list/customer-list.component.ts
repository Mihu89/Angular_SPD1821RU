import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [
    {id: 1, name: 'John Dravid', address: '', city: 'Banglaore', state: 'Berlin', country: 'Germany'},
    {id: 2, name: 'Alina Romanova', address: '', city: 'Moskow', state: 'Ural', country: 'Russia'},
    {id: 3, name: 'John Skeet', address: 'Bath 32', city: 'Bath', state: 'West Part', country: 'UK'},
    {id: 4, name: 'Boris', address: '', city: 'QWE', state: 'Alir', country: 'Gruzia'},
    {id: 5, name: 'Virat Kohli', address: '', city: 'Delhi', state: 'Delhi', country: 'India'}
  ];

  selectedCustomer: Customer;

  constructor() { }

  ngOnInit(): void {
  }

  showDetails(customer: Customer){
    this.selectedCustomer = Object.assign({}, customer);
  }

  update(customer: Customer) {
    console.log(JSON.stringify(customer,null, 4));
    let _customer = this.customers.find(e => e.id == customer.id);
    Object.assign(_customer, customer);
    alert('Customer Saved');
  }
}
