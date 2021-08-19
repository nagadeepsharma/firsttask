import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProkudoswallComponent } from './prokudoswall/prokudoswall.component';
import { KudoswalleduComponent } from './kudoswalledu/kudoswalledu.component';
import { KudoswalldiscoverComponent } from './kudoswalldiscover/kudoswalldiscover.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ProkudoswallComponent,
    KudoswalleduComponent,
    KudoswalldiscoverComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
