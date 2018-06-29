"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
// app
var shared_module_1 = require("../shared/shared.module");
var albi_routing_1 = require("./albi.routing");
var components_1 = require("./components");
var services_1 = require("./services");
var lista_albi_guard_1 = require("./components/lista-albi/lista-albi.guard");
var lista_albi_resolver_service_1 = require("./components/lista-albi/lista-albi.resolver.service");
var AlbiModule = /** @class */ (function () {
    function AlbiModule() {
    }
    AlbiModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                albi_routing_1.albiRouting
            ],
            providers: services_1.PROVIDERS.concat([
                lista_albi_guard_1.ListaAlbiGuard,
                lista_albi_resolver_service_1.ListaAlbiResolver
            ]),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxiaS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbGJpLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLFVBQVU7QUFDVixzQ0FBMkQ7QUFFM0QsTUFBTTtBQUNOLHlEQUF1RDtBQUN2RCwrQ0FBNkM7QUFDN0MsMkNBQTBDO0FBQzFDLHVDQUF1QztBQUN2Qyw2RUFBMEU7QUFDMUUsbUdBQXdGO0FBdUJ4RjtJQUFBO0lBQTBCLENBQUM7SUFBZCxVQUFVO1FBckJ0QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsNEJBQVk7Z0JBQ1osMEJBQVc7YUFDZDtZQUNELFNBQVMsRUFDRixvQkFBUztnQkFDWixpQ0FBYztnQkFDZCwrQ0FBaUI7Y0FDcEI7WUFDRCxZQUFZLEVBQ0wsdUJBQVUsUUFDaEI7WUFDRCxPQUFPO2dCQUNILDRCQUFZO3FCQUNULHVCQUFVLENBQ2hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxVQUFVLENBQUk7SUFBRCxpQkFBQztDQUFBLEFBQTNCLElBQTJCO0FBQWQsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXHJcbmltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vLyBhcHBcclxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBhbGJpUm91dGluZyB9IGZyb20gXCIuL2FsYmkucm91dGluZ1wiO1xyXG5pbXBvcnQgeyBDT01QT05FTlRTIH0gZnJvbSAnLi9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgUFJPVklERVJTIH0gZnJvbSAnLi9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IExpc3RhQWxiaUd1YXJkIH0gZnJvbSAnLi9jb21wb25lbnRzL2xpc3RhLWFsYmkvbGlzdGEtYWxiaS5ndWFyZCc7XHJcbmltcG9ydCB7IExpc3RhQWxiaVJlc29sdmVyIH0gZnJvbSAnLi9jb21wb25lbnRzL2xpc3RhLWFsYmkvbGlzdGEtYWxiaS5yZXNvbHZlci5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgU2hhcmVkTW9kdWxlLFxyXG4gICAgICAgIGFsYmlSb3V0aW5nXHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgLi4uUFJPVklERVJTLFxyXG4gICAgICAgIExpc3RhQWxiaUd1YXJkLFxyXG4gICAgICAgIExpc3RhQWxiaVJlc29sdmVyXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgLi4uQ09NUE9ORU5UUyxcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgU2hhcmVkTW9kdWxlLFxyXG4gICAgICAgIC4uLkNPTVBPTkVOVFNcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWxiaU1vZHVsZSB7IH0iXX0=