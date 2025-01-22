import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormLayoutComponent } from './form-layout/form-layout.component';
import { ButtonComponent } from './button/button.component';
import { ChartComponent } from './chart/chart.component';
import { FileComponent } from './file/file.component';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { MediaComponent } from './media/media.component';
import { MenuComponent } from './menu/menu.component';
import { MessageComponent } from './message/message.component';
import { MiscComponent } from './misc/misc.component';
import { OverlayComponent } from './overlay/overlay.component';
import { PanelComponent } from './panel/panel.component';
import { TableComponent } from './table/table.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TreeComponent } from './tree/tree.component';

const routes: Routes = [
  {path: 'button', component: ButtonComponent},
  {path: 'chart', component: ChartComponent},
  {path: 'file', component: FileComponent},
  {path: 'form-layout', component: FormLayoutComponent},
  {path: 'input', component: InputComponent},
  {path: 'list', component: ListComponent},
  {path: 'media', component: MediaComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'message', component: MessageComponent},
  {path: 'misc', component: MiscComponent},
  {path: 'overlay', component: OverlayComponent},
  {path: 'panel', component: PanelComponent},
  {path: 'table', component: TableComponent},
  {path: 'timeline', component: TimelineComponent},
  {path: 'tree', component: TreeComponent},
  {path: '**', pathMatch: 'full', redirectTo: '/notfound'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiComponentRoutingModule { }
