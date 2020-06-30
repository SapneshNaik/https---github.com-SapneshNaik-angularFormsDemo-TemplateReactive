import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodAppFormComponent } from './food-app-form.component';

describe('FoodAppFormComponent', () => {
  let component: FoodAppFormComponent;
  let fixture: ComponentFixture<FoodAppFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FoodAppFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodAppFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
