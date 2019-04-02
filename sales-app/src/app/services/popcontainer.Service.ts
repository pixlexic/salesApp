

import {
    Injectable, Component, ViewContainerRef, ComponentFactoryResolver,
    EventEmitter, HostListener, Directive, Input, ViewChild
} from '@angular/core';

import { GlobalService } from './global.Service';




import { OrderSmallMenuComponent } from '../components/orderSmallMenu';


import { BoundsModel } from '../models/boundsModel';


@Injectable()
export class PopcontainerService {




    constructor(
        private componentFactoryResolver: ComponentFactoryResolver

    ) {


    }


    openOrderSmallMenu(data, elem) {

        GlobalService.popContainer.clear();

        const childComponent = this.componentFactoryResolver.resolveComponentFactory(OrderSmallMenuComponent);

        const cmpRef = GlobalService.popContainer.createComponent(childComponent);

        const viewportOffset = elem.element.nativeElement.getBoundingClientRect();

        let customer = null;
        for (let i = 0; i < GlobalService.userData.customers.length; i++) {
            if (parseInt(data.customerid, 0) === GlobalService.userData.customers[i].id) {
                customer = GlobalService.userData.customers[i];
                break;

            }

        }






        const bounds: BoundsModel = new BoundsModel(
            viewportOffset.top,
            viewportOffset.bottom,
            viewportOffset.left,
            viewportOffset.right,
            200,
            100);


        cmpRef.instance._boundsIn = bounds;
        cmpRef.instance._data = customer;

        /*
        cmpRef.instance.action = action;
        cmpRef.instance.cancel = this.closeSave;
        cmpRef.instance.msg = msg;
        */

    }



}
