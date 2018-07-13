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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaWduLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSwwQ0FBZ0k7QUFDaEksdURBQTREO0FBQzVELGlEQUFnRDtBQUNoRCwwQkFBNEI7QUFFNUIsaUZBQWtFO0FBRWxFLGlEQUF3RDtBQUN4RCxvRUFBa0U7QUFDbEUsb0RBQTBEO0FBUTFEO0lBWUksdUJBQW9CLElBQVUsRUFBVSxXQUF3QixFQUFVLE1BQWMsRUFBVSxlQUFnQztRQUFsSSxpQkFnQkM7UUFoQm1CLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFWbEksZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixnQkFBVyxHQUFHLElBQUksQ0FBQztRQVVmLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksYUFBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsNkJBQTZCLENBQUM7UUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBRTdCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxpREFBZ0IsRUFBRSxDQUFDO1FBRXJDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsV0FBa0I7WUFDdkMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFVBQVUsR0FBRywyQkFBMkIsQ0FBQztRQUU5QyxJQUFJLENBQUMsV0FBVyxHQUFHLDBCQUFXLENBQUMsWUFBWSxDQUFDO1FBQzVDLElBQUksQ0FBQyxV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Q0FBQztJQTdKc0I7UUFBdEIsZ0JBQVMsQ0FBQyxVQUFVLENBQUM7a0NBQVcsaUJBQVU7bURBQUM7SUFDZDtRQUE3QixnQkFBUyxDQUFDLGlCQUFpQixDQUFDO2tDQUFrQixpQkFBVTswREFBQztJQVJqRCxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLE1BQU07WUFDaEIsV0FBVyxFQUFFLHFCQUFxQjtZQUNsQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztTQUNsQyxDQUFDO3lDQWE0QixXQUFJLEVBQXVCLDBCQUFXLEVBQWtCLGVBQU0sRUFBMkIsMEJBQWU7T0FaekgsYUFBYSxDQXFLekI7SUFBRCxvQkFBQztDQUFBLEFBcktELElBcUtDO0FBcktZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgUm91dGVyRXZlbnQsIEV2ZW50LCBOYXZpZ2F0aW9uU3RhcnQsIE5hdmlnYXRpb25FbmQsIE5hdmlnYXRpb25DYW5jZWwsIE5hdmlnYXRpb25FcnJvciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgYWxlcnQsIHByb21wdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuaW1wb3J0IHsgTG9hZGluZ0luZGljYXRvciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbG9hZGluZy1pbmRpY2F0b3JcIjtcclxuXHJcbmltcG9ydCB7IFVzZXIsIEF1dGhVc2VyIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRGF0YWJhc2VTZXJ2aWNlIH0gZnJvbSBcIn4vbW9kdWxlcy9jb3JlL3NlcnZpY2VzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnc2lnbicsXHJcbiAgdGVtcGxhdGVVcmw6ICdzaWduLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnc2lnbi5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZ25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGlzTG9nZ2VkSW4gPSBmYWxzZTtcclxuICAgIGlzTG9nZ2luZ0luID0gdHJ1ZTtcclxuICAgIHVzZXI6IFVzZXI7XHJcbiAgICBjdXJyZW50VXNlcjogQXV0aFVzZXI7XHJcbiAgICBsb2FkZXI6IGFueTtcclxuICAgIEBWaWV3Q2hpbGQoXCJwYXNzd29yZFwiKSBwYXNzd29yZDogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoXCJjb25maXJtUGFzc3dvcmRcIikgY29uZmlybVBhc3N3b3JkOiBFbGVtZW50UmVmO1xyXG5cclxuICAgIHB1YmxpYyBodG1sQ2lyY2xlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBkYXRhYmFzZVNlcnZpY2U6IERhdGFiYXNlU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgICAgICAgdGhpcy51c2VyLmVtYWlsID0gXCJtYXR0aWEubWFsYW5kcm9uZUBnbWFpbC5jb21cIjtcclxuICAgICAgICB0aGlzLnVzZXIucGFzc3dvcmQgPSBcInBpcHBvXCI7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZGVyID0gbmV3IExvYWRpbmdJbmRpY2F0b3IoKTtcclxuXHJcbiAgICAgICAgcm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoKHJvdXRlckV2ZW50OiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrUm91dGVyRXZlbnQocm91dGVyRXZlbnQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmh0bWxDaXJjbGUgPSAnPHNwYW4gY2xhc3M9XCJkb3RcIj48L3NwYW4+JztcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IEF1dGhTZXJ2aWNlLkNVUlJFTlRfVVNFUjtcclxuICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSAhXy5pc05pbChBdXRoU2VydmljZS5DVVJSRU5UX1VTRVIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgZ290b0FsYmkoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2FsYmlcIl0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgdG9nZ2xlRm9ybSgpIHtcclxuICAgICAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBzdWJtaXQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnVzZXIuZW1haWwgfHwgIXRoaXMudXNlci5wYXNzd29yZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFsZXJ0KGBQbGVhc2UgcHJvdmlkZSBib3RoIGFuIGVtYWlsIGFkZHJlc3MgYW5kIHBhc3N3b3JkLmApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGxvZ2luKCkge1xyXG4gICAgICAgIHRoaXMubG9hZGVyLnNob3coKTtcclxuICAgICAgICBkZWxldGUgdGhpcy51c2VyLmNvbmZpcm1QYXNzd29yZDtcclxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcikuc3Vic2NyaWJlKChyZXMpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2luc2lkZSBzdWJzY3JpYmUhISEhJyk7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uuc2F2ZVVzZXIodGhpcy51c2VyLmVtYWlsLCByZXMudXNlcklkKTtcclxuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5zYXZlVG9rZW4ocmVzLnRva2VuKTtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2FsYmlcIl0pO1xyXG4gICAgICAgIH0sIGVyciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIHRoaXMuYWxlcnQoYFVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IGZpbmQgeW91ciBhY2NvdW50LmApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqL1xyXG4gIHJlZ2lzdGVyKCkge1xyXG4gICAgICBpZiAodGhpcy51c2VyLnBhc3N3b3JkICE9IHRoaXMudXNlci5jb25maXJtUGFzc3dvcmQpIHtcclxuICAgICAgICAgIHRoaXMuYWxlcnQoXCJZb3VyIHBhc3N3b3JkcyBkbyBub3QgbWF0Y2guXCIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYXV0aFNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICB0aGlzLmlzTG9nZ2luZ0luID0gdHJ1ZTtcclxuICAgICAgfSwgZXJyID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIHRoaXMuYWxlcnQoZXJyLmVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqL1xyXG4gIGZvcmdvdFBhc3N3b3JkKCkge1xyXG4gICAgICBwcm9tcHQoe1xyXG4gICAgICAgICAgdGl0bGU6IFwiRm9yZ290IFBhc3N3b3JkXCIsXHJcbiAgICAgICAgICBtZXNzYWdlOiBcIkVudGVyIHRoZSBlbWFpbCBhZGRyZXNzIHlvdSB1c2VkIHRvIHJlZ2lzdGVyIGZvciBBUFAgTkFNRSB0byByZXNldCB5b3VyIHBhc3N3b3JkLlwiLFxyXG4gICAgICAgICAgaW5wdXRUeXBlOiBcImVtYWlsXCIsXHJcbiAgICAgICAgICBkZWZhdWx0VGV4dDogXCJcIixcclxuICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiLFxyXG4gICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIlxyXG4gICAgICB9KS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZGF0YS5yZXN1bHQpIHtcclxuICAgICAgICAgICAgICAvLyB0aGlzLmF1dGhTZXJ2aWNlLnJlc2V0UGFzc3dvcmQoZGF0YS50ZXh0LnRyaW0oKSlcclxuICAgICAgICAgICAgICAvLyAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5hbGVydChcIllvdXIgcGFzc3dvcmQgd2FzIHN1Y2Nlc3NmdWxseSByZXNldC4gUGxlYXNlIGNoZWNrIHlvdXIgZW1haWwgZm9yIGluc3RydWN0aW9ucyBvbiBjaG9vc2luZyBhIG5ldyBwYXNzd29yZC5cIik7XHJcbiAgICAgICAgICAgICAgLy8gICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuYWxlcnQoXCJVbmZvcnR1bmF0ZWx5LCBhbiBlcnJvciBvY2N1cnJlZCByZXNldHRpbmcgeW91ciBwYXNzd29yZC5cIik7XHJcbiAgICAgICAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICovXHJcbiAgZm9jdXNQYXNzd29yZCgpIHtcclxuICAgICAgdGhpcy5wYXNzd29yZC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqL1xyXG4gIGZvY3VzQ29uZmlybVBhc3N3b3JkKCkge1xyXG4gICAgICBpZiAoIXRoaXMuaXNMb2dnaW5nSW4pIHtcclxuICAgICAgICAgIHRoaXMuY29uZmlybVBhc3N3b3JkLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKi9cclxuICBhbGVydChtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KHtcclxuICAgICAgICAgIHRpdGxlOiBcIkFQUCBOQU1FXCIsXHJcbiAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIixcclxuICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSByb3V0ZXJFdmVudFxyXG4gICAgICovXHJcbiAgICBjaGVja1JvdXRlckV2ZW50KHJvdXRlckV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGlmIChyb3V0ZXJFdmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydClcclxuICAgICAgICAvLyAgICAgdGhpcy5sb2FkZXIuc2hvdygpO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyb3V0ZXJFdmVudCk7XHJcblxyXG4gICAgICAgIGlmIChyb3V0ZXJFdmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQgfHxcclxuICAgICAgICAgICAgICAgIHJvdXRlckV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkNhbmNlbCB8fFxyXG4gICAgICAgICAgICAgICAgcm91dGVyRXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkZXIuaGlkZSgpO1xyXG4gICAgfVxyXG59Il19