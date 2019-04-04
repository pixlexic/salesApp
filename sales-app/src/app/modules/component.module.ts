/**
 * New typescript file
 */

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// import { MaterialModule } from '@angular/material';


import { OrderComponent } from '../components/ordersComp';
import { OrderSmallMenuComponent  } from '../components/orderSmallMenu';
import { NoticesComponent } from '../components/noticesComp';
import { UserComponent } from '../components/userComp';

@NgModule({
    declarations: [
        OrderComponent,
        OrderSmallMenuComponent,
        NoticesComponent,
        UserComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        //  MaterialModule.forRoot()

    ],
    exports: [
        OrderComponent,
        OrderSmallMenuComponent,
        NoticesComponent,
        UserComponent
    ],
    entryComponents: [
        OrderSmallMenuComponent
    ],
    providers: [],


})

export class ComponentModule {



}
