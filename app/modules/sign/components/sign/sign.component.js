"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var page_1 = require("tns-core-modules/ui/page");
var _ = require("lodash");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var models_1 = require("../../../shared/models");
var auth_service_1 = require("../../../core/services/auth.service");
var services_1 = require("~/modules/core/services");
var SignComponent = /** @class */ (function () {
    function SignComponent(page, authService, router, databaseService) {
        var _this = this;
        this.page = page;
        this.authService = authService;
        this.router = router;
        this.databaseService = databaseService;
        this.isLoggedIn = false;
        this.isLoggingIn = true;
        this.page.actionBarHidden = true;
        this.user = new models_1.User();
        this.user.email = "mattia.malandrone@gmail.com";
        this.user.password = "pippo";
        this.loader = new nativescript_loading_indicator_1.LoadingIndicator();
        this.loader.hide();
        router.events.subscribe(function (routerEvent) {
            _this.checkRouterEvent(routerEvent);
        });
        this.htmlCircle = '<span class="dot"></span>';
        this.currentUser = auth_service_1.AuthService.CURRENT_USER;
        this.isLoggedIn = !_.isNil(auth_service_1.AuthService.CURRENT_USER);
    }
    /**
     *
     */
    SignComponent.prototype.ngOnInit = function () {
    };
    /**
     *
     */
    SignComponent.prototype.gotoAlbi = function () {
        this.loader.show();
        this.router.navigate(["/albi"]);
    };
    /**
     *
     */
    SignComponent.prototype.toggleForm = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    /**
     *
     */
    SignComponent.prototype.submit = function () {
        if (!this.user.email || !this.user.password) {
            this.alert("Please provide both an email address and password.");
            return;
        }
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.register();
        }
    };
    /**
     *
     */
    SignComponent.prototype.login = function () {
        var _this = this;
        this.loader.show();
        delete this.user.confirmPassword;
        this.authService.login(this.user).subscribe(function (res) {
            console.log('inside subscribe!!!!');
            _this.authService.saveUser(_this.user.email, res.userId);
            _this.authService.saveToken(res.token);
            _this.router.navigate(["/albi"]);
        }, function (err) {
            console.log(err);
            _this.alert("Unfortunately we could not find your account.");
        });
    };
    /**
     *
     */
    SignComponent.prototype.register = function () {
        var _this = this;
        if (this.user.password != this.user.confirmPassword) {
            this.alert("Your passwords do not match.");
            return;
        }
        this.authService.register(this.user).subscribe(function (res) {
            _this.isLoggingIn = true;
        }, function (err) {
            console.log(err);
            _this.alert(err.error);
        });
    };
    /**
     *
     */
    SignComponent.prototype.forgotPassword = function () {
        dialogs_1.prompt({
            title: "Forgot Password",
            message: "Enter the email address you used to register for APP NAME to reset your password.",
            inputType: "email",
            defaultText: "",
            okButtonText: "Ok",
            cancelButtonText: "Cancel"
        }).then(function (data) {
            if (data.result) {
                // this.authService.resetPassword(data.text.trim())
                //     .then(() => {
                //         this.alert("Your password was successfully reset. Please check your email for instructions on choosing a new password.");
                //     }).catch(() => {
                //         this.alert("Unfortunately, an error occurred resetting your password.");
                //     });
            }
        });
    };
    /**
     *
     */
    SignComponent.prototype.focusPassword = function () {
        this.password.nativeElement.focus();
    };
    /**
     *
     */
    SignComponent.prototype.focusConfirmPassword = function () {
        if (!this.isLoggingIn) {
            this.confirmPassword.nativeElement.focus();
        }
    };
    /**
     *
     */
    SignComponent.prototype.alert = function (message) {
        return dialogs_1.alert({
            title: "APP NAME",
            okButtonText: "OK",
            message: message
        });
    };
    /**
     *
     * @param routerEvent
     */
    SignComponent.prototype.checkRouterEvent = function (routerEvent) {
        // if (routerEvent instanceof NavigationStart)
        //     this.loader.show();
        // console.log(routerEvent);
        if (routerEvent instanceof router_1.NavigationEnd ||
            routerEvent instanceof router_1.NavigationCancel ||
            routerEvent instanceof router_1.NavigationError)
            this.loader.hide();
    };
    __decorate([
        core_1.ViewChild("password"),
        __metadata("design:type", core_1.ElementRef)
    ], SignComponent.prototype, "password", void 0);
    __decorate([
        core_1.ViewChild("confirmPassword"),
        __metadata("design:type", core_1.ElementRef)
    ], SignComponent.prototype, "confirmPassword", void 0);
    SignComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sign',
            templateUrl: 'sign.component.html',
            styleUrls: ['sign.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page, auth_service_1.AuthService, router_1.Router, services_1.DatabaseService])
    ], SignComponent);
    return SignComponent;
}());
exports.SignComponent = SignComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaWduLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSwwQ0FBZ0k7QUFDaEksdURBQTREO0FBQzVELGlEQUFnRDtBQUNoRCwwQkFBNEI7QUFFNUIsaUZBQWtFO0FBRWxFLGlEQUF3RDtBQUN4RCxvRUFBa0U7QUFDbEUsb0RBQTBEO0FBUTFEO0lBWUksdUJBQW9CLElBQVUsRUFBVSxXQUF3QixFQUFVLE1BQWMsRUFBVSxlQUFnQztRQUFsSSxpQkFrQkM7UUFsQm1CLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFWbEksZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixnQkFBVyxHQUFHLElBQUksQ0FBQztRQVVmLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksYUFBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsNkJBQTZCLENBQUM7UUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBRTdCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxpREFBZ0IsRUFBRSxDQUFDO1FBRXJDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFbkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxXQUFrQjtZQUN2QyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsVUFBVSxHQUFHLDJCQUEyQixDQUFDO1FBRTlDLElBQUksQ0FBQyxXQUFXLEdB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LHlCQUFnQjtZQUN2QyxXQUFXLFlBQVksd0JBQWUsQ0FBQztZQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFoS3NCO1FBQXRCLGdCQUFTLENBQUMsVUFBVSxDQUFDO2tDQUFXLGlCQUFVO21EQUFDO0lBQ2Q7UUFBN0IsZ0JBQVMsQ0FBQyxpQkFBaUIsQ0FBQztrQ0FBa0IsaUJBQVU7MERBQUM7SUFSakQsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSxxQkFBcUI7WUFDbEMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7U0FDbEMsQ0FBQzt5Q0FhNEIsV0FBSSxFQUF1QiwwQkFBVyxFQUFrQixlQUFNLEVBQTJCLDBCQUFlO09BWnpILGFBQWEsQ0F3S3pCO0lBQUQsb0JBQUM7Q0FBQSxBQXhLRCxJQXdLQztBQXhLWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlckV2ZW50LCBFdmVudCwgTmF2aWdhdGlvblN0YXJ0LCBOYXZpZ2F0aW9uRW5kLCBOYXZpZ2F0aW9uQ2FuY2VsLCBOYXZpZ2F0aW9uRXJyb3IgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IGFsZXJ0LCBwcm9tcHQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmltcG9ydCB7IExvYWRpbmdJbmRpY2F0b3IgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWxvYWRpbmctaW5kaWNhdG9yXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyLCBBdXRoVXNlciB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvbW9kZWxzXCI7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2NvcmUvc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IERhdGFiYXNlU2VydmljZSB9IGZyb20gXCJ+L21vZHVsZXMvY29yZS9zZXJ2aWNlc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3NpZ24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnc2lnbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ3NpZ24uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWduQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBpc0xvZ2dlZEluID0gZmFsc2U7XHJcbiAgICBpc0xvZ2dpbmdJbiA9IHRydWU7XHJcbiAgICB1c2VyOiBVc2VyO1xyXG4gICAgY3VycmVudFVzZXI6IEF1dGhVc2VyO1xyXG4gICAgbG9hZGVyOiBhbnk7XHJcbiAgICBAVmlld0NoaWxkKFwicGFzc3dvcmRcIikgcGFzc3dvcmQ6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKFwiY29uZmlybVBhc3N3b3JkXCIpIGNvbmZpcm1QYXNzd29yZDogRWxlbWVudFJlZjtcclxuXHJcbiAgICBwdWJsaWMgaHRtbENpcmNsZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZGF0YWJhc2VTZXJ2aWNlOiBEYXRhYmFzZVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgICAgIHRoaXMudXNlci5lbWFpbCA9IFwibWF0dGlhLm1hbGFuZHJvbmVAZ21haWwuY29tXCI7XHJcbiAgICAgICAgdGhpcy51c2VyLnBhc3N3b3JkID0gXCJwaXBwb1wiO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWRlciA9IG5ldyBMb2FkaW5nSW5kaWNhdG9yKCk7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZGVyLmhpZGUoKTtcclxuXHJcbiAgICAgICAgcm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoKHJvdXRlckV2ZW50OiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrUm91dGVyRXZlbnQocm91dGVyRXZlbnQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmh0bWxDaXJjbGUgPSAnPHNwYW4gY2xhc3M9XCJkb3RcIj48L3NwYW4+JztcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IEF1dGhTZXJ2aWNlLkNVUlJFTlRfVVNFUjtcclxuICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSAhXy5pc05pbChBdXRoU2VydmljZS5DVVJSRU5UX1VTRVIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgZ290b0FsYmkoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkZXIuc2hvdygpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9hbGJpXCJdKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHRvZ2dsZUZvcm0oKSB7XHJcbiAgICAgICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgc3VibWl0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy51c2VyLmVtYWlsIHx8ICF0aGlzLnVzZXIucGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgdGhpcy5hbGVydChgUGxlYXNlIHByb3ZpZGUgYm90aCBhbiBlbWFpbCBhZGRyZXNzIGFuZCBwYXNzd29yZC5gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBsb2dpbigpIHtcclxuICAgICAgICB0aGlzLmxvYWRlci5zaG93KCk7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMudXNlci5jb25maXJtUGFzc3dvcmQ7XHJcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dpbih0aGlzLnVzZXIpLnN1YnNjcmliZSgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbnNpZGUgc3Vic2NyaWJlISEhIScpO1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnNhdmVVc2VyKHRoaXMudXNlci5lbWFpbCwgcmVzLnVzZXJJZCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uuc2F2ZVRva2VuKHJlcy50b2tlbik7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9hbGJpXCJdKTtcclxuICAgICAgICB9LCBlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICB0aGlzLmFsZXJ0KGBVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBmaW5kIHlvdXIgYWNjb3VudC5gKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKi9cclxuICByZWdpc3RlcigpIHtcclxuICAgICAgaWYgKHRoaXMudXNlci5wYXNzd29yZCAhPSB0aGlzLnVzZXIuY29uZmlybVBhc3N3b3JkKSB7XHJcbiAgICAgICAgICB0aGlzLmFsZXJ0KFwiWW91ciBwYXNzd29yZHMgZG8gbm90IG1hdGNoLlwiKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudXNlcikuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgdGhpcy5pc0xvZ2dpbmdJbiA9IHRydWU7XHJcbiAgICAgIH0sIGVyciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB0aGlzLmFsZXJ0KGVyci5lcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKi9cclxuICBmb3Jnb3RQYXNzd29yZCgpIHtcclxuICAgICAgcHJvbXB0KHtcclxuICAgICAgICAgIHRpdGxlOiBcIkZvcmdvdCBQYXNzd29yZFwiLFxyXG4gICAgICAgICAgbWVzc2FnZTogXCJFbnRlciB0aGUgZW1haWwgYWRkcmVzcyB5b3UgdXNlZCB0byByZWdpc3RlciBmb3IgQVBQIE5BTUUgdG8gcmVzZXQgeW91ciBwYXNzd29yZC5cIixcclxuICAgICAgICAgIGlucHV0VHlwZTogXCJlbWFpbFwiLFxyXG4gICAgICAgICAgZGVmYXVsdFRleHQ6IFwiXCIsXHJcbiAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIixcclxuICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCJcclxuICAgICAgfSkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGRhdGEucmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgLy8gdGhpcy5hdXRoU2VydmljZS5yZXNldFBhc3N3b3JkKGRhdGEudGV4dC50cmltKCkpXHJcbiAgICAgICAgICAgICAgLy8gICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuYWxlcnQoXCJZb3VyIHBhc3N3b3JkIHdhcyBzdWNjZXNzZnVsbHkgcmVzZXQuIFBsZWFzZSBjaGVjayB5b3VyIGVtYWlsIGZvciBpbnN0cnVjdGlvbnMgb24gY2hvb3NpbmcgYSBuZXcgcGFzc3dvcmQuXCIpO1xyXG4gICAgICAgICAgICAgIC8vICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLmFsZXJ0KFwiVW5mb3J0dW5hdGVseSwgYW4gZXJyb3Igb2NjdXJyZWQgcmVzZXR0aW5nIHlvdXIgcGFzc3dvcmQuXCIpO1xyXG4gICAgICAgICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqL1xyXG4gIGZvY3VzUGFzc3dvcmQoKSB7XHJcbiAgICAgIHRoaXMucGFzc3dvcmQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKi9cclxuICBmb2N1c0NvbmZpcm1QYXNzd29yZCgpIHtcclxuICAgICAgaWYgKCF0aGlzLmlzTG9nZ2luZ0luKSB7XHJcbiAgICAgICAgICB0aGlzLmNvbmZpcm1QYXNzd29yZC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICovXHJcbiAgYWxlcnQobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICAgIHJldHVybiBhbGVydCh7XHJcbiAgICAgICAgICB0aXRsZTogXCJBUFAgTkFNRVwiLFxyXG4gICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXHJcbiAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gcm91dGVyRXZlbnRcclxuICAgICAqL1xyXG4gICAgY2hlY2tSb3V0ZXJFdmVudChyb3V0ZXJFdmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICAvLyBpZiAocm91dGVyRXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQpXHJcbiAgICAgICAgLy8gICAgIHRoaXMubG9hZGVyLnNob3coKTtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocm91dGVyRXZlbnQpO1xyXG5cclxuICAgICAgICBpZiAocm91dGVyRXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kIHx8XHJcbiAgICAgICAgICAgICAgICByb3V0ZXJFdmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25DYW5jZWwgfHxcclxuICAgICAgICAgICAgICAgIHJvdXRlckV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyLmhpZGUoKTtcclxuICAgIH1cclxufSJdfQ==