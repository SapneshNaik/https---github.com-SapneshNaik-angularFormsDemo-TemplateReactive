import { Component, OnInit } from '@angular/core';
import { FoodApp } from '../food-app';
import { mainModule } from 'process';

@Component({
  selector: 'app-food-app-form',
  templateUrl: './food-app-form.component.html',
  styleUrls: ['./food-app-form.component.scss'],
})
export class FoodAppFormComponent implements OnInit {
  myPreferences = ['Italian', 'Indian', 'Continental'];
  model = new FoodApp(
    'John',
    'Queens street London',
    18007399,
    'john@mainModule.com',
    this.myPreferences[0]
  );
  submitted = false;
  ngOnInit(): void {}
  onSubmitTemplateForm() {
    this.submitted = true;
    alert('your form is submitted');
  }
  // TO remove
  get dataModel() {
    return JSON.stringify(this.model);
  }
}
