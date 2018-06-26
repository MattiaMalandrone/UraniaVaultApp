import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from 'rxjs';
import { User } from '~/modules/shared/models';

@Injectable()
export class AlbiService {

    /**
     *
     */
    constructor(private httpClient: HttpClient) {

    }

    /**
     *
     */
    initCatalogo(user: User): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json'
            })
        };

        return this.httpClient.post(`http://10.0.2.2:5000/api/albi/init`, user, httpOptions);
    }
}