import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TablesComponent } from './tables/tables.component';
import { ChartsComponent } from './charts/charts.component';
import { NotfoundComponent } from './notfound/notfound.component';
// import { AnimationsComponent } from './utilties/animations/animations.component';
// import { ColorsComponent } from './utilties/colors/colors.component';
// import { BordersComponent } from './utilties/borders/borders.component';
// import { OtherComponent } from './utilties/other/other.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    DashboardComponent,
    TablesComponent,
    ChartsComponent,
    NotfoundComponent,
    LoginComponent,
    // AnimationsComponent,
    // ColorsComponent,
    // BordersComponent,
    // OtherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }