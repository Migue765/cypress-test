import { Routes } from '@angular/router';
import { CafeComponent } from './cafes/cafe/cafe.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '', component: CafeComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }