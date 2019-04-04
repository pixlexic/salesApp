import { Injectable, Component } from '@angular/core';
import { GlobalService } from './global.Service';
import { BoundTextAst } from '@angular/compiler';


import { BoundsModel } from '../models/boundsModel';



@Injectable()
export class HelpersService {


    constructor(

    ) {

    }


    findSafePopupLocation(_bounds: BoundsModel) {

        const bounds: BoundsModel = JSON.parse(JSON.stringify(_bounds));

        if (bounds.l < 0) { bounds.l = 6; }
        if (bounds.t < 0) { bounds.t = 6; }
        if ((bounds.l + bounds.w) > window.innerWidth) { bounds.l = (window.innerWidth - (bounds.w)) - 6; }
        if ((bounds.t + bounds.h) > window.innerHeight) { bounds.t = (window.innerHeight - (bounds.h / 2)) - 6; }

        return bounds;
    }




    getPercentage(ammount, outof) {

        return Math.floor(ammount / outof * 100);

    }



}
