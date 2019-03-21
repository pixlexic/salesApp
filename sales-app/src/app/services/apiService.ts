import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http';


import { GlobalService } from '../services/GlobalService';

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/share';
// import 'rxjs/add/operator/startWith';
// import 'rxjs/Rx';

// import 'rxjs/add/operator/map';


@Injectable()
export class ApiService {





    constructor(private http: Http) {


    }





/*

    BRANDING = function () {
        return this.http.get(GlobalService.parentURL + '/api/BrandingBuilder').map(response => response.json());
    };

*/

}
