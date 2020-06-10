import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { SharednavbarComponent } from './sharednavbar/sharednavbar.component';
import { SharedfooterComponent } from './sharedfooter/sharedfooter.component';



@NgModule({
  declarations: [
    SharednavbarComponent, 
    SharedfooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SharednavbarComponent,
    SharedfooterComponent
  ]
})
export class SharedmoduleModule { }
