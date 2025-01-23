import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderLandingComponent } from 'src/app/components/library';
import { LandingComponent } from './landing.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    LandingComponent,
    HeaderLandingComponent,
  ],
  imports: [
    CommonModule,
    OverlayPanelModule,
    RouterModule,
    ButtonModule
  ]
})
export class LandingModule { }
