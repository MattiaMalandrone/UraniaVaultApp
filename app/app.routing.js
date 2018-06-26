"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var routes = [{
        path: '',
        loadChildren: './modules/sign/sign.module#SignModule'
    }, {
        path: 'albi',
        loadChildren: './modules/albi/albi.module#AlbiModule'
        // canLoad: [AuthGuard]
    }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.NativeScriptRouterModule.forRoot(routes)
            ],
            exports: [
                router_1.NativeScriptRouterModule
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRTtBQUNoRSxzREFBdUU7QUFJdkUsSUFBTSxNQUFNLEdBQVcsQ0FBQztRQUNwQixJQUFJLEVBQUUsRUFBRTtRQUNSLFlBQVksRUFBRSx1Q0FBdUM7S0FDeEQsRUFBRTtRQUNDLElBQUksRUFBRSxNQUFNO1FBQ1osWUFBWSxFQUFFLHVDQUF1QztRQUNyRCx1QkFBdUI7S0FDMUIsQ0FBQyxDQUFDO0FBVUg7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQVI1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQzthQUMzQztZQUNELE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7YUFDM0I7U0FDSixDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOZ01vZHVsZUZhY3RvcnlMb2FkZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW3tcbiAgICBwYXRoOiAnJyxcbiAgICBsb2FkQ2hpbGRyZW46ICcuL21vZHVsZXMvc2lnbi9zaWduLm1vZHVsZSNTaWduTW9kdWxlJ1xufSwge1xuICAgIHBhdGg6ICdhbGJpJyxcbiAgICBsb2FkQ2hpbGRyZW46ICcuL21vZHVsZXMvYWxiaS9hbGJpLm1vZHVsZSNBbGJpTW9kdWxlJ1xuICAgIC8vIGNhbkxvYWQ6IFtBdXRoR3VhcmRdXG59XTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcylcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfSJdfQ==