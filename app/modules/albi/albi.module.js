"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
// app
var shared_module_1 = require("../shared/shared.module");
var albi_routing_1 = require("./albi.routing");
var components_1 = require("./components");
var services_1 = require("./services");
var AlbiModule = /** @class */ (function () {
    function AlbiModule() {
    }
    AlbiModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                albi_routing_1.albiRouting
            ],
            providers: services_1.PROVIDERS.slice(),
            declarations: components_1.COMPONENTS.slice(),
            exports: [
                shared_module_1.SharedModule
            ].concat(components_1.COMPONENTS),
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AlbiModule);
    return AlbiModule;
}());
exports.AlbiModule = AlbiModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxiaS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbGJpLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLFVBQVU7QUFDVixzQ0FBMkQ7QUFFM0QsTUFBTTtBQUNOLHlEQUF1RDtBQUN2RCwrQ0FBNkM7QUFDN0MsMkNBQTBDO0FBQzFDLHVDQUF1QztBQXFCdkM7SUFBQTtJQUEwQixDQUFDO0lBQWQsVUFBVTtRQW5CdEIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLDRCQUFZO2dCQUNaLDBCQUFXO2FBQ2Q7WUFDRCxTQUFTLEVBQ0Ysb0JBQVMsUUFDZjtZQUNELFlBQVksRUFDTCx1QkFBVSxRQUNoQjtZQUNELE9BQU87Z0JBQ0gsNEJBQVk7cUJBQ1QsdUJBQVUsQ0FDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFVBQVUsQ0FBSTtJQUFELGlCQUFDO0NBQUEsQUFBM0IsSUFBMkI7QUFBZCxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuZ3VsYXJcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8vIGFwcFxyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XHJcbmltcG9ydCB7IGFsYmlSb3V0aW5nIH0gZnJvbSBcIi4vYWxiaS5yb3V0aW5nXCI7XHJcbmltcG9ydCB7IENPTVBPTkVOVFMgfSBmcm9tICcuL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBQUk9WSURFUlMgfSBmcm9tICcuL3NlcnZpY2VzJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgU2hhcmVkTW9kdWxlLFxyXG4gICAgICAgIGFsYmlSb3V0aW5nXHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgLi4uUFJPVklERVJTXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgLi4uQ09NUE9ORU5UUyxcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgU2hhcmVkTW9kdWxlLFxyXG4gICAgICAgIC4uLkNPTVBPTkVOVFNcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWxiaU1vZHVsZSB7IH0iXX0=