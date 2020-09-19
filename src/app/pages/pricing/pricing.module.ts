import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PricingComponent } from "./pricing.component";
import { PricingRoutingModule } from "./pricing-routing.module";
import { BreadcrumbModule } from "../../shared/components/breadcrumb/breadcrumb.module";
import { CustomFormModule } from "../../shared/components/form/custom-form.module";
import { FormsModule } from "@angular/forms";
import { SharedServicesModule } from "../../shared/services/shared-services.module";
import { SharedDirectivesModule } from '../../shared/directives/shared-directives.module';

@NgModule({
    imports: [
        CommonModule,
        PricingRoutingModule,
        BreadcrumbModule,
        CustomFormModule,
        FormsModule,
        SharedServicesModule,
        SharedDirectivesModule
    ],
    declarations: [
        PricingComponent
    ],
    exports: [
        PricingComponent
    ]
})
export class PricingModule {}
