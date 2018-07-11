import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { AlbiService } from '~/modules/albi/services';
import { AuthService } from '~/modules/core/services';

@Injectable()
export class DettaglioAlboResolver implements Resolve<any>  {

    /**
     *
     */
    constructor(private albiService: AlbiService ) {

    }

    /**
     *
     * @param route
     */
    resolve(route: ActivatedRouteSnapshot) {
        console.log('Resolving DETTAGLIO ALBO...');
        const numeroAlbo = +route.paramMap.get('numero');
        return this.albiService.getAlbo(numeroAlbo);
    }
}