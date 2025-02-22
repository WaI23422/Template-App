import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NotfoundComponent } from './pages/errors/notfound/notfound.component';
import { LayoutModule } from './components/library/layout/layout.module';
import { CrudComponent } from './pages/crud/crud.component';
import { EmptyComponent } from './pages/empty/empty.component';
import { SignInFormComponent } from './components/library/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './components/library/sign-up-form/sign-up-form.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { LandingModule } from './pages/landing/landing.module';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    CrudComponent,
    EmptyComponent,
    SignInFormComponent,
    SignUpFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingModule,
    LayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
