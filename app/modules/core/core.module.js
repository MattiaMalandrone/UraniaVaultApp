"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// nativescript
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var http_client_1 = require("nativescript-angular/http-client");
// angular
var core_1 = require("@angular/core");
// app
var services_1 = require("./services");
// import { PROVIDERS as PLAYER_PROVIDERS } from "../player/services";
var MODULES = [
    nativescript_module_1.NativeScriptModule,
    forms_1.NativeScriptFormsModule,
    http_client_1.NativeScriptHttpClientModule
];
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error("CoreModule is already loaded. Import it in the AppModule only");
        }
    }
    CoreModule = __decorate([
        core_1.NgModule({
            imports: MODULES.slice(),
            providers: services_1.PROVIDERS.slice(),
            exports: MODULES.slice(),
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        }),
        __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGVBQWU7QUFDZixnRkFBOEU7QUFDOUUsb0RBQXFFO0FBQ3JFLGdFQUFnRjtBQUVoRixVQUFVO0FBQ1Ysc0NBQStFO0FBRS9FLE1BQU07QUFDTix1Q0FBdUM7QUFDdkMsc0VBQXNFO0FBRXRFLElBQU0sT0FBTyxHQUFVO0lBQ3JCLHdDQUFrQjtJQUNsQiwrQkFBdUI7SUFDdkIsMENBQTRCO0NBQzdCLENBQUM7QUFrQkY7SUFDRSxvQkFBcUMsWUFBd0I7UUFDM0QsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNLElBQUksS0FBSyxDQUNiLCtEQUErRCxDQUFDLENBQUM7UUFDckUsQ0FBQztJQUNILENBQUM7SUFOVSxVQUFVO1FBaEJ0QixlQUFRLENBQUM7WUFDUixPQUFPLEVBQ0YsT0FBTyxRQUNYO1lBQ0QsU0FBUyxFQUNKLG9CQUFTLFFBR2I7WUFDRCxPQUFPLEVBQ0YsT0FBTyxRQUNYO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHVCQUFnQjthQUNqQjtTQUNGLENBQUM7UUFFYyxXQUFBLGVBQVEsRUFBRSxDQUFBLEVBQUUsV0FBQSxlQUFRLEVBQUUsQ0FBQTt5Q0FBZSxVQUFVO09BRGxELFVBQVUsQ0FPdEI7SUFBRCxpQkFBQztDQUFBLEFBUEQsSUFPQztBQVBZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbmF0aXZlc2NyaXB0XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcclxuXHJcbi8vIGFuZ3VsYXJcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG4vLyBhcHBcclxuaW1wb3J0IHsgUFJPVklERVJTIH0gZnJvbSBcIi4vc2VydmljZXNcIjtcclxuLy8gaW1wb3J0IHsgUFJPVklERVJTIGFzIFBMQVlFUl9QUk9WSURFUlMgfSBmcm9tIFwiLi4vcGxheWVyL3NlcnZpY2VzXCI7XHJcblxyXG5jb25zdCBNT0RVTEVTOiBhbnlbXSA9IFtcclxuICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICAuLi5NT0RVTEVTXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIC4uLlBST1ZJREVSUyxcclxuICAgIC8vIC4uLk1JWEVSX1BST1ZJREVSUyxcclxuICAgIC8vIC4uLlBMQVlFUl9QUk9WSURFUlNcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIC4uLk1PRFVMRVNcclxuICBdLFxyXG4gIHNjaGVtYXM6IFtcclxuICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb3JlTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvciggQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBDb3JlTW9kdWxlKSB7XHJcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICBcIkNvcmVNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHlcIik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==