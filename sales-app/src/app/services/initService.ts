

import { Injectable, Component } from '@angular/core';
import { GlobalService } from '../services/globalService';
import { NavigationService } from '../services/navigationService';


// import { refusedMain } from '../components/view_refused';
import { HomeMainComponent } from '../views/viewHome';
// import { canvasView } from '../baseviews/canvasView';



@Injectable()
export class InitService {


    constructor(
        private _navigationService: NavigationService
    ) {


        this._navigationService.viewlist = [
            { view: 'HOME', comp: HomeMainComponent },
            // { view: 'REFUSED', comp: refusedMain  }
        ];


    }




}
