import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  submitted = false;
  reactiveForm: FormGroup;
  myPreferences = [
    'Italian', 'Indian', 'Continental'
  ];
  name = new FormControl('', Validators.required);
  address = new FormControl('', Validators.required);
  email = new FormControl('', Validators.required);
  mobileNumber = new FormControl('', Validators.required);
  foodPreference = new FormControl('', Validators.required);

  constructor(fb: FormBuilder) {
    this.reactiveForm = fb.group({
      name: this.name,
      address: this.address,
      email: this.email,
      mobileNumber: this.mobileNumber,
      foodPreference: this.foodPreference
    });
  }

  ngOnInit(): void {
  }
  onSubmitReactiveForm() {
    this.submitted = true;
    alert('your form is submitted');
  }
}
