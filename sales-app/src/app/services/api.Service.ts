import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptionsArgs, RequestOptions, ResponseContentType } from '@angular/http';
import { HttpModule } from '@angular/http';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GlobalService } from './global.Service';

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/share';
// import 'rxjs/add/operator/startWith';
// import 'rxjs/Rx';

// import 'rxjs/add/operator/map';


@Injectable()
export class ApiService {





    constructor(private _http: Http) {


    }




    GetUserData = function () {

        const formData = new FormData();
        formData.append('key', ' ');

        const o = { view: 'SPORTS', desc: 'Select Your Sport', comp: 4, disabled: false, inlist: true, navib: null };

        // 'Content-Type': 'multipart/form-data'
        const headers: Headers = new Headers({ 'Content-Type': 'application/json' });
        const roa: RequestOptionsArgs = new RequestOptions({ headers: headers });

        return this._http.post(GlobalService.parentURL + '/api/ordersP', o, roa).pipe(
            map((res: Response) => res.json())
        );

    };


    /*

        BRANDING = function () {
            return this.http.get(GlobalService.parentURL + '/api/BrandingBuilder').map(response => response.json());
        };

    */

}
