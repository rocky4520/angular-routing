import { Component } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
username = "Admin User"

  constructor(private supabaseService: AuthService) {}

  ngOnInit() {
    // In a real app, you would fetch the user profile here
    this.supabaseService.session?.user &&
      this.supabaseService.profile(this.supabaseService.session.user).then(({ data }:any) => {
        if (data?.username) {
          this.username = data.username
        }
      })
  }
}
