import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorsComponent } from './errors/errors.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';

const routes: Routes = [
  { path: 'login', pathMatch: "full", component: LoginComponent},
  { path: 'error', pathMatch: "full", component: ErrorsComponent},
  { path: 'access-denied', pathMatch: "full", component:AccessDeniedComponent},
  { path: '**', pathMatch: 'full', redirectTo: "/notfound"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
