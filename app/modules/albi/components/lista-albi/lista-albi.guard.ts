import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";

import { of, Observable } from 'rxjs';
import { mergeMap, map, tap } from 'rxjs/operators';

import { AuthService } from "~/modules/core/services";
import { AlbiService } from '~/modules/albi/services';

@Injectable()
export class ListaAlbiGuard implements CanActivate {

    constructor(private router: Router, public albiService: AlbiService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        console.log('canActivate ListaAlbi');
        console.log(state);
        return this.enterFromSignCmp();
    }

    /**
     *
     */
    private enterFromSignCmp(): Observable<boolean> {
        const isFirstAccess = this.albiService.isFirstAccess(AuthService.CURRENT_USER.email);
        const initCatalog = this.albiService.initCatalogo(AuthService.CURRENT_USER);
        const updateCatalog = this.albiService.updateCatalogo(AuthService.CURRENT_USER);

        const obs = isFirstAccess.pipe(mergeMap(val => {
            console.log(val.count == 0 ? '-INIT ALBI-' : '-UPDT ALBI-');
            return val.count == 0
                ? initCatalog
                : updateCatalog;
        }));

        return obs.pipe(map(() => true, err => false));
    }
}