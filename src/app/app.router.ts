
import { NgModule, ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { CarrerComponent } from './carrer/carrer.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'profile', pathMatch: 'full' },
    { path: 'profile', component: ProfileComponent },
    { path: 'education', component: EducationComponent },
    { path: 'carrer', component: CarrerComponent },
    { path: 'project', component: ProjectComponent },
    { path: 'contact', component: ContactComponent },
  ];
  
  export const routes:ModuleWithProviders = RouterModule.forRoot(appRoutes);