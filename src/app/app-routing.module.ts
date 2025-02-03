import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './pages/errors/notfound/notfound.component';
import { LayoutComponent } from './components/library/layout/layout.component';
import { DashboardComponent } from './pages/home/dashboard/dashboard.component';
import { EmptyComponent } from './pages/empty/empty.component';
import { AuthGuard } from './services/auth.guard';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
  { path: 'notfound', component: NotfoundComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', component: DashboardComponent },
      { path: 'uikit', loadChildren: () => import("./pages/ui-component/ui-component.module").then(m => m.UiComponentModule)},
      { path: 'pages/empty', pathMatch: "full", component: EmptyComponent},
    ],
    canActivate: [AuthGuard]
  },
  { path: 'auth', loadChildren: () => import("./pages/auth/auth.module").then(m => m.AuthModule)},
  { path: 'landing', pathMatch:"full", component: LandingComponent},
  { path: 'notfound', pathMatch: "full", component: NotfoundComponent},
  { path: '**', pathMatch: 'full', redirectTo: '/notfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
