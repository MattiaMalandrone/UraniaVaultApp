"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var services_1 = require("~/modules/albi/services");
var DettaglioAlboComponent = /** @class */ (function () {
    function DettaglioAlboComponent(route, albiService) {
        this.route = route;
        this.albiService = albiService;
        this.stati = [];
        this.items = {};
        this.selectedIndex = 0;
    }
    /**
     *
     */
    DettaglioAlboComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('inside dettaglio albo');
        var numeroAlbo = this.route.snapshot.params.numero;
        this.albiService.getAlbo(numeroAlbo).subscribe(function (albo) { return _this.albo = albo; });
        this.albiService.getListaStati().subscribe(function (stati) {
            var _loop_1 = function (i) {
                var stato = {
                    value: stati[i].key,
                    name: stati[i].value,
                    toString: function () { return stati[i].value; }
                };
                _this.stati.push(stato);
            };
            for (var i = 0; i < stati.length; i++) {
                _loop_1(i);
            }
        });
    };
    /**
     *
     * @param args
     */
    DettaglioAlboComponent.prototype.selectedIndexChanged = function (args) {
        var picker = args.object;
        var stato = picker.selectedIndex;
        console.log("AlboId:", this.albo._id);
        console.log("Stato:", stato);
        this.albiService.updateAlbo(this.albo._id, stato).subscribe(function (res) {
            console.log(res);
        });
    };
    DettaglioAlboComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-dettaglio-albo',
            templateUrl: './dettaglio-albo.component.html',
            styleUrls: ['./dettaglio-albo.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, services_1.AlbiService])
    ], DettaglioAlboComponent);
    return DettaglioAlboComponent;
}());
exports.DettaglioAlboComponent = DettaglioAlboComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0dGFnbGlvLWFsYm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0dGFnbGlvLWFsYm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUNqRCxvREFBc0Q7QUFnQnREO0lBT0UsZ0NBQW9CLEtBQXFCLEVBQVUsV0FBd0I7UUFBdkQsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUozRSxVQUFLLEdBQVUsRUFBRSxDQUFDO1FBQ2xCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsa0JBQWEsR0FBVyxDQUFDLENBQUM7SUFFc0QsQ0FBQztJQUVqRjs7T0FFRztJQUNILHlDQUFRLEdBQVI7UUFBQSxpQkFvQkM7UUFuQkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3JDLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFFckQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLEVBQWhCLENBQWdCLENBQUMsQ0FBQztRQUUzRSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDLFNBQVMsQ0FBRSxVQUFDLEtBQVk7b0NBRS9DLENBQUM7Z0JBRVAsSUFBTSxLQUFLLEdBQVE7b0JBQ2pCLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRztvQkFDbkIsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLO29CQUNwQixRQUFRLEVBQUUsY0FBTSxPQUFBLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQWQsQ0FBYztpQkFDL0IsQ0FBQTtnQkFFRCxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QixDQUFDO1lBVEQsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTt3QkFBNUIsQ0FBQzthQVNSO1FBRUgsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gscURBQW9CLEdBQXBCLFVBQXFCLElBQUk7UUFDdkIsSUFBTSxNQUFNLEdBQWUsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QyxJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBRW5DLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUM3RCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQWhEVSxzQkFBc0I7UUFObEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7U0FDOUMsQ0FBQzt5Q0FRMkIsdUJBQWMsRUFBdUIsc0JBQVc7T0FQaEUsc0JBQXNCLENBa0RsQztJQUFELDZCQUFDO0NBQUEsQUFsREQsSUFrREM7QUFsRFksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFsYmlTZXJ2aWNlIH0gZnJvbSAnfi9tb2R1bGVzL2FsYmkvc2VydmljZXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTGlzdFBpY2tlciB9IGZyb20gXCJ1aS9saXN0LXBpY2tlclwiO1xuXG5cbmludGVyZmFjZSBTdGF0aSB7XG4gIGtleTogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtZGV0dGFnbGlvLWFsYm8nLFxuICB0ZW1wbGF0ZVVybDogJy4vZGV0dGFnbGlvLWFsYm8uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kZXR0YWdsaW8tYWxiby5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGV0dGFnbGlvQWxib0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgYWxibzogYW55O1xuICBzdGF0aTogYW55W10gPSBbXTtcbiAgaXRlbXM6IG9iamVjdCA9IHt9O1xuICBzZWxlY3RlZEluZGV4OiBudW1iZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIGFsYmlTZXJ2aWNlOiBBbGJpU2VydmljZSwpIHsgfVxuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc29sZS5sb2coJ2luc2lkZSBkZXR0YWdsaW8gYWxibycpO1xuICAgIGNvbnN0IG51bWVyb0FsYm8gPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5udW1lcm87XG5cbiAgICB0aGlzLmFsYmlTZXJ2aWNlLmdldEFsYm8obnVtZXJvQWxibykuc3Vic2NyaWJlKChhbGJvKSA9PiB0aGlzLmFsYm8gPSBhbGJvKTtcblxuICAgIHRoaXMuYWxiaVNlcnZpY2UuZ2V0TGlzdGFTdGF0aSgpLnN1YnNjcmliZSggKHN0YXRpOiBhbnlbXSkgPT4ge1xuXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3RhdGkubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICBjb25zdCBzdGF0bzogYW55ID0ge1xuICAgICAgICAgIHZhbHVlOiBzdGF0aVtpXS5rZXksXG4gICAgICAgICAgbmFtZTogc3RhdGlbaV0udmFsdWUsXG4gICAgICAgICAgdG9TdHJpbmc6ICgpID0+IHN0YXRpW2ldLnZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0YXRpLnB1c2goc3RhdG8pO1xuICAgICAgfVxuXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gYXJnc1xuICAgKi9cbiAgc2VsZWN0ZWRJbmRleENoYW5nZWQoYXJncykge1xuICAgIGNvbnN0IHBpY2tlciA9IDxMaXN0UGlja2VyPmFyZ3Mub2JqZWN0O1xuICAgIGNvbnN0IHN0YXRvID0gcGlja2VyLnNlbGVjdGVkSW5kZXg7XG5cbiAgICBjb25zb2xlLmxvZyhcIkFsYm9JZDpcIiwgdGhpcy5hbGJvLl9pZCk7XG4gICAgY29uc29sZS5sb2coXCJTdGF0bzpcIiwgc3RhdG8pO1xuXG4gICAgdGhpcy5hbGJpU2VydmljZS51cGRhdGVBbGJvKHRoaXMuYWxiby5faWQsIHN0YXRvKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgfSk7XG4gIH1cblxufVxuIl19