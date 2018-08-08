import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  // Name, Address,Rates,Images,Description
  adminForm: FormGroup;
  KEY = 'tours';
  value: any = [];
  constructor(private formBuilder: FormBuilder,
              public local: LocalStorageService,
              public session: SessionStorageService  ) { }

  ngOnInit() {
    this.adminForm = this.formBuilder.group({
      name: new FormControl(null),
      address: new FormControl(null),
      rates: new FormControl(null),
      description: new FormControl(null),
      image: new FormControl(null),
    });
  }
  getTours() {
    this.value = this.local.get(this.KEY) ? this.local.get(this.KEY) : [];
  }
  setTour(expired: number = 1) {
    this.local.set(this.KEY, this.value, expired, 'd');
  }
  onSubmit() {
    if (Object.keys(this.adminForm.value).length > 0) {
      this.value.push(this.adminForm.value);
      this.adminForm.reset();
      this.setTour();
    }
  }

}
