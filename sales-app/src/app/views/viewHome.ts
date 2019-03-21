/**
 * New typescript file
 */

import { Component, OnInit, HostListener } from '@angular/core';

import { ApiService } from '../services/api.Service';
import { GlobalService } from '../services/global.Service';



@Component({
    selector: 'app-home',
    templateUrl: '../templates/home.html',
    styleUrls: ['../css/home.css'],
    providers: [],

})

export class HomeMainComponent implements OnInit {





    constructor(
        private _apiService: ApiService



    ) { }





    ngOnInit() {

        // const re = this._apiService.USERDATA();

    }




    getOrders() {

        if (GlobalService.userData != null) {

            return GlobalService.userData.orders;
        }

    }


}

