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
        // if(!this.databaseService.isOffline)
        // {
        //     this.databaseService.getOfflineData(AuthService.CURRENT_USER.userId).then(data => {
        //         if(data !== null)
        //             this.albiService.syncSqliteInMongoDb(data);
        //     });
        // }
        console.log('Resolving LISTA ALBI...');
        return this.albiService.getList("0", null);
    };
    ListaAlbiResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [services_1.AlbiService])
    ], ListaAlbiResolver);
    return ListaAlbiResolver;
}());
exports.ListaAlbiResolver = ListaAlbiResolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGEtYWxiaS5yZXNvbHZlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlzdGEtYWxiaS5yZXNvbHZlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLG9EQUFzRDtBQUl0RDtJQUVJOztPQUVHO0lBQ0gsMkJBQW1CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBRTNDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxtQ0FBTyxHQUFQO1FBRUksc0NBQXNDO1FBQ3RDLElBQUk7UUFDSiwwRkFBMEY7UUFDMUYsNEJBQTRCO1FBQzVCLDBEQUEwRDtRQUMxRCxVQUFVO1FBQ1YsSUFBSTtRQUVKLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUN2QyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUF6QlEsaUJBQWlCO1FBRDdCLGlCQUFVLEVBQUU7eUNBTXVCLHNCQUFXO09BTGxDLGlCQUFpQixDQTBCN0I7SUFBRCx3QkFBQztDQUFBLEFBMUJELElBMEJDO0FBMUJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVzb2x2ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEFsYmlTZXJ2aWNlIH0gZnJvbSAnfi9tb2R1bGVzL2FsYmkvc2VydmljZXMnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJ34vbW9kdWxlcy9jb3JlL3NlcnZpY2VzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExpc3RhQWxiaVJlc29sdmVyIGltcGxlbWVudHMgUmVzb2x2ZTxhbnk+ICB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYWxiaVNlcnZpY2U6IEFsYmlTZXJ2aWNlKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSByb3V0ZVxyXG4gICAgICovXHJcbiAgICByZXNvbHZlKCkge1xyXG5cclxuICAgICAgICAvLyBpZighdGhpcy5kYXRhYmFzZVNlcnZpY2UuaXNPZmZsaW5lKVxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5kYXRhYmFzZVNlcnZpY2UuZ2V0T2ZmbGluZURhdGEoQXV0aFNlcnZpY2UuQ1VSUkVOVF9VU0VSLnVzZXJJZCkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIGlmKGRhdGEgIT09IG51bGwpXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5hbGJpU2VydmljZS5zeW5jU3FsaXRlSW5Nb25nb0RiKGRhdGEpO1xyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXNvbHZpbmcgTElTVEEgQUxCSS4uLicpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFsYmlTZXJ2aWNlLmdldExpc3QoXCIwXCIsIG51bGwpO1xyXG4gICAgfVxyXG59Il19