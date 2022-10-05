import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    
  },
  {
    path: 'home',
    component: HomeComponent,
    
  },
  {
    path: 'notes',
    component: NotesComponent,
    
  },
  // {
  //   path: 'profile',
  //   component: ProfileComponent,
    
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
