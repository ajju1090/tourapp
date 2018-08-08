import { Component, OnInit } from '@angular/core';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';

@Component({
  selector: 'app-ads-detail',
  templateUrl: './ads-detail.component.html',
  styleUrls: ['./ads-detail.component.css']
})
export class AdsDetailComponent implements OnInit {
  DETAILED: 'detail';
  oTourists: any = {};
  constructor(public local: LocalStorageService,
              public session: SessionStorageService) { }

  ngOnInit() {
    this.getTours();
  }
  getTours() {
    this.oTourists = this.local.get(this.DETAILED) ? this.local.get(this.DETAILED) : {};
  }
}
