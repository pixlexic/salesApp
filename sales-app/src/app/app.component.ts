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


import { GlobalService } from './services/global.Service';
import { NavigationService } from './services/navigation.Service';
import { PopcontainerService } from './services/popcontainer.Service';
import { HelpersService } from './services/helpers.Service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
    title = 'sales-app';


    @ViewChild('parent', { read: ViewContainerRef }) parent: ViewContainerRef;
    @ViewChild('popcon', { read: ViewContainerRef }) PopCon: ViewContainerRef;


    constructor(
        private _navigationService: NavigationService,
        private _popcontainerService: PopcontainerService,
        private _helpersService: HelpersService,

    ) {



    }



    ngOnInit() {

        console.log('go');
        GlobalService.viewParent = this.parent;
        GlobalService.popContainer = this.PopCon;
        //  globalService.servApi = this._apiService;
        GlobalService.servNavi = this._navigationService;
        GlobalService.servPop = this._popcontainerService;
        GlobalService.servHelpers = this._helpersService;



        // globalService.servNavi.setview('HOME');

    }

    ngAfterViewInit() {

        setTimeout(() => GlobalService.servNavi.setview('HOME'), 1000);


        // requestAnimationFrame(appService.mainLoop);

    }











}
