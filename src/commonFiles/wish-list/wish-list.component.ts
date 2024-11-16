import { Component, OnInit } from '@angular/core';
import { FmsService } from '../../app/services/fms.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  wishlist: any;

  constructor(private fms: FmsService) { }

  ngOnInit(): void {
    this.getWishList()
  }
  getWishList() {
    this.fms.getWishList().subscribe(res => { console.log(res) ;
    this.wishlist = res;})
  }
}
