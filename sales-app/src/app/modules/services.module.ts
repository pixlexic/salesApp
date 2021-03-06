/**
 * New typescript file
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitService } from '../services/init.Service';
import { GlobalService } from '../services/global.Service';
import { ApiService } from '../services/api.Service';
import { NavigationService } from '../services/navigation.Service';
import { PopcontainerService } from '../services/popcontainer.Service';
import { HelpersService} from '../services/helpers.Service';


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
        InitService,
        PopcontainerService,
        HelpersService
    ],
    //  bootstrap: [MyComponent]

})

export class ServiceModule {

    constructor(
        private _globalService: GlobalService,
        private initService: InitService
    ) { }





}
