"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var services_1 = require("~/modules/albi/services");
var DettaglioAlboResolver = /** @class */ (function () {
    /**
     *
     */
    function DettaglioAlboResolver(albiService) {
        this.albiService = albiService;
    }
    /**
     *
     * @param route
     */
    DettaglioAlboResolver.prototype.resolve = function (route) {
        console.log('Resolving DETTAGLIO ALBO...');
        var numeroAlbo = +route.paramMap.get('numero');
        return this.albiService.getAlbo(numeroAlbo);
    };
    DettaglioAlboResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [services_1.AlbiService])
    ], DettaglioAlboResolver);
    return DettaglioAlboResolver;
}());
exports.DettaglioAlboResolver = DettaglioAlboResolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0dGFnbGlvLWFsYm8ucmVzb2x2ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldHRhZ2xpby1hbGJvLnJlc29sdmVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0Msb0RBQXNEO0FBSXREO0lBRUk7O09BRUc7SUFDSCwrQkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFFNUMsQ0FBQztJQUVEOzs7T0FHRztJQUNILHVDQUFPLEdBQVAsVUFBUSxLQUE2QjtRQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDM0MsSUFBTSxVQUFVLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqRCxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQWpCUSxxQkFBcUI7UUFEakMsaUJBQVUsRUFBRTt5Q0FNd0Isc0JBQVc7T0FMbkMscUJBQXFCLENBa0JqQztJQUFELDRCQUFDO0NBQUEsQUFsQkQsSUFrQkM7QUFsQlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZXNvbHZlLCBBY3RpdmF0ZWRSb3V0ZSwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEFsYmlTZXJ2aWNlIH0gZnJvbSAnfi9tb2R1bGVzL2FsYmkvc2VydmljZXMnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJ34vbW9kdWxlcy9jb3JlL3NlcnZpY2VzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERldHRhZ2xpb0FsYm9SZXNvbHZlciBpbXBsZW1lbnRzIFJlc29sdmU8YW55PiAge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhbGJpU2VydmljZTogQWxiaVNlcnZpY2UgKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSByb3V0ZVxyXG4gICAgICovXHJcbiAgICByZXNvbHZlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1Jlc29sdmluZyBERVRUQUdMSU8gQUxCTy4uLicpO1xyXG4gICAgICAgIGNvbnN0IG51bWVyb0FsYm8gPSArcm91dGUucGFyYW1NYXAuZ2V0KCdudW1lcm8nKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5hbGJpU2VydmljZS5nZXRBbGJvKG51bWVyb0FsYm8pO1xyXG4gICAgfVxyXG59Il19