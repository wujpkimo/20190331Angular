import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsComponent } from './charts/charts.component';
import { TablesComponent } from './tables/tables.component';
import { NotfoundComponent } from './notfound/notfound.component';
// import { ColorsComponent } from './utilties/colors/colors.component';
// import { AnimationsComponent } from './utilties/animations/animations.component';
// import { BordersComponent } from './utilties/borders/borders.component';
// import { OtherComponent } from './utilties/other/other.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'pages', loadChildren: './pages/pages.module#PagesModule' },
  {
    path: 'utilties', loadChildren: './utilties/utilties.module#UtiltiesModule'
    // children: [
    //   { path: '', redirectTo: 'other', pathMatch: 'full' },
    //   { path: 'colors', component: ColorsComponent },
    //   { path: 'colors/:type', component: ColorsComponent },
    //   { path: 'animations', component: AnimationsComponent },
    //   { path: 'borders', component: BordersComponent },
    //   { path: 'other', component: OtherComponent },
    // ]
  },
  { path: 'charts', component: ChartsComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'tables/:num', component: TablesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: NotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      enableTracing: true,
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
