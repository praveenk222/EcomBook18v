import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LeftNavbarComponent } from '../commonFiles/left-navbar/left-navbar.component';
import { MaterialExampleModule } from '../material.module';

@NgModule({
  declarations: [LeftNavbarComponent],
  imports: [CommonModule, MatProgressSpinnerModule, MaterialExampleModule],
  exports: [
    LeftNavbarComponent,
    MatProgressSpinnerModule,
    NgxSpinnerModule,
    MaterialExampleModule,
  ],
})
export class SharedModule {}
