import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

import { Observable, of } from 'rxjs';
import { User, AuthUser } from '~/modules/shared/models';
import { AuthService, DatabaseService } from '~/modules/core/services';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json'
    })
};

@Injectable()
export class AlbiService {

    private host: string;
    /**
     *
     */
    constructor(private httpClient: HttpClient, private databaseService: DatabaseService) {
        this.host = this.databaseService.getItem(DatabaseService.KEYS.host);
    }

    /**
     *
     */
    initCatalogo(user: AuthUser): Observable<any> {
        console.log('INIT CATALOGO');
        return this.httpClient.post(`${this.host}/api/albi/init`, user, httpOptions);
    }

    updateCatalogo(user: AuthUser): Observable<any> {
        console.log('UPDATE CATALOGO');
        return this.httpClient.post(`${this.host}/api/albi/update`, user, httpOptions);
    }

    isFirstAccess(email: string): Observable<any> {
        return this.httpClient.get(`${this.host}/api/albi/isFirstAccess/${email}`, httpOptions);
    }

    getList(countAlbiLoaded: number, filter: string): Observable<any> {
        return this.httpClient.get(`${this.host}/api/albi/list/${AuthService.CURRENT_USER.email}/${countAlbiLoaded}/${filter}`, httpOptions);
    }

    getAlbo(numero: number): Observable<any> {
        return this.httpClient.get(`${this.host}/api/albi/albo/${AuthService.CURRENT_USER.email}/${numero}`, httpOptions);
    }

    getListaStati(): Observable<any> {
        const listaStati = [
            { key: 0, value: "Non comprato" },
            { key: 1, value: "Prenotato" },
            { key: 2, value: "Comprato" }
        ];

        return of(listaStati);
    }

    updateAlbo(idAlbo: string, stato: number): Observable<any> {
        return this.httpClient.put(`${this.host}/api/albi/albo/${AuthService.CURRENT_USER.email}/${idAlbo}/${stato}`, httpOptions);
    }
}