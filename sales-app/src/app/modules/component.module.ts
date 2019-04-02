/**
 * New typescript file
 */

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// import { MaterialModule } from '@angular/material';


import { OrderComponent } from '../components/ordersComp';
import { OrderSmallMenuComponent  } from '../components/orderSmallMenu';

@NgModule({
    declarations: [
        OrderComponent,
        OrderSmallMenuComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        //  MaterialModule.forRoot()

    ],
    exports: [
        OrderComponent,
        OrderSmallMenuComponent
    ],
    entryComponents: [
        OrderSmallMenuComponent
    ],
    providers: [],


})

export class ComponentModule {



}
