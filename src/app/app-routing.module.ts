import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from '../commonFiles/aboutus/aboutus.component';
import { AddressdeliveryComponent } from '../commonFiles/addressdelivery/addressdelivery.component';
import { ContactusComponent } from '../commonFiles/contactus/contactus.component';
import { DownloadappComponent } from '../commonFiles/downloadapp/downloadapp.component';
import { HomeComponent } from '../commonFiles/home/home.component';
import { LeftNavbarComponent } from '../commonFiles/left-navbar/left-navbar.component';
import { LoginComponent } from '../commonFiles/login/login.component';
import { PaymentComponent } from '../commonFiles/payment/payment.component';
import { PaymentsuccesComponent } from '../commonFiles/payment/paymentsucces/paymentsucces.component';
import { PostcommentsComponent } from '../commonFiles/postcomments/postcomments.component';
import { ProfileComponent } from '../commonFiles/profile/profile.component';
import { RegisterComponent } from '../commonFiles/register/register.component';
import { WishListComponent } from '../commonFiles/wish-list/wish-list.component';
import { CartitemsComponent } from '../Customer/customer/product/cartitems/cartitems.component';

const routes: Routes = [{
  path:'profile',component:ProfileComponent},
 { path:'',component:HomeComponent},
 { path:'app',component:PostcommentsComponent},
 { path:'downloadapp',component:DownloadappComponent},
 { path:'contactus',component:ContactusComponent},
 { path:'aboutus',component:AboutusComponent},
 { path:'Addressdelivery',component:AddressdeliveryComponent},
 { path:'login',component:LoginComponent},
 { path:'register',component:RegisterComponent},
 { path:'Cartitems',component:CartitemsComponent},
 { path:'left',component:LeftNavbarComponent},
 { path:'wishlist',component:WishListComponent},
 { path:'payment',component:PaymentComponent},
 { path:'succuesspayment',component:PaymentsuccesComponent},
  { path: 'transport', loadChildren: () => import('../Transport/transport/transport.module').then(m => m.TransportModule) },
  { path: 'shop', loadChildren: () => import('../Shop/shop/shop.module').then(m => m.ShopModule) },
  { path: 'customer', loadChildren: () => import('../Customer/customer/customer.module').then(m => m.CustomerModule) },
  { path: 'farm', loadChildren: () => import('../Farm/farm/farm.module').then(m => m.FarmModule) },
  { path: 'menu', loadChildren: () => import('../app/menubar/menubar.module').then(m => m.MenubarModule) },

 
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
