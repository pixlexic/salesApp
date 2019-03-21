import { Injectable, Component } from '@angular/core';

 import { ApiService } from '../services/apiService';
 import { NavigationService } from '../services/navigationService';




// import { owlBaseModel } from  '../models/owlBaseModel';


@Injectable()
export class GlobalService {


    static appversion = '0.0.0';

    static parentURL = 'http://localhost:3000/';

    static viewParent = null;



     static servApi: ApiService = null;
    static servNavi: NavigationService = null;




}
