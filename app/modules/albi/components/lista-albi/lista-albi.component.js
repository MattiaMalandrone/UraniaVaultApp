"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var services_1 = require("~/modules/albi/services");
var services_2 = require("~/modules/core/services");
var ListaAlbiComponent = /** @class */ (function () {
    function ListaAlbiComponent(albiService) {
        this.albiService = albiService;
    }
    ListaAlbiComponent.prototype.ngOnInit = function () {
        console.log(services_2.AuthService.CURRENT_USER);
        console.log(services_2.AuthService.ACCESS_TOKEN);
        console.log("ngOnInit Lista Albi Cmp");
        // this.albiService.initCatalogo(this.user).subscribe(res => {
        //   console.log(res);
        //   alert(res);
        // }, err => {
        //   console.log(err);
        //   alert(err.error);
        // });
    };
    ListaAlbiComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-lista-albi',
            templateUrl: './lista-albi.component.html',
            styleUrls: ['./lista-albi.component.css']
        }),
        __metadata("design:paramtypes", [services_1.AlbiService])
    ], ListaAlbiComponent);
    return ListaAlbiComponent;
}());
exports.ListaAlbiComponent = ListaAlbiComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGEtYWxiaS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0YS1hbGJpLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUFrRDtBQUNsRCxvREFBc0Q7QUFFdEQsb0RBQXNEO0FBUXREO0lBRUUsNEJBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUksQ0FBQztJQUVqRCxxQ0FBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDdkMsOERBQThEO1FBQzlELHNCQUFzQjtRQUN0QixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIsTUFBTTtJQUNQLENBQUM7SUFmUyxrQkFBa0I7UUFOOUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDMUMsQ0FBQzt5Q0FHaUMsc0JBQVc7T0FGakMsa0JBQWtCLENBaUI5QjtJQUFELHlCQUFDO0NBQUEsQUFqQkQsSUFpQkM7QUFqQlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxlcnQsIHByb21wdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGJpU2VydmljZSB9IGZyb20gJ34vbW9kdWxlcy9hbGJpL3NlcnZpY2VzJztcbmltcG9ydCB7IEF1dGhVc2VyIH0gZnJvbSBcIn4vbW9kdWxlcy9zaGFyZWQvbW9kZWxzXCI7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCJ+L21vZHVsZXMvY29yZS9zZXJ2aWNlc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtbGlzdGEtYWxiaScsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0YS1hbGJpLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdGEtYWxiaS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTGlzdGFBbGJpQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFsYmlTZXJ2aWNlOiBBbGJpU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc29sZS5sb2coQXV0aFNlcnZpY2UuQ1VSUkVOVF9VU0VSKTtcbiAgICBjb25zb2xlLmxvZyhBdXRoU2VydmljZS5BQ0NFU1NfVE9LRU4pO1xuICAgIGNvbnNvbGUubG9nKGBuZ09uSW5pdCBMaXN0YSBBbGJpIENtcGApO1xuICAgIC8vIHRoaXMuYWxiaVNlcnZpY2UuaW5pdENhdGFsb2dvKHRoaXMudXNlcikuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhyZXMpO1xuICAgIC8vICAgYWxlcnQocmVzKTtcbiAgICAvLyB9LCBlcnIgPT4ge1xuICAgIC8vICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAvLyAgIGFsZXJ0KGVyci5lcnJvcik7XG4gICAgLy8gfSk7XG4gICB9XG5cbn1cbiJdfQ==