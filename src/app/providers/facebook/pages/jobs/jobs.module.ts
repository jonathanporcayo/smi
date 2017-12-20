import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { JobsComponent } from './jobs.component';


const routes: Routes = [{
  path: '',
  data: {
    title: 'Jobs',
    urls: [{title: 'Jobs',url: '/facebook/jobs'},{title: 'Jobs'}]
  },
  component: JobsComponent
}];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [JobsComponent]
})
export class JobsModule { }
