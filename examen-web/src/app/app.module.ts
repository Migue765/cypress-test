import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CafesModule } from './cafes/cafes.module';
import { HttpClient } from '@angular/common/http';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
    declarations: [
        AppComponent,
        CafesModule,
        HeaderModule,
        FooterModule
    ],
    imports: [
        BrowserModule,
        CafesModule,
        HttpClient,
        HeaderModule,
        FooterModule
    ],

    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }