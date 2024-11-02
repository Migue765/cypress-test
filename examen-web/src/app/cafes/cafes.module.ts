import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CafeComponent } from './cafe.component';

@NgModule({
  declarations: [
    CafeComponent
  ],
  imports: [
    CommonModule,
    CafeComponent,
    HttpClient,
    BrowserModule
  ],
  exports: [
    CafeComponent
  ]

})
export class CafesModule { }
