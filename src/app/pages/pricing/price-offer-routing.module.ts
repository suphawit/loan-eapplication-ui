import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PriceOfferComponent } from './price-offer.component';

const routes: Routes = [
    {
        path: '',
        component: PriceOfferComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PriceOfferRoutingModule {}
