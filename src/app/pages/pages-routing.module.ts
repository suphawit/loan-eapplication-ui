import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: '', redirectTo: 'user-id', pathMatch: 'prefix' },
            { path: 'user-id', loadChildren: './user-identification/user-identification.module#UserIdentificationModule' },
            { path: 'pre-cal', loadChildren: './pre-cal/pre-cal.module#PreCalModule' },
            { path: 'pre-approval', loadChildren: './pre-approval/pre-approval.module#PreApprovalModule' },
            { path: 'submit-credit-approval', loadChildren: './submit-credit-approval/submit-credit-approval.module#SubmitCreditApprovalModule' },
            { path: 'ncb', loadChildren: './ncb/ncb.module#NcbModule' },
            { path: 'pricing', loadChildren: './pricing/pricing.module#PricingModule' },
            { path: 'price-offer', loadChildren: './pricing/price-offer.module#PriceOfferModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
