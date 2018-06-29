"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var page_1 = require("tns-core-modules/ui/page");
var models_1 = require("../../../shared/models");
var auth_service_1 = require("../../../core/services/auth.service");
var SignComponent = /** @class */ (function () {
    function SignComponent(page, authService, router) {
        this.page = page;
        this.authService = authService;
        this.router = router;
        this.isLoggingIn = true;
        this.page.actionBarHidden = true;
        this.user = new models_1.User();
        this.user.email = "mattia.malandrone@gmail.com";
        this.user.password = "pippo";
    }
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
        delete this.user.confirmPassword;
        this.authService.login(this.user).subscribe(function (res) {
            _this.authService.saveUser(_this.user.email);
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
        __metadata("design:paramtypes", [page_1.Page, auth_service_1.AuthService, router_1.Router])
    ], SignComponent);
    return SignComponent;
}());
exports.SignComponent = SignComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaWduLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRTtBQUNqRSwwQ0FBeUM7QUFDekMsdURBQTREO0FBQzVELGlEQUFnRDtBQUVoRCxpREFBOEM7QUFDOUMsb0VBQWtFO0FBUWxFO0lBTUUsdUJBQW9CLElBQVUsRUFBVSxXQUF3QixFQUFVLE1BQWM7UUFBcEUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUx4RixnQkFBVyxHQUFHLElBQUksQ0FBQztRQU1qQixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGFBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLDZCQUE2QixDQUFDO1FBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUMvQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxrQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsOEJBQU0sR0FBTjtRQUNFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO1lBQ2pFLE1BQU0sQ0FBQztRQUNYLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BCLENBQUM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCw2QkFBSyxHQUFMO1FBQUEsaUJBVUM7UUFUQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFHO1lBQzVDLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0MsS0FBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RDLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNwQyxDQUFDLEVBQUUsVUFBQSxHQUFHO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixLQUFJLENBQUMsS0FBSyxDQUFDLCtDQUErQyxDQUFDLENBQUM7UUFDaEUsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxnQ0FBUSxHQUFSO1FBQUEsaUJBV0M7UUFWRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1lBQzNDLE1BQU0sQ0FBQztRQUNYLENBQUM7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNoRCxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUMxQixDQUFDLEVBQUUsVUFBQSxHQUFHO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7T0FFRztJQUNILHNDQUFjLEdBQWQ7UUFDSSxnQkFBTSxDQUFDO1lBQ0gsS0FBSyxFQUFFLGlCQUFpQjtZQUN4QixPQUFPLEVBQUUsbUZBQW1GO1lBQzVGLFNBQVMsRUFBRSxPQUFPO1lBQ2xCLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLElBQUk7WUFDbEIsZ0JBQWdCLEVBQUUsUUFBUTtTQUM3QixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSTtZQUNULEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNkLG1EQUFtRDtnQkFDbkQsb0JBQW9CO2dCQUNwQixvSUFBb0k7Z0JBQ3BJLHVCQUF1QjtnQkFDdkIsbUZBQW1GO2dCQUNuRixVQUFVO1lBQ2QsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOztPQUVHO0lBQ0gscUNBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7T0FFRztJQUNILDRDQUFvQixHQUFwQjtRQUNJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDL0MsQ0FBQztJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNILDZCQUFLLEdBQUwsVUFBTSxPQUFlO1FBQ2pCLE1BQU0sQ0FBQyxlQUFLLENBQUM7WUFDVCxLQUFLLEVBQUUsVUFBVTtZQUNqQixZQUFZLEVBQUUsSUFBSTtZQUNsQixPQUFPLEVBQUUsT0FBTztTQUNuQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBaEhzQjtRQUF0QixnQkFBUyxDQUFDLFVBQVUsQ0FBQztrQ0FBVyxpQkFBVTttREFBQztJQUNkO1FBQTdCLGdCQUFTLENBQUMsaUJBQWlCLENBQUM7a0NBQWtCLGlCQUFVOzBEQUFDO0lBSi9DLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsTUFBTTtZQUNoQixXQUFXLEVBQUUscUJBQXFCO1lBQ2xDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1NBQ2xDLENBQUM7eUNBTzBCLFdBQUksRUFBdUIsMEJBQVcsRUFBa0IsZUFBTTtPQU43RSxhQUFhLENBb0h6QjtJQUFELG9CQUFDO0NBQUEsQUFwSEQsSUFvSEM7QUFwSFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgYWxlcnQsIHByb21wdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuXHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9jb3JlL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3NpZ24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnc2lnbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ3NpZ24uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWduQ29tcG9uZW50IHtcclxuICBpc0xvZ2dpbmdJbiA9IHRydWU7XHJcbiAgdXNlcjogVXNlcjtcclxuICBAVmlld0NoaWxkKFwicGFzc3dvcmRcIikgcGFzc3dvcmQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChcImNvbmZpcm1QYXNzd29yZFwiKSBjb25maXJtUGFzc3dvcmQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcclxuICAgIHRoaXMudXNlci5lbWFpbCA9IFwibWF0dGlhLm1hbGFuZHJvbmVAZ21haWwuY29tXCI7XHJcbiAgICB0aGlzLnVzZXIucGFzc3dvcmQgPSBcInBpcHBvXCI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqL1xyXG4gIHRvZ2dsZUZvcm0oKSB7XHJcbiAgICAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICovXHJcbiAgc3VibWl0KCkge1xyXG4gICAgaWYgKCF0aGlzLnVzZXIuZW1haWwgfHwgIXRoaXMudXNlci5wYXNzd29yZCkge1xyXG4gICAgICAgIHRoaXMuYWxlcnQoYFBsZWFzZSBwcm92aWRlIGJvdGggYW4gZW1haWwgYWRkcmVzcyBhbmQgcGFzc3dvcmQuYCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmlzTG9nZ2luZ0luKSB7XHJcbiAgICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqL1xyXG4gIGxvZ2luKCkge1xyXG4gICAgZGVsZXRlIHRoaXMudXNlci5jb25maXJtUGFzc3dvcmQ7XHJcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcikuc3Vic2NyaWJlKChyZXMpID0+IHtcclxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnNhdmVVc2VyKHRoaXMudXNlci5lbWFpbCk7XHJcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5zYXZlVG9rZW4ocmVzLnRva2VuKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvYWxiaVwiXSk7XHJcbiAgICB9LCBlcnIgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgdGhpcy5hbGVydChgVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmluZCB5b3VyIGFjY291bnQuYCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICovXHJcbiAgcmVnaXN0ZXIoKSB7XHJcbiAgICAgIGlmICh0aGlzLnVzZXIucGFzc3dvcmQgIT0gdGhpcy51c2VyLmNvbmZpcm1QYXNzd29yZCkge1xyXG4gICAgICAgICAgdGhpcy5hbGVydChcIllvdXIgcGFzc3dvcmRzIGRvIG5vdCBtYXRjaC5cIik7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5hdXRoU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNMb2dnaW5nSW4gPSB0cnVlO1xyXG4gICAgICB9LCBlcnIgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgdGhpcy5hbGVydChlcnIuZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICovXHJcbiAgZm9yZ290UGFzc3dvcmQoKSB7XHJcbiAgICAgIHByb21wdCh7XHJcbiAgICAgICAgICB0aXRsZTogXCJGb3Jnb3QgUGFzc3dvcmRcIixcclxuICAgICAgICAgIG1lc3NhZ2U6IFwiRW50ZXIgdGhlIGVtYWlsIGFkZHJlc3MgeW91IHVzZWQgdG8gcmVnaXN0ZXIgZm9yIEFQUCBOQU1FIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuXCIsXHJcbiAgICAgICAgICBpbnB1dFR5cGU6IFwiZW1haWxcIixcclxuICAgICAgICAgIGRlZmF1bHRUZXh0OiBcIlwiLFxyXG4gICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCIsXHJcbiAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiXHJcbiAgICAgIH0pLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIGlmIChkYXRhLnJlc3VsdCkge1xyXG4gICAgICAgICAgICAgIC8vIHRoaXMuYXV0aFNlcnZpY2UucmVzZXRQYXNzd29yZChkYXRhLnRleHQudHJpbSgpKVxyXG4gICAgICAgICAgICAgIC8vICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLmFsZXJ0KFwiWW91ciBwYXNzd29yZCB3YXMgc3VjY2Vzc2Z1bGx5IHJlc2V0LiBQbGVhc2UgY2hlY2sgeW91ciBlbWFpbCBmb3IgaW5zdHJ1Y3Rpb25zIG9uIGNob29zaW5nIGEgbmV3IHBhc3N3b3JkLlwiKTtcclxuICAgICAgICAgICAgICAvLyAgICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5hbGVydChcIlVuZm9ydHVuYXRlbHksIGFuIGVycm9yIG9jY3VycmVkIHJlc2V0dGluZyB5b3VyIHBhc3N3b3JkLlwiKTtcclxuICAgICAgICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKi9cclxuICBmb2N1c1Bhc3N3b3JkKCkge1xyXG4gICAgICB0aGlzLnBhc3N3b3JkLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICovXHJcbiAgZm9jdXNDb25maXJtUGFzc3dvcmQoKSB7XHJcbiAgICAgIGlmICghdGhpcy5pc0xvZ2dpbmdJbikge1xyXG4gICAgICAgICAgdGhpcy5jb25maXJtUGFzc3dvcmQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqL1xyXG4gIGFsZXJ0KG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgICByZXR1cm4gYWxlcnQoe1xyXG4gICAgICAgICAgdGl0bGU6IFwiQVBQIE5BTUVcIixcclxuICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxyXG4gICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxyXG4gICAgICB9KTtcclxuICB9XHJcbn0iXX0=