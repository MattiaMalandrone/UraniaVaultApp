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
        // // https://urania-vault-node.herokuapp.com
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGFiYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MsZUFBZTtBQUNmLGtEQUFvRDtBQVNwRDtJQVFJOztPQUVHO0lBQ0g7UUFDSSw2Q0FBNkM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztJQUNwRSxDQUFDO3dCQWRRLGVBQWU7SUFnQnhCOzs7O09BSUc7SUFDSSxpQ0FBTyxHQUFkLFVBQWUsR0FBVyxFQUFFLEtBQVU7UUFDbEMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRDs7O09BR0c7SUFDSSxpQ0FBTyxHQUFkLFVBQWUsR0FBVztRQUN0QixJQUFJLElBQUksR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksb0NBQVUsR0FBakIsVUFBa0IsR0FBVztRQUN6QixXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUF6Q2Esb0JBQUksR0FBVTtRQUN4QixXQUFXLEVBQUUsY0FBYztRQUMzQixXQUFXLEVBQUUsY0FBYztRQUMzQixJQUFJLEVBQUUsTUFBTTtLQUNmLENBQUM7SUFOTyxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7O09BQ0EsZUFBZSxDQTRDM0I7SUFBRCxzQkFBQzs7Q0FBQSxBQTVDRCxJQTRDQztBQTVDWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuLy8gbmF0aXZlc2NyaXB0XHJcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gJ2FwcGxpY2F0aW9uLXNldHRpbmdzJztcclxuXHJcbmludGVyZmFjZSBJS2V5cyB7XHJcbiAgICBjdXJyZW50VXNlcjogc3RyaW5nO1xyXG4gICAgYWNjZXNzVG9rZW46IHN0cmluZztcclxuICAgIGhvc3Q6IHN0cmluZztcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGF0YWJhc2VTZXJ2aWNlIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEtFWVM6IElLZXlzID0ge1xyXG4gICAgICAgIGN1cnJlbnRVc2VyOiAnY3VycmVudC11c2VyJyxcclxuICAgICAgICBhY2Nlc3NUb2tlbjogJ2FjY2Vzcy10b2tlbicsXHJcbiAgICAgICAgaG9zdDogJ2hvc3QnXHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8gLy8gaHR0cHM6Ly91cmFuaWEtdmF1bHQtbm9kZS5oZXJva3VhcHAuY29tXHJcbiAgICAgICAgdGhpcy5zZXRJdGVtKERhdGFiYXNlU2VydmljZS5LRVlTLmhvc3QsIFwiaHR0cDovLzEwLjAuMi4yOjUwMDBcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRJdGVtKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRJdGVtKGtleTogc3RyaW5nKTogYW55IHtcclxuICAgICAgICBsZXQgaXRlbSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhrZXkpO1xyXG4gICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZW1vdmVJdGVtKGtleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgYXBwU2V0dGluZ3MucmVtb3ZlKGtleSk7XHJcbiAgICB9XHJcbn1cclxuIl19