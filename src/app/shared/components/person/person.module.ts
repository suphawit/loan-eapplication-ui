import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PersonComponent } from "./person.component";
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
        PersonComponent
    ],
    exports: [
        PersonComponent
    ]
})
export class PersonModule {}
