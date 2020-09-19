import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserIdentificationComponent } from "./user-identification.component";
import { UserIdentificationRoutingModule } from "./user-identification-routing.module";
import { SharedServicesModule } from "../../shared/services/shared-services.module";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedDirectivesModule } from '../../shared/directives/shared-directives.module';

@NgModule({
    imports: [
        CommonModule,
        UserIdentificationRoutingModule,
        SharedServicesModule,
        ReactiveFormsModule,
        FormsModule,
        TranslateModule.forChild(),
        SharedDirectivesModule
    ],
    declarations: [
        UserIdentificationComponent
    ]
})
export class UserIdentificationModule {}
