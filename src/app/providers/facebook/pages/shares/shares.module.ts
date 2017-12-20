import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharesComponent } from './shares.component';

const routes: Routes = [{
  path: '',
  data: {
    title: 'Shares',
    urls: [{title: 'Shares',url: ''},{title: 'Shares'}]
  },
  component: SharesComponent
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SharesComponent]
})
export class SharesModule { }
