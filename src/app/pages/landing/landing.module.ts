import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderLandingComponent, HomeSectionComponent } from 'src/app/components/library';
import { LandingComponent } from './landing.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    LandingComponent,
    HeaderLandingComponent,
    HomeSectionComponent,
  ],
  imports: [
    CommonModule,
    OverlayPanelModule,
    RouterModule,
    ButtonModule
  ]
})
export class LandingModule { }
