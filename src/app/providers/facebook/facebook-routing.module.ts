/**
 * Created by codehead on 12/7/17.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacebookComponent } from './facebook.component';
import { PageComponent } from '../../pages/pages.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
       {
        path: 'facebooks', children:
        [
          { path: '', pathMatch: 'full', redirectTo: 'shares' }, 
          { path: 'shares', loadChildren: './pages/shares/shares.module#SharesModule' },
          { path: 'jobs', loadChildren: './pages/jobs/jobs.module#JobsModule' },



        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacebookRoutingModule { }
