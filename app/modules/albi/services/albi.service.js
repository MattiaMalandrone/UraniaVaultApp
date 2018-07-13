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
        return this.httpClient.post(this.host + "/api/albi/init", user, httpOptions);
    };
    AlbiService.prototype.updateCatalogo = function (user) {
        return this.httpClient.post(this.host + "/api/albi/update", user, httpOptions);
    };
    AlbiService.prototype.isFirstAccess = function (email) {
        return this.httpClient.get(this.host + "/api/albi/isFirstAccess/" + email, httpOptions);
    };
    AlbiService.prototype.getList = function (lastAlboNumero, filter) {
        if (filter === '')
            filter = null;
        return this.httpClient.get(this.host + "/api/albi/list/" + services_1.AuthService.CURRENT_USER.email + "/" + lastAlboNumero + "/" + filter, httpOptions);
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
    /**
     *
     */
    AlbiService.prototype.syncSqliteInMongoDb = function (offlineData) {
        for (var i = 0; i < offlineData.length; i++) {
            var offlineItem = offlineData[i];
            this.updateAlbo(offlineItem[i][0], offlineItem[i][2]);
        }
        this.databaseService.removeDatabaseSqlite();
    };
    AlbiService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, services_1.DatabaseService])
    ], AlbiService);
    return AlbiService;
}());
exports.AlbiService = AlbiService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxiaS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWxiaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUEyRTtBQUUzRSw2QkFBc0M7QUFFdEMsb0RBQXVFO0FBRXZFLElBQU0sV0FBVyxHQUFHO0lBQ2hCLE9BQU8sRUFBRSxJQUFJLGtCQUFXLENBQUM7UUFDckIsY0FBYyxFQUFHLGtCQUFrQjtLQUN0QyxDQUFDO0NBQ0wsQ0FBQztBQUdGO0lBR0k7O09BRUc7SUFDSCxxQkFBb0IsVUFBc0IsRUFBVSxlQUFnQztRQUFoRSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsMEJBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsa0NBQVksR0FBWixVQUFhLElBQWM7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFJLElBQUksQ0FBQyxJQUFJLG1CQUFnQixFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRUQsb0NBQWMsR0FBZCxVQUFlLElBQWM7UUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFJLElBQUksQ0FBQyxJQUFJLHFCQUFrQixFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRUQsbUNBQWEsR0FBYixVQUFjLEtBQWE7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxJQUFJLGdDQUEyQixLQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDNUYsQ0FBQztJQUVELDZCQUFPLEdBQVAsVUFBUSxjQUFzQixFQUFFLE1BQWM7UUFDMUMsRUFBRSxDQUFBLENBQUMsTUFBTSxLQUFLLEVBQUUsQ0FBQztZQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxJQUFJLHVCQUFrQixzQkFBVyxDQUFDLFlBQVksQ0FBQyxLQUFLLFNBQUksY0FBYyxTQUFJLE1BQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN4SSxDQUFDO0lBRUQsNkJBQU8sR0FBUCxVQUFRLE1BQWM7UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxJQUFJLHVCQUFrQixzQkFBVyxDQUFDLFlBQVksQ0FBQyxLQUFLLFNBQUksTUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3RILENBQUM7SUFFRCxtQ0FBYSxHQUFiO1FBQ0ksSUFBTSxVQUFVLEdBQUc7WUFDZixFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRTtZQUNqQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRTtZQUM5QixFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtTQUNoQyxDQUFDO1FBRUYsTUFBTSxDQUFDLFNBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsZ0NBQVUsR0FBVixVQUFXLE1BQWMsRUFBRSxLQUFhO1FBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsSUFBSSx1QkFBa0Isc0JBQVcsQ0FBQyxZQUFZLENBQUMsS0FBSyxTQUFJLE1BQU0sU0FBSSxLQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDL0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gseUNBQW1CLEdBQW5CLFVBQW9CLFdBQWtCO1FBQ2xDLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3pDLElBQU0sV0FBVyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRCxDQUFDO1FBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUF6RFEsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQU91QixpQkFBVSxFQUEyQiwwQkFBZTtPQU4zRSxXQUFXLENBMER2QjtJQUFELGtCQUFDO0NBQUEsQUExREQsSUEwREM7QUExRFksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBVc2VyLCBBdXRoVXNlciB9IGZyb20gJ34vbW9kdWxlcy9zaGFyZWQvbW9kZWxzJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UsIERhdGFiYXNlU2VydmljZSB9IGZyb20gJ34vbW9kdWxlcy9jb3JlL3NlcnZpY2VzJztcclxuXHJcbmNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4gICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgfSlcclxufTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFsYmlTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIGhvc3Q6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50LCBwcml2YXRlIGRhdGFiYXNlU2VydmljZTogRGF0YWJhc2VTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5ob3N0ID0gdGhpcy5kYXRhYmFzZVNlcnZpY2UuZ2V0SXRlbShEYXRhYmFzZVNlcnZpY2UuS0VZUy5ob3N0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGluaXRDYXRhbG9nbyh1c2VyOiBBdXRoVXNlcik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wb3N0KGAke3RoaXMuaG9zdH0vYXBpL2FsYmkvaW5pdGAsIHVzZXIsIGh0dHBPcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDYXRhbG9nbyh1c2VyOiBBdXRoVXNlcik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wb3N0KGAke3RoaXMuaG9zdH0vYXBpL2FsYmkvdXBkYXRlYCwgdXNlciwgaHR0cE9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRmlyc3RBY2Nlc3MoZW1haWw6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQoYCR7dGhpcy5ob3N0fS9hcGkvYWxiaS9pc0ZpcnN0QWNjZXNzLyR7ZW1haWx9YCwgaHR0cE9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExpc3QobGFzdEFsYm9OdW1lcm86IHN0cmluZywgZmlsdGVyOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIGlmKGZpbHRlciA9PT0gJycpIGZpbHRlciA9IG51bGw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQoYCR7dGhpcy5ob3N0fS9hcGkvYWxiaS9saXN0LyR7QXV0aFNlcnZpY2UuQ1VSUkVOVF9VU0VSLmVtYWlsfS8ke2xhc3RBbGJvTnVtZXJvfS8ke2ZpbHRlcn1gLCBodHRwT3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxibyhudW1lcm86IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQoYCR7dGhpcy5ob3N0fS9hcGkvYWxiaS9hbGJvLyR7QXV0aFNlcnZpY2UuQ1VSUkVOVF9VU0VSLmVtYWlsfS8ke251bWVyb31gLCBodHRwT3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGlzdGFTdGF0aSgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIGNvbnN0IGxpc3RhU3RhdGkgPSBbXHJcbiAgICAgICAgICAgIHsga2V5OiAwLCB2YWx1ZTogXCJOb24gY29tcHJhdG9cIiB9LFxyXG4gICAgICAgICAgICB7IGtleTogMSwgdmFsdWU6IFwiUHJlbm90YXRvXCIgfSxcclxuICAgICAgICAgICAgeyBrZXk6IDIsIHZhbHVlOiBcIkNvbXByYXRvXCIgfVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHJldHVybiBvZihsaXN0YVN0YXRpKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVBbGJvKGlkQWxibzogc3RyaW5nLCBzdGF0bzogbnVtYmVyKTogT2JzZXJ2YWJsZTx7fT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQucHV0KGAke3RoaXMuaG9zdH0vYXBpL2FsYmkvYWxiby8ke0F1dGhTZXJ2aWNlLkNVUlJFTlRfVVNFUi5lbWFpbH0vJHtpZEFsYm99LyR7c3RhdG99YCwgaHR0cE9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgc3luY1NxbGl0ZUluTW9uZ29EYihvZmZsaW5lRGF0YTogYW55W10pIHtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgb2ZmbGluZURhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3Qgb2ZmbGluZUl0ZW0gPSBvZmZsaW5lRGF0YVtpXTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVBbGJvKG9mZmxpbmVJdGVtW2ldWzBdLCBvZmZsaW5lSXRlbVtpXVsyXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGF0YWJhc2VTZXJ2aWNlLnJlbW92ZURhdGFiYXNlU3FsaXRlKCk7XHJcbiAgICB9XHJcbn0iXX0=