import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SubmitCreditApprovalComponent } from "./submit-credit-approval.component";
import { SubmitCreditApprovalRoutingModule } from "./submit-credit-approval-routing.module";
import { DynamicContentModule } from "../../dynamic-content/dynamic-content.module";
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DynamicContentModule,
        SubmitCreditApprovalRoutingModule
    ],
    declarations: [
        SubmitCreditApprovalComponent
    ]
})
export class SubmitCreditApprovalModule {}
