/**
 * New typescript file
 */

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// import { MaterialModule } from '@angular/material';


import { OrderComponent } from '../components/ordersComp';

@NgModule({
    declarations: [
        OrderComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        //  MaterialModule.forRoot()

    ],
    exports: [
        OrderComponent
    ],
    entryComponents: [

    ],
    providers: [],


})

export class ComponentModule {



}
