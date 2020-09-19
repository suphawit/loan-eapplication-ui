import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DocumentAttachedComponent } from "./document-attached.component";
import { CustomFormModule } from "../form/custom-form.module";
import { FormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { SharedPipesModule } from "../../pipes/shared-pipes.module";
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
    imports: [
        CommonModule,
        CustomFormModule,
        FormsModule,
        TranslateModule.forChild(),
        SharedPipesModule,
        ModalModule
    ],
    declarations: [
        DocumentAttachedComponent
    ],
    exports: [
        DocumentAttachedComponent
    ]
})
export class DocumentAttachedModule {}
