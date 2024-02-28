import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { NavbarModule } from './navbar/navbar.module';
import { HomeModule } from './home/home.module';
import { ShopModule } from './shop/shop.module';
import { CartModule } from './cart/cart.module';
import { AdminComponent } from './admin/admin.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtServiceService } from './authentication/jwt-service.service';
import { AdminModule } from './admin/admin.module';
import { AdminService } from './admin/admin.service';

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    RegisterModule,
    NavbarModule,
    HomeModule,
    ShopModule,
    CartModule,
    AdminModule
  ],
  providers: [
    provideClientHydration(),
    {provide: HTTP_INTERCEPTORS, useClass: JwtServiceService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
