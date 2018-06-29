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
    AuthService.prototype.saveUser = function (email) {
        AuthService_1.CURRENT_USER = { email: email };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLDZDQUErRDtBQUUvRCx1REFBcUQ7QUFDckQsNkNBQTJDO0FBRTNDLDZCQUFtRDtBQUduRDtJQWlCSTs7T0FFRztJQUNILHFCQUFvQixlQUFnQyxFQUNoQyxVQUFzQixFQUN0QixVQUFzQjtRQUZ0QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBYjFDLDJDQUEyQztRQUMzQzs7OzthQUlLO1FBQ0UsbUJBQWMsR0FBOEIsSUFBSSxzQkFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBUTlELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixDQUFDO29CQXhCUSxXQUFXO0lBMEJwQjs7T0FFRztJQUNLLDJCQUFLLEdBQWI7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLGtDQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BFLGFBQVcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsa0NBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsYUFBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLGFBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssa0NBQVksR0FBcEIsVUFBcUIsSUFBYTtRQUM5QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsOEJBQVEsR0FBUixVQUFTLElBQVU7UUFFZixJQUFNLFdBQVcsR0FBRztZQUNoQixPQUFPLEVBQUUsSUFBSSxrQkFBVyxDQUFDO2dCQUNyQixjQUFjLEVBQUcsa0JBQWtCO2FBQ3RDLENBQUM7U0FDTCxDQUFDO1FBRUYsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFJLElBQUksQ0FBQyxJQUFJLHNCQUFtQixFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsMkJBQUssR0FBTCxVQUFNLElBQVU7UUFDWixJQUFNLFdBQVcsR0FBRztZQUNoQixPQUFPLEVBQUUsSUFBSSxrQkFBVyxDQUFDO2dCQUNyQixjQUFjLEVBQUcsa0JBQWtCO2FBQ3RDLENBQUM7U0FDTCxDQUFDO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0QsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFJLElBQUksQ0FBQyxJQUFJLHFCQUFrQixFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsbUNBQWEsR0FBYixVQUFjLEtBQUs7SUFFbkIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCw4QkFBUSxHQUFSLFVBQVMsS0FBYTtRQUNsQixhQUFXLENBQUMsWUFBWSxHQUFHLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxrQ0FBZSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsYUFBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsK0JBQVMsR0FBVCxVQUFVLEtBQWE7UUFDbkIsYUFBVyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDakMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsa0NBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFsR1EsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQXFCNEIsa0NBQWU7WUFDcEIsd0JBQVU7WUFDVixpQkFBVTtPQXRCakMsV0FBVyxDQW1HdkI7SUFBRCxrQkFBQzs7Q0FBQSxBQW5HRCxJQW1HQztBQW5HWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBVc2VyLCBBdXRoVXNlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvbW9kZWxzL3VzZXIubW9kZWxcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuXHJcbmltcG9ydCB7IERhdGFiYXNlU2VydmljZSB9IGZyb20gXCIuL2RhdGFiYXNlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTG9nU2VydmljZSB9IGZyb20gXCIuL2xvZy5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuXHJcbiAgICBob3N0OiBzdHJpbmc7XHJcblxyXG4gICAgLy8gYWNjZXNzIG91ciBjdXJyZW50IHVzZXIgZnJvbSBhbnl3aGVyZVxyXG4gICAgcHVibGljIHN0YXRpYyBDVVJSRU5UX1VTRVI6IEF1dGhVc2VyO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgQUNDRVNTX1RPS0VOOiBzdHJpbmc7XHJcblxyXG4gICAgLy8gc3Vic2NyaWJlIHRvIGF1dGhlbnRpY2F0ZWQgc3RhdGUgY2hhbmdlc1xyXG4gICAgLyoqXHJcbiAgICAgKiBCZWhhdmlvclN1YmplY3RzIGFyZSB1c2VmdWwgZm9yIHJlcHJlc2VudGluZyBcInZhbHVlcyBvdmVyIHRpbWVcIi5cclxuICAgICAqIEZvciBpbnN0YW5jZSwgYW4gZXZlbnQgc3RyZWFtIG9mIGJpcnRoZGF5cyBpcyBhIFN1YmplY3QsXHJcbiAgICAgKiBidXQgdGhlIHN0cmVhbSBvZiBhIHBlcnNvbidzIGFnZSB3b3VsZCBiZSBhIEJlaGF2aW9yU3ViamVjdC5cclxuICAgICAqICovXHJcbiAgICBwdWJsaWMgYXV0aGVudGljYXRlZCQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9ICBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YWJhc2VTZXJ2aWNlOiBEYXRhYmFzZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIGxvZ1NlcnZpY2U6IExvZ1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9pbml0KCkge1xyXG4gICAgICAgIHRoaXMuaG9zdCA9IHRoaXMuZGF0YWJhc2VTZXJ2aWNlLmdldEl0ZW0oRGF0YWJhc2VTZXJ2aWNlLktFWVMuaG9zdCk7XHJcbiAgICAgICAgQXV0aFNlcnZpY2UuQ1VSUkVOVF9VU0VSID0gdGhpcy5kYXRhYmFzZVNlcnZpY2UuZ2V0SXRlbShEYXRhYmFzZVNlcnZpY2UuS0VZUy5jdXJyZW50VXNlcik7XHJcbiAgICAgICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGBDdXJyZW50IHVzZXI6IGAsIEF1dGhTZXJ2aWNlLkNVUlJFTlRfVVNFUik7XHJcbiAgICAgICAgdGhpcy5fbm90aWZ5U3RhdGUoISFBdXRoU2VydmljZS5DVVJSRU5UX1VTRVIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhdXRoXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX25vdGlmeVN0YXRlKGF1dGg6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0ZWQkLm5leHQoYXV0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVzZXJcclxuICAgICAqL1xyXG4gICAgcmVnaXN0ZXIodXNlcjogVXNlcik6IE9ic2VydmFibGU8YW55PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnBvc3QoYCR7dGhpcy5ob3N0fS9hcGkvdXNlcnMvc2lnbnVwYCwgdXNlciwgaHR0cE9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1c2VyXHJcbiAgICAgKi9cclxuICAgIGxvZ2luKHVzZXI6IFVzZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzdGFydGluZyBodHRwIGNhbGwgZm9yIGxvZ2luLi4uJyArIHRoaXMuaG9zdCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wb3N0KGAke3RoaXMuaG9zdH0vYXBpL2F1dGgvc2lnbmluYCwgdXNlciwgaHR0cE9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBlbWFpbFxyXG4gICAgICovXHJcbiAgICByZXNldFBhc3N3b3JkKGVtYWlsKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBlbWFpbFxyXG4gICAgICogQHBhcmFtIHBhc3N3b3JkXHJcbiAgICAgKi9cclxuICAgIHNhdmVVc2VyKGVtYWlsOiBzdHJpbmcpIHtcclxuICAgICAgICBBdXRoU2VydmljZS5DVVJSRU5UX1VTRVIgPSB7IGVtYWlsIH07XHJcbiAgICAgICAgdGhpcy5kYXRhYmFzZVNlcnZpY2Uuc2V0SXRlbShEYXRhYmFzZVNlcnZpY2UuS0VZUy5jdXJyZW50VXNlciwgQXV0aFNlcnZpY2UuQ1VSUkVOVF9VU0VSKTtcclxuICAgICAgICB0aGlzLl9ub3RpZnlTdGF0ZSh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHNhdmVUb2tlbih0b2tlbjogc3RyaW5nKSB7XHJcbiAgICAgICAgQXV0aFNlcnZpY2UuQUNDRVNTX1RPS0VOID0gdG9rZW47XHJcbiAgICAgICAgdGhpcy5kYXRhYmFzZVNlcnZpY2Uuc2V0SXRlbShEYXRhYmFzZVNlcnZpY2UuS0VZUy5hY2Nlc3NUb2tlbiwgdG9rZW4pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==