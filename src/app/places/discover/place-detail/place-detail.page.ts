import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NavController, ModalController } from "@ionic/angular";
import { CreateBookingComponent } from "../../../bookings/create-booking/create-booking.component";
import { Place } from "../../place.model";
import { PlacesService } from "../../places.service";

@Component({
  selector: "app-place-detail",
  templateUrl: "./place-detail.page.html",
  styleUrls: ["./place-detail.page.scss"]
})
export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor(
    private placeService: PlacesService,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has("placeId")) {
        this.navCtrl.navigateBack("/places/tabs/discover");
        return;
      }
      this.place = this.placeService.getPlace(paramMap.get("placeId"));
    });
  }

  onBookPlace() {
    // Navigation with Router from angualr/router
    //this.router.navigateByUrl('places/tabs/discover');
    //this.router.navigate(['places', 'tabs', 'discover']);
    // Navigation with NavController from ionic/router (with animation)
    //this.navCtrl.navigateBack('/places/tabs/discover');
    this.modalCtrl
      .create({
        component: CreateBookingComponent,
        componentProps: { selectedPlace: this.place },
        id: "detailModel"
      })
      .then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then(resultData => {
        console.log(resultData.data, resultData.role);
        if (resultData.role === "confirm") {
          console.log("BOOKED!!!");
        }
      });
  }
}
