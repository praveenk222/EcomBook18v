import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../app/services/auth.service';
import { LoginComponent } from '../..//commonFiles/login/login.component';

@Component({
  selector: 'app-postcomments',
  templateUrl: './postcomments.component.html',
  styleUrls: ['./postcomments.component.scss']
})
export class PostcommentsComponent implements OnInit {
  matDialogRef!: MatDialogRef<LoginComponent>;

  constructor(private matDialog:MatDialog ,public as: AuthService ) { }

  ngOnInit(): void {
  }
  chat(){
    if(!this.as.isLoggedIn()){

      this.OpenModal();
    }
  }
  OpenModal() {

    this.matDialogRef = this.matDialog.open(LoginComponent, {
      data: '{ name: this.name }',
      disableClose: true,
      'width': "400px",
      'height': "550px"
    });

    this.matDialogRef.afterClosed().subscribe((res: boolean) => {
      if ((res == true)) {
      //  this.name = "";
      //  this.showlist = false;
        //later handle
      }
    });
  }
}
