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
        if (!_.isEmpty(this.currentSearchTxt))
            return;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGEtYWxiaS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0YS1hbGJpLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxvREFBc0Q7QUFDdEQsMENBQWtIO0FBRWxILGlGQUFrRTtBQUNsRSwwQkFBNEI7QUFFNUIsNENBQWdFO0FBQ2hFLDZCQUErQjtBQUUvQjtJQUNFLGNBQW1CLE1BQWMsRUFBUyxLQUFhO1FBQXBDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFRO0lBQUksQ0FBQztJQUM5RCxXQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFRRDtJQWVFLDRCQUFvQixXQUF3QixFQUN4QixLQUFxQixFQUNyQixNQUFjO1FBRmQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQWIzQixTQUFJLEdBQWdCLEVBQUUsQ0FBQztRQUN2QixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUloQyxnQkFBVyxHQUFHLElBQUksY0FBTyxFQUFVLENBQUM7UUFDN0IsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixxQkFBZ0IsR0FBVyxFQUFFLENBQUM7SUFNQyxDQUFDO0lBRXZDOztPQUVHO0lBQ0gscUNBQVEsR0FBUjtRQUFBLGlCQWNDO1FBYkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGlEQUFnQixFQUFFLENBQUM7UUFFckMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFckQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNHLGtCQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLFlBQVkseUJBQWdCLEVBQTdCLENBQTZCLENBQUMsRUFD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QjtZQUMxQixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzFDLENBQUM7eUNBZ0JpQyxzQkFBVztZQUNqQix1QkFBYztZQUNiLGVBQU07T0FqQnZCLGtCQUFrQixDQW9KOUI7SUFBRCx5QkFBQztDQUFBLEFBcEpELElBb0pDO0FBcEpZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGJpU2VydmljZSB9IGZyb20gJ34vbW9kdWxlcy9hbGJpL3NlcnZpY2VzJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIsIEV2ZW50LCBOYXZpZ2F0aW9uRW5kLCBOYXZpZ2F0aW9uU3RhcnQsIFJvdXRlc1JlY29nbml6ZWQgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xuaW1wb3J0IHsgTG9hZGluZ0luZGljYXRvciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbG9hZGluZy1pbmRpY2F0b3JcIjtcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIsIHBhaXJ3aXNlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XG5cbmNsYXNzIEFsYm8ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbnVtZXJvOiBudW1iZXIsIHB1YmxpYyB0aXRsZTogc3RyaW5nKSB7IH1cbn1cblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLWxpc3RhLWFsYmknLFxuICB0ZW1wbGF0ZVVybDogJy4vbGlzdGEtYWxiaS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xpc3RhLWFsYmkuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExpc3RhQWxiaUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgbG9hZGVyOiBhbnk7XG5cbiAgcHVibGljIGFsYmk6IEFycmF5PEFsYm8+ID0gW107XG4gIHB1YmxpYyBjdXJyZW50QWxiaTogQWxib1tdID0gW107XG5cbiAgcHJpdmF0ZSBsYXN0QWxib051bWVybzogYW55O1xuXG4gIHNlYXJjaFRlcm1zID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuICBwdWJsaWMgc2VhcmNoVHh0OiBzdHJpbmcgPSBcIlwiO1xuICBwdWJsaWMgY3VycmVudFNlYXJjaFR4dDogc3RyaW5nID0gXCJcIjtcblxuICBwcmV2aW91c1VybDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWxiaVNlcnZpY2U6IEFsYmlTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxvYWRlciA9IG5ldyBMb2FkaW5nSW5kaWNhdG9yKCk7XG5cbiAgICB0aGlzLmFsYmkgPSB0aGlzLnJvdXRlLnNuYXBzaG90LmRhdGFbJ2FsYmlSZXNvbHZlZCddO1xuXG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIoZSA9PiBlIGluc3RhbmNlb2YgUm91dGVzUmVjb2duaXplZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWlyd2lzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBhbnlbXSkgPT4gdGhpcy5yZWZyZXNoVXBkYXRlZEFsYm8oZXZlbnQpKTtcblxuICAgIHRoaXMuc2VhcmNoVGVybXNcbiAgICAgICAgICAgICAgICAgIC5waXBlKGRlYm91bmNlVGltZSgxNTAwKSlcbiAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5nZXRMaXN0KCkpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBldmVudFxuICAgKi9cbiAgcHVibGljIG9uTG9hZE1vcmVJdGVtcygpIHtcblxuICAgIGlmKCFfLmlzRW1wdHkodGhpcy5jdXJyZW50U2VhcmNoVHh0KSlcbiAgICAgIHJldHVybjtcblxuICAgIHRoaXMubG9hZGVyLnNob3coKTtcblxuICAgIGlmKHRoaXMuY3VycmVudEFsYmkgPT0gdGhpcy5hbGJpKVxuICAgICAgcmV0dXJuO1xuXG4gICAgdGhpcy5jdXJyZW50QWxiaSA9IHRoaXMuY3VycmVudEFsYmkuY29uY2F0KHRoaXMuYWxiaSk7XG5cbiAgICB0aGlzLmxhc3RBbGJvTnVtZXJvID0gXy5sYXN0KHRoaXMuY3VycmVudEFsYmkpLm51bWVybztcblxuICAgIGNvbnNvbGUubG9nKCdnZXRMaXN0IC0gb25Mb2FkTW9yZUl0ZW1zJyk7XG4gICAgdGhpcy5nZXRMaXN0KCk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGFyZ3NcbiAgICovXG4gIHB1YmxpYyBvblRleHRDaGFuZ2UoYXJncykge1xuICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPmFyZ3Mub2JqZWN0O1xuXG4gICAgdGhpcy5jdXJyZW50U2VhcmNoVHh0ID0gdGV4dEZpZWxkLnRleHQ7XG5cbiAgICBpZih0aGlzLnNlYXJjaFR4dCA9PSB0ZXh0RmllbGQudGV4dClcbiAgICAgIHJldHVybjtcblxuICAgIHRoaXMuYWxiaSA9IFtdO1xuXG4gICAgdGhpcy5zZWFyY2hUeHQgPSB0ZXh0RmllbGQudGV4dDtcbiAgICB0aGlzLmxhc3RBbGJvTnVtZXJvID0gMDtcblxuICAgIHRoaXMuc2VhcmNoVGVybXMubmV4dCh0ZXh0RmllbGQudGV4dCk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGFyZ3NcbiAgICovXG4gIHB1YmxpYyBvbkNsZWFyKGFyZ3MpIHtcbiAgICBjb25zb2xlLmxvZygnb24gY2xlYXInKTtcbiAgICB0aGlzLm9uVGV4dENoYW5nZShhcmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gYXJnc1xuICAgKi9cbiAgcHVibGljIG9uUmV0dXJuKGFyZ3MpIHtcbiAgICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD5hcmdzLm9iamVjdDtcbiAgICB0aGlzLnNlYXJjaFR4dCA9IHRleHRGaWVsZC50ZXh0O1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBwcml2YXRlIGdldExpc3QoKSB7XG4gICAgdGhpcy5hbGJpU2VydmljZVxuICAgICAgICAgIC5nZXRMaXN0KHRoaXMubGFzdEFsYm9OdW1lcm8sIHRoaXMuc2VhcmNoVHh0KVxuICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWxiaS5wdXNoLmFwcGx5KHRoaXMuYWxiaSwgcmVzKTtcbiAgICAgICAgICAgIHRoaXMubG9hZGVyLmhpZGUoKTtcbiAgICAgICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gYXJnc1xuICAgKi9cbiAgcHVibGljIGxvYWRlZFNCKGFyZ3MpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYXJncy5vYmplY3QpO1xuICAgICAgICBhcmdzLm9iamVjdC5kaXNtaXNzU29mdElucHV0KCk7XG4gICAgfSwgMjAwKVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBhbGJvTnVtZXJvXG4gICAqL1xuICBwdWJsaWMgZ29Ub0FsYm8oYWxib051bWVybzogbnVtYmVyKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2FsYmkvYWxib1wiLCBhbGJvTnVtZXJvXSk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIHByaXZhdGUgcmVmcmVzaFVwZGF0ZWRBbGJvKGV2ZW50KSB7XG4gICAgY29uc3QgdXJsQWZ0ZXJSZWRpcmVjdHMgPSBldmVudFswXS51cmxBZnRlclJlZGlyZWN0cztcblxuICAgIGlmKHVybEFmdGVyUmVkaXJlY3RzLmluZGV4T2YoJ2FsYm8vJykgPj0gMCkge1xuXG4gICAgICBjb25zdCBudW1lcm9BbGJvVXBkYXRlZCA9IF8ubGFzdChfLnNwbGl0KHVybEFmdGVyUmVkaXJlY3RzLCAnLycpKTtcblxuICAgICAgY29uc29sZS5sb2coJ251bWVyb0FsYm9VcGRhdGVkOiAnLCBudW1lcm9BbGJvVXBkYXRlZCk7XG5cbiAgICAgIHRoaXMuYWxiaVNlcnZpY2UuZ2V0QWxibyhudW1lcm9BbGJvVXBkYXRlZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGFsYm9VcGRhdGVkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvdW5kSW5kZXggPSB0aGlzLmFsYmkuZmluZEluZGV4KHggPT4geC5udW1lcm8gPT0gbnVtZXJvQWxib1VwZGF0ZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGJpW2ZvdW5kSW5kZXhdID0gYWxib1VwZGF0ZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=