import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorsComponent } from './colors/colors.component';
import { AnimationsComponent } from './animations/animations.component';
import { BordersComponent } from './borders/borders.component';
import { OtherComponent } from './other/other.component';

const routes: Routes = [
  { path: '', redirectTo: 'other', pathMatch: 'full' },
  { path: 'colors', component: ColorsComponent },
  { path: 'colors/:type', component: ColorsComponent },
  { path: 'animations', component: AnimationsComponent },
  { path: 'borders', component: BordersComponent },
  { path: 'other', component: OtherComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilitiesRoutingModule { }
