import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { PhoneNumberService } from './phone-number/phone-number.service';

@NgModule({
  declarations: [
    AppComponent,
    PhoneNumberComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PhoneNumberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
