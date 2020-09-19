import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomTextFieldComponent } from "./custom-text-field/custom-text-field.component";
import { CustomSelectComponent } from "./custom-select/custom-select.component";
import { CustomRadioButtonListComponent } from './custom-radio-button-list/custom-radio-button-list.component';
import { SharedDirectivesModule } from '../../directives/shared-directives.module';
import { SharedServicesModule } from '../../services/shared-services.module';
import { ValidationComponent } from './validation/validation.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CustomFileUploadComponent } from './custom-file-upload/custom-file-upload.component';
import { CustomLabelComponent } from './custom-label/custom-label.component';
import { CustomDatepickerComponent } from './custom-datepicker/custom-datepicker.component';
import { CustomCheckboxComponent } from './custom-checkbox/custom-checkbox.component';
import { CustomInputFilterComponent } from './custom-input-filter/custom-input-filter.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

@NgModule({
    imports: [
        CommonModule,
        BsDatepickerModule,
        FormsModule,
        ReactiveFormsModule,
        SharedDirectivesModule,
        SharedServicesModule,
        TypeaheadModule
    ],
    declarations: [
        CustomTextFieldComponent,
        CustomSelectComponent,
        ValidationComponent,
        CustomRadioButtonListComponent,
        CustomFileUploadComponent,
        CustomLabelComponent,
        CustomDatepickerComponent,
        CustomCheckboxComponent,
        CustomInputFilterComponent
    ],
    exports: [
        CustomTextFieldComponent,
        CustomSelectComponent,
        ValidationComponent,
        CustomRadioButtonListComponent,
        CustomDatepickerComponent,
        CustomLabelComponent,
        CustomCheckboxComponent,
        CustomFileUploadComponent,
        CustomInputFilterComponent
    ]
})
export class CustomFormModule {}
