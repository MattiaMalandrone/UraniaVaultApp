import { Component } from "@angular/core";
import * as application from "tns-core-modules/application";
const frameModule = require("tns-core-modules/ui/frame");
import { RouterExtensions } from "nativescript-angular/router";
import { Router, RoutesRecognized, NavigationStart } from "@angular/router";
import { filter, pairwise } from "rxjs/operators";

@Component({
    selector: "ns-app",
    template: `<!-- https://docs.nativescript.org/angular/core-concepts/angular-navigation.html#page-router-outlet -->
               <page-router-outlet></page-router-outlet>`,
})

export class AppComponent {

    /**
     *
     */
    constructor(private routerExt: RouterExtensions, private router: Router) {

    }

    /**
     *
     */
    public ngOnInit() {
        // application.android.on(application.AndroidApplication.activityBackPressedEvent, (args: application.AndroidActivityBackPressedEventData) => {
        //     if (this.routerExt.canGoBack()) {

        //         this.router.events.pipe(
        //             filter(e => e instanceof NavigationStart),
        //             pairwise()
        //          )
        //         .subscribe((event: any[]) => {
        //             console.log('###########################');
        //             console.log(event[0].urlAfterRedirects);
        //             console.log('###########################');
        //             args.cancel = true;
        //             this.routerExt.back();
        //         });
        //     } else {
        //         args.cancel = false;
        //     }
        // });
    }
}
