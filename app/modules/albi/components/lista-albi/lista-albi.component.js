"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var services_1 = require("~/modules/albi/services");
var router_1 = require("@angular/router");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var _ = require("lodash");
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
        this.loader = new nativescript_loading_indicator_1.LoadingIndicator();
        this.albi = this.route.snapshot.data['albiResolved'];
        this.router.events.pipe(operators_1.filter(function (e) { return e instanceof router_1.RoutesRecognized; }), operators_1.pairwise())
            .subscribe(function (event) { return _this.refreshUpdatedAlbo(event); });
        this.searchTerms
            .pipe(operators_1.debounceTime(1500))
            .subscribe(function () { return _this.getList(); });
    };
    /**
     *
     * @param event
     */
    ListaAlbiComponent.prototype.onLoadMoreItems = function () {
        this.loader.show();
        if (this.currentAlbi == this.albi)
            return;
        this.currentAlbi = this.currentAlbi.concat(this.albi);
        this.lastAlboNumero = _.last(this.currentAlbi).numero;
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
        this.lastAlboNumero = 0;
        this.searchTerms.next(textField.text);
    };
    /**
     *
     * @param args
     */
    ListaAlbiComponent.prototype.onClear = function (args) {
        console.log('on clear');
        this.onTextChange(args);
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
        this.albiService
            .getList(this.lastAlboNumero, this.searchTxt)
            .subscribe(function (res) {
            _this.albi.push.apply(_this.albi, res);
            _this.loader.hide();
        });
    };
    /**
     *
     * @param args
     */
    ListaAlbiComponent.prototype.loadedSB = function (args) {
        setTimeout(function () {
            console.log(args.object);
            args.object.dismissSoftInput();
        }, 200);
    };
    /**
     *
     * @param alboNumero
     */
    ListaAlbiComponent.prototype.goToAlbo = function (alboNumero) {
        this.router.navigate(["/albi/albo", alboNumero]);
    };
    /**
     *
     */
    ListaAlbiComponent.prototype.refreshUpdatedAlbo = function (event) {
        var _this = this;
        var urlAfterRedirects = event[0].urlAfterRedirects;
        if (urlAfterRedirects.indexOf('albo/') >= 0) {
            var numeroAlboUpdated_1 = _.last(_.split(urlAfterRedirects, '/'));
            console.log('numeroAlboUpdated: ', numeroAlboUpdated_1);
            this.albiService.getAlbo(numeroAlboUpdated_1)
                .subscribe(function (alboUpdated) {
                var foundIndex = _this.albi.findIndex(function (x) { return x.numero == numeroAlboUpdated_1; });
                _this.albi[foundIndex] = alboUpdated;
            });
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGEtYWxiaS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0YS1hbGJpLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxvREFBc0Q7QUFDdEQsMENBQWtIO0FBRWxILGlGQUFrRTtBQUNsRSwwQkFBNEI7QUFFNUIsNENBQWdFO0FBQ2hFLDZCQUErQjtBQUUvQjtJQUNFLGNBQW1CLE1BQWMsRUFBUyxLQUFhO1FBQXBDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFRO0lBQUksQ0FBQztJQUM5RCxXQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFRRDtJQWVFLDRCQUFvQixXQUF3QixFQUN4QixLQUFxQixFQUNyQixNQUFjO1FBRmQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQWIzQixTQUFJLEdBQWdCLEVBQUUsQ0FBQztRQUN2QixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUloQyxnQkFBVyxHQUFHLElBQUksY0FBTyxFQUFVLENBQUM7UUFDN0IsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixxQkFBZ0IsR0FBVyxFQUFFLENBQUM7SUFNQyxDQUFDO0lBRXZDOztPQUVHO0lBQ0gscUNBQVEsR0FBUjtRQUFBLGlCQWNDO1FBYkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGlEQUFnQixFQUFFLENBQUM7UUFFckMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFckQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNHLGtCQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLFlBQVkseUJBQWdCLEVBQTdCLENBQTZCLENBQUMsRUFD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LHVCQUFjO1lBQ2IsZUFBTTtPQWpCdkIsa0JBQWtCLENBaUo5QjtJQUFELHlCQUFDO0NBQUEsQUFqSkQsSUFpSkM7QUFqSlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsYmlTZXJ2aWNlIH0gZnJvbSAnfi9tb2R1bGVzL2FsYmkvc2VydmljZXMnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciwgRXZlbnQsIE5hdmlnYXRpb25FbmQsIE5hdmlnYXRpb25TdGFydCwgUm91dGVzUmVjb2duaXplZCB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XG5pbXBvcnQgeyBMb2FkaW5nSW5kaWNhdG9yIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1sb2FkaW5nLWluZGljYXRvclwiO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbHRlciwgcGFpcndpc2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcblxuY2xhc3MgQWxibyB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBudW1lcm86IG51bWJlciwgcHVibGljIHRpdGxlOiBzdHJpbmcpIHsgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtbGlzdGEtYWxiaScsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0YS1hbGJpLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdGEtYWxiaS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTGlzdGFBbGJpQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBsb2FkZXI6IGFueTtcblxuICBwdWJsaWMgYWxiaTogQXJyYXk8QWxibz4gPSBbXTtcbiAgcHVibGljIGN1cnJlbnRBbGJpOiBBbGJvW10gPSBbXTtcblxuICBwcml2YXRlIGxhc3RBbGJvTnVtZXJvOiBhbnk7XG5cbiAgc2VhcmNoVGVybXMgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG4gIHB1YmxpYyBzZWFyY2hUeHQ6IHN0cmluZyA9IFwiXCI7XG4gIHB1YmxpYyBjdXJyZW50U2VhcmNoVHh0OiBzdHJpbmcgPSBcIlwiO1xuXG4gIHByZXZpb3VzVXJsOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhbGJpU2VydmljZTogQWxiaVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubG9hZGVyID0gbmV3IExvYWRpbmdJbmRpY2F0b3IoKTtcblxuICAgIHRoaXMuYWxiaSA9IHRoaXMucm91dGUuc25hcHNob3QuZGF0YVsnYWxiaVJlc29sdmVkJ107XG5cbiAgICB0aGlzLnJvdXRlci5ldmVudHMucGlwZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcihlID0+IGUgaW5zdGFuY2VvZiBSb3V0ZXNSZWNvZ25pemVkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhaXJ3aXNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSgoZXZlbnQ6IGFueVtdKSA9PiB0aGlzLnJlZnJlc2hVcGRhdGVkQWxibyhldmVudCkpO1xuXG4gICAgdGhpcy5zZWFyY2hUZXJtc1xuICAgICAgICAgICAgICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDE1MDApKVxuICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmdldExpc3QoKSk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqL1xuICBwdWJsaWMgb25Mb2FkTW9yZUl0ZW1zKCkge1xuXG4gICAgdGhpcy5sb2FkZXIuc2hvdygpO1xuXG4gICAgaWYodGhpcy5jdXJyZW50QWxiaSA9PSB0aGlzLmFsYmkpXG4gICAgICByZXR1cm47XG5cbiAgICB0aGlzLmN1cnJlbnRBbGJpID0gdGhpcy5jdXJyZW50QWxiaS5jb25jYXQodGhpcy5hbGJpKTtcblxuICAgIHRoaXMubGFzdEFsYm9OdW1lcm8gPSBfLmxhc3QodGhpcy5jdXJyZW50QWxiaSkubnVtZXJvO1xuXG4gICAgY29uc29sZS5sb2coJ2dldExpc3QgLSBvbkxvYWRNb3JlSXRlbXMnKTtcbiAgICB0aGlzLmdldExpc3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gYXJnc1xuICAgKi9cbiAgcHVibGljIG9uVGV4dENoYW5nZShhcmdzKSB7XG4gICAgbGV0IHRleHRGaWVsZCA9IDxUZXh0RmllbGQ+YXJncy5vYmplY3Q7XG5cbiAgICB0aGlzLmN1cnJlbnRTZWFyY2hUeHQgPSB0ZXh0RmllbGQudGV4dDtcblxuICAgIGlmKHRoaXMuc2VhcmNoVHh0ID09IHRleHRGaWVsZC50ZXh0KVxuICAgICAgcmV0dXJuO1xuXG4gICAgdGhpcy5hbGJpID0gW107XG5cbiAgICB0aGlzLnNlYXJjaFR4dCA9IHRleHRGaWVsZC50ZXh0O1xuICAgIHRoaXMubGFzdEFsYm9OdW1lcm8gPSAwO1xuXG4gICAgdGhpcy5zZWFyY2hUZXJtcy5uZXh0KHRleHRGaWVsZC50ZXh0KTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gYXJnc1xuICAgKi9cbiAgcHVibGljIG9uQ2xlYXIoYXJncykge1xuICAgIGNvbnNvbGUubG9nKCdvbiBjbGVhcicpO1xuICAgIHRoaXMub25UZXh0Q2hhbmdlKGFyZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBhcmdzXG4gICAqL1xuICBwdWJsaWMgb25SZXR1cm4oYXJncykge1xuICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPmFyZ3Mub2JqZWN0O1xuICAgIHRoaXMuc2VhcmNoVHh0ID0gdGV4dEZpZWxkLnRleHQ7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIHByaXZhdGUgZ2V0TGlzdCgpIHtcbiAgICB0aGlzLmFsYmlTZXJ2aWNlXG4gICAgICAgICAgLmdldExpc3QodGhpcy5sYXN0QWxib051bWVybywgdGhpcy5zZWFyY2hUeHQpXG4gICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbGJpLnB1c2guYXBwbHkodGhpcy5hbGJpLCByZXMpO1xuICAgICAgICAgICAgdGhpcy5sb2FkZXIuaGlkZSgpO1xuICAgICAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBhcmdzXG4gICAqL1xuICBwdWJsaWMgbG9hZGVkU0IoYXJncykge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhhcmdzLm9iamVjdCk7XG4gICAgICAgIGFyZ3Mub2JqZWN0LmRpc21pc3NTb2Z0SW5wdXQoKTtcbiAgICB9LCAyMDApXG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGFsYm9OdW1lcm9cbiAgICovXG4gIHB1YmxpYyBnb1RvQWxibyhhbGJvTnVtZXJvOiBudW1iZXIpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvYWxiaS9hbGJvXCIsIGFsYm9OdW1lcm9dKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgcHJpdmF0ZSByZWZyZXNoVXBkYXRlZEFsYm8oZXZlbnQpIHtcbiAgICBjb25zdCB1cmxBZnRlclJlZGlyZWN0cyA9IGV2ZW50WzBdLnVybEFmdGVyUmVkaXJlY3RzO1xuXG4gICAgaWYodXJsQWZ0ZXJSZWRpcmVjdHMuaW5kZXhPZignYWxiby8nKSA+PSAwKSB7XG5cbiAgICAgIGNvbnN0IG51bWVyb0FsYm9VcGRhdGVkID0gXy5sYXN0KF8uc3BsaXQodXJsQWZ0ZXJSZWRpcmVjdHMsICcvJykpO1xuXG4gICAgICBjb25zb2xlLmxvZygnbnVtZXJvQWxib1VwZGF0ZWQ6ICcsIG51bWVyb0FsYm9VcGRhdGVkKTtcblxuICAgICAgdGhpcy5hbGJpU2VydmljZS5nZXRBbGJvKG51bWVyb0FsYm9VcGRhdGVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoYWxib1VwZGF0ZWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm91bmRJbmRleCA9IHRoaXMuYWxiaS5maW5kSW5kZXgoeCA9PiB4Lm51bWVybyA9PSBudW1lcm9BbGJvVXBkYXRlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsYmlbZm91bmRJbmRleF0gPSBhbGJvVXBkYXRlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==