import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  newForm:any;
  email:FormControl;
  password:FormControl;
  constructor(public authService:AuthService){
    this.email =new FormControl('',[
      Validators.required,
      Validators.email
    ]);
    this.password =  new FormControl('',[
      Validators.required,
      Validators.minLength(5)
    ]);
    this.newForm = new FormGroup({
      email: this.email,
      password: this.password
    })

  }
save(){
  this.authService.loginUser(this.newForm.value.email,this.newForm.value.password);
  this.newForm.reset();
}

}
