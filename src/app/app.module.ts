import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.state';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
import { appReducerContent } from './store/content.state ';
import { BoxModelComponent } from './components/box-model/box-model.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    BoxModelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ app: appReducer, content: appReducerContent }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
