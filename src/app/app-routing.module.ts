import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, //This path Home gets Component HomeComponent
  { path: 'courses', component: CoursesComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  //This does all the Matching the component and dropping the component in Router Outlet
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
