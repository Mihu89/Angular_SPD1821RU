import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormArray, NgForm } from '@angular/forms';
import { Contact } from './contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Template Variables in Angular templates';
  titleForm = 'Template driven form example';

  lastName = new FormControl("Barack Obama");
  @ViewChild('contactForm') contactForm: NgForm;
  
  contact: Contact;

  completeAddress = new FormGroup({
    city: new FormControl('Test'),
    street: new FormControl('Ion Creanga'),
    // street: new FormArray([
    //   new FormControl('Puskin'),
    //   new FormControl('Stefan cel Mare'),
    //   new FormControl('Ion Creanga')
    // ]),
    postalCode: new FormControl('')
  });
  
  countryList: Country[] =[
    new Country("1", "Moldova"),
    new Country("2", "Romania"),
    new Country("3", "Belgia"),
  ]


  ngOnInit(){
    this.contact = {
      firstName : "John",
      lastName : "Doe"
    } as Contact;


    // setTimeout(() => {
    //   this.contactForm.setValue(this.contact);
    // },3000);
  }
  // streets() : FormArray {
  //   return this.contactForm..get('street') as FormArray;
  // }

  sayHello(firstName, lastName) {
    if (firstName.value != null && lastName.value != null) {
      alert(`Hello Mr/Mss ${firstName.value} ${lastName.value}`);
    } else {
      alert(`Hello`);
    }
  }

  onSubmit(contactForm) {
    console.log(contactForm);
    console.log(contactForm.value);
  }

  reset(contactForm: NgForm){
    contactForm.resetForm();
  }

  patchValue(){
    let object = {
      firstName: "Laura",
      lastName: "Fabian",
      email: "Laura@gmail.com"
    }

    this.contactForm.control.patchValue(object);
  }
}

export class Country {
  id: string;
  name: string;

  constructor(id: string, name: string){
    this.id = id;
    this.name = name;
  }
}
