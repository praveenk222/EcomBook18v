import { Component } from '@angular/core';
import { withModule } from '@angular/core/testing';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from './services/auth.service';
import { FmsService } from './services/fms.service';
import { LoginComponent } from '../commonFiles/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  matDialogRef!: MatDialogRef<LoginComponent>;
  name: string = '';
  showlist: boolean = false;
  user: any | null;
  userName: any;
  cartLst: any;
  notifications: any;
  notifcount: any;
  inbox: any;
  userID: any;
  memberType: any;
  //userType: any;
  constructor(
    private matDialog: MatDialog,private as: AuthService,
    private fms: FmsService,
    public dataService: AuthService,
    private spinner: NgxSpinnerService
  ) {
    const userDetails = this.as.getLoggedUserDetails();
    this.userID = userDetails.userId;
    //this.username = userDetails.userName;
    this.memberType = userDetails.memberType;
    this.user = localStorage.getItem('user');
    if (this.user) {
     this.getCartList();
     this.getNotification();
     this.getInbox();
      this.userName = this.user.userName;
    }
  }
  logout() {
    window.localStorage.clear();
  }
  OpenModal() {
    this.matDialogRef = this.matDialog.open(LoginComponent, {
      data: { name: this.name },
      disableClose: true,
      width: '400px',
      height: '550px',
    });

    this.matDialogRef.afterClosed().subscribe((res) => {
      if (res == true) {
        this.name = '';
        this.showlist = false;
        //later handle
      }
    });
  }

  openlist() {
    this.showlist = !this.showlist;
  }

  getCartList() {
    this.fms.cartList().subscribe((res) => {
      this.cartLst = res;
    });
  }
  getInbox() {
    // this.fms.getInbox().subscribe(res =>{console.log(res);
    // this.inbox = res;})
    this.fms.getInbox().subscribe((res) => {
      this.inbox = res;
    });
  }
  getNotification() {
    this.fms.getNotifications().subscribe((res) => {
      this.notifications = res;
      this.notifcount = this.notifications.length;
      console.log(this.notifcount.messageHeader);
    });
  }

  ngOnInit() {
    // this.getCartList();
    //  this.getNotification();
  }
}
