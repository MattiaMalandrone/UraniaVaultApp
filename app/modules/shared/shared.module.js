"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("nativescript-angular/forms");
// app
// import { PIPES } from './pipes';
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.NativeScriptFormsModule
            ],
            declarations: [],
            exports: [
                common_1.CommonModule,
                forms_1.NativeScriptFormsModule
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxVQUFVO0FBQ1Ysc0NBQXlDO0FBRXpDLDBDQUErQztBQUMvQyxvREFBcUU7QUFFckUsTUFBTTtBQUNOLG1DQUFtQztBQWdCbkM7SUFBQTtJQUE0QixDQUFDO0lBQWhCLFlBQVk7UUFkeEIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLHFCQUFZO2dCQUNaLCtCQUF1QjthQUN4QjtZQUNELFlBQVksRUFBRSxFQUViO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHFCQUFZO2dCQUNaLCtCQUF1QjthQUN4QjtTQUNGLENBQUM7T0FFVyxZQUFZLENBQUk7SUFBRCxtQkFBQztDQUFBLEFBQTdCLElBQTZCO0FBQWhCLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuLy8gYXBwXHJcbi8vIGltcG9ydCB7IFBJUEVTIH0gZnJvbSAnLi9waXBlcyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIC8vIC4uLlBJUEVTXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZVxyXG4gIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUgeyB9Il19