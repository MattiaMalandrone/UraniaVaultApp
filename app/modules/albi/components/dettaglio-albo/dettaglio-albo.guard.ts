import { CanActivate, Router, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";

import { Observable, of, timer } from 'rxjs';
import { timeInterval } from 'rxjs/operators';

export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean>;
}

@Injectable()
export class DettaglioAlboGuard implements CanDeactivate<CanComponentDeactivate> {

    constructor() { }

    canDeactivate(component: CanComponentDeactivate) : Observable<boolean> {
        console.log('canDeactivate DettaglioAlboGuard');

        return component.canDeactivate
                ? component.canDeactivate()
                : of(true);
    }
}