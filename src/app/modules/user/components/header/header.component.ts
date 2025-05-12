import { Component } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private auth:AuthService){}
logout():void{
this.auth.logout();
}
}
