import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodAppFormComponent } from './food-app-form/food-app-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/foodAppForm',
    pathMatch: 'full',
  },
  {
    path: 'foodAppForm',
    component: FoodAppFormComponent,
  },
  {
    path: 'reactiveForm',
    component: ReactiveFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
