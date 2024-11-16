
import { Component, OnInit } from '@angular/core';
import { Notificationvm } from '../../../../commonFiles/payment/ordersave.model';
import { environment } from '../../../../environments/environment';
import { FmsService } from '../../../../app/services/fms.service';

@Component({
  selector: 'app-confirmorder-payment',
  templateUrl: './confirmorder-payment.component.html',
  styleUrls: ['./confirmorder-payment.component.scss']
})
export class ConfirmorderPaymentComponent implements OnInit {
  selectedProdut: any;
  orderdetails: any;
  quatity: any;
  notification = new Notificationvm;
  userdetails: any;
  productID: any;
  productPicUrl = environment.ProductUrl;
  images: any;
  constructor(private fms: FmsService) {
    this.selectedProdut = JSON.parse(localStorage.getItem('selectedProdut') || '{}')
    this.userdetails = JSON.parse(localStorage.getItem('user') || '{}');
    this.productID = JSON.parse(localStorage.getItem('productID') || '{}')
    this.images = JSON.parse(localStorage.getItem('images') || '{}')
  }

  ngOnInit(): void {
   this.getOrderConform();
  }

  getOrderConform() {
    this.fms.getconformOrder().subscribe((res:any) => {
      console.log(res)
      this.orderdetails = res;
      console.log(this.orderdetails[0].orderNo)
      if(res){
        this.saveNotificaton()
      }
      this.quatity = this.orderdetails.totalAmount / this.orderdetails.orderAmount;
      console.log('qty',this.quatity)
      //console.log(this.orderdetails[0].orderAmount)
    })
  }
  saveNotificaton() {
    this.notification.senderId = this.selectedProdut.sellerId;
    this.notification.message = "New Order Received: " + '(' + this.orderdetails[0].orderNo + ') from'
      + this.userdetails.userName + 'for product' + this.selectedProdut.productName;
    console.log(this.notification)
    this.fms.saveNotifications(this.notification).subscribe(res => {
      console.log(res)
    })
  }

}
