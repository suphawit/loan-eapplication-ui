import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PriceOfferComponent } from "./price-offer.component";
import { PriceOfferRoutingModule } from "./price-offer-routing.module";
import { BreadcrumbModule } from "../../shared/components/breadcrumb/breadcrumb.module";
import { CustomFormModule } from "../../shared/components/form/custom-form.module";
import { FormsModule } from "@angular/forms";
import { SharedServicesModule } from "../../shared/services/shared-services.module";
import { SharedDirectivesModule } from '../../shared/directives/shared-directives.module';

@NgModule({
    imports: [
        CommonModule,
        PriceOfferRoutingModule,
        BreadcrumbModule,
        CustomFormModule,
        FormsModule,
        SharedServicesModule,
        SharedDirectivesModule
    ],
    declarations: [
        PriceOfferComponent
    ],
    exports: [
        PriceOfferComponent
    ]
})
export class PriceOfferModule {}
