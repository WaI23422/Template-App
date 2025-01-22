import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ErrorsComponent } from './errors/errors.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';


@NgModule({
  declarations: [
    LoginComponent,
    ErrorsComponent,
    AccessDeniedComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
