import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './pages.component';

const routes: Routes = [
    {
        path: '', component: PageComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
            { path: 'facebook', loadChildren: '../providers/facebook/facebook.module#FacebookModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
