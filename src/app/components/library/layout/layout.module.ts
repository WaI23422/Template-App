import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { LayoutRoutingModule } from './layout-routing.module';

import { LayoutComponent } from './layout.component';
import { DashboardComponent } from '../../../pages/home/dashboard/dashboard.component';

import { FooterComponent, HeaderComponent, SidebarNavComponent } from 'src/app/components/library';

import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { MenuComponent } from 'src/app/components/library/menu/menu.component';
import { MenuItemComponent } from 'src/app/components/library/menu-item/menu-item.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarNavComponent,
    DashboardComponent,
    MenuComponent,
    MenuItemComponent,
  ],
  imports: [
    CommonModule,
    SidebarModule,
    TieredMenuModule,
    ButtonModule
  ]
})
export class LayoutModule { }
