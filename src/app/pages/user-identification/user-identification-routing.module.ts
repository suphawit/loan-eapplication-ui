import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserIdentificationComponent } from './user-identification.component';

const routes: Routes = [
    {
        path: '',
        component: UserIdentificationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserIdentificationRoutingModule {}
