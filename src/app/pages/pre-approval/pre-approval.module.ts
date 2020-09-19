import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PreApprovalComponent } from "./pre-approval.component";
import { DynamicContentModule } from "../../dynamic-content/dynamic-content.module";
import { PreApprovalRoutingModule } from "./pre-approval-routing.module";
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        DynamicContentModule,
        PreApprovalRoutingModule,
        FormsModule
    ],
    declarations: [
        PreApprovalComponent
    ]
})
export class PreApprovalModule {}
