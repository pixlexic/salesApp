import { Injectable, Component } from '@angular/core';

 import { ApiService } from './api.Service';
 import { NavigationService } from './navigation.Service';
 import { PopcontainerService } from './popcontainer.Service';
 import { HelpersService } from '../services/helpers.Service';




// import { owlBaseModel } from  '../models/owlBaseModel';


@Injectable()
export class GlobalService {


    static appversion = '0.0.0';

    static parentURL = 'http://localhost:3000';

    static viewParent = null;



    static servApi: ApiService = null;
    static servNavi: NavigationService = null;
    static servPop: PopcontainerService = null;
    static servHelpers: HelpersService = null;

    static userData: any = null;


    static popContainer = null;



}
