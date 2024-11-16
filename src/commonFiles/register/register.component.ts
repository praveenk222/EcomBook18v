import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../../app/services/auth.service';
import { LoginService } from '../../app/services/login.service';
import Swal from 'sweetalert2';
import { LoginComponent } from '../login/login.component';
import { Member } from './register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isLoading:boolean = false;
  
  public form:Member ;
  matDialogRef!: MatDialogRef<LoginComponent>;
  
  constructor( public dialogRef: MatDialogRef<RegisterComponent>,public  router:Router,private spinnerService: NgxSpinnerService,
    private sr: LoginService,private as: AuthService,private matDialog:MatDialog
    ) {
      this.form= new Member();
      console.log(this.form) 
    }
    ///svc
  ngOnInit() {
    this.form.memberType = 0;
    this.form.countrycode = '';
  }

  public listItemskey: Array<{ text: string; value: number; }> = [
    { text: "Please Select", value: 0 },
    { text: "Farm", value: 2171 },
    { text: "Transport", value: 2172 },
    { text: "Shop", value: 2173 },
  ];
  public countryCode: Array<{ text: string; value: any; }> = [
    { text: "Country Code", value: '' },
    { text: "India", value: '+91' },
    { text: "China", value: '+86' },
    { text: "Thailand", value: '+66' },
  ];
  //   farm:2171
  // user:2170
  // transporter:2172
  // shop:2173
  // home:2175
  // office:2177

  onNoClick() {
    this.dialogRef.close();

  }
  // @Input() mobileNo: any;
  // proper = false;

  // valPhone() {
  //   // first remove unwanted characters
  //   let mobileNo  = this.mobileNo;
  //   mobileNo = mobileNo.replace(/[^0-9+#]/g, "");
  //   // at least 10 in number
  //   if (mobileNo.length >= 10) {
  //     this.proper = mobileNo;
  //     return true;
  //   } else {
  //     this.proper = false;
  //   }
  //   return false;
  // }
  // forms: any = {

  //   userId: 0,
  //   userName:null,
  //   password :null,
  //     firstName :null,
  //     lastName :null,
  //   emailId: null,
  //   mobileNo: null,
  //   memberType: null,
  //   otp: null,
  //   isOtpsent: false,
  //   otpsentDate: null,
  //   isResendOtp: false,
  //   isOtpverified: false,
  //   isActive: true,
  //   createdOn: null,
  //   aboutUs: null,
  //   website: null,
  //   profilePhoto: null,
  //   isAcceptedTermsConditions: false
  // };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

 ///
 verifymobileNO(){
   this.as.verifyMobileNo(this.form.mobileNo).subscribe(ress => {console.log(ress)})
 }
  onSubmit() {
    this.spinnerService.show();
    this.form;
    //this.verifymobileNO();
    //this.isLoading = true;
   if(this.form){
     //this.form.mobileNo = this.form.countrycode + ''+this.form.mobileNo;
    this.sr.userRegister(this.form).subscribe({
      next: data => {
        this.isLoading = false;
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        //this.router.navigate(['login']);
        //this.spinnerService.hide();
        Swal.fire(
          'Successful!',
          'Registered SuccessFully!!',
          'success'
        )
        this.dialogRef.close();
        this.openModal();
      },
      error: error => {
        //this.spinnerService.hide();
        console.log(error)
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
       if(error.status == 404){

         Swal.fire('Error', error.error, 'error');
       }else{
        Swal.fire('Error', error.error.message, 'error');

       }
          console.log('oops', this.errorMessage);
          //alert(error.error.message)
        }
      });
    }
  }

  openModal() {

    this.matDialogRef = this.matDialog.open(LoginComponent, {
      data: { name:'' },
      disableClose: true,
      'width': "400px",
      'height': "550px"
    });

    this.matDialogRef.afterClosed().subscribe(res => {
      if ((res == true)) {
        //later handle
      }
    });
  }

}