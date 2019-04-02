/**
 * New typescript file
 */

import { Component, OnInit, HostListener, Input, ViewContainerRef, ViewChild } from '@angular/core';

import { ApiService } from '../services/api.Service';
import { GlobalService } from '../services/global.Service';




@Component({
    selector: 'app-ordercomp',
    templateUrl: '../templates/ordercomp.html',
    styleUrls: ['../css/ordercomp.css'],
    providers: [],

})

export class OrderComponent implements OnInit {

    @ViewChild( 'elm' , { read: ViewContainerRef }) _elm: ViewContainerRef;
    @Input() public _data = null;


    constructor(
        private _apiService: ApiService



    ) { }





    ngOnInit() {

        // const re = this._apiService.USERDATA();

    }






   openMenu() {

   GlobalService.servPop.openOrderSmallMenu(this._data, this._elm );

   }







    getOrderId() {

        if (this._data != null) {

            return this._data.orderid;
        }
    }


    getPo() {

        if (this._data != null) {

            return this._data.po;
        }

    }


    getCustomerId() {

        if (this._data != null) {

            return this._data.customerid;
        }

    }

    getStatus() {

        if (this._data != null) {

            return this._data.status;
        }

    }



}

