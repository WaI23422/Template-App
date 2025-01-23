import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiComponentRoutingModule } from './ui-component-routing.module';
import { FormLayoutComponent } from './form-layout/form-layout.component';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { TableComponent } from './table/table.component';
import { ListComponent } from './list/list.component';
import { TreeComponent } from './tree/tree.component';
import { PanelComponent } from './panel/panel.component';
import { OverlayComponent } from './overlay/overlay.component';
import { MediaComponent } from './media/media.component';
import { MenuComponent } from './menu/menu.component';
import { MessageComponent } from './message/message.component';
import { FileComponent } from './file/file.component';
import { ChartComponent } from './chart/chart.component';
import { TimelineComponent } from './timeline/timeline.component';
import { MiscComponent } from './misc/misc.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [
    FormLayoutComponent,
    InputComponent,
    ButtonComponent,
    TableComponent,
    ListComponent,
    TreeComponent,
    PanelComponent,
    OverlayComponent,
    MediaComponent,
    MenuComponent,
    MessageComponent,
    FileComponent,
    ChartComponent,
    TimelineComponent,
    MiscComponent
  ],
  imports: [
    CommonModule,
    UiComponentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule
  ]
})
export class UiComponentModule { }
