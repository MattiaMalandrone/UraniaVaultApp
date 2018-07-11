"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var services_1 = require("~/modules/core/services");
var services_2 = require("~/modules/albi/services");
var ListaAlbiGuard = /** @class */ (function () {
    function ListaAlbiGuard(router, albiService) {
        this.router = router;
        this.albiService = albiService;
    }
    ListaAlbiGuard.prototype.canActivate = function () {
        console.log('ListaAlbiGuard');
        var isFirstAccess = this.albiService.isFirstAccess(services_1.AuthService.CURRENT_USER.email);
        var initCatalog = this.albiService.initCatalogo(services_1.AuthService.CURRENT_USER);
        var updateCatalog = this.albiService.updateCatalogo(services_1.AuthService.CURRENT_USER);
        var obs = isFirstAccess.pipe(operators_1.mergeMap(function (val) {
            console.log(val.count == 0 ? 'Subscribe INIT' : 'Subscribe UPDATE');
            return val.count == 0
                ? initCatalog
                : updateCatalog;
        }));
        return obs.pipe(operators_1.map(function () { return true; }, function (err) { return false; }));
    };
    ListaAlbiGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router, services_2.AlbiService])
    ], ListaAlbiGuard);
    return ListaAlbiGuard;
}());
exports.ListaAlbiGuard = ListaAlbiGuard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGEtYWxiaS5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3RhLWFsYmkuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQ0FBc0Q7QUFDdEQsc0NBQTJDO0FBRzNDLDRDQUFvRDtBQUVwRCxvREFBc0Q7QUFDdEQsb0RBQXNEO0FBR3REO0lBRUksd0JBQW9CLE1BQWMsRUFBUyxXQUF3QjtRQUEvQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBSSxDQUFDO0lBRXhFLG9DQUFXLEdBQVg7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFOUIsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsc0JBQVcsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckYsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsc0JBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM1RSxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxzQkFBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRWhGLElBQU0sR0FBRyxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsb0JBQVEsQ0FBQyxVQUFBLEdBQUc7WUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDcEUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksQ0FBQztnQkFDakIsQ0FBQyxDQUFDLFdBQVc7Z0JBQ2IsQ0FBQyxDQUFDLGFBQWEsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRUosTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBRyxDQUFDLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSSxFQUFFLFVBQUEsR0FBRyxJQUFLLE9BQUEsS0FBSyxFQUFMLENBQUssQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQW5CUSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7eUNBR21CLGVBQU0sRUFBc0Isc0JBQVc7T0FGMUQsY0FBYyxDQW9CMUI7SUFBRCxxQkFBQztDQUFBLEFBcEJELElBb0JDO0FBcEJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBvZiwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtZXJnZU1hcCwgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCJ+L21vZHVsZXMvY29yZS9zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBBbGJpU2VydmljZSB9IGZyb20gJ34vbW9kdWxlcy9hbGJpL3NlcnZpY2VzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExpc3RhQWxiaUd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHB1YmxpYyBhbGJpU2VydmljZTogQWxiaVNlcnZpY2UpIHsgfVxyXG5cclxuICAgIGNhbkFjdGl2YXRlKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdMaXN0YUFsYmlHdWFyZCcpO1xyXG5cclxuICAgICAgICBjb25zdCBpc0ZpcnN0QWNjZXNzID0gdGhpcy5hbGJpU2VydmljZS5pc0ZpcnN0QWNjZXNzKEF1dGhTZXJ2aWNlLkNVUlJFTlRfVVNFUi5lbWFpbCk7XHJcbiAgICAgICAgY29uc3QgaW5pdENhdGFsb2cgPSB0aGlzLmFsYmlTZXJ2aWNlLmluaXRDYXRhbG9nbyhBdXRoU2VydmljZS5DVVJSRU5UX1VTRVIpO1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZUNhdGFsb2cgPSB0aGlzLmFsYmlTZXJ2aWNlLnVwZGF0ZUNhdGFsb2dvKEF1dGhTZXJ2aWNlLkNVUlJFTlRfVVNFUik7XHJcblxyXG4gICAgICAgIGNvbnN0IG9icyA9IGlzRmlyc3RBY2Nlc3MucGlwZShtZXJnZU1hcCh2YWwgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2YWwuY291bnQgPT0gMCA/ICdTdWJzY3JpYmUgSU5JVCcgOiAnU3Vic2NyaWJlIFVQREFURScpO1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsLmNvdW50ID09IDBcclxuICAgICAgICAgICAgICAgID8gaW5pdENhdGFsb2dcclxuICAgICAgICAgICAgICAgIDogdXBkYXRlQ2F0YWxvZztcclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIHJldHVybiBvYnMucGlwZShtYXAoKCkgPT4gdHJ1ZSwgZXJyID0+ICBmYWxzZSkpO1xyXG4gICAgfVxyXG59Il19