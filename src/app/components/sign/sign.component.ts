import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign',
  standalone: true,
  imports: [ CommonModule,FormsModule],
  templateUrl: './sign.component.html',
  styleUrl: './sign.component.css'
})
export class SignComponent {
constructor(public authService:AuthService){}
save(a:any){
  this.authService.registerUser(a.value.email,a.value.password);
  a.reset();
}
}
