import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarRoutingModule } from './menubar-routing.module';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { SharedModule } from '../../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomerModule } from '../../Customer/customer/customer.module';
import { VerifydocumentComponent } from './verifydocument/verifydocument.component';
import { FollowersComponent } from './followers/followers.component';
import { FollowingComponent } from './following/following.component';
import { BreedListComponent } from './breed-list/breed-list.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { SellingComponent } from './selling/selling.component';
import { SoldoutlistComponent } from './soldoutlist/soldoutlist.component';
import { PurchaselistComponent } from './purchaselist/purchaselist.component';
import { TrasnporterbookinglistComponent } from './trasnporterbookinglist/trasnporterbookinglist.component';
import { SellinglistComponent } from './sellinglist/sellinglist.component';
import { AddressComponent } from './address/address.component';
import { ProfileComponent } from './profile/profile.component';
import { NotificationComponent } from './notification/notification.component';
import { InboxMessageComponent } from './inbox-message/inbox-message.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';


@NgModule({
  declarations: [
    LeftNavComponent,
    VerifydocumentComponent,
    FollowersComponent,
    FollowingComponent,
    BreedListComponent,
    OrderHistoryComponent,
    SellingComponent,
    SoldoutlistComponent,
    PurchaselistComponent,
    TrasnporterbookinglistComponent,
    SellinglistComponent,
    AddressComponent,
    ProfileComponent,
    NotificationComponent,
    InboxMessageComponent,
    WishlistComponent,
    ChangepasswordComponent
  ],
  imports: [
    CommonModule,
    MenubarRoutingModule,    
    FormsModule,HttpClientModule,ReactiveFormsModule,SharedModule,
    CustomerModule,
  ]
})
export class MenubarModule { }
