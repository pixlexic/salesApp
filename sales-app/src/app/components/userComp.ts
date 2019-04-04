/**
 * New typescript file
 */

import { Component, OnInit, HostListener, Input, ViewContainerRef, ViewChild } from '@angular/core';

import { ApiService } from '../services/api.Service';
import { GlobalService } from '../services/global.Service';

import { StatModel } from '../models/statModel';


@Component({
    selector: 'app-usercomp',
    templateUrl: '../templates/usercomp.html',
    styleUrls: ['../css/usercomp.css'],
    providers: [],

})

export class UserComponent implements OnInit {

    // @ViewChild( 'elm' , { read: ViewContainerRef }) _elm: ViewContainerRef;
    @Input() public _data = null;

    _stats = [];



    constructor(
        private _apiService: ApiService



    ) { }





    ngOnInit() {

        // const re = this._apiService.USERDATA();
        this.getStats();
    }




    getName() {
        if (GlobalService.userData) {

            return GlobalService.userData.user.firstname + '  ' + GlobalService.userData.user.lastname;
        }

    }











    getStats() {

        const tmp = [];
        const tmpcolors = ['0000ff', '00ff00', 'ff0000'];

        if (GlobalService.userData) {
            if (GlobalService.userData.orders) {

                for (let i = 0; i < GlobalService.userData.orders.length; i++) {
                    if (!tmp.some(x => x.name === GlobalService.userData.orders[i].status)) {
                        const st = new StatModel();
                        st.name = GlobalService.userData.orders[i].status;
                        tmp.push(st);
                    }

                }


                for (let i = 0; i < tmp.length; i++) {

                    for (let ii = 0; ii < GlobalService.userData.orders.length; ii++) {

                        if (GlobalService.userData.orders[ii].status === tmp[i].name) {
                            tmp[i].count++;
                        }

                    }


                }




                for (let i = 0; i < tmp.length; i++) {


                    tmp[i].percentage = GlobalService.servHelpers.getPercentage(tmp[i].count, GlobalService.userData.orders.length);
                    tmp[i].color = tmpcolors[i];

                }



            }
        }

        this._stats = tmp;


    }




}
