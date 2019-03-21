/**
 * New typescript file
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitService } from '../services/initService';
import { GlobalService } from '../services/globalService';
import { ApiService } from '../services/apiService';
import { NavigationService } from '../services/navigationService';



@NgModule({
    declarations: [

    ],
    imports: [
        CommonModule
    ],
    entryComponents: [

    ],
    providers: [
        GlobalService,
        ApiService,
        NavigationService,
        InitService
    ],
    //  bootstrap: [MyComponent]

})

export class ServiceModule {

    constructor(
        private _globalService: GlobalService,
        private initService: InitService
    ) { }





}
