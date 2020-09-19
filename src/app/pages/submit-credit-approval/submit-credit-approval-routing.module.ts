import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubmitCreditApprovalComponent } from './submit-credit-approval.component';

const routes: Routes = [
    {
        path: '',
        component: SubmitCreditApprovalComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SubmitCreditApprovalRoutingModule {}
