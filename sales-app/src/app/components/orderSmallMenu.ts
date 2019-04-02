/**
 * New typescript file
 */

import { Component, ViewChild, OnInit, AfterViewInit, HostListener, Input } from '@angular/core';

import { ApiService } from '../services/api.Service';
import { GlobalService } from '../services/global.Service';


import { BoundsModel } from '../models/boundsModel';

@Component({
    selector: 'app-ordersmallmenucomp',
    templateUrl: '../templates/ordersmallmenucomp.html',
    styleUrls: ['../css/ordersmallmenucomp.css'],
    providers: [],

})

export class OrderSmallMenuComponent implements OnInit, AfterViewInit {


    @ViewChild('elm') _selfElm;

    _data = null;

    _boundsIn: BoundsModel;
    _bounds: BoundsModel;

    _shouldExit = false;

    constructor(
        private _apiService: ApiService



    ) { }





    ngOnInit() {
        //   this._height = (window.innerHeight - this._top);


        this._bounds = GlobalService.servHelpers.findSafePopupLocation(this._boundsIn);
        this._bounds.h = 0;
    }



    ngAfterViewInit() {

        setTimeout(() => this.setAnimationGo(), 100);

    }


    setAnimationGo() {


        this._bounds.t -= (this._boundsIn.h / 2);
        this._bounds.h = this._boundsIn.h;

    }



    close(e) {

        e.stopPropagation();

        this._shouldExit = true;
        this._bounds.t = this._boundsIn.t;
        this._bounds.h = 0;


    }


    transEnd(e) {



        if ((this._selfElm.nativeElement.offsetHeight < 10) && this._shouldExit == true) {
            GlobalService.popContainer.clear();
        }

    }





    getName() {

        if (this._data != null) {
            return this._data.cname;

        }

    }


    getEmail() {
        if (this._data != null) {
            return this._data.email;

        }
    }

    getPhone() {
        if (this._data != null) {
            return this._data.phone;

        }
    }

}
