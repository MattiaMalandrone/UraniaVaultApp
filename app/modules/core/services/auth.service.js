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
        return this.httpClient.post("http://10.0.2.2:5000/api/users/signup", user, httpOptions);
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
        return this.httpClient.post("http://10.0.2.2:5000/api/auth/signin", user, httpOptions);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLDZDQUErRDtBQUUvRCx1REFBcUQ7QUFDckQsNkNBQTJDO0FBRTNDLDZCQUFtRDtBQUduRDtJQWVJOztPQUVHO0lBQ0gscUJBQW9CLGVBQWdDLEVBQ2hDLFVBQXNCLEVBQ3RCLFVBQXNCO1FBRnRCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFiMUMsMkNBQTJDO1FBQzNDOzs7O2FBSUs7UUFDRSxtQkFBYyxHQUE4QixJQUFJLHNCQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFROUQsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdCLENBQUM7b0JBdEJRLFdBQVc7SUF3QnBCOztPQUVHO0lBQ0ssMkJBQUssR0FBYjtRQUNJLGFBQVcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsa0NBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsYUFBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLGFBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssa0NBQVksR0FBcEIsVUFBcUIsSUFBYTtRQUM5QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsOEJBQVEsR0FBUixVQUFTLElBQVU7UUFFZixJQUFNLFdBQVcsR0FBRztZQUNoQixPQUFPLEVBQUUsSUFBSSxrQkFBVyxDQUFDO2dCQUNyQixjQUFjLEVBQUcsa0JBQWtCO2FBQ3RDLENBQUM7U0FDTCxDQUFDO1FBRUYsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLHVDQUF1QyxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztJQUM1RixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsMkJBQUssR0FBTCxVQUFNLElBQVU7UUFDWixJQUFNLFdBQVcsR0FBRztZQUNoQixPQUFPLEVBQUUsSUFBSSxrQkFBVyxDQUFDO2dCQUNyQixjQUFjLEVBQUcsa0JBQWtCO2FBQ3RDLENBQUM7U0FDTCxDQUFDO1FBRUYsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLHNDQUFzQyxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsbUNBQWEsR0FBYixVQUFjLEtBQUs7SUFFbkIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCw4QkFBUSxHQUFSLFVBQVMsS0FBYTtRQUNsQixhQUFXLENBQUMsWUFBWSxHQUFHLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxrQ0FBZSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsYUFBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsK0JBQVMsR0FBVCxVQUFVLEtBQWE7UUFDbkIsYUFBVyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDakMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsa0NBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUEvRlEsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQW1CNEIsa0NBQWU7WUFDcEIsd0JBQVU7WUFDVixpQkFBVTtPQXBCakMsV0FBVyxDQWdHdkI7SUFBRCxrQkFBQzs7Q0FBQSxBQWhHRCxJQWdHQztBQWhHWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBVc2VyLCBBdXRoVXNlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvbW9kZWxzL3VzZXIubW9kZWxcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuXHJcbmltcG9ydCB7IERhdGFiYXNlU2VydmljZSB9IGZyb20gXCIuL2RhdGFiYXNlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTG9nU2VydmljZSB9IGZyb20gXCIuL2xvZy5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuXHJcbiAgICAvLyBhY2Nlc3Mgb3VyIGN1cnJlbnQgdXNlciBmcm9tIGFueXdoZXJlXHJcbiAgICBwdWJsaWMgc3RhdGljIENVUlJFTlRfVVNFUjogQXV0aFVzZXI7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBBQ0NFU1NfVE9LRU46IHN0cmluZztcclxuXHJcbiAgICAvLyBzdWJzY3JpYmUgdG8gYXV0aGVudGljYXRlZCBzdGF0ZSBjaGFuZ2VzXHJcbiAgICAvKipcclxuICAgICAqIEJlaGF2aW9yU3ViamVjdHMgYXJlIHVzZWZ1bCBmb3IgcmVwcmVzZW50aW5nIFwidmFsdWVzIG92ZXIgdGltZVwiLlxyXG4gICAgICogRm9yIGluc3RhbmNlLCBhbiBldmVudCBzdHJlYW0gb2YgYmlydGhkYXlzIGlzIGEgU3ViamVjdCxcclxuICAgICAqIGJ1dCB0aGUgc3RyZWFtIG9mIGEgcGVyc29uJ3MgYWdlIHdvdWxkIGJlIGEgQmVoYXZpb3JTdWJqZWN0LlxyXG4gICAgICogKi9cclxuICAgIHB1YmxpYyBhdXRoZW50aWNhdGVkJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gIG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhYmFzZVNlcnZpY2U6IERhdGFiYXNlU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgbG9nU2VydmljZTogTG9nU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2luaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2luaXQoKSB7XHJcbiAgICAgICAgQXV0aFNlcnZpY2UuQ1VSUkVOVF9VU0VSID0gdGhpcy5kYXRhYmFzZVNlcnZpY2UuZ2V0SXRlbShEYXRhYmFzZVNlcnZpY2UuS0VZUy5jdXJyZW50VXNlcik7XHJcbiAgICAgICAgdGhpcy5sb2dTZXJ2aWNlLmRlYnVnKGBDdXJyZW50IHVzZXI6IGAsIEF1dGhTZXJ2aWNlLkNVUlJFTlRfVVNFUik7XHJcbiAgICAgICAgdGhpcy5fbm90aWZ5U3RhdGUoISFBdXRoU2VydmljZS5DVVJSRU5UX1VTRVIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhdXRoXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX25vdGlmeVN0YXRlKGF1dGg6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0ZWQkLm5leHQoYXV0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVzZXJcclxuICAgICAqL1xyXG4gICAgcmVnaXN0ZXIodXNlcjogVXNlcik6IE9ic2VydmFibGU8YW55PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnBvc3QoYGh0dHA6Ly8xMC4wLjIuMjo1MDAwL2FwaS91c2Vycy9zaWdudXBgLCB1c2VyLCBodHRwT3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVzZXJcclxuICAgICAqL1xyXG4gICAgbG9naW4odXNlcjogVXNlcik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQucG9zdChgaHR0cDovLzEwLjAuMi4yOjUwMDAvYXBpL2F1dGgvc2lnbmluYCwgdXNlciwgaHR0cE9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBlbWFpbFxyXG4gICAgICovXHJcbiAgICByZXNldFBhc3N3b3JkKGVtYWlsKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBlbWFpbFxyXG4gICAgICogQHBhcmFtIHBhc3N3b3JkXHJcbiAgICAgKi9cclxuICAgIHNhdmVVc2VyKGVtYWlsOiBzdHJpbmcpIHtcclxuICAgICAgICBBdXRoU2VydmljZS5DVVJSRU5UX1VTRVIgPSB7IGVtYWlsIH07XHJcbiAgICAgICAgdGhpcy5kYXRhYmFzZVNlcnZpY2Uuc2V0SXRlbShEYXRhYmFzZVNlcnZpY2UuS0VZUy5jdXJyZW50VXNlciwgQXV0aFNlcnZpY2UuQ1VSUkVOVF9VU0VSKTtcclxuICAgICAgICB0aGlzLl9ub3RpZnlTdGF0ZSh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHNhdmVUb2tlbih0b2tlbjogc3RyaW5nKSB7XHJcbiAgICAgICAgQXV0aFNlcnZpY2UuQUNDRVNTX1RPS0VOID0gdG9rZW47XHJcbiAgICAgICAgdGhpcy5kYXRhYmFzZVNlcnZpY2Uuc2V0SXRlbShEYXRhYmFzZVNlcnZpY2UuS0VZUy5hY2Nlc3NUb2tlbiwgdG9rZW4pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==