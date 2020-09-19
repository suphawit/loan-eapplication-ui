import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InsuranceReceiptComponent } from "./insurance-receipt.component";
import { CustomFormModule } from "../form/custom-form.module";
import { FormsModule } from "@angular/forms";
import { SharedServicesModule } from "../../services/shared-services.module";
import { SharedDirectivesModule } from '../../directives/shared-directives.module';

@NgModule({
    imports: [
        CommonModule,
        CustomFormModule,
        FormsModule,
        SharedServicesModule,
        SharedDirectivesModule
    ],
    declarations: [
        InsuranceReceiptComponent
    ],
    exports: [
        InsuranceReceiptComponent
    ]
})
export class InsuranceReceiptModule {}

