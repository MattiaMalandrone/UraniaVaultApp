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
        this.statusColor = "white";
    }
    /**
     *
     */
    DettaglioAlboComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('inside dettaglio albo');
        this.numeroAlbo = +this.route.snapshot.params.numero;
        this.albiService.getAlbo(this.numeroAlbo).subscribe(function (albo) {
            _this.albo = albo;
            _this.setStatus(albo);
            _this.selectedIndex = parseInt(albo.status);
        });
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
        var picker = args.object;
        var stato = picker.selectedIndex;
        if (!this.albo)
            return;
        console.log("AlboId:", this.albo._id);
        console.log("Stato:", stato);
        this.albiService.updateAlbo(this.albo._id, stato).subscribe(function (res) { return _this.selectedIndex = stato; });
    };
    /**
     *
     * @param albo
     */
    DettaglioAlboComponent.prototype.setStatus = function (albo) {
        switch (albo.status) {
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
        this.numeroAlbo = numeroAlbo;
        this.albiService.getAlbo(numeroAlbo).subscribe(function (albo) {
            _this.albo = albo;
            _this.setStatus(albo);
            console.log(albo.status);
            _this.selectedIndex = parseInt(albo.status);
        });
    };
    /**
     *
     */
    DettaglioAlboComponent.prototype.next = function (numeroAlbo) {
        var _this = this;
        this.numeroAlbo = numeroAlbo;
        this.albiService.getAlbo(numeroAlbo).subscribe(function (albo) {
            _this.albo = albo;
            _this.setStatus(albo);
            console.log(albo.status);
            _this.selectedIndex = parseInt(albo.status);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0dGFnbGlvLWFsYm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0dGFnbGlvLWFsYm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUNqRCxvREFBc0Q7QUFnQnREO0lBU0UsZ0NBQW9CLEtBQXFCLEVBQVUsV0FBd0I7UUFBdkQsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUwzRSxVQUFLLEdBQVUsRUFBRSxDQUFDO1FBQ2xCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsa0JBQWEsR0FBVyxDQUFDLENBQUM7UUFDMUIsZ0JBQVcsR0FBVyxPQUFPLENBQUM7SUFFa0QsQ0FBQztJQUVqRjs7T0FFRztJQUNILHlDQUFRLEdBQVI7UUFBQSxpQkF3QkM7UUF2QkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBRXJELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFJO1lBQ3ZELEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckIsS0FBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTLENBQUUsVUFBQyxLQUFZO29DQUUvQyxDQUFDO2dCQUVQLElBQU0sS0FBSyxHQUFRO29CQUNqQixLQUFLLEVBQUUsS0FBSyxDQUFD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QztZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN6QixLQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBOUZVLHNCQUFzQjtRQU5sQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztTQUM5QyxDQUFDO3lDQVUyQix1QkFBYyxFQUF1QixzQkFBVztPQVRoRSxzQkFBc0IsQ0ErRmxDO0lBQUQsNkJBQUM7Q0FBQSxBQS9GRCxJQStGQztBQS9GWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWxiaVNlcnZpY2UgfSBmcm9tICd+L21vZHVsZXMvYWxiaS9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBMaXN0UGlja2VyIH0gZnJvbSBcInVpL2xpc3QtcGlja2VyXCI7XG5cblxuaW50ZXJmYWNlIFN0YXRpIHtcbiAga2V5OiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1kZXR0YWdsaW8tYWxibycsXG4gIHRlbXBsYXRlVXJsOiAnLi9kZXR0YWdsaW8tYWxiby5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RldHRhZ2xpby1hbGJvLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEZXR0YWdsaW9BbGJvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBhbGJvOiBhbnk7XG4gIG51bWVyb0FsYm86IG51bWJlcjtcbiAgc3RhdGk6IGFueVtdID0gW107XG4gIGl0ZW1zOiBvYmplY3QgPSB7fTtcbiAgc2VsZWN0ZWRJbmRleDogbnVtYmVyID0gMDtcbiAgc3RhdHVzQ29sb3I6IHN0cmluZyA9IFwid2hpdGVcIjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBhbGJpU2VydmljZTogQWxiaVNlcnZpY2UsKSB7IH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKCdpbnNpZGUgZGV0dGFnbGlvIGFsYm8nKTtcbiAgICB0aGlzLm51bWVyb0FsYm8gPSArdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMubnVtZXJvO1xuXG4gICAgdGhpcy5hbGJpU2VydmljZS5nZXRBbGJvKHRoaXMubnVtZXJvQWxibykuc3Vic2NyaWJlKChhbGJvKSA9PiB7XG4gICAgICB0aGlzLmFsYm8gPSBhbGJvO1xuICAgICAgdGhpcy5zZXRTdGF0dXMoYWxibyk7XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBwYXJzZUludChhbGJvLnN0YXR1cyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFsYmlTZXJ2aWNlLmdldExpc3RhU3RhdGkoKS5zdWJzY3JpYmUoIChzdGF0aTogYW55W10pID0+IHtcblxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHN0YXRpLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgY29uc3Qgc3RhdG86IGFueSA9IHtcbiAgICAgICAgICB2YWx1ZTogc3RhdGlbaV0ua2V5LFxuICAgICAgICAgIG5hbWU6IHN0YXRpW2ldLnZhbHVlLFxuICAgICAgICAgIHRvU3RyaW5nOiAoKSA9PiBzdGF0aVtpXS52YWx1ZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdGF0aS5wdXNoKHN0YXRvKTtcbiAgICAgIH1cblxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGFyZ3NcbiAgICovXG4gIHNlbGVjdGVkSW5kZXhDaGFuZ2VkKGFyZ3MpIHtcbiAgICBjb25zdCBwaWNrZXIgPSA8TGlzdFBpY2tlcj5hcmdzLm9iamVjdDtcbiAgICBjb25zdCBzdGF0byA9IHBpY2tlci5zZWxlY3RlZEluZGV4O1xuXG4gICAgaWYoIXRoaXMuYWxibylcbiAgICAgIHJldHVybjtcblxuICAgIGNvbnNvbGUubG9nKFwiQWxib0lkOlwiLCB0aGlzLmFsYm8uX2lkKTtcbiAgICBjb25zb2xlLmxvZyhcIlN0YXRvOlwiLCBzdGF0byk7XG5cbiAgICB0aGlzLmFsYmlTZXJ2aWNlLnVwZGF0ZUFsYm8odGhpcy5hbGJvLl9pZCwgc3RhdG8pLnN1YnNjcmliZShyZXMgPT4gdGhpcy5zZWxlY3RlZEluZGV4ID0gc3RhdG8pO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBhbGJvXG4gICAqL1xuICBzZXRTdGF0dXMoYWxibykge1xuICAgIHN3aXRjaChhbGJvLnN0YXR1cykge1xuICAgICAgY2FzZSAwIDogdGhpcy5zdGF0dXNDb2xvciA9ICdsaWdodHJlZCc7IGJyZWFrO1xuICAgICAgY2FzZSAxIDogdGhpcy5zdGF0dXNDb2xvciA9ICdsaWdodGdyZWVuJzsgYnJlYWs7XG4gICAgICBjYXNlIDIgOiB0aGlzLnN0YXR1c0NvbG9yID0gJ2xpZ2h0eWVsbG93JzsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiB0aGlzLnN0YXR1c0NvbG9yID0gJ3doaXRlJzsgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBwcmV2KG51bWVyb0FsYm8pIHtcbiAgICB0aGlzLm51bWVyb0FsYm8gPSBudW1lcm9BbGJvO1xuICAgIHRoaXMuYWxiaVNlcnZpY2UuZ2V0QWxibyhudW1lcm9BbGJvKS5zdWJzY3JpYmUoKGFsYm8pID0+IHtcbiAgICAgIHRoaXMuYWxibyA9IGFsYm87XG4gICAgICB0aGlzLnNldFN0YXR1cyhhbGJvKTtcbiAgICAgIGNvbnNvbGUubG9nKGFsYm8uc3RhdHVzKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHBhcnNlSW50KGFsYm8uc3RhdHVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgbmV4dChudW1lcm9BbGJvKSB7XG4gICAgdGhpcy5udW1lcm9BbGJvID0gbnVtZXJvQWxibztcbiAgICB0aGlzLmFsYmlTZXJ2aWNlLmdldEFsYm8obnVtZXJvQWxibykuc3Vic2NyaWJlKChhbGJvKSA9PiB7XG4gICAgICB0aGlzLmFsYm8gPSBhbGJvO1xuICAgICAgdGhpcy5zZXRTdGF0dXMoYWxibyk7XG4gICAgICBjb25zb2xlLmxvZyhhbGJvLnN0YXR1cyk7XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBwYXJzZUludChhbGJvLnN0YXR1cyk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==