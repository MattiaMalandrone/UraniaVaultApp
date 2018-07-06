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
        return this.albiService.getList(0, null);
    };
    ListaAlbiResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [services_1.AlbiService])
    ], ListaAlbiResolver);
    return ListaAlbiResolver;
}());
exports.ListaAlbiResolver = ListaAlbiResolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGEtYWxiaS5yZXNvbHZlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlzdGEtYWxiaS5yZXNvbHZlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLG9EQUFzRDtBQUl0RDtJQUVJOztPQUVHO0lBQ0gsMkJBQW1CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBRTNDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxtQ0FBTyxHQUFQO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQWhCUSxpQkFBaUI7UUFEN0IsaUJBQVUsRUFBRTt5Q0FNdUIsc0JBQVc7T0FMbEMsaUJBQWlCLENBaUI3QjtJQUFELHdCQUFDO0NBQUEsQUFqQkQsSUFpQkM7QUFqQlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZXNvbHZlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQWxiaVNlcnZpY2UgfSBmcm9tICd+L21vZHVsZXMvYWxiaS9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnfi9tb2R1bGVzL2NvcmUvc2VydmljZXMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTGlzdGFBbGJpUmVzb2x2ZXIgaW1wbGVtZW50cyBSZXNvbHZlPGFueT4gIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhbGJpU2VydmljZTogQWxiaVNlcnZpY2UpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHJvdXRlXHJcbiAgICAgKi9cclxuICAgIHJlc29sdmUoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Jlc29sdmluZyBkYXRhLi4uJyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxiaVNlcnZpY2UuZ2V0TGlzdCgwLCBudWxsKTtcclxuICAgIH1cclxufSJdfQ==