import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CafeComponent } from './cafe/cafe.component';



@NgModule({
  imports: [
    CommonModule,
    CafeComponent,
    HttpClientModule
  ],
  declarations: [
    CafeComponent
  ],
  exports: [
    CafeComponent
  ],
})
export class CafesModule { }
