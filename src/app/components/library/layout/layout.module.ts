import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { LayoutRoutingModule } from './layout-routing.module';

import { LayoutComponent } from './layout.component';
import { DashboardComponent } from '../../../pages/home/dashboard/dashboard.component';

import { FooterComponent, HeaderComponent, SidebarNavComponent, MenuComponent, MenuItemComponent } from 'src/app/components/library';

import { SidebarModule } from 'primeng/sidebar';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    SidebarNavComponent,
    DashboardComponent,
    MenuComponent,
    MenuItemComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SidebarModule,
    TieredMenuModule,
    OverlayPanelModule
  ]
})
export class LayoutModule { }
