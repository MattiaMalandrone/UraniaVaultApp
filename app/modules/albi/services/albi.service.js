"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var AlbiService = /** @class */ (function () {
    /**
     *
     */
    function AlbiService(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     *
     */
    AlbiService.prototype.initCatalogo = function (user) {
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.httpClient.post("http://10.0.2.2:5000/api/albi/init", user, httpOptions);
    };
    AlbiService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AlbiService);
    return AlbiService;
}());
exports.AlbiService = AlbiService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxiaS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWxiaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUErRDtBQU0vRDtJQUVJOztPQUVHO0lBQ0gscUJBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFFMUMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsa0NBQVksR0FBWixVQUFhLElBQVU7UUFDbkIsSUFBTSxXQUFXLEdBQUc7WUFDaEIsT0FBTyxFQUFFLElBQUksa0JBQVcsQ0FBQztnQkFDckIsY0FBYyxFQUFHLGtCQUFrQjthQUN0QyxDQUFDO1NBQ0wsQ0FBQztRQUVGLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxvQ0FBb0MsRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDekYsQ0FBQztJQXBCUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBTXVCLGlCQUFVO09BTGpDLFdBQVcsQ0FxQnZCO0lBQUQsa0JBQUM7Q0FBQSxBQXJCRCxJQXFCQztBQXJCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuXHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJ34vbW9kdWxlcy9zaGFyZWQvbW9kZWxzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFsYmlTZXJ2aWNlIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGluaXRDYXRhbG9nbyh1c2VyOiBVc2VyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAgJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wb3N0KGBodHRwOi8vMTAuMC4yLjI6NTAwMC9hcGkvYWxiaS9pbml0YCwgdXNlciwgaHR0cE9wdGlvbnMpO1xyXG4gICAgfVxyXG59Il19