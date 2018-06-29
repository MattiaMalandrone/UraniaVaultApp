"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var services_1 = require("~/modules/albi/services");
var router_1 = require("@angular/router");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var Albo = /** @class */ (function () {
    function Albo(numero, title) {
        this.numero = numero;
        this.title = title;
    }
    return Albo;
}());
var ListaAlbiComponent = /** @class */ (function () {
    function ListaAlbiComponent(albiService, route, router) {
        this.albiService = albiService;
        this.route = route;
        this.router = router;
        this.albi = [];
        this.currentAlbi = [];
        this.searchTerms = new rxjs_1.Subject();
        this.searchTxt = "";
        this.currentSearchTxt = "";
    }
    /**
     *
     */
    ListaAlbiComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ngOnInit Lista Albi Cmp");
        var albi = this.route.snapshot.data['dataResolved'];
        this.albi = albi;
        this.searchTerms
            .pipe(operators_1.debounceTime(1500))
            .subscribe(function (res) {
            _this.getList();
        });
    };
    /**
     *
     * @param event
     */
    ListaAlbiComponent.prototype.onLoadMoreItems = function () {
        if (this.currentAlbi == this.albi || this.searchTxt == this.currentSearchTxt)
            return;
        this.currentAlbi = this.albi;
        this.countAlbiLoaded = this.albi.length;
        console.log('getList - onLoadMoreItems');
        this.getList();
    };
    /**
     *
     * @param args
     */
    ListaAlbiComponent.prototype.onTextChange = function (args) {
        var textField = args.object;
        this.currentSearchTxt = textField.text;
        if (this.searchTxt == textField.text)
            return;
        this.albi = [];
        this.searchTxt = textField.text;
        this.countAlbiLoaded = 0;
        this.searchTerms.next(textField.text);
    };
    /**
     *
     * @param args
     */
    ListaAlbiComponent.prototype.onReturn = function (args) {
        var textField = args.object;
        this.searchTxt = textField.text;
    };
    /**
     *
     */
    ListaAlbiComponent.prototype.getList = function () {
        var _this = this;
        this.albiService.getList(this.countAlbiLoaded, this.searchTxt)
            .subscribe(function (res) {
            console.log(res);
            _this.albi.push.apply(_this.albi, res);
        });
    };
    /**
     *
     * @param alboNumero
     */
    ListaAlbiComponent.prototype.goToAlbo = function (alboNumero) {
        this.router.navigate(["/albi/albo", alboNumero]);
    };
    ListaAlbiComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-lista-albi',
            templateUrl: './lista-albi.component.html',
            styleUrls: ['./lista-albi.component.css']
        }),
        __metadata("design:paramtypes", [services_1.AlbiService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], ListaAlbiComponent);
    return ListaAlbiComponent;
}());
exports.ListaAlbiComponent = ListaAlbiComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGEtYWxiaS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0YS1hbGJpLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUFrRDtBQUNsRCxvREFBc0Q7QUFFdEQsMENBQXlEO0FBR3pELDRDQUF5RDtBQUN6RCw2QkFBK0I7QUFJL0I7SUFDRSxjQUFtQixNQUFjLEVBQVMsS0FBYTtRQUFwQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtJQUFJLENBQUM7SUFDOUQsV0FBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBUUQ7SUFXRSw0QkFBb0IsV0FBd0IsRUFDeEIsS0FBcUIsRUFDckIsTUFBYztRQUZkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFYM0IsU0FBSSxHQUFnQixFQUFFLENBQUM7UUFDdkIsZ0JBQVcsR0FBZ0IsRUFBRSxDQUFDO1FBSXJDLGdCQUFXLEdBQUcsSUFBSSxjQUFPLEVBQVUsQ0FBQztRQUM3QixjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLHFCQUFnQixHQUFXLEVBQUUsQ0FBQztJQUlDLENBQUM7SUFFdkM7O09BRUc7SUFDSCxxQ0FBUSxHQUFSO1FBQUEsaUJBWUM7UUFYQyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDdkMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWpCLElBQUksQ0FBQyxXQUFXO2FBQ1QsSUFBSSxDQUNILHdCQUFZLENBQUMsSUFBSSxDQUFDLENBQ25CO2FBQ0EsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNaLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRDs7O09BR0c7SUFDSCw0Q0FBZSxHQUFmO1FBRUUsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQzFFLE1BQU0sQ0FBQztRQUVULElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUU3QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRXhDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLHlDQUFZLEdBQW5CLFVBQW9CLElBQUk7UUFDdEIsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUV2QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztRQUV2QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDbEMsTUFBTSxDQUFDO1FBRVQsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFFZixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFDaEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7UUFFekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7O09BR0c7SUFDSSxxQ0FBUSxHQUFmLFVBQWdCLElBQUk7UUFDbEIsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0ssb0NBQU8sR0FBZjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQ3pELFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUVEOzs7T0FHRztJQUNILHFDQUFRLEdBQVIsVUFBUyxVQUFrQjtRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUEvRlUsa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzFDLENBQUM7eUNBWWlDLHNCQUFXO1lBQ2pCLHVCQUFjO1lBQ2IsZUFBTTtPQWJ2QixrQkFBa0IsQ0FnRzlCO0lBQUQseUJBQUM7Q0FBQSxBQWhHRCxJQWdHQztBQWhHWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGVydCwgcHJvbXB0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsYmlTZXJ2aWNlIH0gZnJvbSAnfi9tb2R1bGVzL2FsYmkvc2VydmljZXMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwifi9tb2R1bGVzL2NvcmUvc2VydmljZXNcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xuXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xuXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5jbGFzcyBBbGJvIHtcbiAgY29uc3RydWN0b3IocHVibGljIG51bWVybzogbnVtYmVyLCBwdWJsaWMgdGl0bGU6IHN0cmluZykgeyB9XG59XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1saXN0YS1hbGJpJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3RhLWFsYmkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saXN0YS1hbGJpLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0YUFsYmlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBhbGJpOiBBcnJheTxBbGJvPiA9IFtdO1xuICBwdWJsaWMgY3VycmVudEFsYmk6IEFycmF5PEFsYm8+ID0gW107XG5cbiAgcHJpdmF0ZSBjb3VudEFsYmlMb2FkZWQ6IG51bWJlcjtcblxuICBzZWFyY2hUZXJtcyA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcbiAgcHVibGljIHNlYXJjaFR4dDogc3RyaW5nID0gXCJcIjtcbiAgcHVibGljIGN1cnJlbnRTZWFyY2hUeHQ6IHN0cmluZyA9IFwiXCI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhbGJpU2VydmljZTogQWxiaVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKGBuZ09uSW5pdCBMaXN0YSBBbGJpIENtcGApO1xuICAgIGNvbnN0IGFsYmkgPSB0aGlzLnJvdXRlLnNuYXBzaG90LmRhdGFbJ2RhdGFSZXNvbHZlZCddO1xuICAgIHRoaXMuYWxiaSA9IGFsYmk7XG5cbiAgICB0aGlzLnNlYXJjaFRlcm1zXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBkZWJvdW5jZVRpbWUoMTUwMClcbiAgICAgICAgICApXG4gICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5nZXRMaXN0KCk7XG4gICAgICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqL1xuICBvbkxvYWRNb3JlSXRlbXMoKSB7XG5cbiAgICBpZih0aGlzLmN1cnJlbnRBbGJpID09IHRoaXMuYWxiaSB8fCB0aGlzLnNlYXJjaFR4dCA9PSB0aGlzLmN1cnJlbnRTZWFyY2hUeHQpXG4gICAgICByZXR1cm47XG5cbiAgICB0aGlzLmN1cnJlbnRBbGJpID0gdGhpcy5hbGJpO1xuXG4gICAgdGhpcy5jb3VudEFsYmlMb2FkZWQgPSB0aGlzLmFsYmkubGVuZ3RoO1xuXG4gICAgY29uc29sZS5sb2coJ2dldExpc3QgLSBvbkxvYWRNb3JlSXRlbXMnKTtcbiAgICB0aGlzLmdldExpc3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gYXJnc1xuICAgKi9cbiAgcHVibGljIG9uVGV4dENoYW5nZShhcmdzKSB7XG4gICAgbGV0IHRleHRGaWVsZCA9IDxUZXh0RmllbGQ+YXJncy5vYmplY3Q7XG5cbiAgICB0aGlzLmN1cnJlbnRTZWFyY2hUeHQgPSB0ZXh0RmllbGQudGV4dDtcblxuICAgIGlmKHRoaXMuc2VhcmNoVHh0ID09IHRleHRGaWVsZC50ZXh0KVxuICAgICAgcmV0dXJuO1xuXG4gICAgdGhpcy5hbGJpID0gW107XG5cbiAgICB0aGlzLnNlYXJjaFR4dCA9IHRleHRGaWVsZC50ZXh0O1xuICAgIHRoaXMuY291bnRBbGJpTG9hZGVkID0gMDtcblxuICAgIHRoaXMuc2VhcmNoVGVybXMubmV4dCh0ZXh0RmllbGQudGV4dCk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGFyZ3NcbiAgICovXG4gIHB1YmxpYyBvblJldHVybihhcmdzKSB7XG4gICAgbGV0IHRleHRGaWVsZCA9IDxUZXh0RmllbGQ+YXJncy5vYmplY3Q7XG4gICAgdGhpcy5zZWFyY2hUeHQgPSB0ZXh0RmllbGQudGV4dDtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRMaXN0KCkge1xuICAgIHRoaXMuYWxiaVNlcnZpY2UuZ2V0TGlzdCh0aGlzLmNvdW50QWxiaUxvYWRlZCwgdGhpcy5zZWFyY2hUeHQpXG4gICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgIHRoaXMuYWxiaS5wdXNoLmFwcGx5KHRoaXMuYWxiaSwgcmVzKTtcbiAgICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGFsYm9OdW1lcm9cbiAgICovXG4gIGdvVG9BbGJvKGFsYm9OdW1lcm86IG51bWJlcikge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9hbGJpL2FsYm9cIiwgYWxib051bWVyb10pO1xuICB9XG59XG4iXX0=