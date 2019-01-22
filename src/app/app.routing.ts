import { ModuleWithProviders } from '@angular/core';
import { Routes , RouterModule  } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ErrorComponent } from './components/error/error.component';
import { CreateComponent } from './components/create/create.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';


const appRoutes : Routes = [
    {path:'',component:AboutComponent},
    {path: 'sobre-mi', component:AboutComponent},
    {path:'create',component:CreateComponent},
    {path:'detail/:id',component:DetailComponent},
    {path: 'edit/:id',component:EditComponent},
    {path:'**',component:ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);