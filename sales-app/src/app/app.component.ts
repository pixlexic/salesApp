import {
    Component,
    OnInit,
    AfterViewInit,
    ViewContainerRef,
    ComponentFactoryResolver,
    ViewChild, EventEmitter,
    HostListener,
    Directive
} from '@angular/core';


import { GlobalService } from './services/globalService';
import { NavigationService } from './services/navigationService';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
    title = 'sales-app';


    @ViewChild('parent', { read: ViewContainerRef }) parent: ViewContainerRef;



    constructor(
        private _navigationService: NavigationService,

    ) {



    }



    ngOnInit() {

        console.log('go');
        GlobalService.viewParent = this.parent;
        //  globalService.servApi = this._apiService;
        GlobalService.servNavi = this._navigationService;





        // globalService.servNavi.setview('HOME');

    }

    ngAfterViewInit() {

        setTimeout(() => GlobalService.servNavi.setview('HOME'), 1000);


        // requestAnimationFrame(appService.mainLoop);

    }











}
