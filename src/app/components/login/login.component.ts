import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FontAwesomeModule,ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
faLock = faLock;

loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private auth:AuthService, private router: Router){}

  ngOnInit(): void{
    if(this.auth.isLoggedIn()) {
      this.router.navigate(['user'])
    }
  }

  onSubmit(){
    if(this.loginForm.valid){
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          this.router.navigate(['user'])
        },
        (err: Error) => {
          alert(err.message)
        }
      )
    }
  }
}
