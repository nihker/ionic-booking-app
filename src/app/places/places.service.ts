import { Injectable } from "@angular/core";
import { Place } from "./place.model";
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: "root"
})
export class PlacesService {

  constructor(private authService: AuthService) {}

  private _places: Place[] = [
    new Place(
      'p1',
      'Bascarsija',
      'In heart of Sarajevo',
      'https://upload.wikimedia.org/wikipedia/commons/d/df/Sarajevo-bascarsija_at_night1.JPG',
      120,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      'abc'
    ),
    new Place(
      'p2',
      'Tromostovje',
      'In heart of Ljubljana',
      'https://media-cdn.tripadvisor.com/media/photo-s/01/0a/6f/2e/triple-bridge.jpg',
      180,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      'abc'
    ),
    new Place(
      'p3',
      'Bahnhofstrasse',
      'The richest street in Zurich and in the World',
      'https://s3.amazonaws.com/crowdriff-media/full/04f00be0b66ddbcee0b2fb854c92240b0e0d05a8b76fd9c8cc72b4c7361e34ea.jpg',
      350,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      'abc'
    )
  ];

  get places() {
    return [...this._places];
  }

  getPlace(id: string) {
    return { ...this._places.find( p => p.id === id )};
  }

  addPlace(title: string, description: string, price: number, dateFrom: Date, dateTo: Date) {
    
    const newPlace = new Place(
        Math.random().toString(), 
        title, 
        description, 
        'https://s3.amazonaws.com/crowdriff-media/full/04f00be0b66ddbcee0b2fb854c92240b0e0d05a8b76fd9c8cc72b4c7361e34ea.jpg', 
        price, 
        dateFrom, 
        dateTo, 
        this.authService.userId
        );

        this._places.push(newPlace)

  }

}
