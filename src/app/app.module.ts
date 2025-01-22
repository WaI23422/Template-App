import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NotfoundComponent } from './pages/errors/notfound/notfound.component';
import { LayoutModule } from './components/library/layout/layout.module';
import { LandingComponent } from './pages/landing/landing.component';
import { CrudComponent } from './pages/crud/crud.component';
import { EmptyComponent } from './pages/empty/empty.component';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    LandingComponent,
    CrudComponent,
    EmptyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
