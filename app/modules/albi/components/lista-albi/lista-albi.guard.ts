import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";

import { of, Observable } from 'rxjs';
import { mergeMap, map, tap } from 'rxjs/operators';

import { AuthService } from "~/modules/core/services";
import { AlbiService } from '~/modules/albi/services';

@Injectable()
export class ListaAlbiGuard implements CanActivate {

    constructor(private router: Router, public albiService: AlbiService) { }

    canActivate(): Observable<boolean> {
        console.log('ListaAlbiGuard');

        const isFirstAccess = this.albiService.isFirstAccess(AuthService.CURRENT_USER.email);
        const initCatalog = this.albiService.initCatalogo(AuthService.CURRENT_USER);
        const updateCatalog = this.albiService.updateCatalogo(AuthService.CURRENT_USER);

        const obs = isFirstAccess.pipe(mergeMap(val => {
            console.log(val.count == 0 ? 'Subscribe INIT' : 'Subscribe UPDATE');
            return val.count == 0
                ? initCatalog
                : updateCatalog;
        }));

        return obs.pipe(map(() => true, err =>  false));
    }
}