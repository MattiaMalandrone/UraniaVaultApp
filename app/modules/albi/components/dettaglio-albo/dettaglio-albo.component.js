"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var services_1 = require("~/modules/albi/services");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var DettaglioAlboComponent = /** @class */ (function () {
    function DettaglioAlboComponent(route, albiService, router) {
        this.route = route;
        this.albiService = albiService;
        this.router = router;
        this.stati = [];
        this.items = {};
        this.selectedIndex = 0;
        this.statusColor = "white";
    }
    /**
     *
     */
    DettaglioAlboComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('inside dettaglio albo');
        this.loader = new nativescript_loading_indicator_1.LoadingIndicator();
        this.albo = this.route.snapshot.data['alboResolved'];
        this.setStatus(this.albo);
        this.selectedIndex = parseInt(this.albo.stato);
        this.numeroAlbo = this.albo.numero;
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
        var _this = this;
        this.loader.show();
        this.selectedStato = args.object.selectedIndex;
        this.albiService.updateAlbo(this.albo._id, this.selectedStato).subscribe(function (r) {
            _this.loader.hide();
        });
    };
    /**
     *
     * @param albo
     */
    DettaglioAlboComponent.prototype.setStatus = function (albo) {
        switch (albo.stato) {
            case 0:
                this.statusColor = 'lightred';
                break;
            case 1:
                this.statusColor = 'lightgreen';
                break;
            case 2:
                this.statusColor = 'lightyellow';
                break;
            default:
                this.statusColor = 'white';
                break;
        }
    };
    /**
     *
     */
    DettaglioAlboComponent.prototype.prev = function () {
        var _this = this;
        this.loader.show();
        console.log('PREV A: ', this.numeroAlbo);
        this.numeroAlbo = this.numeroAlbo - 1;
        console.log('PREV B: ', this.numeroAlbo);
        this.albiService.getAlbo(this.numeroAlbo).subscribe(function (albo) {
            _this.albo = albo;
            _this.setStatus(albo);
            _this.selectedIndex = parseInt(albo.stato);
            _this.loader.hide();
        });
    };
    /**
     *
     */
    DettaglioAlboComponent.prototype.next = function () {
        var _this = this;
        this.loader.show();
        console.log('NEXT A: ', this.numeroAlbo);
        this.numeroAlbo = this.numeroAlbo + 1;
        console.log('NEXT B ', this.numeroAlbo);
        this.albiService.getAlbo(this.numeroAlbo).subscribe(function (albo) {
            _this.albo = albo;
            _this.setStatus(albo);
            _this.selectedIndex = parseInt(albo.stato);
            _this.loader.hide();
        });
    };
    DettaglioAlboComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-dettaglio-albo',
            templateUrl: './dettaglio-albo.component.html',
            styleUrls: ['./dettaglio-albo.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            services_1.AlbiService,
            router_1.Router])
    ], DettaglioAlboComponent);
    return DettaglioAlboComponent;
}());
exports.DettaglioAlboComponent = DettaglioAlboComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0dGFnbGlvLWFsYm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0dGFnbGlvLWFsYm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBR3VCO0FBQ3ZCLDBDQUFnRztBQUNoRyxvREFBc0Q7QUFFdEQsaUZBQWtFO0FBZWxFO0lBV0UsZ0NBQW9CLEtBQXFCLEVBQ3JCLFdBQXdCLEVBQ3hCLE1BQWM7UUFGZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBVGxDLFVBQUssR0FBVSxFQUFFLENBQUM7UUFDbEIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixrQkFBYSxHQUFXLENBQUMsQ0FBQztRQUMxQixnQkFBVyxHQUFXLE9BQU8sQ0FBQztJQU1RLENBQUM7SUFFdkM7O09BRUc7SUFDSCx5Q0FBUSxHQUFSO1FBQUEsaUJBc0JDO1FBckJDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUVyQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksaURBQWdCLEVBQUUsQ0FBQztRQUVyQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTLENBQUUsVUFBQyxLQUFZO29DQUUvQyxDQUFDO2dCQUVQLElBQU0s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Q0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBSTtZQUN2RCxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQWhHVSxzQkFBc0I7UUFObEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7U0FDOUMsQ0FBQzt5Q0FZMkIsdUJBQWM7WUFDUixzQkFBVztZQUNoQixlQUFNO09BYnZCLHNCQUFzQixDQWtHbEM7SUFBRCw2QkFBQztDQUFBLEFBbEdELElBa0dDO0FBbEdZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciwgRXZlbnQsIE5hdmlnYXRpb25FbmQsIE5hdmlnYXRpb25TdGFydCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBbGJpU2VydmljZSB9IGZyb20gJ34vbW9kdWxlcy9hbGJpL3NlcnZpY2VzJztcbmltcG9ydCB7IExpc3RQaWNrZXIgfSBmcm9tIFwidWkvbGlzdC1waWNrZXJcIjtcbmltcG9ydCB7IExvYWRpbmdJbmRpY2F0b3IgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWxvYWRpbmctaW5kaWNhdG9yXCI7XG5pbXBvcnQgeyBvZiwgT2JzZXJ2YWJsZSwgcGlwZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmxhdE1hcCwgZmlsdGVyLCBtYXAsIHRocm90dGxlVGltZSAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmludGVyZmFjZSBTdGF0aSB7XG4gIGtleTogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtZGV0dGFnbGlvLWFsYm8nLFxuICB0ZW1wbGF0ZVVybDogJy4vZGV0dGFnbGlvLWFsYm8uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kZXR0YWdsaW8tYWxiby5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGV0dGFnbGlvQWxib0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgYWxibzogYW55O1xuICBudW1lcm9BbGJvOiBudW1iZXI7XG4gIHN0YXRpOiBhbnlbXSA9IFtdO1xuICBpdGVtczogb2JqZWN0ID0ge307XG4gIHNlbGVjdGVkSW5kZXg6IG51bWJlciA9IDA7XG4gIHN0YXR1c0NvbG9yOiBzdHJpbmcgPSBcIndoaXRlXCI7XG4gIGxvYWRlcjogYW55O1xuICBzZWxlY3RlZFN0YXRvOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgIHByaXZhdGUgYWxiaVNlcnZpY2U6IEFsYmlTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKCdpbnNpZGUgZGV0dGFnbGlvIGFsYm8nKTtcblxuICAgIHRoaXMubG9hZGVyID0gbmV3IExvYWRpbmdJbmRpY2F0b3IoKTtcblxuICAgIHRoaXMuYWxibyA9IHRoaXMucm91dGUuc25hcHNob3QuZGF0YVsnYWxib1Jlc29sdmVkJ107XG4gICAgdGhpcy5zZXRTdGF0dXModGhpcy5hbGJvKTtcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBwYXJzZUludCh0aGlzLmFsYm8uc3RhdG8pO1xuICAgIHRoaXMubnVtZXJvQWxibyA9IHRoaXMuYWxiby5udW1lcm87XG4gICAgdGhpcy5hbGJpU2VydmljZS5nZXRMaXN0YVN0YXRpKCkuc3Vic2NyaWJlKCAoc3RhdGk6IGFueVtdKSA9PiB7XG5cbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzdGF0aS5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgIGNvbnN0IHN0YXRvOiBhbnkgPSB7XG4gICAgICAgICAgdmFsdWU6IHN0YXRpW2ldLmtleSxcbiAgICAgICAgICBuYW1lOiBzdGF0aVtpXS52YWx1ZSxcbiAgICAgICAgICB0b1N0cmluZzogKCkgPT4gc3RhdGlbaV0udmFsdWVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RhdGkucHVzaChzdGF0byk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBhcmdzXG4gICAqL1xuICBzZWxlY3RlZEluZGV4Q2hhbmdlZChhcmdzKSB7XG4gICAgdGhpcy5sb2FkZXIuc2hvdygpO1xuICAgIHRoaXMuc2VsZWN0ZWRTdGF0byA9IDxMaXN0UGlja2VyPmFyZ3Mub2JqZWN0LnNlbGVjdGVkSW5kZXg7XG4gICAgdGhpcy5hbGJpU2VydmljZS51cGRhdGVBbGJvKHRoaXMuYWxiby5faWQsIHRoaXMuc2VsZWN0ZWRTdGF0bykuc3Vic2NyaWJlKHIgPT4ge1xuICAgICAgdGhpcy5sb2FkZXIuaGlkZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBhbGJvXG4gICAqL1xuICBwcml2YXRlIHNldFN0YXR1cyhhbGJvKSB7XG4gICAgc3dpdGNoKGFsYm8uc3RhdG8pIHtcbiAgICAgIGNhc2UgMCA6IHRoaXMuc3RhdHVzQ29sb3IgPSAnbGlnaHRyZWQnOyBicmVhaztcbiAgICAgIGNhc2UgMSA6IHRoaXMuc3RhdHVzQ29sb3IgPSAnbGlnaHRncmVlbic7IGJyZWFrO1xuICAgICAgY2FzZSAyIDogdGhpcy5zdGF0dXNDb2xvciA9ICdsaWdodHllbGxvdyc7IGJyZWFrO1xuICAgICAgZGVmYXVsdDogdGhpcy5zdGF0dXNDb2xvciA9ICd3aGl0ZSc7IGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgcHJldigpIHtcbiAgICB0aGlzLmxvYWRlci5zaG93KCk7XG4gICAgY29uc29sZS5sb2coJ1BSRVYgQTogJyAsIHRoaXMubnVtZXJvQWxibyk7XG4gICAgdGhpcy5udW1lcm9BbGJvID0gdGhpcy5udW1lcm9BbGJvIC0gMTtcbiAgICBjb25zb2xlLmxvZygnUFJFViBCOiAnICwgdGhpcy5udW1lcm9BbGJvKTtcbiAgICB0aGlzLmFsYmlTZXJ2aWNlLmdldEFsYm8odGhpcy5udW1lcm9BbGJvKS5zdWJzY3JpYmUoKGFsYm8pID0+IHtcbiAgICAgIHRoaXMuYWxibyA9IGFsYm87XG4gICAgICB0aGlzLnNldFN0YXR1cyhhbGJvKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHBhcnNlSW50KGFsYm8uc3RhdG8pO1xuICAgICAgdGhpcy5sb2FkZXIuaGlkZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBuZXh0KCkge1xuICAgIHRoaXMubG9hZGVyLnNob3coKTtcbiAgICBjb25zb2xlLmxvZygnTkVYVCBBOiAnICwgdGhpcy5udW1lcm9BbGJvKTtcbiAgICB0aGlzLm51bWVyb0FsYm8gPSB0aGlzLm51bWVyb0FsYm8gKyAxO1xuICAgIGNvbnNvbGUubG9nKCdORVhUIEIgJyAsIHRoaXMubnVtZXJvQWxibyk7XG4gICAgdGhpcy5hbGJpU2VydmljZS5nZXRBbGJvKHRoaXMubnVtZXJvQWxibykuc3Vic2NyaWJlKChhbGJvKSA9PiB7XG4gICAgICB0aGlzLmFsYm8gPSBhbGJvO1xuICAgICAgdGhpcy5zZXRTdGF0dXMoYWxibyk7XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBwYXJzZUludChhbGJvLnN0YXRvKTtcbiAgICAgIHRoaXMubG9hZGVyLmhpZGUoKTtcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=