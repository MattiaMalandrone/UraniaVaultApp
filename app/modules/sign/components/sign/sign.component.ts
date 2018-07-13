import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import { Router, RouterEvent, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from "@angular/router";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";
import * as _ from 'lodash';

import { LoadingIndicator } from "nativescript-loading-indicator";

import { User, AuthUser } from "../../../shared/models";
import { AuthService } from "../../../core/services/auth.service";
import { DatabaseService } from "~/modules/core/services";

@Component({
  moduleId: module.id,
  selector: 'sign',
  templateUrl: 'sign.component.html',
  styleUrls: ['sign.component.css']
})
export class SignComponent implements OnInit {

    isLoggedIn = false;
    isLoggingIn = true;
    user: User;
    currentUser: AuthUser;
    loader: any;
    @ViewChild("password") password: ElementRef;
    @ViewChild("confirmPassword") confirmPassword: ElementRef;

    public htmlCircle: string;

    constructor(private page: Page, private authService: AuthService, private router: Router, private databaseService: DatabaseService) {
        this.page.actionBarHidden = true;
        this.user = new User();
        this.user.email = "mattia.malandrone@gmail.com";
        this.user.password = "pippo";

        this.loader = new LoadingIndicator();

        router.events.subscribe((routerEvent: Event) => {
            this.checkRouterEvent(routerEvent);
        });

        this.htmlCircle = '<span class="dot"></span>';

        this.currentUser = AuthService.CURRENT_USER;
        this.isLoggedIn = !_.isNil(AuthService.CURRENT_USER);
    }

    /**
     *
     */
    ngOnInit(): void {

    }

    /**
     *
     */
    gotoAlbi() {
        this.router.navigate(["/albi"]);
    }

    /**
     *
     */
    toggleForm() {
        this.isLoggingIn = !this.isLoggingIn;
    }

    /**
     *
     */
    submit() {
        if (!this.user.email || !this.user.password) {
            this.alert(`Please provide both an email address and password.`);
            return;
        }

        if (this.isLoggingIn) {
            this.login();
        } else {
            this.register();
        }
    }

    /**
     *
     */
    login() {
        this.loader.show();
        delete this.user.confirmPassword;
        this.authService.login(this.user).subscribe((res) => {
            console.log('inside subscribe!!!!');
            this.authService.saveUser(this.user.email, res.userId);
            this.authService.saveToken(res.token);
            this.router.navigate(["/albi"]);
        }, err => {
            console.log(err);
            this.alert(`Unfortunately we could not find your account.`);
        });
    }

  /**
   *
   */
  register() {
      if (this.user.password != this.user.confirmPassword) {
          this.alert("Your passwords do not match.");
          return;
      }
      this.authService.register(this.user).subscribe(res => {
        this.isLoggingIn = true;
      }, err => {
        console.log(err);
        this.alert(err.error);
      });
  }

  /**
   *
   */
  forgotPassword() {
      prompt({
          title: "Forgot Password",
          message: "Enter the email address you used to register for APP NAME to reset your password.",
          inputType: "email",
          defaultText: "",
          okButtonText: "Ok",
          cancelButtonText: "Cancel"
      }).then((data) => {
          if (data.result) {
              // this.authService.resetPassword(data.text.trim())
              //     .then(() => {
              //         this.alert("Your password was successfully reset. Please check your email for instructions on choosing a new password.");
              //     }).catch(() => {
              //         this.alert("Unfortunately, an error occurred resetting your password.");
              //     });
          }
      });
  }

  /**
   *
   */
  focusPassword() {
      this.password.nativeElement.focus();
  }

  /**
   *
   */
  focusConfirmPassword() {
      if (!this.isLoggingIn) {
          this.confirmPassword.nativeElement.focus();
      }
  }

  /**
   *
   */
  alert(message: string) {
      return alert({
          title: "APP NAME",
          okButtonText: "OK",
          message: message
      });
  }

    /**
     *
     * @param routerEvent
     */
    checkRouterEvent(routerEvent: Event): void {
        // if (routerEvent instanceof NavigationStart)
        //     this.loader.show();

        // console.log(routerEvent);

        if (routerEvent instanceof NavigationEnd ||
                routerEvent instanceof NavigationCancel ||
                routerEvent instanceof NavigationError)
                    this.loader.hide();
    }
}