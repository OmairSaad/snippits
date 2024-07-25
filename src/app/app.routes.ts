import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignComponent } from './components/sign/sign.component';
import { AboutComponent } from './components/about/about.component';
import { ForgetComponent } from './components/forget/forget.component';
import { CreateBinComponent } from './components/create-bin/create-bin.component';

export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'sign',component:SignComponent},
    {path:"", redirectTo:"/login",pathMatch:"full"},
    {path:"about", loadComponent: ()=> import("./components/about/about.component").then(mod=>mod.AboutComponent)},
    {path:'reset', component:ForgetComponent},
    {path:"create", component:CreateBinComponent}
];
