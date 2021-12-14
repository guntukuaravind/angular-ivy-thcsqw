import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { StorageServiceModule } from 'angular-webstorage-service';
import { Router, Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthguardGuard } from './Service/authguard.guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthInterceptor } from './Service/AuthInterceptor';
import { OrderItemComponent } from './admin/order-item/order-item.component';
import { EditItemComponent } from './admin/edit-item/edit-item.component';
import { AddressComponent } from './home/address/address.component';
import { CartItemComponent } from './home/cart-item/cart-item.component';
import { ProductComponent } from './home/product/product.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path: 'home/cart',
    component: CartItemComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path: 'home/address',
    component: AddressComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path: 'admin/edit',
    component: EditItemComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path: 'admin/order',
    component: OrderItemComponent,
    canActivate: [AuthguardGuard],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    HomeComponent,
    CartItemComponent,
    AddressComponent,
    AdminComponent,
    EditItemComponent,
    OrderItemComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    StorageServiceModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    NgbModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
