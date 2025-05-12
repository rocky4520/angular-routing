import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeuserComponent } from './components/homeuser/homeuser.component';
import { AboutuserComponent } from './components/aboutuser/aboutuser.component';
import { DashboarduserComponent } from './components/dashboarduser/dashboarduser.component';

const routes: Routes = [
  {
    path: '',
    component: DashboarduserComponent,
    children: [ 
      {
        path: 'about',
        component: AboutuserComponent,
      },
      {
        path: 'home',
        component:HomeuserComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
