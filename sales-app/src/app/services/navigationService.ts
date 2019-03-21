
import { Injectable, Component, ViewContainerRef, ComponentFactoryResolver, ViewChild, Directive } from '@angular/core';

import { GlobalService } from '../services/globalService';
import { ApiService } from '../services/apiService';


@Injectable()
export class NavigationService {


    static current_step;




    viewlist = [];




    constructor(private componentFactoryResolver: ComponentFactoryResolver, private apiService: ApiService) { }


    initload(v) {

        if (GlobalService.viewParent) {
            const childComponent = this.componentFactoryResolver.resolveComponentFactory(v.comp);
            // p.createComponent(childComponent);
            GlobalService.viewParent.createComponent(childComponent);
            // globalService.descriptionbar.nativeElement.innerHTML = v.desc;
        }
    }





    setview(v) {

        for (let i = 0; i < this.viewlist.length; i++) {
            if (v === this.viewlist[i].view) {
                GlobalService.viewParent.clear();
                NavigationService.current_step = this.viewlist[i];

                if (this.viewlist[i].navib) {
                    this.viewlist[i].navib.setbar();
                }

                this.initload(this.viewlist[i]);
            }


        }


    }




    getcurrentstep() {

        return NavigationService.current_step;
    }







    setnavib(n) {

        for (let i = 0; i < this.viewlist.length; i++) {
            if (n.text === this.viewlist[i].view) {

                this.viewlist[i].navib = n;

            }


        }


    }











}
