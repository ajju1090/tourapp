import { Component, OnInit } from '@angular/core';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tourist',
  templateUrl: './tourist.component.html',
  styleUrls: ['./tourist.component.css']
})
export class TouristComponent implements OnInit {
  KEY = 'tours';
  DETAILED: 'detail'
  aTourists: any = [];
  constructor(public local: LocalStorageService,
              public session: SessionStorageService,
              private router: Router) { }

  ngOnInit() {
    this.getTours();
  }
  getTours() {
    this.aTourists = this.local.get(this.KEY) ? this.local.get(this.KEY) : [];
  }
  onTourClick(tourData) {
    this.local.set(this.DETAILED, tourData, 1, 'd');
    this.router.navigate(['tourapp/ads-detail']);
  }

}
