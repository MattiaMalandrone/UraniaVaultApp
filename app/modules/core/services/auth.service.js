"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var database_service_1 = require("./database.service");
var log_service_1 = require("./log.service");
var rxjs_1 = require("rxjs");
var AuthService = /** @class */ (function () {
    /**
     *
     */
    function AuthService(databaseService, logService, httpClient) {
        this.databaseService = databaseService;
        this.logService = logService;
        this.httpClient = httpClient;
        // subscribe to authenticated state changes
        /**
         * BehaviorSubjects are useful for representing "values over time".
         * For instance, an event stream of birthdays is a Subject,
         * but the stream of a person's age would be a BehaviorSubject.
         * */
        this.authenticated$ = new rxjs_1.BehaviorSubject(false);
        this._init();
    }
    AuthService_1 = AuthService;
    /**
     *
     */
    AuthService.prototype._init = function () {
        this.host = this.databaseService.getItem(database_service_1.DatabaseService.KEYS.host);
        AuthService_1.CURRENT_USER = this.databaseService.getItem(database_service_1.DatabaseService.KEYS.currentUser);
        this.logService.debug("Current user: ", AuthService_1.CURRENT_USER);
        this._notifyState(!!AuthService_1.CURRENT_USER);
    };
    /**
     *
     * @param auth
     */
    AuthService.prototype._notifyState = function (auth) {
        this.authenticated$.next(auth);
    };
    /**
     *
     * @param user
     */
    AuthService.prototype.register = function (user) {
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.httpClient.post(this.host + "/api/users/signup", user, httpOptions);
    };
    /**
     *
     * @param user
     */
    AuthService.prototype.login = function (user) {
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        console.log('starting http call for login...' + this.host);
        return this.httpClient.post(this.host + "/api/auth/signin", user, httpOptions);
    };
    /**
     *
     * @param email
     */
    AuthService.prototype.resetPassword = function (email) {
    };
    /**
     *
     * @param email
     * @param password
     */
    AuthService.prototype.saveUser = function (email, userId) {
        AuthService_1.CURRENT_USER = { email: email, userId: userId };
        this.databaseService.setItem(database_service_1.DatabaseService.KEYS.currentUser, AuthService_1.CURRENT_USER);
        this._notifyState(true);
    };
    /**
     *
     */
    AuthService.prototype.saveToken = function (token) {
        AuthService_1.ACCESS_TOKEN = token;
        this.databaseService.setItem(database_service_1.DatabaseService.KEYS.accessToken, token);
    };
    AuthService = AuthService_1 = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [database_service_1.DatabaseService,
            log_service_1.LogService,
            http_1.HttpClient])
    ], AuthService);
    return AuthService;
    var AuthService_1;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLDZDQUErRDtBQUUvRCx1REFBcUQ7QUFDckQsNkNBQTJDO0FBRTNDLDZCQUFtRDtBQUduRDtJQWlCSTs7T0FFRztJQUNILHFCQUFvQixlQUFnQyxFQUNoQyxVQUFzQixFQUN0QixVQUFzQjtRQUZ0QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBYjFDLDJDQUEyQztRQUMzQzs7OzthQUlLO1FBQ0UsbUJBQWMsR0FBOEIsSUFBSSxzQkFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBUTlELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixDQUFDO29CQXhCUSxXQUFXO0lBMEJwQjs7T0FFRztJQUNLLDJCQUFLLEdBQWI7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLGtDQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BFLGFBQVcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsa0NBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsYUFBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLGFBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssa0NBQVksR0FBcEIsVUFBcUIsSUFBYTtRQUM5QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsOEJBQVEsR0FBUixVQUFTLElBQVU7UUFFZixJQUFNLFdBQVcsR0FBRztZQUNoQixPQUFPLEVBQUUsSUFBSSxrQkFBVyxDQUFDO2dCQUNyQixjQUFjLEVBQUcsa0JBQWtCO2FBQ3RDLENBQUM7U0FDTCxDQUFDO1FBRUYsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFJLElBQUksQ0FBQyxJQUFJLHNCQUFtQixFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsMkJBQUssR0FBTCxVQUFNLElBQVU7UUFDWixJQUFNLFdBQVcsR0FBRztZQUNoQixPQUFPLEVBQUUsSUFBSSxrQkFBVyxDQUFDO2dCQUNyQixjQUFjLEVBQUcsa0JBQWtCO2FBQ3RDLENBQUM7U0FDTCxDQUFDO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0QsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFJLElBQUksQ0FBQyxJQUFJLHFCQUFrQixFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsbUNBQWEsR0FBYixVQUFjLEtBQUs7SUFFbkIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCw4QkFBUSxHQUFSLFVBQVMsS0FBYSxFQUFFLE1BQU07UUFDMUIsYUFBVyxDQUFDLFlBQVksR0FBRyxFQUFFLEtBQUssT0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsa0NBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLGFBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRDs7T0FFRztJQUNILCtCQUFTLEdBQVQsVUFBVSxLQUFhO1FBQ25CLGFBQVcsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLGtDQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBbEdRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FxQjRCLGtDQUFlO1lBQ3BCLHdCQUFVO1lBQ1YsaUJBQVU7T0F0QmpDLFdBQVcsQ0FtR3ZCO0lBQUQsa0JBQUM7O0NBQUEsQUFuR0QsSUFtR0M7QUFuR1ksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVXNlciwgQXV0aFVzZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21vZGVscy91c2VyLm1vZGVsXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcblxyXG5pbXBvcnQgeyBEYXRhYmFzZVNlcnZpY2UgfSBmcm9tIFwiLi9kYXRhYmFzZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IExvZ1NlcnZpY2UgfSBmcm9tIFwiLi9sb2cuc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XHJcblxyXG4gICAgaG9zdDogc3RyaW5nO1xyXG5cclxuICAgIC8vIGFjY2VzcyBvdXIgY3VycmVudCB1c2VyIGZyb20gYW55d2hlcmVcclxuICAgIHB1YmxpYyBzdGF0aWMgQ1VSUkVOVF9VU0VSOiBBdXRoVXNlcjtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEFDQ0VTU19UT0tFTjogc3RyaW5nO1xyXG5cclxuICAgIC8vIHN1YnNjcmliZSB0byBhdXRoZW50aWNhdGVkIHN0YXRlIGNoYW5nZXNcclxuICAgIC8qKlxyXG4gICAgICogQmVoYXZpb3JTdWJqZWN0cyBhcmUgdXNlZnVsIGZvciByZXByZXNlbnRpbmcgXCJ2YWx1ZXMgb3ZlciB0aW1lXCIuXHJcbiAgICAgKiBGb3IgaW5zdGFuY2UsIGFuIGV2ZW50IHN0cmVhbSBvZiBiaXJ0aGRheXMgaXMgYSBTdWJqZWN0LFxyXG4gICAgICogYnV0IHRoZSBzdHJlYW0gb2YgYSBwZXJzb24ncyBhZ2Ugd291bGQgYmUgYSBCZWhhdmlvclN1YmplY3QuXHJcbiAgICAgKiAqL1xyXG4gICAgcHVibGljIGF1dGhlbnRpY2F0ZWQkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSAgbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGFiYXNlU2VydmljZTogRGF0YWJhc2VTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBsb2dTZXJ2aWNlOiBMb2dTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmhvc3QgPSB0aGlzLmRhdGFiYXNlU2VydmljZS5nZXRJdGVtKERhdGFiYXNlU2VydmljZS5LRVlTLmhvc3QpO1xyXG4gICAgICAgIEF1dGhTZXJ2aWNlLkNVUlJFTlRfVVNFUiA9IHRoaXMuZGF0YWJhc2VTZXJ2aWNlLmdldEl0ZW0oRGF0YWJhc2VTZXJ2aWNlLktFWVMuY3VycmVudFVzZXIpO1xyXG4gICAgICAgIHRoaXMubG9nU2VydmljZS5kZWJ1ZyhgQ3VycmVudCB1c2VyOiBgLCBBdXRoU2VydmljZS5DVVJSRU5UX1VTRVIpO1xyXG4gICAgICAgIHRoaXMuX25vdGlmeVN0YXRlKCEhQXV0aFNlcnZpY2UuQ1VSUkVOVF9VU0VSKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXV0aFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9ub3RpZnlTdGF0ZShhdXRoOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVkJC5uZXh0KGF1dGgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1c2VyXHJcbiAgICAgKi9cclxuICAgIHJlZ2lzdGVyKHVzZXI6IFVzZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cclxuICAgICAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAgJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wb3N0KGAke3RoaXMuaG9zdH0vYXBpL3VzZXJzL3NpZ251cGAsIHVzZXIsIGh0dHBPcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXNlclxyXG4gICAgICovXHJcbiAgICBsb2dpbih1c2VyOiBVc2VyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAgJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zb2xlLmxvZygnc3RhcnRpbmcgaHR0cCBjYWxsIGZvciBsb2dpbi4uLicgKyB0aGlzLmhvc3QpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQucG9zdChgJHt0aGlzLmhvc3R9L2FwaS9hdXRoL3NpZ25pbmAsIHVzZXIsIGh0dHBPcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZW1haWxcclxuICAgICAqL1xyXG4gICAgcmVzZXRQYXNzd29yZChlbWFpbCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZW1haWxcclxuICAgICAqIEBwYXJhbSBwYXNzd29yZFxyXG4gICAgICovXHJcbiAgICBzYXZlVXNlcihlbWFpbDogc3RyaW5nLCB1c2VySWQpIHtcclxuICAgICAgICBBdXRoU2VydmljZS5DVVJSRU5UX1VTRVIgPSB7IGVtYWlsLCB1c2VySWQgfTtcclxuICAgICAgICB0aGlzLmRhdGFiYXNlU2VydmljZS5zZXRJdGVtKERhdGFiYXNlU2VydmljZS5LRVlTLmN1cnJlbnRVc2VyLCBBdXRoU2VydmljZS5DVVJSRU5UX1VTRVIpO1xyXG4gICAgICAgIHRoaXMuX25vdGlmeVN0YXRlKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgc2F2ZVRva2VuKHRva2VuOiBzdHJpbmcpIHtcclxuICAgICAgICBBdXRoU2VydmljZS5BQ0NFU1NfVE9LRU4gPSB0b2tlbjtcclxuICAgICAgICB0aGlzLmRhdGFiYXNlU2VydmljZS5zZXRJdGVtKERhdGFiYXNlU2VydmljZS5LRVlTLmFjY2Vzc1Rva2VuLCB0b2tlbik7XHJcbiAgICB9XHJcbn1cclxuIl19