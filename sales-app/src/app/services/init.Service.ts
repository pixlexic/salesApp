

import { Injectable, Component } from '@angular/core';
import { ApiService } from '../services/api.Service';
import { GlobalService } from './global.Service';
import { NavigationService } from './navigation.Service';


// import { refusedMain } from '../components/view_refused';
import { HomeMainComponent } from '../views/viewHome';
// import { canvasView } from '../baseviews/canvasView';



@Injectable()
export class InitService {


    constructor(
        private _navigationService: NavigationService,
        private _apiService: ApiService
    ) {


        this._navigationService.viewlist = [
            { view: 'HOME', comp: HomeMainComponent },
            // { view: 'REFUSED', comp: refusedMain  }
        ];






        this._apiService.GetUserData().subscribe(
            data => GlobalService.userData = data ,
            // error => this.callError(error)
            // () => console.log( 'Completed!' )
        );



    }




}
