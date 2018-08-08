import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {AdminComponent} from './admin/admin.component';
import {TouristComponent} from './tourist/tourist.component';
import {AdsDetailComponent} from './ads-detail/ads-detail.component';


const parentModuleRoutes: Routes = [
  {
    path: 'tourist',
    children: [
      {
        path: '',
        redirectTo: 'admin',
        pathMatch: 'full'
      },
      {
        path: 'admin',
        component: AdminComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(parentModuleRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class ParentRoutingModule {
}
