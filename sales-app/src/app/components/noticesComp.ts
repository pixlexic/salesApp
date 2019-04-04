/**
 * New typescript file
 */

import { Component, OnInit, HostListener, Input, ViewContainerRef, ViewChild } from '@angular/core';

import { ApiService } from '../services/api.Service';
import { GlobalService } from '../services/global.Service';




@Component({
    selector: 'app-noticescomp',
    templateUrl: '../templates/notciescomp.html',
    styleUrls: ['../css/noticescomp.css'],
    providers: [],

})

export class NoticesComponent implements OnInit {

   // @ViewChild( 'elm' , { read: ViewContainerRef }) _elm: ViewContainerRef;
    @Input() public _data = null;


    constructor(
        private _apiService: ApiService



    ) { }





    ngOnInit() {

        // const re = this._apiService.USERDATA();

    }



getNotices() {

    if (GlobalService.userData != null) {

        return GlobalService.userData.notices;
    }

}








}

