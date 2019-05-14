import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { Place } from "src/app/places/place.model";
import { ModalController } from "@ionic/angular";
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-create-booking",
  templateUrl: "./create-booking.component.html",
  styleUrls: ["./create-booking.component.scss"]
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace: Place;
  @ViewChild('f') form: NgForm;

  constructor(private modalContrl: ModalController) {}

  ngOnInit() {}

  onBookPlace() {
    if(!this.form.valid) {
      return;
    }

    this.modalContrl.dismiss({ bookingData: {
      firstName: this.form.value['first-name'],
      lastName: this.form.value['last-name'],
      guestNumber: this.form.value['guest-number'],
      startDate: this.form.value['date-from'],
      endDate: this.form.value['date-to']
    }},"confirm");
  }

  onCancel() {
    this.modalContrl.dismiss("detailModel", "cancel");
  }

  // ???

  // datesValid() {
  //   const startDate = new Date(this.form.value['date-form']);
  //   const endDate = new Date(this.form.value['date-to']);
  //   return endDate > startDate;
  // }
}
