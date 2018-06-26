"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
// app
var shared_module_1 = require("../shared/shared.module");
var sign_routing_1 = require("./sign.routing");
var components_1 = require("./components");
var SignModule = /** @class */ (function () {
    function SignModule() {
    }
    SignModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                sign_routing_1.signRouting
            ],
            providers: [],
            declarations: components_1.COMPONENTS.slice(),
            exports: [
                shared_module_1.SharedModule
            ].concat(components_1.COMPONENTS),
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], SignModule);
    return SignModule;
}());
exports.SignModule = SignModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaWduLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLFVBQVU7QUFDVixzQ0FBMkQ7QUFFM0QsTUFBTTtBQUNOLHlEQUF1RDtBQUN2RCwrQ0FBNkM7QUFDN0MsMkNBQTBDO0FBb0IxQztJQUFBO0lBQTBCLENBQUM7SUFBZCxVQUFVO1FBbEJ0QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsNEJBQVk7Z0JBQ1osMEJBQVc7YUFDZDtZQUNELFNBQVMsRUFBRSxFQUNWO1lBQ0QsWUFBWSxFQUNMLHVCQUFVLFFBQ2hCO1lBQ0QsT0FBTztnQkFDSCw0QkFBWTtxQkFDVCx1QkFBVSxDQUNoQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csVUFBVSxDQUFJO0lBQUQsaUJBQUM7Q0FBQSxBQUEzQixJQUEyQjtBQUFkLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLy8gYXBwXHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcclxuaW1wb3J0IHsgc2lnblJvdXRpbmcgfSBmcm9tIFwiLi9zaWduLnJvdXRpbmdcIjtcclxuaW1wb3J0IHsgQ09NUE9ORU5UUyB9IGZyb20gJy4vY29tcG9uZW50cyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIFNoYXJlZE1vZHVsZSxcclxuICAgICAgICBzaWduUm91dGluZ1xyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIC4uLkNPTVBPTkVOVFMsXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIFNoYXJlZE1vZHVsZSxcclxuICAgICAgICAuLi5DT01QT05FTlRTXHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZ25Nb2R1bGUgeyB9Il19