import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-forget',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forget.component.html',
  styleUrl: './forget.component.css'
})
export class ForgetComponent {
constructor(public authService:AuthService){}
data=new FormGroup({
email:new FormControl('',[
  Validators.required,
  Validators.email,
])
})
reset(){
  this.authService.resetPassword(this.data.value.email!);
  this.data.reset();
}
}
