"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// nativescript
var appSettings = require("application-settings");
var DatabaseService = /** @class */ (function () {
    function DatabaseService() {
    }
    /**
     *
     * @param key
     * @param value
     */
    DatabaseService.prototype.setItem = function (key, value) {
        appSettings.setString(key, JSON.stringify(value));
    };
    /**
     *
     * @param key
     */
    DatabaseService.prototype.getItem = function (key) {
        var item = appSettings.getString(key);
        if (item) {
            return JSON.parse(item);
        }
        return item;
    };
    /**
     *
     * @param key
     */
    DatabaseService.prototype.removeItem = function (key) {
        appSettings.remove(key);
    };
    DatabaseService.KEYS = {
        currentUser: 'current-user',
        accessToken: 'access-token'
    };
    DatabaseService = __decorate([
        core_1.Injectable()
    ], DatabaseService);
    return DatabaseService;
}());
exports.DatabaseService = DatabaseService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGFiYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MsZUFBZTtBQUNmLGtEQUFvRDtBQVFwRDtJQUFBO0lBbUNBLENBQUM7SUE1Qkc7Ozs7T0FJRztJQUNJLGlDQUFPLEdBQWQsVUFBZSxHQUFXLEVBQUUsS0FBVTtRQUNsQyxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVEOzs7T0FHRztJQUNJLGlDQUFPLEdBQWQsVUFBZSxHQUFXO1FBQ3RCLElBQUksSUFBSSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxvQ0FBVSxHQUFqQixVQUFrQixHQUFXO1FBQ3pCLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQWhDYSxvQkFBSSxHQUFVO1FBQ3hCLFdBQVcsRUFBRSxjQUFjO1FBQzNCLFdBQVcsRUFBRSxjQUFjO0tBQzlCLENBQUM7SUFMTyxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7T0FDQSxlQUFlLENBbUMzQjtJQUFELHNCQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7QUFuQ1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbi8vIG5hdGl2ZXNjcmlwdFxyXG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tICdhcHBsaWNhdGlvbi1zZXR0aW5ncyc7XHJcblxyXG5pbnRlcmZhY2UgSUtleXMge1xyXG4gICAgY3VycmVudFVzZXI6IHN0cmluZztcclxuICAgIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERhdGFiYXNlU2VydmljZSB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBLRVlTOiBJS2V5cyA9IHtcclxuICAgICAgICBjdXJyZW50VXNlcjogJ2N1cnJlbnQtdXNlcicsXHJcbiAgICAgICAgYWNjZXNzVG9rZW46ICdhY2Nlc3MtdG9rZW4nXHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0SXRlbShrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0SXRlbShrZXk6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoa2V5KTtcclxuICAgICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVtb3ZlSXRlbShrZXk6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGFwcFNldHRpbmdzLnJlbW92ZShrZXkpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==