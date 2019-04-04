/**
 * New typescript file
 */

import { Component, ViewChild, OnInit, AfterViewInit, HostListener } from '@angular/core';

import { ApiService } from '../services/api.Service';
import { GlobalService } from '../services/global.Service';



@Component({
    selector: 'app-home',
    templateUrl: '../templates/home.html',
    styleUrls: ['../css/home.css'],
    providers: [],

})

export class HomeMainComponent implements OnInit, AfterViewInit {

    @ViewChild('tabparelm') _tabParElm;
    @ViewChild('tabcursorelm') _tabCursorElm;
    @ViewChild('tabstart') _tabStartElm;


    _currentTab = 'NOTICES';

    constructor(
        private _apiService: ApiService



    ) { }





    ngOnInit() {

        // const re = this._apiService.USERDATA();

    }


    ngAfterViewInit() {

        this._tabCursorElm.nativeElement.style.left = (this._tabStartElm.nativeElement.offsetLeft) + 'px';
        this._tabCursorElm.nativeElement.style.width = (this._tabStartElm.nativeElement.offsetWidth) + 'px';


    }

    getOrders() {

        if (GlobalService.userData != null) {

            return GlobalService.userData.orders;
        }

    }




    setTab(e) {

        this._currentTab = e.target.textContent.toUpperCase();
        this._tabCursorElm.nativeElement.style.left = (e.target.offsetLeft) + 'px';
        this._tabCursorElm.nativeElement.style.width = (e.target.offsetWidth) + 'px';

    }




    checkTab(x) {

        if (x === this._currentTab) {
            return true;
        } else {
            return false;
        }

    }


}

