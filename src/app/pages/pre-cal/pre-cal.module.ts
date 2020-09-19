import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PreCalComponent } from "./pre-cal.component";
import { PreCalRoutingModule } from "./pre-cal-routing.module";
import { DynamicContentModule } from "../../dynamic-content/dynamic-content.module";
import { SharedServicesModule } from "../../shared/services/shared-services.module";
import { BreadcrumbModule } from "../../shared/components/breadcrumb/breadcrumb.module";

@NgModule({
    imports: [
        CommonModule,
        PreCalRoutingModule,
        DynamicContentModule,
        SharedServicesModule,
        BreadcrumbModule
    ],
    declarations: [
        PreCalComponent
    ]
})
export class PreCalModule {}
