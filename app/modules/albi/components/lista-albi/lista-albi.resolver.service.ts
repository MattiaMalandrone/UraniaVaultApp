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

        // if(!this.databaseService.isOffline)
        // {
        //     this.databaseService.getOfflineData(AuthService.CURRENT_USER.userId).then(data => {
        //         if(data !== null)
        //             this.albiService.syncSqliteInMongoDb(data);
        //     });
        // }

        console.log('Resolving LISTA ALBI...');
        return this.albiService.getList("0", null);
    }
}