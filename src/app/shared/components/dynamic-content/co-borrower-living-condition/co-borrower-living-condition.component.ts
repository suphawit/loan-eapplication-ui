import { Component, OnInit, Input, ViewChild, AfterViewChecked, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { MockDataService } from '../../../services/mock-data-service';
import { NgForm } from '@angular/forms';
import { sectionMapping } from '../../../form-config/co-borrower-living-condition-section-mapping';
import { fieldMapping } from "../../../field-config/co-borrower-living-condition-field-mapping";
import { AppStateService } from '../../../services/app-state.service';
import { UtilService } from '../../../services/util.service';
import { BaseComponent } from '../../base.component';

@Component({
  selector: 'app-co-borrower-living-condition',
  templateUrl: './co-borrower-living-condition.component.html',
  styleUrls: ['./co-borrower-living-condition.component.scss']
})

export class CoBorrowerLivingConditionComponent extends BaseComponent implements OnInit, AfterViewInit, AfterViewChecked {
    public message: string;
    public submitted = false;

    public maxlen = {
        livingHomeYear: 3
    };

    private SECTION_CONFIG = [
        'livingCondition'
    ];

    public ddl: any = {
        livingHomeType: [],
        residentStatuses: [],
        relationships: []
    };

    // public displayName = {
    //     colivingHomeType: ""
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
                if (fieldName === 'colivingHomeStatus') {
                    this.residentStatusCheckChange();
                }
                this.displayName[fieldName] = displayName[fieldName];
            });

            if (!this.submitted) {
                this.loadDefaultValue();
            }

            this.cdf.detectChanges();
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

    ngAfterViewChecked(): void {
        this.appState.formValid = this.form.valid;
        this.appState.displayName = this.displayName;
        if (this.form.valid) {
            this.appState.formData = this.formData;
        }
    }

    private loadMasterData(): void {
        this.getResidentStatusList();
        this.getRelationshipList();
    }

    private getRelationshipList() {
        if (!this.fieldProps.corelationship.hidden) {
            this.mockDataService.getRelationshipList().then((res: any) => {
                if (res.header.success) {
                    this.ddl.relationships = res.data.items;
                }
            });
        }
    }

    private getResidentStatusList() {
        if (!this.fieldProps.colivingHomeStatus.hidden) {
            this.mockDataService.getResidentStatusList().then((res: any) => {
                if (res.header.success) {
                    this.ddl.residentStatuses = res.data.items;
                }
            });
        }
    }

    public trackByFn(index) {
        return index;
    }

    public residentStatusCheckChange(): void {
        const status = this.formData.colivingHomeStatus;
        this.fieldProps.corelationship.hidden = true;
        this.fieldProps.corelationship.required = false;
        this.fieldProps.corentPerMonth.hidden = true;
        this.fieldProps.corentPerMonth.required = false;

        if (status === '2') {
            this.bindFormField('corelationship');
            this.fieldProps.corelationship.required = true;
        } else if (status === '3') {
            this.bindFormField('corentPerMonth');
            this.fieldProps.corentPerMonth.required = true;
        }
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
            livingCondition: true
        };
    }

    private loadDefaultValue(): void {
        this.defaultFields.forEach((field: any) => {
            this.formData[field.fieldCode] = field.defaultValue;
            if (field.fieldCode === 'colivingHomeStatus') {
                this.residentStatusCheckChange();
            }
        });
    }
}

