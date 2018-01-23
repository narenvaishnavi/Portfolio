import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './app.router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { CarrerComponent } from './carrer/carrer.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EducationComponent,
    FooterComponent,
    ProfileComponent,
    CarrerComponent,
    ProjectComponent,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routes
    
  ],
  providers: [],
  bootstrap: [AppComponent]
   
})
export class AppModule { }
