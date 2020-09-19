import { Component, OnInit, Input, AfterViewChecked, ViewChild, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { MockDataService } from '../../../services/mock-data-service';
import { sectionMapping } from '../../../form-config/business-owner-section-mapping';
import { fieldMapping } from "../../../field-config/business-owner-field-mapping";
import { AppStateService } from "../../../services/app-state.service";
import { NgForm } from '@angular/forms';
import { UtilService } from '../../../services/util.service';
import { BaseComponent } from '../../base.component';

@Component({
  selector: 'app-business-owner',
  templateUrl: './business-owner.component.html',
  styleUrls: ['./business-owner.component.scss']
})
export class BusinessOwnerComponent extends BaseComponent implements OnInit, AfterViewInit, AfterViewChecked {

    public message: string;
    public submitted = false;

    public maxlen = {
    };

    private SECTION_CONFIG = [
        'businessOwner'
    ];

    public ddl: any = {
        numOfEmployees: []
    };

    // public displayName = {
    //     numberOfEmployee: ''
    // };

    @Input() params: any;

    @ViewChild('form', { static: true })
    private form: NgForm;

    constructor(
        private mockDataService: MockDataService,
        private appState: AppStateService,
        public util: UtilService,
        private cdf: ChangeDetectorRef
    ) {
        super(util);
    }

    ngOnInit(): void {
        this.init();
    }

    ngAfterViewInit(): void {
        const formData = this.appState.formData;
        const displayName = this.appState.displayName;

        if (formData) {
            fieldMapping.forEach((fieldName: string) => {
                this.formData[fieldName] = formData[fieldName];
                this.displayName[fieldName] = displayName[fieldName];
            });
            if (!this.submitted) {
                this.loadDefaultValue();
            }

            this.cdf.detectChanges();
        }
    }

    ngAfterViewChecked(): void {
        this.appState.formValid = this.form.valid;
        this.appState.displayName = this.displayName;
        if (this.form.valid) {
            this.appState.formData = this.formData;
        }
    }

    private init(): void {
        this.prepareFieldProperties();
        this.prepareFormData();
        this.prepareHideSection();
        this.fields = this.params.fieldList;
        this.submitted = this.params.submitted;
        this.prepareFormFields(this.SECTION_CONFIG, sectionMapping);
        this.loadMasterData();
    }

    private loadMasterData(): void {
        this.getEmployeeNumList();
    }

    private getEmployeeNumList() {
        if (!this.fieldProps.numberOfEmployee.hidden) {
            this.mockDataService.getEmployeeNumList().then((res: any) => {
                if (res.header.success) {
                    this.ddl.numOfEmployees = res.data.items;
                }
            });
        }
    }

    public trackByFn(index) {
        return index;
    }

    private prepareFieldProperties(): void {
        this.fieldProps = {};
        fieldMapping.forEach((fieldName: string) => {
            this.fieldProps[fieldName] =  { hidden: true, required: false, editing: false };
        });
    }

    private prepareFormData(): void {
        this.formData = {};
        this.displayName = {};
        fieldMapping.forEach((fieldName: string) => {
            this.formData[fieldName] =  "";
            this.displayName[fieldName] = "";
        });
    }

    private prepareHideSection(): void {
        this.hideSection = {
          businessOwner: true
        };
    }

    private loadDefaultValue(): void {
        this.defaultFields.forEach((field: any) => {
            this.formData[field.fieldCode] = field.defaultValue;
        });
    }

    public getDisplayName(fieldName: string) {
        if (fieldName in this.displayName) {
            return this.displayName[fieldName];
        }
        return '';
    }
}

