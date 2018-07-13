"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var services_1 = require("~/modules/albi/services");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var services_2 = require("~/modules/core/services");
var DettaglioAlboComponent = /** @class */ (function () {
    function DettaglioAlboComponent(route, albiService, databaseService) {
        this.route = route;
        this.albiService = albiService;
        this.databaseService = databaseService;
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
        console.log('isOffline:', this.databaseService.isOffline);
        if (this.databaseService.isOffline) {
            this.databaseService.existsSqlite(this.albo._id, services_2.AuthService.CURRENT_USER.userId).then(function (existsSqlite) {
                console.log('existsSqlite: ', existsSqlite);
                if (existsSqlite)
                    _this.databaseService.patchSqlite(_this.albo._id, services_2.AuthService.CURRENT_USER.userId, _this.selectedStato);
                else
                    _this.databaseService.postSqlite(_this.albo._id, services_2.AuthService.CURRENT_USER.userId, _this.selectedStato);
            }, function (err) { return console.log('ERRORE sulla existsSqlite: ', err); });
            this.loader.hide();
        }
        else
            this.albiService.updateAlbo(this.albo._id, this.selectedStato).subscribe(function () { return _this.loader.hide(); });
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
            services_2.DatabaseService])
    ], DettaglioAlboComponent);
    return DettaglioAlboComponent;
}());
exports.DettaglioAlboComponent = DettaglioAlboComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0dGFnbGlvLWFsYm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0dGFnbGlvLWFsYm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBR3VCO0FBQ3ZCLDBDQUF5RDtBQUN6RCxvREFBc0Q7QUFFdEQsaUZBQWtFO0FBQ2xFLG9EQUF1RTtBQWF2RTtJQVdFLGdDQUFvQixLQUFxQixFQUNyQixXQUF3QixFQUN4QixlQUFnQztRQUZoQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFUcEQsVUFBSyxHQUFVLEVBQUUsQ0FBQztRQUNsQixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO1FBQzFCLGdCQUFXLEdBQVcsT0FBTyxDQUFDO0lBTTBCLENBQUM7SUFFekQ7O09BRUc7SUFDSCx5Q0FBUSxHQUFSO1FBQUEsaUJBc0JDO1FBckJDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUVyQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksaURBQWdCLEVBQUUsQ0FBQztRQUVyQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTLENBQUUsVUFBQyxLQUFZO29DQUUv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VUFBVSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBSTtZQUN2RCxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQTVHVSxzQkFBc0I7UUFObEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7U0FDOUMsQ0FBQzt5Q0FZMkIsdUJBQWM7WUFDUixzQkFBVztZQUNQLDBCQUFlO09BYnpDLHNCQUFzQixDQThHbEM7SUFBRCw2QkFBQztDQUFBLEFBOUdELElBOEdDO0FBOUdZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBbGJpU2VydmljZSB9IGZyb20gJ34vbW9kdWxlcy9hbGJpL3NlcnZpY2VzJztcbmltcG9ydCB7IExpc3RQaWNrZXIgfSBmcm9tIFwidWkvbGlzdC1waWNrZXJcIjtcbmltcG9ydCB7IExvYWRpbmdJbmRpY2F0b3IgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWxvYWRpbmctaW5kaWNhdG9yXCI7XG5pbXBvcnQgeyBEYXRhYmFzZVNlcnZpY2UsIEF1dGhTZXJ2aWNlIH0gZnJvbSAnfi9tb2R1bGVzL2NvcmUvc2VydmljZXMnO1xuXG5pbnRlcmZhY2UgU3RhdGkge1xuICBrZXk6IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLWRldHRhZ2xpby1hbGJvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RldHRhZ2xpby1hbGJvLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGV0dGFnbGlvLWFsYm8uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERldHRhZ2xpb0FsYm9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGFsYm86IGFueTtcbiAgbnVtZXJvQWxibzogbnVtYmVyO1xuICBzdGF0aTogYW55W10gPSBbXTtcbiAgaXRlbXM6IG9iamVjdCA9IHt9O1xuICBzZWxlY3RlZEluZGV4OiBudW1iZXIgPSAwO1xuICBzdGF0dXNDb2xvcjogc3RyaW5nID0gXCJ3aGl0ZVwiO1xuICBsb2FkZXI6IGFueTtcbiAgc2VsZWN0ZWRTdGF0bzogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICBwcml2YXRlIGFsYmlTZXJ2aWNlOiBBbGJpU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBkYXRhYmFzZVNlcnZpY2U6IERhdGFiYXNlU2VydmljZSkgeyB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZygnaW5zaWRlIGRldHRhZ2xpbyBhbGJvJyk7XG5cbiAgICB0aGlzLmxvYWRlciA9IG5ldyBMb2FkaW5nSW5kaWNhdG9yKCk7XG5cbiAgICB0aGlzLmFsYm8gPSB0aGlzLnJvdXRlLnNuYXBzaG90LmRhdGFbJ2FsYm9SZXNvbHZlZCddO1xuICAgIHRoaXMuc2V0U3RhdHVzKHRoaXMuYWxibyk7XG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gcGFyc2VJbnQodGhpcy5hbGJvLnN0YXRvKTtcbiAgICB0aGlzLm51bWVyb0FsYm8gPSB0aGlzLmFsYm8ubnVtZXJvO1xuICAgIHRoaXMuYWxiaVNlcnZpY2UuZ2V0TGlzdGFTdGF0aSgpLnN1YnNjcmliZSggKHN0YXRpOiBhbnlbXSkgPT4ge1xuXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3RhdGkubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICBjb25zdCBzdGF0bzogYW55ID0ge1xuICAgICAgICAgIHZhbHVlOiBzdGF0aVtpXS5rZXksXG4gICAgICAgICAgbmFtZTogc3RhdGlbaV0udmFsdWUsXG4gICAgICAgICAgdG9TdHJpbmc6ICgpID0+IHN0YXRpW2ldLnZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0YXRpLnB1c2goc3RhdG8pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gYXJnc1xuICAgKi9cbiAgc2VsZWN0ZWRJbmRleENoYW5nZWQoYXJncykge1xuICAgIHRoaXMubG9hZGVyLnNob3coKTtcbiAgICB0aGlzLnNlbGVjdGVkU3RhdG8gPSA8TGlzdFBpY2tlcj5hcmdzLm9iamVjdC5zZWxlY3RlZEluZGV4O1xuXG4gICAgY29uc29sZS5sb2coJ2lzT2ZmbGluZTonLCB0aGlzLmRhdGFiYXNlU2VydmljZS5pc09mZmxpbmUpO1xuXG4gICAgaWYodGhpcy5kYXRhYmFzZVNlcnZpY2UuaXNPZmZsaW5lKSB7XG4gICAgICB0aGlzLmRhdGFiYXNlU2VydmljZS5leGlzdHNTcWxpdGUodGhpcy5hbGJvLl9pZCwgQXV0aFNlcnZpY2UuQ1VSUkVOVF9VU0VSLnVzZXJJZCkudGhlbigoZXhpc3RzU3FsaXRlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdleGlzdHNTcWxpdGU6ICcsIGV4aXN0c1NxbGl0ZSk7XG4gICAgICAgIGlmKGV4aXN0c1NxbGl0ZSlcbiAgICAgICAgICB0aGlzLmRhdGFiYXNlU2VydmljZS5wYXRjaFNxbGl0ZSh0aGlzLmFsYm8uX2lkLCBBdXRoU2VydmljZS5DVVJSRU5UX1VTRVIudXNlcklkLCB0aGlzLnNlbGVjdGVkU3RhdG8pO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgdGhpcy5kYXRhYmFzZVNlcnZpY2UucG9zdFNxbGl0ZSh0aGlzLmFsYm8uX2lkLCBBdXRoU2VydmljZS5DVVJSRU5UX1VTRVIudXNlcklkLCB0aGlzLnNlbGVjdGVkU3RhdG8pO1xuICAgICAgfSwgKGVycikgPT4gY29uc29sZS5sb2coJ0VSUk9SRSBzdWxsYSBleGlzdHNTcWxpdGU6ICcsIGVycikpO1xuICAgICAgdGhpcy5sb2FkZXIuaGlkZSgpXG4gICAgfVxuICAgIGVsc2VcbiAgICAgIHRoaXMuYWxiaVNlcnZpY2UudXBkYXRlQWxibyh0aGlzLmFsYm8uX2lkLCB0aGlzLnNlbGVjdGVkU3RhdG8pLnN1YnNjcmliZSgoKSA9PiB0aGlzLmxvYWRlci5oaWRlKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBhbGJvXG4gICAqL1xuICBwcml2YXRlIHNldFN0YXR1cyhhbGJvKSB7XG4gICAgc3dpdGNoKGFsYm8uc3RhdG8pIHtcbiAgICAgIGNhc2UgMCA6IHRoaXMuc3RhdHVzQ29sb3IgPSAnbGlnaHRyZWQnOyBicmVhaztcbiAgICAgIGNhc2UgMSA6IHRoaXMuc3RhdHVzQ29sb3IgPSAnbGlnaHRncmVlbic7IGJyZWFrO1xuICAgICAgY2FzZSAyIDogdGhpcy5zdGF0dXNDb2xvciA9ICdsaWdodHllbGxvdyc7IGJyZWFrO1xuICAgICAgZGVmYXVsdDogdGhpcy5zdGF0dXNDb2xvciA9ICd3aGl0ZSc7IGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgcHJldigpIHtcbiAgICB0aGlzLmxvYWRlci5zaG93KCk7XG4gICAgY29uc29sZS5sb2coJ1BSRVYgQTogJyAsIHRoaXMubnVtZXJvQWxibyk7XG4gICAgdGhpcy5udW1lcm9BbGJvID0gdGhpcy5udW1lcm9BbGJvIC0gMTtcbiAgICBjb25zb2xlLmxvZygnUFJFViBCOiAnICwgdGhpcy5udW1lcm9BbGJvKTtcbiAgICB0aGlzLmFsYmlTZXJ2aWNlLmdldEFsYm8odGhpcy5udW1lcm9BbGJvKS5zdWJzY3JpYmUoKGFsYm8pID0+IHtcbiAgICAgIHRoaXMuYWxibyA9IGFsYm87XG4gICAgICB0aGlzLnNldFN0YXR1cyhhbGJvKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHBhcnNlSW50KGFsYm8uc3RhdG8pO1xuICAgICAgdGhpcy5sb2FkZXIuaGlkZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBuZXh0KCkge1xuICAgIHRoaXMubG9hZGVyLnNob3coKTtcbiAgICBjb25zb2xlLmxvZygnTkVYVCBBOiAnICwgdGhpcy5udW1lcm9BbGJvKTtcbiAgICB0aGlzLm51bWVyb0FsYm8gPSB0aGlzLm51bWVyb0FsYm8gKyAxO1xuICAgIGNvbnNvbGUubG9nKCdORVhUIEIgJyAsIHRoaXMubnVtZXJvQWxibyk7XG4gICAgdGhpcy5hbGJpU2VydmljZS5nZXRBbGJvKHRoaXMubnVtZXJvQWxibykuc3Vic2NyaWJlKChhbGJvKSA9PiB7XG4gICAgICB0aGlzLmFsYm8gPSBhbGJvO1xuICAgICAgdGhpcy5zZXRTdGF0dXMoYWxibyk7XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBwYXJzZUludChhbGJvLnN0YXRvKTtcbiAgICAgIHRoaXMubG9hZGVyLmhpZGUoKTtcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=