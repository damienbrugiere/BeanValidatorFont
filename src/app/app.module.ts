import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BeanListingComponent } from './bean-listing/bean-listing.component';
import { ProjectListingComponent } from './project-listing/project-listing.component';
import { ClassListingComponent } from './class-listing/class-listing.component';
import { PropertyListingComponent } from './property-listing/property-listing.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
const appRoutes: Routes = [
  {path:"",redirectTo:"home",pathMatch:'full'},
  { path: 'bean-listing', component: BeanListingComponent },
  {path:'home',component:HomeComponent},
  {path:'project', component:ProjectListingComponent},
  {path:'classes', component:ClassListingComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BeanListingComponent,
    ProjectListingComponent,
    ClassListingComponent,
    PropertyListingComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
