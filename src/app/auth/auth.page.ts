import { Component, OnInit } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.page.html",
  styleUrls: ["./auth.page.scss"]
})
export class AuthPage implements OnInit {
  isLogin = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    loadingCtrl: LoadingController
  ) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    console.log(email, password);

    if (this.isLogin) {
      // Send a request to login server
      this.authService.login();
      this.router.navigateByUrl("/places");
    } else {
      // Send a request to signup server
    }
  }

  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }
}
