import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../../../app/services/auth.service';
import { FmsService } from '../../../app/services/fms.service';
import { LoginService } from '../../../app/services/login.service';
import { AddaddressComponent } from '../../../commonFiles/addAddress/addaddress/addaddress.component';
import { ProductMaster } from '../../../commonFiles/profile/profile.modal';
import { Address, Member } from '../../../commonFiles/register/register.model';
import { environment } from '../../../environments/environment';
import Swal from 'sweetalert2';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-sellinglist',
  templateUrl: './sellinglist.component.html',
  styleUrls: ['./sellinglist.component.scss']
})
export class SellinglistComponent implements OnInit {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  videoFile: any=[];
  sas='environment.sas';
  videosas="environment.videosas";
  productPicUrl = environment.ProductUrl;
  isShowAddseller: boolean = false;
  myDir: any = 'profile';
  address: any;
  format: any;
  url: any;
  formsell: any = new ProductMaster();
  forms: any = new Member();
  public adform: Address;
  profile: any;
  addresslist: any;
  orderHistory: any;
  //uploadForm: any;
  //uploadFile: any;
  uploadFiles: any = [];
  currencyList: any;
  genderList: any;
  breedList: any;
  ageList: any;
  paymentList: any;
  weightList: any;
  sellerList: any;
  selectedFiles?: FileList;
  progressInfos: any[] = [];
  message: string[] = [];
  vedio: boolean = true;
  previews: string[] = [];
  videoList: any;
  breeds: any=[];
  breadval: any;
  isbread: boolean = true;
  userdetails: any;
  test1: any;
  result: any;
  constructor(
    private fms: FmsService,
    private gs: LoginService,
    public dataservice: AuthService,
    private dialog: MatDialog,
    public router: Router
  ) {
    this.adform = new Address();
    console.log(this.adform);
    this.userdetails = JSON.parse(localStorage.getItem('user') || '{}');

  }
  openDialog() {
    this.dialog.open(AddaddressComponent, {
      width: '800px',
      height: '700px',
      //data: rowdata
    });
  }
  edit(rowdata: any, i: number) {
    //console.log(rowdata)

    this.dialog.open(AddaddressComponent, {
      width: '800px',
      height: '700px',
      data: rowdata[i],
    });
  }
  ngOnInit() {
    this.getbread();
   // this.getvideoList();
    this.vedio = true;
    this.getSellerList();
    // this.getProfile();
    this.getAddressList();
    this.getOrderHistory();
    this.getCurrenyList();
    this.getGender();
    this.getAgeList();
    this.getBreadType();
    this.getPaymentTypeList();
    this.getWeight();
    this.formsell.gender = '';
    this.formsell.breedType = '';
    this.formsell.ageType = '';
    this.formsell.breed = '';
    this.formsell.uom = '';
    this.formsell.currency = '';
    this.formsell.paymentOption = '';
    this.forms.memberType = 0;
  }
  showtemp() {
    this.isShowAddseller = true;
  }
  editseller(sellerList: any) {
    this.isShowAddseller = true;
    //this.formsell.index=i;
    // data:rowdata;
    this.formsell = sellerList;
    //  console.log('edit',rowdata)
    console.log('edit', sellerList);
  }
  public listItemskeys: Array<{ text: string; value: number }> = [
    { text: 'Please Select', value: 0 },
    { text: 'Farm', value: 2171 },
    { text: 'Transport', value: 2172 },
    { text: 'Shop', value: 2173 },
  ];
  // getProfile() {
  //
  //   this.gs.memberListbyId(this.u).subscribe(res => {
  //     console.log(res);

  //     this.forms = res;
  //   })
  // }
  onFileSelect(event: any) {debugger
    this.message = [];
    this.progressInfos = [];
    this.selectedFiles = event.target.files;
    this.uploadFiles=this.selectedFiles;
console.log(this.uploadFiles)
    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.previews.push(e.target.result);
    // this.uploadFiles.push(event.target.files[i]);

        };

        reader.readAsDataURL(this.selectedFiles[i]);
      }
    }
  }

  getCurrenyList() {
    this.fms.getSellCurrencyDropList().subscribe((res) => {
      console.log(res);
      this.currencyList = res;
    });
  }
  getGender() {
    this.fms.getSellGenderDropList().subscribe((res) => {
      console.log(res);
      this.genderList = res;
    });
  }
  getWeight() {
    this.fms.getSellWeightDropList().subscribe((res) => {
      console.log(res);
      this.weightList = res;
    });
  }
  getBreadType() {
    this.fms.getSellBreedTypeDropList().subscribe((ress) => {
      console.log(ress);
      this.breedList = ress;
    });
  }

  getbread() {
    this.fms.getSellingBreed().subscribe((ress) => {
      console.log(ress);
      this.breeds = ress;
    });
  }
  getAgeList() {
    this.fms.getSellAgeDropList().subscribe((ress) => {
      console.log(ress);
      this.ageList = ress;
    });
  }
  getPaymentTypeList() {
    this.fms.getSellPaymentTypeDropList().subscribe((ress) => {
      console.log(ress);
      this.paymentList = ress;
    });
  }
  getOrderHistory() {
    this.fms.getOrderHistory().subscribe((res) => {
      console.log(res);
      this.orderHistory = res;
    });
  }
  getSellerList() {
    this.fms.getReadyToSellList().subscribe((res) => {
      console.log(res);
      this.sellerList = res;
      console.log('seller', this.sellerList.result);
    });
  }

  createsell() {
    debugger;
    console.log(this.formsell);
    var formdata = new FormData();
    formdata.append('ProductId', '0');
    formdata.append('ProductCode', '0');
    formdata.append('ProductName', this.formsell.productName);
    formdata.append('ProductType', '2165');
    formdata.append('Gender', this.formsell.gender);
    formdata.append('BreedType', this.formsell.breedType);
    formdata.append('SellerId', this.userdetails.userId);
    formdata.append('Talents', this.formsell.talents);
    formdata.append('FightingRecord', this.formsell.fightingRecord);
    formdata.append('ProductBrand', 'NULL');
    formdata.append('DateOfBirth', '1964-12-16T01:00:34.149Z');
    formdata.append('Uom', this.formsell.uom);
    formdata.append('Weight', this.formsell.weight);
    formdata.append('StandardPrice', '20');
    formdata.append('Discount', this.formsell.discount);
    formdata.append('Currency', this.formsell.currency);
    formdata.append('PaymentOption', this.formsell.paymentOption);
    formdata.append('ProductImage', 'NULL');
    formdata.append('Remarks', 'fugiat');
    formdata.append('IsActive', 'false');
    formdata.append('IsAvailable', 'false');
    formdata.append('StockQty', this.formsell.stockQty);
    formdata.append('CreatedOn', '1944-05-31T06:21:21.373Z');
    formdata.append('ModifiedOn', '1974-05-13T00:14:37.989Z');
    formdata.append('Age', this.formsell.age);
    formdata.append('Breed', "42,44");
    formdata.append('Province', this.formsell.province);
    formdata.append('AgeType', this.formsell.ageType);
    for (var i = 0; i < this.uploadFiles.length; i++) {
      formdata.append('uploadProductImages', this.uploadFiles[i]);
    }
   
      formdata.append('productVideos', this.videoFile);
    
    
    console.log(formdata);
    this.fms.saveSeller(formdata).subscribe((res) => {
      console.log(res);
      if (res) {
        Swal.fire({
          title: 'Saved Successfully',
          icon: 'success',
          timer: 700,
        });
        this.getSellerList();
      }
      this.isShowAddseller = false;
    });
  }

  delete(rowdata: any) {
    Swal.fire({
      title: 'Are you sure you want to delete the record?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        alert(rowdata.productID);
        this.fms.DeleteProduct(rowdata.productID).subscribe((res) => {
          console.log(res);
          if (res) {
            this.ngOnInit();
          }
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled');
      }
    });
  }

  test(i: number) {
    this.previews.splice(i, 1);
  }
  onSubmit() {
    console.log(this.forms);
    this.gs.userRegister(this.forms).subscribe((res) => {
      console.log(res);
    });
    // console.log(this.adform)
    // this.fms.saveaddress(this.adform).subscribe(res => {
    //   this.address = res;
    //   console.log(this.address)
    // })
  }
  getAddressList() {
    // alert('')
    this.fms.addressList().subscribe((res) => {
      this.addresslist = res;
      console.log(this.addresslist);
    });
  }
  onSubmitad() {
    console.log(this.adform);
    this.fms.saveAddress(this.adform).subscribe((res) => {
      this.address = res;
      console.log(this.address);
    });
  }

  onSelectFile(event: any) {
    debugger;
    const file = event.target.files && event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      if (file.type.indexOf('image') > -1) {
        this.format = 'image';
      } else if (file.type.indexOf('video') > -1) {
        this.format = 'video';
      }
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result;
      };
      this.videoFile=file;
    }
  }
  public videoSelected(e: any) {
    const file = e.target.files[0];
  
  }
  reloadVideos() {
  }
 
  getvideoList() {
    debugger;
   
  }
  public listItemskey: Array<{ text: string; value: number; name: string }> = [
    { text: 'Please select', value: 0, name: 'select' },
    { text: 'Home', value: 2175, name: 'Home' },
    { text: 'Office', value: 2176, name: 'Office' },
  ];

  // @ViewChild('fruitInput') fruitInput: ElementRef<any>;
  ////test 





  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
  change(event: any, p: any) {
    debugger
    if (event.isUserInput) {
      console.log(event.source.value, event.source.selected);
       this.test1 =  p.breedName
       
      //alert(this.test1)
      for (let i = p.breedName; i <= p.breedName; i++) {
        this.test1 = i
        this.result = []
        this.result.push(this.test1)
        console.log(this.test1);
      }
    }
  }
}
