import { Component, NgZone } from "@angular/core";

import * as Connectivity from "tns-core-modules/connectivity";
import { DatabaseService, AuthService } from "~/modules/core/services";
import { AlbiService } from "~/modules/albi/services";

const connectionTypes = {
    none: "No Connection!",
    wifi: "Connected to WiFi!",
    mobile: "Connected to Cellular!",
    unknown: 'Unknown'
}

@Component({
    selector: "ns-app",
    template: `<!-- https://docs.nativescript.org/angular/core-concepts/angular-navigation.html#page-router-outlet -->
               <page-router-outlet></page-router-outlet>`,
})
export class AppComponent {

    public connectionType: string;

    /**
     *
     */
    constructor(private zone: NgZone, private databaseService: DatabaseService, private albiService: AlbiService) {
        this.connectionType = connectionTypes.unknown;
        this.databaseService.initSqlite();
    }

    /**
     *
     */
    public ngOnInit() {
        this.connectionType = this.connectionToString(Connectivity.getConnectionType());
        Connectivity.startMonitoring(connectionType => {
            this.zone.run(() => {
                this.connectionType = this.connectionToString(connectionType);
                this.databaseService.isOffline = this.connectionType == connectionTypes.none;
                if(!this.databaseService.isOffline)
                {
                    this.databaseService.getOfflineData(AuthService.CURRENT_USER.userId).then(data => {
                        console.log(data);
                        if(data !== null) {
                            this.albiService.syncSqliteInMongoDb().then()
                        }
                    });
                }
            });
        });
    }

    /**
     *
     * @param connectionType
     */
    public connectionToString(connectionType: number): string {
        switch(connectionType) {
            case Connectivity.connectionType.none:
                return connectionTypes.none;
            case Connectivity.connectionType.wifi:
                return connectionTypes.wifi;
            case Connectivity.connectionType.mobile:
                return connectionTypes.mobile;
            default:
                return connectionTypes.unknown;
        }
    }
}
