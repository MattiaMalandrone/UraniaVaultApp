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
    ListaAlbiGuard.prototype.canActivate = function (route, state) {
        console.log('canActivate ListaAlbi');
        console.log(state);
        return this.enterFromSignCmp();
    };
    /**
     *
     */
    ListaAlbiGuard.prototype.enterFromSignCmp = function () {
        var isFirstAccess = this.albiService.isFirstAccess(services_1.AuthService.CURRENT_USER.email);
        var initCatalog = this.albiService.initCatalogo(services_1.AuthService.CURRENT_USER);
        var updateCatalog = this.albiService.updateCatalogo(services_1.AuthService.CURRENT_USER);
        var obs = isFirstAccess.pipe(operators_1.mergeMap(function (val) {
            console.log(val.count == 0 ? '-INIT ALBI-' : '-UPDT ALBI-');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGEtYWxiaS5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3RhLWFsYmkuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQ0FBbUc7QUFDbkcsc0NBQTJDO0FBRzNDLDRDQUFvRDtBQUVwRCxvREFBc0Q7QUFDdEQsb0RBQXNEO0FBR3REO0lBRUksd0JBQW9CLE1BQWMsRUFBUyxXQUF3QjtRQUEvQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBSSxDQUFDO0lBRXhFLG9DQUFXLEdBQVgsVUFBWSxLQUE2QixFQUFFLEtBQTBCO1FBQ2pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQ7O09BRUc7SUFDSyx5Q0FBZ0IsR0FBeEI7UUFDSSxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxzQkFBVyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyRixJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxzQkFBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzVFLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLHNCQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFaEYsSUFBTSxHQUFHLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxvQkFBUSxDQUFDLFVBQUEsR0FBRztZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzVELE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUM7Z0JBQ2pCLENBQUMsQ0FBQyxXQUFXO2dCQUNiLENBQUMsQ0FBQyxhQUFhLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVKLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQUcsQ0FBQyxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksRUFBRSxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUssRUFBTCxDQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUExQlEsY0FBYztRQUQxQixpQkFBVSxFQUFFO3lDQUdtQixlQUFNLEVBQXNCLHNCQUFXO09BRjFELGNBQWMsQ0EyQjFCO0lBQUQscUJBQUM7Q0FBQSxBQTNCRCxJQTJCQztBQTNCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgb2YsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWVyZ2VNYXAsIG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwifi9tb2R1bGVzL2NvcmUvc2VydmljZXNcIjtcclxuaW1wb3J0IHsgQWxiaVNlcnZpY2UgfSBmcm9tICd+L21vZHVsZXMvYWxiaS9zZXJ2aWNlcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMaXN0YUFsYmlHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwdWJsaWMgYWxiaVNlcnZpY2U6IEFsYmlTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY2FuQWN0aXZhdGUgTGlzdGFBbGJpJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coc3RhdGUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVudGVyRnJvbVNpZ25DbXAoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZW50ZXJGcm9tU2lnbkNtcCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgICAgICBjb25zdCBpc0ZpcnN0QWNjZXNzID0gdGhpcy5hbGJpU2VydmljZS5pc0ZpcnN0QWNjZXNzKEF1dGhTZXJ2aWNlLkNVUlJFTlRfVVNFUi5lbWFpbCk7XHJcbiAgICAgICAgY29uc3QgaW5pdENhdGFsb2cgPSB0aGlzLmFsYmlTZXJ2aWNlLmluaXRDYXRhbG9nbyhBdXRoU2VydmljZS5DVVJSRU5UX1VTRVIpO1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZUNhdGFsb2cgPSB0aGlzLmFsYmlTZXJ2aWNlLnVwZGF0ZUNhdGFsb2dvKEF1dGhTZXJ2aWNlLkNVUlJFTlRfVVNFUik7XHJcblxyXG4gICAgICAgIGNvbnN0IG9icyA9IGlzRmlyc3RBY2Nlc3MucGlwZShtZXJnZU1hcCh2YWwgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2YWwuY291bnQgPT0gMCA/ICctSU5JVCBBTEJJLScgOiAnLVVQRFQgQUxCSS0nKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbC5jb3VudCA9PSAwXHJcbiAgICAgICAgICAgICAgICA/IGluaXRDYXRhbG9nXHJcbiAgICAgICAgICAgICAgICA6IHVwZGF0ZUNhdGFsb2c7XHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICByZXR1cm4gb2JzLnBpcGUobWFwKCgpID0+IHRydWUsIGVyciA9PiBmYWxzZSkpO1xyXG4gICAgfVxyXG59Il19