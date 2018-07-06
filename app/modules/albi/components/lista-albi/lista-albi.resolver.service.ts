import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { AlbiService } from '~/modules/albi/services';
import { AuthService } from '~/modules/core/services';

@Injectable()
export class ListaAlbiResolver implements Resolve<any>  {

    /**
     *
     */
    constructor(public albiService: AlbiService) {

    }

    /**
     *
     * @param route
     */
    resolve() {
        console.log('resolving data...');
        return this.albiService.getList(0, null);
    }
}