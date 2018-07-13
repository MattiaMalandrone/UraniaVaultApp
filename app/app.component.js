"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Connectivity = require("tns-core-modules/connectivity");
var services_1 = require("~/modules/core/services");
var connectionTypes = {
    none: "No Connection!",
    wifi: "Connected to WiFi!",
    mobile: "Connected to Cellular!",
    unknown: 'Unknown'
};
var AppComponent = /** @class */ (function () {
    /**
     *
     */
    function AppComponent(zone, databaseService) {
        this.zone = zone;
        this.databaseService = databaseService;
        this.connectionType = connectionTypes.unknown;
        this.databaseService.initSqlite();
    }
    /**
     *
     */
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.connectionType = this.connectionToString(Connectivity.getConnectionType());
        Connectivity.startMonitoring(function (connectionType) {
            _this.zone.run(function () {
                _this.connectionType = _this.connectionToString(connectionType);
                _this.databaseService.isOffline = _this.connectionType == connectionTypes.none;
            });
        });
    };
    /**
     *
     * @param connectionType
     */
    AppComponent.prototype.connectionToString = function (connectionType) {
        switch (connectionType) {
            case Connectivity.connectionType.none:
                return connectionTypes.none;
            case Connectivity.connectionType.wifi:
                return connectionTypes.wifi;
            case Connectivity.connectionType.mobile:
                return connectionTypes.mobile;
            default:
                return connectionTypes.unknown;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            template: "<!-- https://docs.nativescript.org/angular/core-concepts/angular-navigation.html#page-router-outlet -->\n               <page-router-outlet></page-router-outlet>",
        }),
        __metadata("design:paramtypes", [core_1.NgZone, services_1.DatabaseService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsNERBQThEO0FBQzlELG9EQUF1RTtBQUV2RSxJQUFNLGVBQWUsR0FBRztJQUNwQixJQUFJLEVBQUUsZ0JBQWdCO0lBQ3RCLElBQUksRUFBRSxvQkFBb0I7SUFDMUIsTUFBTSxFQUFFLHdCQUF3QjtJQUNoQyxPQUFPLEVBQUUsU0FBUztDQUNyQixDQUFBO0FBT0Q7SUFJSTs7T0FFRztJQUNILHNCQUFvQixJQUFZLEVBQVUsZUFBZ0M7UUFBdEQsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUN0RSxJQUFJLENBQUMsY0FBYyxHQUFHLGVBQWUsQ0FBQyxPQUFPLENBQUM7UUFDOUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRUQ7O09BRUc7SUFDSSwrQkFBUSxHQUFmO1FBQUEsaUJBUUM7UUFQRyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1FBQ2hGLFlBQVksQ0FBQyxlQUFlLENBQUMsVUFBQSxjQUFjO1lBQ3ZDLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUNWLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUM5RCxLQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsY0FBYyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUM7WUFDakYsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7O09BR0c7SUFDSSx5Q0FBa0IsR0FBekIsVUFBMEIsY0FBc0I7UUFDNUMsTUFBTSxDQUFBLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUNwQixLQUFLLFlBQVksQ0FBQyxjQUFjLENBQUMsSUFBSTtnQkFDakMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7WUFDaEMsS0FBSyxZQUFZLENBQUMsY0FBYyxDQUFDLElBQUk7Z0JBQ2pDLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDO1lBQ2hDLEtBQUssWUFBWSxDQUFDLGNBQWMsQ0FBQyxNQUFNO2dCQUNuQyxNQUFNLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQztZQUNsQztnQkFDSSxNQUFNLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQztRQUN2QyxDQUFDO0lBQ0wsQ0FBQztJQXhDUSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsbUtBQzJDO1NBQ3hELENBQUM7eUNBUTRCLGFBQU0sRUFBMkIsMEJBQWU7T0FQakUsWUFBWSxDQXlDeEI7SUFBRCxtQkFBQztDQUFBLEFBekNELElBeUNDO0FBekNZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgKiBhcyBDb25uZWN0aXZpdHkgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvY29ubmVjdGl2aXR5XCI7XG5pbXBvcnQgeyBEYXRhYmFzZVNlcnZpY2UsIEF1dGhTZXJ2aWNlIH0gZnJvbSBcIn4vbW9kdWxlcy9jb3JlL3NlcnZpY2VzXCI7XG5cbmNvbnN0IGNvbm5lY3Rpb25UeXBlcyA9IHtcbiAgICBub25lOiBcIk5vIENvbm5lY3Rpb24hXCIsXG4gICAgd2lmaTogXCJDb25uZWN0ZWQgdG8gV2lGaSFcIixcbiAgICBtb2JpbGU6IFwiQ29ubmVjdGVkIHRvIENlbGx1bGFyIVwiLFxuICAgIHVua25vd246ICdVbmtub3duJ1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICB0ZW1wbGF0ZTogYDwhLS0gaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvYW5ndWxhci9jb3JlLWNvbmNlcHRzL2FuZ3VsYXItbmF2aWdhdGlvbi5odG1sI3BhZ2Utcm91dGVyLW91dGxldCAtLT5cbiAgICAgICAgICAgICAgIDxwYWdlLXJvdXRlci1vdXRsZXQ+PC9wYWdlLXJvdXRlci1vdXRsZXQ+YCxcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxuICAgIHB1YmxpYyBjb25uZWN0aW9uVHlwZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmU6IE5nWm9uZSwgcHJpdmF0ZSBkYXRhYmFzZVNlcnZpY2U6IERhdGFiYXNlU2VydmljZSkge1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb25UeXBlID0gY29ubmVjdGlvblR5cGVzLnVua25vd247XG4gICAgICAgIHRoaXMuZGF0YWJhc2VTZXJ2aWNlLmluaXRTcWxpdGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uVHlwZSA9IHRoaXMuY29ubmVjdGlvblRvU3RyaW5nKENvbm5lY3Rpdml0eS5nZXRDb25uZWN0aW9uVHlwZSgpKTtcbiAgICAgICAgQ29ubmVjdGl2aXR5LnN0YXJ0TW9uaXRvcmluZyhjb25uZWN0aW9uVHlwZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25UeXBlID0gdGhpcy5jb25uZWN0aW9uVG9TdHJpbmcoY29ubmVjdGlvblR5cGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YWJhc2VTZXJ2aWNlLmlzT2ZmbGluZSA9IHRoaXMuY29ubmVjdGlvblR5cGUgPT0gY29ubmVjdGlvblR5cGVzLm5vbmU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29ubmVjdGlvblR5cGVcbiAgICAgKi9cbiAgICBwdWJsaWMgY29ubmVjdGlvblRvU3RyaW5nKGNvbm5lY3Rpb25UeXBlOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBzd2l0Y2goY29ubmVjdGlvblR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQ29ubmVjdGl2aXR5LmNvbm5lY3Rpb25UeXBlLm5vbmU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbm5lY3Rpb25UeXBlcy5ub25lO1xuICAgICAgICAgICAgY2FzZSBDb25uZWN0aXZpdHkuY29ubmVjdGlvblR5cGUud2lmaTpcbiAgICAgICAgICAgICAgICByZXR1cm4gY29ubmVjdGlvblR5cGVzLndpZmk7XG4gICAgICAgICAgICBjYXNlIENvbm5lY3Rpdml0eS5jb25uZWN0aW9uVHlwZS5tb2JpbGU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbm5lY3Rpb25UeXBlcy5tb2JpbGU7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBjb25uZWN0aW9uVHlwZXMudW5rbm93bjtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==