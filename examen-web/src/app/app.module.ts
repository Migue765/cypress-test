import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CafesModule } from './cafes/cafes.module';
import { HttpClient } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        CafesModule
    ],
    imports: [
        BrowserModule,
        CafesModule,
        HttpClient
    ],

    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }