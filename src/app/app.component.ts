import { Component, computed, effect, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { initializeApp } from "firebase/app";
import { CommonModule, TitleCasePipe } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { firebaseConfig } from '../../firebaseConfig/firebaseConfig';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterLink,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(){ 
    initializeApp(firebaseConfig);
    console.log("ggggggggggggg");
  }
}
