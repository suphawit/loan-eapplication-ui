import { Component, OnInit, Input, AfterViewChecked, ViewChild, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { sectionMapping } from '../../../form-config/loan-expectation-section-mapping';
import { MockDataService } from '../../../services/mock-data-service';
import { AppStateService } from '../../../services/app-state.service';
import { NgForm } from '@angular/forms';
import { UtilService } from '../../../services/util.service';
import { BaseComponent } from '../../base.component';
import { fieldMapping } from "../../../field-config/loan-expectation-field-mapping";

@Component({
    selector: "app-loan-expectation",
    templateUrl: "./loan-expectation.component.html",
    styleUrls: ["./loan-expectation.component.scss"],
})
export class LoanExpectationComponent extends BaseComponent implements OnInit, AfterViewInit, AfterViewChecked {
    public message: string;
    public submitted = false;

    public maxlen = {
        ncbSelfCreditScore: 3
    };

    private SECTION_CONFIG = [
        'loanExpectationInfo',
    ];

    public ddl: any = {
        loanPurpuses: []
    };

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
        this.loadMasterData();
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
        this.loadPurposes();
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
            loanExpectationInfo: true
        };
    }

    private loadDefaultValue(): void {
        this.defaultFields.forEach((field: any) => {
            this.formData[field.fieldCode] = field.defaultValue;
        });
    }

    private loadPurposes() {
        if (!this.fieldProps.loanPurpuse.hidden) {
            this.mockDataService.getLoanPurpuseList().then((res: any) => {
                if (res.header.success) {
                    this.ddl.loanPurpuses = res.data.items;
                }
            });
        }
    }
}
