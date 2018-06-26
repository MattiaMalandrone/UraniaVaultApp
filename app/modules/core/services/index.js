"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var auth_service_1 = require("./auth.service");
var database_service_1 = require("./database.service");
var dialog_service_1 = require("./dialog.service");
var log_service_1 = require("./log.service");
exports.PROVIDERS = [
    auth_service_1.AuthService,
    database_service_1.DatabaseService,
    dialog_service_1.DialogService,
    log_service_1.LogService
];
__export(require("./auth.service"));
__export(require("./database.service"));
__export(require("./dialog.service"));
__export(require("./log.service"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLCtDQUE2QztBQUM3Qyx1REFBcUQ7QUFDckQsbURBQWlEO0FBQ2pELDZDQUEyQztBQUU5QixRQUFBLFNBQVMsR0FBVTtJQUM5QiwwQkFBVztJQUNYLGtDQUFlO0lBQ2YsOEJBQWE7SUFDYix3QkFBVTtDQUNYLENBQUM7QUFFRixvQ0FBK0I7QUFDL0Isd0NBQW1DO0FBQ25DLHNDQUFpQztBQUNqQyxtQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGF0YWJhc2VTZXJ2aWNlIH0gZnJvbSAnLi9kYXRhYmFzZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGlhbG9nU2VydmljZSB9IGZyb20gJy4vZGlhbG9nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2dTZXJ2aWNlIH0gZnJvbSAnLi9sb2cuc2VydmljZSc7XHJcblxyXG5leHBvcnQgY29uc3QgUFJPVklERVJTOiBhbnlbXSA9IFtcclxuICBBdXRoU2VydmljZSxcclxuICBEYXRhYmFzZVNlcnZpY2UsXHJcbiAgRGlhbG9nU2VydmljZSxcclxuICBMb2dTZXJ2aWNlXHJcbl07XHJcblxyXG5leHBvcnQgKiBmcm9tICcuL2F1dGguc2VydmljZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZGF0YWJhc2Uuc2VydmljZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZGlhbG9nLnNlcnZpY2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL2xvZy5zZXJ2aWNlJzsiXX0=