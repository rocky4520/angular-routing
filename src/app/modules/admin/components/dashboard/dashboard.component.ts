import { Component } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { NgFor } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { UsersComponent } from '../users/users.component';
import { HomeAdminComponent } from '../home-admin/home-admin.component';
import { RouterOutlet } from '@angular/router';




@Component({
  selector: 'app-dashboard',
  imports: [HeaderComponent,SidebarComponent,RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {


 

 
}
