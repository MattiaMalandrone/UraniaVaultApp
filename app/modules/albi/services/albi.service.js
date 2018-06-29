"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var services_1 = require("~/modules/core/services");
var httpOptions = {
    headers: new http_1.HttpHeaders({
        'Content-Type': 'application/json'
    })
};
var AlbiService = /** @class */ (function () {
    /**
     *
     */
    function AlbiService(httpClient, databaseService) {
        this.httpClient = httpClient;
        this.databaseService = databaseService;
        this.host = this.databaseService.getItem(services_1.DatabaseService.KEYS.host);
    }
    /**
     *
     */
    AlbiService.prototype.initCatalogo = function (user) {
        console.log('INIT CATALOGO');
        return this.httpClient.post(this.host + "/api/albi/init", user, httpOptions);
    };
    AlbiService.prototype.updateCatalogo = function (user) {
        console.log('UPDATE CATALOGO');
        return this.httpClient.post(this.host + "/api/albi/update", user, httpOptions);
    };
    AlbiService.prototype.isFirstAccess = function (email) {
        return this.httpClient.get(this.host + "/api/albi/isFirstAccess/" + email, httpOptions);
    };
    AlbiService.prototype.getList = function (countAlbiLoaded, filter) {
        return this.httpClient.get(this.host + "/api/albi/list/" + services_1.AuthService.CURRENT_USER.email + "/" + countAlbiLoaded + "/" + filter, httpOptions);
    };
    AlbiService.prototype.getAlbo = function (numero) {
        return this.httpClient.get(this.host + "/api/albi/albo/" + services_1.AuthService.CURRENT_USER.email + "/" + numero, httpOptions);
    };
    AlbiService.prototype.getListaStati = function () {
        var listaStati = [
            { key: 0, value: "Non comprato" },
            { key: 1, value: "Prenotato" },
            { key: 2, value: "Comprato" }
        ];
        return rxjs_1.of(listaStati);
    };
    AlbiService.prototype.updateAlbo = function (idAlbo, stato) {
        return this.httpClient.put(this.host + "/api/albi/albo/" + services_1.AuthService.CURRENT_USER.email + "/" + idAlbo + "/" + stato, httpOptions);
    };
    AlbiService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, services_1.DatabaseService])
    ], AlbiService);
    return AlbiService;
}());
exports.AlbiService = AlbiService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxiaS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWxiaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUEyRTtBQUUzRSw2QkFBc0M7QUFFdEMsb0RBQXVFO0FBRXZFLElBQU0sV0FBVyxHQUFHO0lBQ2hCLE9BQU8sRUFBRSxJQUFJLGtCQUFXLENBQUM7UUFDckIsY0FBYyxFQUFHLGtCQUFrQjtLQUN0QyxDQUFDO0NBQ0wsQ0FBQztBQUdGO0lBR0k7O09BRUc7SUFDSCxxQkFBb0IsVUFBc0IsRUFBVSxlQUFnQztRQUFoRSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsMEJBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsa0NBQVksR0FBWixVQUFhLElBQWM7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUksSUFBSSxDQUFDLElBQUksbUJBQWdCLEVBQUUsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFFRCxvQ0FBYyxHQUFkLFVBQWUsSUFBYztRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFJLElBQUksQ0FBQyxJQUFJLHFCQUFrQixFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRUQsbUNBQWEsR0FBYixVQUFjLEtBQWE7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxJQUFJLGdDQUEyQixLQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDNUYsQ0FBQztJQUVELDZCQUFPLEdBQVAsVUFBUSxlQUF1QixFQUFFLE1BQWM7UUFDM0MsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxJQUFJLHVCQUFrQixzQkFBVyxDQUFDLFlBQVksQ0FBQyxLQUFLLFNBQUksZUFBZSxTQUFJLE1BQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN6SSxDQUFDO0lBRUQsNkJBQU8sR0FBUCxVQUFRLE1BQWM7UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxJQUFJLHVCQUFrQixzQkFBVyxDQUFDLFlBQVksQ0FBQyxLQUFLLFNBQUksTUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3RILENBQUM7SUFFRCxtQ0FBYSxHQUFiO1FBQ0ksSUFBTSxVQUFVLEdBQUc7WUFDZixFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRTtZQUNqQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRTtZQUM5QixFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtTQUNoQyxDQUFDO1FBRUYsTUFBTSxDQUFDLFNBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsZ0NBQVUsR0FBVixVQUFXLE1BQWMsRUFBRSxLQUFhO1FBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsSUFBSSx1QkFBa0Isc0JBQVcsQ0FBQyxZQUFZLENBQUMsS0FBSyxTQUFJLE1BQU0sU0FBSSxLQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDL0gsQ0FBQztJQS9DUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBT3VCLGlCQUFVLEVBQTJCLDBCQUFlO09BTjNFLFdBQVcsQ0FnRHZCO0lBQUQsa0JBQUM7Q0FBQSxBQWhERCxJQWdEQztBQWhEWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuXHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFVzZXIsIEF1dGhVc2VyIH0gZnJvbSAnfi9tb2R1bGVzL3NoYXJlZC9tb2RlbHMnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSwgRGF0YWJhc2VTZXJ2aWNlIH0gZnJvbSAnfi9tb2R1bGVzL2NvcmUvc2VydmljZXMnO1xyXG5cclxuY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbiAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAgJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICB9KVxyXG59O1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQWxiaVNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgaG9zdDogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQsIHByaXZhdGUgZGF0YWJhc2VTZXJ2aWNlOiBEYXRhYmFzZVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmhvc3QgPSB0aGlzLmRhdGFiYXNlU2VydmljZS5nZXRJdGVtKERhdGFiYXNlU2VydmljZS5LRVlTLmhvc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgaW5pdENhdGFsb2dvKHVzZXI6IEF1dGhVc2VyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnSU5JVCBDQVRBTE9HTycpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQucG9zdChgJHt0aGlzLmhvc3R9L2FwaS9hbGJpL2luaXRgLCB1c2VyLCBodHRwT3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQ2F0YWxvZ28odXNlcjogQXV0aFVzZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVUERBVEUgQ0FUQUxPR08nKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnBvc3QoYCR7dGhpcy5ob3N0fS9hcGkvYWxiaS91cGRhdGVgLCB1c2VyLCBodHRwT3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNGaXJzdEFjY2VzcyhlbWFpbDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldChgJHt0aGlzLmhvc3R9L2FwaS9hbGJpL2lzRmlyc3RBY2Nlc3MvJHtlbWFpbH1gLCBodHRwT3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGlzdChjb3VudEFsYmlMb2FkZWQ6IG51bWJlciwgZmlsdGVyOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0KGAke3RoaXMuaG9zdH0vYXBpL2FsYmkvbGlzdC8ke0F1dGhTZXJ2aWNlLkNVUlJFTlRfVVNFUi5lbWFpbH0vJHtjb3VudEFsYmlMb2FkZWR9LyR7ZmlsdGVyfWAsIGh0dHBPcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGJvKG51bWVybzogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldChgJHt0aGlzLmhvc3R9L2FwaS9hbGJpL2FsYm8vJHtBdXRoU2VydmljZS5DVVJSRU5UX1VTRVIuZW1haWx9LyR7bnVtZXJvfWAsIGh0dHBPcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMaXN0YVN0YXRpKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgY29uc3QgbGlzdGFTdGF0aSA9IFtcclxuICAgICAgICAgICAgeyBrZXk6IDAsIHZhbHVlOiBcIk5vbiBjb21wcmF0b1wiIH0sXHJcbiAgICAgICAgICAgIHsga2V5OiAxLCB2YWx1ZTogXCJQcmVub3RhdG9cIiB9LFxyXG4gICAgICAgICAgICB7IGtleTogMiwgdmFsdWU6IFwiQ29tcHJhdG9cIiB9XHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG9mKGxpc3RhU3RhdGkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUFsYm8oaWRBbGJvOiBzdHJpbmcsIHN0YXRvOiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQucHV0KGAke3RoaXMuaG9zdH0vYXBpL2FsYmkvYWxiby8ke0F1dGhTZXJ2aWNlLkNVUlJFTlRfVVNFUi5lbWFpbH0vJHtpZEFsYm99LyR7c3RhdG99YCwgaHR0cE9wdGlvbnMpO1xyXG4gICAgfVxyXG59Il19