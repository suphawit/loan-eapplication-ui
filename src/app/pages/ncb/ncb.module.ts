import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NcbComponent } from "./ncb.component";
import { NcbRoutingModule } from "./ncb-routing.module";
import { BreadcrumbModule } from "../../shared/components/breadcrumb/breadcrumb.module";

@NgModule({
    imports: [
        CommonModule,
        NcbRoutingModule,
        BreadcrumbModule
    ],
    declarations: [
        NcbComponent
    ]
})
export class NcbModule {}
