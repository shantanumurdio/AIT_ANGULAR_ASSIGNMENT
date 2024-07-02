import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { DirectivesExComponent } from './components/directives-ex/directives-ex.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './components/pipes/pipes.component';
import { ServicesComponent } from './components/services/services.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SecondComponentComponent } from './components/second-component/second-component.component';
import { CommonService } from './common.service';
import { MinLengthDirective } from './directives/min-length.directive';
import { CommunicationBwComponentsComponent } from './components/communication-bw-components/communication-bw-components.component';
import { SampleComponentComponent } from './components/sample-component/sample-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    DirectivesExComponent,
    DataBindingComponent,
    PipesComponent,
    ServicesComponent,
    ReactiveFormsComponent,
    SecondComponentComponent,
    MinLengthDirective,
    CommunicationBwComponentsComponent,
    SampleComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
