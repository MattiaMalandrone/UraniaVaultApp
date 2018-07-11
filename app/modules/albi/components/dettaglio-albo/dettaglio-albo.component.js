"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var services_1 = require("~/modules/albi/services");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var operators_1 = require("rxjs/operators");
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
        // this.router
        //       .events
        //       .pipe(filter(evt => evt instanceof NavigationStart))
        //       .subscribe((routerEvent: Event) =>  {
        //         console.log('da DETTAGLIO a LISTA');
        //         this.albiService.updateAlbo(this.albo._id, this.selectedStato).subscribe();
        //       });
        // const obsRouteNavigation = this.router.events.pipe(filter(evt => evt instanceof NavigationStart));
        // const updateAlbo = this.albiService.updateAlbo(this.albo._id, this.selectedStato);
        // const obs = obsRouteNavigation.pipe(flatMap(() => updateAlbo));
        // obs.subscribe(res => {
        //   console.log("----------------");
        //   console.log("obs subscribe...");
        //   console.log(res);
        //   console.log("----------------");
        // });
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
    DettaglioAlboComponent.prototype.prev = function (numeroAlbo) {
        var _this = this;
        this.loader.show();
        this.numeroAlbo = numeroAlbo;
        this.albiService.getAlbo(numeroAlbo).subscribe(function (albo) {
            _this.albo = albo;
            _this.setStatus(albo);
            _this.selectedIndex = parseInt(albo.stato);
            _this.loader.hide();
        });
    };
    /**
     *
     */
    DettaglioAlboComponent.prototype.next = function (numeroAlbo) {
        var _this = this;
        this.loader.show();
        this.numeroAlbo = numeroAlbo;
        this.albiService.getAlbo(numeroAlbo).subscribe(function (albo) {
            _this.albo = albo;
            _this.setStatus(albo);
            _this.selectedIndex = parseInt(albo.stato);
            _this.loader.hide();
        });
    };
    /**
     *
     */
    DettaglioAlboComponent.prototype.canDeactivate = function () {
        return this.albiService
            .updateAlbo(this.albo._id, this.selectedStato)
            .pipe(operators_1.map(function (x) {
            return false;
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0dGFnbGlvLWFsYm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0dGFnbGlvLWFsYm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBR3VCO0FBQ3ZCLDBDQUFnRztBQUNoRyxvREFBc0Q7QUFFdEQsaUZBQWtFO0FBRWxFLDRDQUFxRTtBQWFyRTtJQVdFLGdDQUFvQixLQUFxQixFQUNyQixXQUF3QixFQUN4QixNQUFjO1FBRmQsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVRsQyxVQUFLLEdBQVUsRUFBRSxDQUFDO1FBQ2xCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsa0JBQWEsR0FBVyxDQUFDLENBQUM7UUFDMUIsZ0JBQVcsR0FBVyxPQUFPLENBQUM7SUFNUSxDQUFDO0lBRXZDOztPQUVHO0lBQ0gseUNBQVEsR0FBUjtRQUFBLGlCQTBDQztRQXpDQyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFFckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGlEQUFnQixFQUFFLENBQUM7UUFFckMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUvQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDLFNBQVMsQ0FBRSxVQUFDLEtBQVk7b0NBRS9DLENBQUM7Z0JBRVAsSUFBTSxLQUFLLEdBQVE7b0JBQ2pCLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxD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QUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDbEQsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyQixLQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNILDhDQUFhLEdBQWI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVc7YUFDVixVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQzthQUM3QyxJQUFJLENBQ0gsZUFBRyxDQUFDLFVBQUEsQ0FBQztZQUNILE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ2hCLENBQUM7SUE3SFUsc0JBQXNCO1FBTmxDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixXQUFXLEVBQUUsaUNBQWlDO1lBQzlDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO1NBQzlDLENBQUM7eUNBWTJCLHVCQUFjO1lBQ1Isc0JBQVc7WUFDaEIsZUFBTTtPQWJ2QixzQkFBc0IsQ0E4SGxDO0lBQUQsNkJBQUM7Q0FBQSxBQTlIRCxJQThIQztBQTlIWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIsIEV2ZW50LCBOYXZpZ2F0aW9uRW5kLCBOYXZpZ2F0aW9uU3RhcnQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWxiaVNlcnZpY2UgfSBmcm9tICd+L21vZHVsZXMvYWxiaS9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBMaXN0UGlja2VyIH0gZnJvbSBcInVpL2xpc3QtcGlja2VyXCI7XG5pbXBvcnQgeyBMb2FkaW5nSW5kaWNhdG9yIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1sb2FkaW5nLWluZGljYXRvclwiO1xuaW1wb3J0IHsgb2YsIE9ic2VydmFibGUsIHBpcGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZsYXRNYXAsIGZpbHRlciwgbWFwLCB0aHJvdHRsZVRpbWUgIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbnRlcmZhY2UgU3RhdGkge1xuICBrZXk6IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLWRldHRhZ2xpby1hbGJvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RldHRhZ2xpby1hbGJvLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGV0dGFnbGlvLWFsYm8uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERldHRhZ2xpb0FsYm9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGFsYm86IGFueTtcbiAgbnVtZXJvQWxibzogbnVtYmVyO1xuICBzdGF0aTogYW55W10gPSBbXTtcbiAgaXRlbXM6IG9iamVjdCA9IHt9O1xuICBzZWxlY3RlZEluZGV4OiBudW1iZXIgPSAwO1xuICBzdGF0dXNDb2xvcjogc3RyaW5nID0gXCJ3aGl0ZVwiO1xuICBsb2FkZXI6IGFueTtcbiAgc2VsZWN0ZWRTdGF0bzogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICBwcml2YXRlIGFsYmlTZXJ2aWNlOiBBbGJpU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZygnaW5zaWRlIGRldHRhZ2xpbyBhbGJvJyk7XG5cbiAgICB0aGlzLmxvYWRlciA9IG5ldyBMb2FkaW5nSW5kaWNhdG9yKCk7XG5cbiAgICB0aGlzLmFsYm8gPSB0aGlzLnJvdXRlLnNuYXBzaG90LmRhdGFbJ2FsYm9SZXNvbHZlZCddO1xuICAgIHRoaXMuc2V0U3RhdHVzKHRoaXMuYWxibyk7XG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gcGFyc2VJbnQodGhpcy5hbGJvLnN0YXRvKTtcblxuICAgIHRoaXMuYWxiaVNlcnZpY2UuZ2V0TGlzdGFTdGF0aSgpLnN1YnNjcmliZSggKHN0YXRpOiBhbnlbXSkgPT4ge1xuXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3RhdGkubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICBjb25zdCBzdGF0bzogYW55ID0ge1xuICAgICAgICAgIHZhbHVlOiBzdGF0aVtpXS5rZXksXG4gICAgICAgICAgbmFtZTogc3RhdGlbaV0udmFsdWUsXG4gICAgICAgICAgdG9TdHJpbmc6ICgpID0+IHN0YXRpW2ldLnZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0YXRpLnB1c2goc3RhdG8pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gdGhpcy5yb3V0ZXJcbiAgICAvLyAgICAgICAuZXZlbnRzXG4gICAgLy8gICAgICAgLnBpcGUoZmlsdGVyKGV2dCA9PiBldnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQpKVxuICAgIC8vICAgICAgIC5zdWJzY3JpYmUoKHJvdXRlckV2ZW50OiBFdmVudCkgPT4gIHtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdkYSBERVRUQUdMSU8gYSBMSVNUQScpO1xuICAgIC8vICAgICAgICAgdGhpcy5hbGJpU2VydmljZS51cGRhdGVBbGJvKHRoaXMuYWxiby5faWQsIHRoaXMuc2VsZWN0ZWRTdGF0bykuc3Vic2NyaWJlKCk7XG4gICAgLy8gICAgICAgfSk7XG5cbiAgICAvLyBjb25zdCBvYnNSb3V0ZU5hdmlnYXRpb24gPSB0aGlzLnJvdXRlci5ldmVudHMucGlwZShmaWx0ZXIoZXZ0ID0+IGV2dCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCkpO1xuICAgIC8vIGNvbnN0IHVwZGF0ZUFsYm8gPSB0aGlzLmFsYmlTZXJ2aWNlLnVwZGF0ZUFsYm8odGhpcy5hbGJvLl9pZCwgdGhpcy5zZWxlY3RlZFN0YXRvKTtcblxuICAgIC8vIGNvbnN0IG9icyA9IG9ic1JvdXRlTmF2aWdhdGlvbi5waXBlKGZsYXRNYXAoKCkgPT4gdXBkYXRlQWxibykpO1xuXG4gICAgLy8gb2JzLnN1YnNjcmliZShyZXMgPT4ge1xuICAgIC8vICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tXCIpO1xuICAgIC8vICAgY29uc29sZS5sb2coXCJvYnMgc3Vic2NyaWJlLi4uXCIpO1xuICAgIC8vICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLVwiKTtcbiAgICAvLyB9KTtcbiAgfVxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGFyZ3NcbiAgICovXG4gIHNlbGVjdGVkSW5kZXhDaGFuZ2VkKGFyZ3MpIHtcbiAgICB0aGlzLmxvYWRlci5zaG93KCk7XG4gICAgdGhpcy5zZWxlY3RlZFN0YXRvID0gPExpc3RQaWNrZXI+YXJncy5vYmplY3Quc2VsZWN0ZWRJbmRleDtcbiAgICB0aGlzLmFsYmlTZXJ2aWNlLnVwZGF0ZUFsYm8odGhpcy5hbGJvLl9pZCwgdGhpcy5zZWxlY3RlZFN0YXRvKS5zdWJzY3JpYmUociA9PiB7XG4gICAgICB0aGlzLmxvYWRlci5oaWRlKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGFsYm9cbiAgICovXG4gIHByaXZhdGUgc2V0U3RhdHVzKGFsYm8pIHtcbiAgICBzd2l0Y2goYWxiby5zdGF0bykge1xuICAgICAgY2FzZSAwIDogdGhpcy5zdGF0dXNDb2xvciA9ICdsaWdodHJlZCc7IGJyZWFrO1xuICAgICAgY2FzZSAxIDogdGhpcy5zdGF0dXNDb2xvciA9ICdsaWdodGdyZWVuJzsgYnJlYWs7XG4gICAgICBjYXNlIDIgOiB0aGlzLnN0YXR1c0NvbG9yID0gJ2xpZ2h0eWVsbG93JzsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiB0aGlzLnN0YXR1c0NvbG9yID0gJ3doaXRlJzsgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBwcmV2KG51bWVyb0FsYm8pIHtcbiAgICB0aGlzLmxvYWRlci5zaG93KCk7XG4gICAgdGhpcy5udW1lcm9BbGJvID0gbnVtZXJvQWxibztcbiAgICB0aGlzLmFsYmlTZXJ2aWNlLmdldEFsYm8obnVtZXJvQWxibykuc3Vic2NyaWJlKChhbGJvKSA9PiB7XG4gICAgICB0aGlzLmFsYm8gPSBhbGJvO1xuICAgICAgdGhpcy5zZXRTdGF0dXMoYWxibyk7XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBwYXJzZUludChhbGJvLnN0YXRvKTtcbiAgICAgIHRoaXMubG9hZGVyLmhpZGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgbmV4dChudW1lcm9BbGJvKSB7XG4gICAgdGhpcy5sb2FkZXIuc2hvdygpO1xuICAgIHRoaXMubnVtZXJvQWxibyA9IG51bWVyb0FsYm87XG4gICAgdGhpcy5hbGJpU2VydmljZS5nZXRBbGJvKG51bWVyb0FsYm8pLnN1YnNjcmliZSgoYWxibykgPT4ge1xuICAgICAgdGhpcy5hbGJvID0gYWxibztcbiAgICAgIHRoaXMuc2V0U3RhdHVzKGFsYm8pO1xuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gcGFyc2VJbnQoYWxiby5zdGF0byk7XG4gICAgICB0aGlzLmxvYWRlci5oaWRlKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIGNhbkRlYWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuPiAge1xuICAgIHJldHVybiB0aGlzLmFsYmlTZXJ2aWNlXG4gICAgICAgICAgICAgICAgLnVwZGF0ZUFsYm8odGhpcy5hbGJvLl9pZCwgdGhpcy5zZWxlY3RlZFN0YXRvKVxuICAgICAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgICAgbWFwKHggPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gIH1cbn1cbiJdfQ==