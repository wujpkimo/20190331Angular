import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtiltiesRoutingModule } from './utilties-routing.module';
import { AnimationsComponent } from './animations/animations.component';
import { ColorsComponent } from './colors/colors.component';
import { BordersComponent } from './borders/borders.component';
import { OtherComponent } from './other/other.component';

@NgModule({
  declarations: [
    AnimationsComponent,
    ColorsComponent,
    BordersComponent,
    OtherComponent
  ],
  imports: [
    CommonModule,
    UtiltiesRoutingModule
  ]
})
export class UtiltiesModule { }
