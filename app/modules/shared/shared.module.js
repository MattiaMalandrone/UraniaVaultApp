"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var common_2 = require("nativescript-angular/common");
var forms_1 = require("nativescript-angular/forms");
var angular_1 = require("nativescript-ui-listview/angular");
// app
// import { PIPES } from './pipes';
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                common_2.NativeScriptCommonModule,
                forms_1.NativeScriptFormsModule,
                angular_1.NativeScriptUIListViewModule
            ],
            declarations: [],
            exports: [
                common_1.CommonModule,
                common_2.NativeScriptCommonModule,
                forms_1.NativeScriptFormsModule,
                angular_1.NativeScriptUIListViewModule
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxVQUFVO0FBQ1Ysc0NBQXlDO0FBRXpDLDBDQUErQztBQUMvQyxzREFBdUU7QUFDdkUsb0RBQXFFO0FBQ3JFLDREQUFnRjtBQUVoRixNQUFNO0FBQ04sbUNBQW1DO0FBb0JuQztJQUFBO0lBQTRCLENBQUM7SUFBaEIsWUFBWTtRQWxCeEIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLHFCQUFZO2dCQUNaLGlDQUF3QjtnQkFDeEIsK0JBQXVCO2dCQUN2QixzQ0FBNEI7YUFDN0I7WUFDRCxZQUFZLEVBQUUsRUFFYjtZQUNELE9BQU8sRUFBRTtnQkFDUCxxQkFBWTtnQkFDWixpQ0FBd0I7Z0JBQ3hCLCtCQUF1QjtnQkFDdkIsc0NBQTRCO2FBQzdCO1NBQ0YsQ0FBQztPQUVXLFlBQVksQ0FBSTtJQUFELG1CQUFDO0NBQUEsQUFBN0IsSUFBNkI7QUFBaEIsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xyXG5cclxuLy8gYXBwXHJcbi8vIGltcG9ydCB7IFBJUEVTIH0gZnJvbSAnLi9waXBlcyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAvLyAuLi5QSVBFU1xyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlXHJcbiAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7IH0iXX0=