"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LogService = /** @class */ (function () {
    function LogService() {
    }
    LogService_1 = LogService;
    /**
     *
     * @param msg
     * @param formatParams
     */
    LogService.prototype.debug = function (msg) {
        var formatParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            formatParams[_i - 1] = arguments[_i];
        }
        if (LogService_1.ENABLE) {
            console.log(msg, formatParams);
        }
    };
    /**
     *
     * @param msg
     * @param formatParams
     */
    LogService.prototype.error = function (msg) {
        var formatParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            formatParams[_i - 1] = arguments[_i];
        }
        if (LogService_1.ENABLE) {
            console.error(msg, formatParams);
        }
    };
    /**
     *
     * @param obj
     */
    LogService.prototype.inspect = function (obj) {
        if (LogService_1.ENABLE) {
            console.log(obj);
            console.log('typeof: ', typeof obj);
            if (obj) {
                console.log('constructor: ', obj.constructor.name);
                for (var key in obj) {
                    console.log(key + ": ", obj[key]);
                }
            }
        }
    };
    LogService.ENABLE = true;
    LogService = LogService_1 = __decorate([
        core_1.Injectable()
    ], LogService);
    return LogService;
    var LogService_1;
}());
exports.LogService = LogService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUczQztJQUFBO0lBMENBLENBQUM7bUJBMUNZLFVBQVU7SUFJbkI7Ozs7T0FJRztJQUNJLDBCQUFLLEdBQVosVUFBYSxHQUFRO1FBQUUsc0JBQXNCO2FBQXRCLFVBQXNCLEVBQXRCLHFCQUFzQixFQUF0QixJQUFzQjtZQUF0QixxQ0FBc0I7O1FBQ3pDLEVBQUUsQ0FBQyxDQUFDLFlBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ25DLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLDBCQUFLLEdBQVosVUFBYSxHQUFRO1FBQUUsc0JBQXNCO2FBQXRCLFVBQXNCLEVBQXRCLHFCQUFzQixFQUF0QixJQUFzQjtZQUF0QixxQ0FBc0I7O1FBQ3pDLEVBQUUsQ0FBQyxDQUFDLFlBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3JDLENBQUM7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksNEJBQU8sR0FBZCxVQUFlLEdBQVE7UUFDbkIsRUFBRSxDQUFDLENBQUMsWUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQ3BDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkQsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBSSxHQUFHLE9BQUksRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztZQUNMLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQXZDYSxpQkFBTSxHQUFZLElBQUksQ0FBQztJQUY1QixVQUFVO1FBRHRCLGlCQUFVLEVBQUU7T0FDQSxVQUFVLENBMEN0QjtJQUFELGlCQUFDOztDQUFBLEFBMUNELElBMENDO0FBMUNZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2dTZXJ2aWNlIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEVOQUJMRTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1zZ1xyXG4gICAgICogQHBhcmFtIGZvcm1hdFBhcmFtc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGVidWcobXNnOiBhbnksIC4uLmZvcm1hdFBhcmFtczogYW55W10pIHtcclxuICAgICAgICBpZiAoTG9nU2VydmljZS5FTkFCTEUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobXNnLCBmb3JtYXRQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbXNnXHJcbiAgICAgKiBAcGFyYW0gZm9ybWF0UGFyYW1zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlcnJvcihtc2c6IGFueSwgLi4uZm9ybWF0UGFyYW1zOiBhbnlbXSkge1xyXG4gICAgICAgIGlmIChMb2dTZXJ2aWNlLkVOQUJMRSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKG1zZywgZm9ybWF0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG9ialxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5zcGVjdChvYmo6IGFueSkge1xyXG4gICAgICAgIGlmIChMb2dTZXJ2aWNlLkVOQUJMRSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhvYmopO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndHlwZW9mOiAnLCB0eXBlb2Ygb2JqKTtcclxuICAgICAgICAgICAgaWYgKG9iaikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbnN0cnVjdG9yOiAnLCBvYmouY29uc3RydWN0b3IubmFtZSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7a2V5fTogYCwgb2JqW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19