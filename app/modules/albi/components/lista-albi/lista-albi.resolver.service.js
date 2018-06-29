"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var services_1 = require("~/modules/albi/services");
var ListaAlbiResolver = /** @class */ (function () {
    /**
     *
     */
    function ListaAlbiResolver(albiService) {
        this.albiService = albiService;
    }
    /**
     *
     * @param route
     */
    ListaAlbiResolver.prototype.resolve = function () {
        console.log('resolving data...');
        return this.albiService.getList(0);
    };
    ListaAlbiResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [services_1.AlbiService])
    ], ListaAlbiResolver);
    return ListaAlbiResolver;
}());
exports.ListaAlbiResolver = ListaAlbiResolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGEtYWxiaS5yZXNvbHZlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlzdGEtYWxiaS5yZXNvbHZlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLG9EQUFzRDtBQUl0RDtJQUVJOztPQUVHO0lBQ0gsMkJBQW1CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBRTNDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxtQ0FBTyxHQUFQO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBaEJRLGlCQUFpQjtRQUQ3QixpQkFBVSxFQUFFO3lDQU11QixzQkFBVztPQUxsQyxpQkFBaUIsQ0FpQjdCO0lBQUQsd0JBQUM7Q0FBQSxBQWpCRCxJQWlCQztBQWpCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJlc29sdmUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBbGJpU2VydmljZSB9IGZyb20gJ34vbW9kdWxlcy9hbGJpL3NlcnZpY2VzJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICd+L21vZHVsZXMvY29yZS9zZXJ2aWNlcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMaXN0YUFsYmlSZXNvbHZlciBpbXBsZW1lbnRzIFJlc29sdmU8YW55PiAge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGFsYmlTZXJ2aWNlOiBBbGJpU2VydmljZSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gcm91dGVcclxuICAgICAqL1xyXG4gICAgcmVzb2x2ZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygncmVzb2x2aW5nIGRhdGEuLi4nKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5hbGJpU2VydmljZS5nZXRMaXN0KDApO1xyXG4gICAgfVxyXG59Il19