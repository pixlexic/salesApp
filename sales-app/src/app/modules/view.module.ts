/**
 * New typescript file
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';




// app views
import { HomeModule } from '../modules/home.module';
// import {  refusedModule } from '../modules/refused.module';

@NgModule({
    declarations: [

    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HomeModule

    ],
    entryComponents: [

    ],
    providers: [],
    //  bootstrap: [MyComponent]

})

export class ViewModule {





}
