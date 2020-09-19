import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreApprovalComponent } from './pre-approval.component';

const routes: Routes = [
    {
        path: '',
        component: PreApprovalComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PreApprovalRoutingModule {}
