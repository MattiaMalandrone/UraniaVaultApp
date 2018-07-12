"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// nativescript
var appSettings = require("application-settings");
var DatabaseService = /** @class */ (function () {
    /**
     *
     */
    function DatabaseService() {
        // "https://urania-vault-node.herokuapp.com"
        // "http://10.0.2.2:5000"
        this.removeItem(DatabaseService_1.KEYS.host);
        this.setItem(DatabaseService_1.KEYS.host, "http://10.0.2.2:5000");
    }
    DatabaseService_1 = DatabaseService;
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
        accessToken: 'access-token',
        host: 'host'
    };
    DatabaseService = DatabaseService_1 = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], DatabaseService);
    return DatabaseService;
    var DatabaseService_1;
}());
exports.DatabaseService = DatabaseService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGFiYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MsZUFBZTtBQUNmLGtEQUFvRDtBQVNwRDtJQVFJOztPQUVHO0lBQ0g7UUFDSSw0Q0FBNEM7UUFDNUMseUJBQXlCO1FBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztJQUNwRSxDQUFDO3dCQWhCUSxlQUFlO0lBa0J4Qjs7OztPQUlHO0lBQ0ksaUNBQU8sR0FBZCxVQUFlLEdBQVcsRUFBRSxLQUFVO1FBQ2xDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksaUNBQU8sR0FBZCxVQUFlLEdBQVc7UUFDdEIsSUFBSSxJQUFJLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLG9DQUFVLEdBQWpCLFVBQWtCLEdBQVc7UUFDekIsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBM0NhLG9CQUFJLEdBQVU7UUFDeEIsV0FBVyxFQUFFLGNBQWM7UUFDM0IsV0FBVyxFQUFFLGNBQWM7UUFDM0IsSUFBSSxFQUFFLE1BQU07S0FDZixDQUFDO0lBTk8sZUFBZTtRQUQzQixpQkFBVSxFQUFFOztPQUNBLGVBQWUsQ0E4QzNCO0lBQUQsc0JBQUM7O0NBQUEsQUE5Q0QsSUE4Q0M7QUE5Q1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbi8vIG5hdGl2ZXNjcmlwdFxyXG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tICdhcHBsaWNhdGlvbi1zZXR0aW5ncyc7XHJcblxyXG5pbnRlcmZhY2UgSUtleXMge1xyXG4gICAgY3VycmVudFVzZXI6IHN0cmluZztcclxuICAgIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XHJcbiAgICBob3N0OiBzdHJpbmc7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERhdGFiYXNlU2VydmljZSB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBLRVlTOiBJS2V5cyA9IHtcclxuICAgICAgICBjdXJyZW50VXNlcjogJ2N1cnJlbnQtdXNlcicsXHJcbiAgICAgICAgYWNjZXNzVG9rZW46ICdhY2Nlc3MtdG9rZW4nLFxyXG4gICAgICAgIGhvc3Q6ICdob3N0J1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vIFwiaHR0cHM6Ly91cmFuaWEtdmF1bHQtbm9kZS5oZXJva3VhcHAuY29tXCJcclxuICAgICAgICAvLyBcImh0dHA6Ly8xMC4wLjIuMjo1MDAwXCJcclxuICAgICAgICB0aGlzLnJlbW92ZUl0ZW0oRGF0YWJhc2VTZXJ2aWNlLktFWVMuaG9zdCk7XHJcbiAgICAgICAgdGhpcy5zZXRJdGVtKERhdGFiYXNlU2VydmljZS5LRVlTLmhvc3QsIFwiaHR0cDovLzEwLjAuMi4yOjUwMDBcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRJdGVtKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRJdGVtKGtleTogc3RyaW5nKTogYW55IHtcclxuICAgICAgICBsZXQgaXRlbSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhrZXkpO1xyXG4gICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZW1vdmVJdGVtKGtleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgYXBwU2V0dGluZ3MucmVtb3ZlKGtleSk7XHJcbiAgICB9XHJcbn1cclxuIl19