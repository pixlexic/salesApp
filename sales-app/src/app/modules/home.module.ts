/**
 * New typescript file
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import { MaterialModule } from '@angular/material';


import { ComponentModule } from '../modules/component.module';
import { HomeMainComponent } from '../views/viewHome';





@NgModule({
    declarations: [
        HomeMainComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ComponentModule,
        //  RouterModule.forRoot(appRoutes),
        // MaterialModule.forRoot()
    ],
    entryComponents: [
        HomeMainComponent
    ],
    providers: [],
    //  bootstrap: [MyComponent]

})

export class HomeModule {



}
