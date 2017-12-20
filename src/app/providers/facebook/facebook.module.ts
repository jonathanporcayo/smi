import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacebookComponent } from './facebook.component';
import { FacebookRoutingModule } from './facebook-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FacebookRoutingModule
  ],
  declarations: [FacebookComponent]
})
export class FacebookModule { }
