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
        this.isBusy = true;
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
        console.log("------------------------------------------------------------------");
        console.log(albi);
        console.log("------------------------------------------------------------------");
        this.isBusy = false;
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
    ListaAlbiComponent.prototype.onBusyChanged = function (args) {
        var indicator = args.object;
        console.log("indicator.busy changed to: " + indicator.busy);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGEtYWxiaS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0YS1hbGJpLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUFrRDtBQUNsRCxvREFBc0Q7QUFFdEQsMENBQXlEO0FBSXpELDRDQUF5RDtBQUN6RCw2QkFBK0I7QUFJL0I7SUFDRSxjQUFtQixNQUFjLEVBQVMsS0FBYTtRQUFwQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtJQUFJLENBQUM7SUFDOUQsV0FBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBUUQ7SUFhRSw0QkFBb0IsV0FBd0IsRUFDeEIsS0FBcUIsRUFDckIsTUFBYztRQUZkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFiM0IsV0FBTSxHQUFHLElBQUksQ0FBQztRQUVkLFNBQUksR0FBZ0IsRUFBRSxDQUFDO1FBQ3ZCLGdCQUFXLEdBQWdCLEVBQUUsQ0FBQztRQUlyQyxnQkFBVyxHQUFHLElBQUksY0FBTyxFQUFVLENBQUM7UUFDN0IsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixxQkFBZ0IsR0FBVyxFQUFFLENBQUM7SUFJQyxDQUFDO0lBRXZDOztPQUVHO0lBQ0gscUNBQVEsR0FBUjtRQUFBLGlCQWtCQztRQWpCQyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDdkMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWpCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0VBQW9FLENBQUMsQ0FBQztRQUNsRixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FB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c0JBQVc7WUFDakIsdUJBQWM7WUFDYixlQUFNO09BZnZCLGtCQUFrQixDQTZHOUI7SUFBRCx5QkFBQztDQUFBLEFBN0dELElBNkdDO0FBN0dZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsZXJ0LCBwcm9tcHQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxiaVNlcnZpY2UgfSBmcm9tICd+L21vZHVsZXMvYWxiaS9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCJ+L21vZHVsZXMvY29yZS9zZXJ2aWNlc1wiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XG5pbXBvcnQgeyBBY3Rpdml0eUluZGljYXRvciB9IGZyb20gXCJ1aS9hY3Rpdml0eS1pbmRpY2F0b3JcIjtcblxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcblxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuY2xhc3MgQWxibyB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBudW1lcm86IG51bWJlciwgcHVibGljIHRpdGxlOiBzdHJpbmcpIHsgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtbGlzdGEtYWxiaScsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0YS1hbGJpLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdGEtYWxiaS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTGlzdGFBbGJpQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgaXNCdXN5ID0gdHJ1ZTtcblxuICBwdWJsaWMgYWxiaTogQXJyYXk8QWxibz4gPSBbXTtcbiAgcHVibGljIGN1cnJlbnRBbGJpOiBBcnJheTxBbGJvPiA9IFtdO1xuXG4gIHByaXZhdGUgY291bnRBbGJpTG9hZGVkOiBudW1iZXI7XG5cbiAgc2VhcmNoVGVybXMgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG4gIHB1YmxpYyBzZWFyY2hUeHQ6IHN0cmluZyA9IFwiXCI7XG4gIHB1YmxpYyBjdXJyZW50U2VhcmNoVHh0OiBzdHJpbmcgPSBcIlwiO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWxiaVNlcnZpY2U6IEFsYmlTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyhgbmdPbkluaXQgTGlzdGEgQWxiaSBDbXBgKTtcbiAgICBjb25zdCBhbGJpID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5kYXRhWydkYXRhUmVzb2x2ZWQnXTtcbiAgICB0aGlzLmFsYmkgPSBhbGJpO1xuXG4gICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XG4gICAgY29uc29sZS5sb2coYWxiaSk7XG4gICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XG5cbiAgICB0aGlzLmlzQnVzeSA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZWFyY2hUZXJtc1xuICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgZGVib3VuY2VUaW1lKDE1MDApXG4gICAgICAgICAgKVxuICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2V0TGlzdCgpO1xuICAgICAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBldmVudFxuICAgKi9cbiAgb25Mb2FkTW9yZUl0ZW1zKCkge1xuXG4gICAgaWYodGhpcy5jdXJyZW50QWxiaSA9PSB0aGlzLmFsYmkgfHwgdGhpcy5zZWFyY2hUeHQgPT0gdGhpcy5jdXJyZW50U2VhcmNoVHh0KVxuICAgICAgcmV0dXJuO1xuXG4gICAgdGhpcy5jdXJyZW50QWxiaSA9IHRoaXMuYWxiaTtcblxuICAgIHRoaXMuY291bnRBbGJpTG9hZGVkID0gdGhpcy5hbGJpLmxlbmd0aDtcblxuICAgIGNvbnNvbGUubG9nKCdnZXRMaXN0IC0gb25Mb2FkTW9yZUl0ZW1zJyk7XG4gICAgdGhpcy5nZXRMaXN0KCk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGFyZ3NcbiAgICovXG4gIHB1YmxpYyBvblRleHRDaGFuZ2UoYXJncykge1xuICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPmFyZ3Mub2JqZWN0O1xuXG4gICAgdGhpcy5jdXJyZW50U2VhcmNoVHh0ID0gdGV4dEZpZWxkLnRleHQ7XG5cbiAgICBpZih0aGlzLnNlYXJjaFR4dCA9PSB0ZXh0RmllbGQudGV4dClcbiAgICAgIHJldHVybjtcblxuICAgIHRoaXMuYWxiaSA9IFtdO1xuXG4gICAgdGhpcy5zZWFyY2hUeHQgPSB0ZXh0RmllbGQudGV4dDtcbiAgICB0aGlzLmNvdW50QWxiaUxvYWRlZCA9IDA7XG5cbiAgICB0aGlzLnNlYXJjaFRlcm1zLm5leHQodGV4dEZpZWxkLnRleHQpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBhcmdzXG4gICAqL1xuICBwdWJsaWMgb25SZXR1cm4oYXJncykge1xuICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPmFyZ3Mub2JqZWN0O1xuICAgIHRoaXMuc2VhcmNoVHh0ID0gdGV4dEZpZWxkLnRleHQ7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIHByaXZhdGUgZ2V0TGlzdCgpIHtcbiAgICB0aGlzLmFsYmlTZXJ2aWNlLmdldExpc3QodGhpcy5jb3VudEFsYmlMb2FkZWQsIHRoaXMuc2VhcmNoVHh0KVxuICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICB0aGlzLmFsYmkucHVzaC5hcHBseSh0aGlzLmFsYmksIHJlcyk7XG4gICAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBhbGJvTnVtZXJvXG4gICAqL1xuICBnb1RvQWxibyhhbGJvTnVtZXJvOiBudW1iZXIpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvYWxiaS9hbGJvXCIsIGFsYm9OdW1lcm9dKTtcbiAgfVxuXG4gIG9uQnVzeUNoYW5nZWQoYXJncykge1xuICAgIGxldCBpbmRpY2F0b3IgPSA8QWN0aXZpdHlJbmRpY2F0b3I+YXJncy5vYmplY3Q7XG4gICAgICBjb25zb2xlLmxvZyhcImluZGljYXRvci5idXN5IGNoYW5nZWQgdG86IFwiICsgaW5kaWNhdG9yLmJ1c3kpO1xuICB9XG59XG4iXX0=