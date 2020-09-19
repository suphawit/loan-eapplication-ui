import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CarInfoComponent } from "./car-info/car-info.component";
import { FinancialInfoComponent } from "./financial-info/financial-info.component";
import { LoanExpectationComponent } from "./loan-expectation/loan-expectation.component";
import { AdditionalInfoComponent } from './additional-info/additional-info.component';
import { PersonModule } from "../person/person.module";
import { InsuranceReceiptModule } from "../insurance-receipt/insurance-receipt.module"
import { CustomFormModule } from "../form/custom-form.module";
import { FormsModule } from "@angular/forms";
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { LivingConditionComponent } from './living-condition/living-condition.component';
import { SharedPipesModule } from '../../pipes/shared-pipes.module';
import { SharedDirectivesModule } from '../../directives/shared-directives.module';
import { GuarantorCustomerInfoComponent } from './guarantor-customer-info/guarantor-customer-info.component';
import { CustomerInfoPart01Component } from './customer-info-part01/customer-info-part01.component';
import { CustomerInfoPart02Component } from './customer-info-part02/customer-info-part02.component';
import { CustomerInfoPart03Component } from './customer-info-part03/customer-info-part03.component';
import { CustomerInfoPart04Component } from './customer-info-part04/customer-info-part04.component';
import { CustomerInfoPart05Component } from './customer-info-part05/customer-info-part05.component';
import { GuarantorFinancialInfoComponent } from './guarantor-financial-info/guarantor-financial-info.component';
import { GuarantorLivingConditionComponent } from './guarantor-living-condition/guarantor-living-condition.component';
import { GuarantorBusinessOwnerComponent } from './guarantor-business-owner/guarantor-business-owner.component';
import { CoBorrowerFinancialInfoComponent } from './co-borrower-financial-info/co-borrower-financial-info.component';
import { CoBorrowerLivingConditionComponent } from './co-borrower-living-condition/co-borrower-living-condition.component';
import { CoBorrowerBusinessOwnerComponent } from './co-borrower-business-owner/co-borrower-business-owner.component';
import { DisburseComponent } from './disburse/disburse.component';
import { CoBorrowerCustomerInfoComponent } from './co-borrower-customer-info/co-borrower-customer-info.component';
import { BusinessOwnerComponent } from './business-owner/business-owner.component';
import { InsuranceComponent } from './insurance/insurance.component';

@NgModule({
    imports: [
        CommonModule,
        PersonModule,
        InsuranceReceiptModule,
        CustomFormModule,
        CollapseModule,
        FormsModule,
        SharedPipesModule,
        SharedDirectivesModule
    ],
    declarations: [
        FinancialInfoComponent,
        LivingConditionComponent,
        CarInfoComponent,
        LoanExpectationComponent,
        AdditionalInfoComponent,
        GuarantorCustomerInfoComponent,
        CustomerInfoPart01Component,
        CustomerInfoPart02Component,
        CustomerInfoPart03Component,
        CustomerInfoPart04Component,
        CustomerInfoPart05Component,
        GuarantorFinancialInfoComponent,
        GuarantorLivingConditionComponent,
        GuarantorBusinessOwnerComponent,
        CoBorrowerFinancialInfoComponent,
        CoBorrowerLivingConditionComponent,
        CoBorrowerBusinessOwnerComponent,
        DisburseComponent,
        CoBorrowerCustomerInfoComponent,
        BusinessOwnerComponent,
        InsuranceComponent
    ],
    entryComponents: [
        FinancialInfoComponent,
        LivingConditionComponent,
        CarInfoComponent,
        LoanExpectationComponent,
        AdditionalInfoComponent,
        GuarantorCustomerInfoComponent,
        CustomerInfoPart01Component,
        CustomerInfoPart02Component,
        CustomerInfoPart03Component,
        CustomerInfoPart04Component,
        CustomerInfoPart05Component,
        GuarantorFinancialInfoComponent,
        GuarantorLivingConditionComponent,
        GuarantorBusinessOwnerComponent,
        CoBorrowerFinancialInfoComponent,
        CoBorrowerLivingConditionComponent,
        CoBorrowerBusinessOwnerComponent,
        DisburseComponent,
        CoBorrowerCustomerInfoComponent,
        BusinessOwnerComponent,
        InsuranceComponent
    ]
})
export class DynamicContentModule {
    static mapping = {
        FinancialInfoComponent,
        LivingConditionComponent,
        CarInfoComponent,
        LoanExpectationComponent,
        AdditionalInfoComponent,
        GuarantorCustomerInfoComponent,
        CustomerInfoPart01Component,
        CustomerInfoPart02Component,
        CustomerInfoPart03Component,
        CustomerInfoPart04Component,
        CustomerInfoPart05Component,
        GuarantorFinancialInfoComponent,
        GuarantorLivingConditionComponent,
        GuarantorBusinessOwnerComponent,
        CoBorrowerFinancialInfoComponent,
        CoBorrowerLivingConditionComponent,
        CoBorrowerBusinessOwnerComponent,
        DisburseComponent,
        CoBorrowerCustomerInfoComponent,
        BusinessOwnerComponent,
        InsuranceComponent
    };
}
