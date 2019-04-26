import { Component, OnInit, Input } from "@angular/core";
import { Place } from "src/app/places/place.model";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-create-booking",
  templateUrl: "./create-booking.component.html",
  styleUrls: ["./create-booking.component.scss"]
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace: Place;

  constructor(private modalContrl: ModalController) {}

  ngOnInit() {}

  onBookPlace() {
    this.modalContrl.dismiss({message: "This is a dummy message!"},"confirm");
  }

  onCancel() {
    this.modalContrl.dismiss("detailModel", "cancel");
  }
}
