import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ParentRoutingModule } from './routing.module';
import { TourRoutingModule } from './tourApp.module';
import { AngularWebStorageModule } from 'angular-web-storage';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { TouristComponent } from './tourist/tourist.component';
import { AdsDetailComponent } from './ads-detail/ads-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    TouristComponent,
    AdsDetailComponent
  ],
  imports: [
    BrowserModule,
    AngularWebStorageModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ParentRoutingModule,
    TourRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
