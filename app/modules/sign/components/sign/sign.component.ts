import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";

import { User } from "../../../shared/models";
import { AuthService } from "../../../core/services/auth.service";

@Component({
  moduleId: module.id,
  selector: 'sign',
  templateUrl: 'sign.component.html',
  styleUrls: ['sign.component.css']
})
export class SignComponent {
  isLoggingIn = true;
  user: User;
  @ViewChild("password") password: ElementRef;
  @ViewChild("confirmPassword") confirmPassword: ElementRef;

  constructor(private page: Page, private authService: AuthService, private router: Router) {
    this.page.actionBarHidden = true;
    this.user = new User();
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
    delete this.user.confirmPassword;
    this.authService.login(this.user).subscribe((res) => {
        this.authService.saveUser(this.user.email);
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
}