"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var DettaglioAlboGuard = /** @class */ (function () {
    function DettaglioAlboGuard() {
    }
    DettaglioAlboGuard.prototype.canDeactivate = function (component) {
        console.log('canDeactivate DettaglioAlboGuard');
        return component.canDeactivate
            ? component.canDeactivate()
            : rxjs_1.of(true);
    };
    DettaglioAlboGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], DettaglioAlboGuard);
    return DettaglioAlboGuard;
}());
exports.DettaglioAlboGuard = DettaglioAlboGuard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0dGFnbGlvLWFsYm8uZ3VhcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZXR0YWdsaW8tYWxiby5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUEyQztBQUUzQyw2QkFBNkM7QUFRN0M7SUFFSTtJQUFnQixDQUFDO0lBRWpCLDBDQUFhLEdBQWIsVUFBYyxTQUFpQztRQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7UUFFaEQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhO1lBQ3RCLENBQUMsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFO1lBQzNCLENBQUMsQ0FBQyxTQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQVZRLGtCQUFrQjtRQUQ5QixpQkFBVSxFQUFFOztPQUNBLGtCQUFrQixDQVc5QjtJQUFELHlCQUFDO0NBQUEsQUFYRCxJQVdDO0FBWFksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlciwgQ2FuRGVhY3RpdmF0ZSwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgdGltZXIgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGltZUludGVydmFsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDYW5Db21wb25lbnREZWFjdGl2YXRlIHtcclxuICAgIGNhbkRlYWN0aXZhdGU6ICgpID0+IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERldHRhZ2xpb0FsYm9HdWFyZCBpbXBsZW1lbnRzIENhbkRlYWN0aXZhdGU8Q2FuQ29tcG9uZW50RGVhY3RpdmF0ZT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgY2FuRGVhY3RpdmF0ZShjb21wb25lbnQ6IENhbkNvbXBvbmVudERlYWN0aXZhdGUpIDogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NhbkRlYWN0aXZhdGUgRGV0dGFnbGlvQWxib0d1YXJkJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBjb21wb25lbnQuY2FuRGVhY3RpdmF0ZVxyXG4gICAgICAgICAgICAgICAgPyBjb21wb25lbnQuY2FuRGVhY3RpdmF0ZSgpXHJcbiAgICAgICAgICAgICAgICA6IG9mKHRydWUpO1xyXG4gICAgfVxyXG59Il19