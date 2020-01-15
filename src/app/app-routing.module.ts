import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { DetailsScrenComponent } from './components/details-scren/details-scren.component';


const routes: Routes = [
  { path: '', component: HomeScreenComponent},
  { path: 'details', component: DetailsScrenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
