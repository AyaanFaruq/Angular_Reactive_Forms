import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder } from '@angular/forms';

import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;
  customer:Customer = new Customer();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void  {

    this.customerForm = this.fb.group({
      firstName : '',
      lastName : '',
      email: '',
      sendCatalog: true 
    });


    // this.customerForm = new FormGroup({
    //   firstName : new FormControl(),
    //   lastName : new FormControl(),
    //   email: new FormControl(),
    //   sendCatalog: new FormControl(true)

    // });
  }


  populateTestData(): void {
    this.customerForm.patchValue({
      firstName: 'Jack',
      lastName: 'Harkness',
      sendCatalog: false
    });
  }

  save() {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }
}
