/**
 * New typescript file
 */

import { Component, OnInit, HostListener } from '@angular/core';

import { ApiService } from '../services/apiService';
import { GlobalService } from '../services/globalService';



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

     console.log('home');


    }







}

