import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NavController, ModalController } from "@ionic/angular";
import { CreateBookingComponent } from "../../../bookings/create-booking/create-booking.component";

@Component({
  selector: "app-place-detail",
  templateUrl: "./place-detail.page.html",
  styleUrls: ["./place-detail.page.scss"]
})
export class PlaceDetailPage implements OnInit {
  constructor(
    private router: Router,
    private navCtrl: NavController,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  onBookPlace() {
    // Navigation with Router from angualr/router
    //this.router.navigateByUrl('places/tabs/discover');
    //this.router.navigate(['places', 'tabs', 'discover']);
    // Navigation with NavController from ionic/router (with animation)
    //this.navCtrl.navigateBack('/places/tabs/discover');
    this.modalCtrl.create({component: CreateBookingComponent}).then(modalEl => {
      modalEl.present();
    })
  }
}
