import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DirectivesExComponent } from './components/directives-ex/directives-ex.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ServicesComponent } from './components/services/services.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

const routes: Routes = [
  {
    path:'',component:FirstComponentComponent
  },
  {
    path:'component',component:FirstComponentComponent
  },
  {
    path:'directives',component:DirectivesExComponent
  },
  {
    path:'databinding',component:DataBindingComponent
  },
  {
    path:'pipes-latest',component:PipesComponent
  },
  {
    path:'services',component:ServicesComponent
  },
  {
    path:'forms',component:ReactiveFormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
