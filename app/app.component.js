"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var frameModule = require("tns-core-modules/ui/frame");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var AppComponent = /** @class */ (function () {
    /**
     *
     */
    function AppComponent(routerExt, router) {
        this.routerExt = routerExt;
        this.router = router;
    }
    /**
     *
     */
    AppComponent.prototype.ngOnInit = function () {
        // application.android.on(application.AndroidApplication.activityBackPressedEvent, (args: application.AndroidActivityBackPressedEventData) => {
        //     if (this.routerExt.canGoBack()) {
        //         this.router.events.pipe(
        //             filter(e => e instanceof NavigationStart),
        //             pairwise()
        //          )
        //         .subscribe((event: any[]) => {
        //             console.log('###########################');
        //             console.log(event[0].urlAfterRedirects);
        //             console.log('###########################');
        //             args.cancel = true;
        //             this.routerExt.back();
        //         });
        //     } else {
        //         args.cancel = false;
        //     }
        // });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            template: "<!-- https://docs.nativescript.org/angular/core-concepts/angular-navigation.html#page-router-outlet -->\n               <page-router-outlet></page-router-outlet>",
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, router_2.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFFMUMsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFDekQsc0RBQStEO0FBQy9ELDBDQUE0RTtBQVM1RTtJQUVJOztPQUVHO0lBQ0gsc0JBQW9CLFNBQTJCLEVBQVUsTUFBYztRQUFuRCxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7SUFFdkUsQ0FBQztJQUVEOztPQUVHO0lBQ0ksK0JBQVEsR0FBZjtRQUNJLCtJQUErSTtRQUMvSSx3Q0FBd0M7UUFFeEMsbUNBQW1DO1FBQ25DLHlEQUF5RDtRQUN6RCx5QkFBeUI7UUFDekIsYUFBYTtRQUNiLHlDQUF5QztRQUN6QywwREFBMEQ7UUFDMUQsdURBQXVEO1FBQ3ZELDBEQUEwRDtRQUMxRCxrQ0FBa0M7UUFDbEMscUNBQXFDO1FBQ3JDLGNBQWM7UUFDZCxlQUFlO1FBQ2YsK0JBQStCO1FBQy9CLFFBQVE7UUFDUixNQUFNO0lBQ1YsQ0FBQztJQS9CUSxZQUFZO1FBTnhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsbUtBQzJDO1NBQ3hELENBQUM7eUNBT2lDLHlCQUFnQixFQUFrQixlQUFNO09BTDlELFlBQVksQ0FnQ3hCO0lBQUQsbUJBQUM7Q0FBQSxBQWhDRCxJQWdDQztBQWhDWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuY29uc3QgZnJhbWVNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKTtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlc1JlY29nbml6ZWQsIE5hdmlnYXRpb25TdGFydCB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IGZpbHRlciwgcGFpcndpc2UgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGU6IGA8IS0tIGh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FuZ3VsYXIvY29yZS1jb25jZXB0cy9hbmd1bGFyLW5hdmlnYXRpb24uaHRtbCNwYWdlLXJvdXRlci1vdXRsZXQgLS0+XG4gICAgICAgICAgICAgICA8cGFnZS1yb3V0ZXItb3V0bGV0PjwvcGFnZS1yb3V0ZXItb3V0bGV0PmAsXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHQ6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICAvLyBhcHBsaWNhdGlvbi5hbmRyb2lkLm9uKGFwcGxpY2F0aW9uLkFuZHJvaWRBcHBsaWNhdGlvbi5hY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnQsIChhcmdzOiBhcHBsaWNhdGlvbi5BbmRyb2lkQWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50RGF0YSkgPT4ge1xuICAgICAgICAvLyAgICAgaWYgKHRoaXMucm91dGVyRXh0LmNhbkdvQmFjaygpKSB7XG5cbiAgICAgICAgLy8gICAgICAgICB0aGlzLnJvdXRlci5ldmVudHMucGlwZShcbiAgICAgICAgLy8gICAgICAgICAgICAgZmlsdGVyKGUgPT4gZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCksXG4gICAgICAgIC8vICAgICAgICAgICAgIHBhaXJ3aXNlKClcbiAgICAgICAgLy8gICAgICAgICAgKVxuICAgICAgICAvLyAgICAgICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBhbnlbXSkgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjJyk7XG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50WzBdLnVybEFmdGVyUmVkaXJlY3RzKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIycpO1xuICAgICAgICAvLyAgICAgICAgICAgICBhcmdzLmNhbmNlbCA9IHRydWU7XG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0LmJhY2soKTtcbiAgICAgICAgLy8gICAgICAgICB9KTtcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgYXJncy5jYW5jZWwgPSBmYWxzZTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSk7XG4gICAgfVxufVxuIl19