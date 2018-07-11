"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var lista_albi_component_1 = require("./components/lista-albi/lista-albi.component");
var lista_albi_guard_1 = require("./components/lista-albi/lista-albi.guard");
var lista_albi_resolver_service_1 = require("./components/lista-albi/lista-albi.resolver.service");
var dettaglio_albo_component_1 = require("~/modules/albi/components/dettaglio-albo/dettaglio-albo.component");
var dettaglio_albo_resolver_service_1 = require("~/modules/albi/components/dettaglio-albo/dettaglio-albo.resolver.service");
var albiRoutes = [
    {
        path: "",
        component: lista_albi_component_1.ListaAlbiComponent,
        resolve: { albiResolved: lista_albi_resolver_service_1.ListaAlbiResolver },
        canActivate: [lista_albi_guard_1.ListaAlbiGuard]
    },
    {
        path: "albo/:numero",
        component: dettaglio_albo_component_1.DettaglioAlboComponent,
        resolve: { alboResolved: dettaglio_albo_resolver_service_1.DettaglioAlboResolver },
    }
];
exports.albiRouting = router_1.RouterModule.forChild(albiRoutes);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxiaS5yb3V0aW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWxiaS5yb3V0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsMENBQXVEO0FBRXZELHFGQUFrRjtBQUNsRiw2RUFBMEU7QUFDMUUsbUdBQXdGO0FBRXhGLDhHQUEyRztBQUMzRyw0SEFBaUg7QUFFakgsSUFBTSxVQUFVLEdBQVc7SUFDdkI7UUFDSSxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSx5Q0FBa0I7UUFDN0IsT0FBTyxFQUFFLEVBQUUsWUFBWSxFQUFFLCtDQUFpQixFQUFFO1FBQzVDLFdBQVcsRUFBRSxDQUFDLGlDQUFjLENBQUM7S0FDaEM7SUFDRDtRQUNJLElBQUksRUFBRSxjQUFjO1FBQ3BCLFNBQVMsRUFBRSxpREFBc0I7UUFDakMsT0FBTyxFQUFFLEVBQUUsWUFBWSxFQUFFLHVEQUFxQixFQUFFO0tBQ25EO0NBQ0osQ0FBQztBQUVXLFFBQUEsV0FBVyxHQUF3QixxQkFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IExpc3RhQWxiaUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbGlzdGEtYWxiaS9saXN0YS1hbGJpLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMaXN0YUFsYmlHdWFyZCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbGlzdGEtYWxiaS9saXN0YS1hbGJpLmd1YXJkXCI7XHJcbmltcG9ydCB7IExpc3RhQWxiaVJlc29sdmVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9saXN0YS1hbGJpL2xpc3RhLWFsYmkucmVzb2x2ZXIuc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgRGV0dGFnbGlvQWxib0NvbXBvbmVudCB9IGZyb20gXCJ+L21vZHVsZXMvYWxiaS9jb21wb25lbnRzL2RldHRhZ2xpby1hbGJvL2RldHRhZ2xpby1hbGJvLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEZXR0YWdsaW9BbGJvUmVzb2x2ZXIgfSBmcm9tIFwifi9tb2R1bGVzL2FsYmkvY29tcG9uZW50cy9kZXR0YWdsaW8tYWxiby9kZXR0YWdsaW8tYWxiby5yZXNvbHZlci5zZXJ2aWNlXCI7XHJcblxyXG5jb25zdCBhbGJpUm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogXCJcIixcclxuICAgICAgICBjb21wb25lbnQ6IExpc3RhQWxiaUNvbXBvbmVudCxcclxuICAgICAgICByZXNvbHZlOiB7IGFsYmlSZXNvbHZlZDogTGlzdGFBbGJpUmVzb2x2ZXIgfSxcclxuICAgICAgICBjYW5BY3RpdmF0ZTogW0xpc3RhQWxiaUd1YXJkXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBwYXRoOiBcImFsYm8vOm51bWVyb1wiLFxyXG4gICAgICAgIGNvbXBvbmVudDogRGV0dGFnbGlvQWxib0NvbXBvbmVudCxcclxuICAgICAgICByZXNvbHZlOiB7IGFsYm9SZXNvbHZlZDogRGV0dGFnbGlvQWxib1Jlc29sdmVyIH0sXHJcbiAgICB9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgYWxiaVJvdXRpbmc6IE1vZHVsZVdpdGhQcm92aWRlcnMgPSBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoYWxiaVJvdXRlcyk7Il19