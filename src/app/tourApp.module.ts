import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TouristComponent} from './tourist/tourist.component';
import {AdsDetailComponent} from './ads-detail/ads-detail.component';


const parentModuleRoutes: Routes = [
  {
    path: 'tourapp',
    children: [
      {
        path: '',
        redirectTo: 'tourist',
        pathMatch: 'full'
      },
      {
        path: 'tourist',
        component: TouristComponent
      },
      {
        path: 'ads-detail',
        component: AdsDetailComponent
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(parentModuleRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class TourRoutingModule {
}
