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
    this.modalContrl.dismiss({message: "This is a dummy message!"},"confirm");
  }

  onCancel() {
    this.modalContrl.dismiss("detailModel", "cancel");
  }

  onBookPlace() {

  }

  datesValid() {
    const startDate = new Date(this.form.value['date-form']);
    const endDate = new Date(this.form.value['date-to']);
    return endDate < startDate;
  }
}
