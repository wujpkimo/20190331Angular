import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsComponent } from './charts/charts.component';
import { TablesComponent } from './tables/tables.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { Register2Component } from './register2/register2.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'pages', loadChildren: './pages/pages.module#PagesModule' },
      {
        path: 'utilities',
        canActivate: [AuthGuard]
        // canLoad: [AuthGuard]
        , loadChildren: './utilities/utilities.module#UtilitiesModule'
      },
      { path: 'charts', component: ChartsComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'tables/:num', component: TablesComponent },
      { path: 'dashboard', component: DashboardComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register2', component: Register2Component },
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
