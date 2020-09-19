import { Component, OnInit, Input, AfterViewChecked, ViewChild, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { sectionMapping } from '../../../form-config/financial-section-mapping';
import { MockDataService } from '../../../services/mock-data-service';
import { AppStateService } from '../../../services/app-state.service';
import { NgForm } from '@angular/forms';
import { UtilService } from '../../../services/util.service';
import { BaseComponent } from '../../base.component';
import { fieldMapping } from "../../../field-config/financial-info-field-mapping";

@Component({
    selector: "app-financial-info",
    templateUrl: "./financial-info.component.html",
    styleUrls: ["./financial-info.component.scss"]
})
export class FinancialInfoComponent extends BaseComponent implements OnInit, AfterViewInit, AfterViewChecked {
    public message: string;
    public submitted = false;

    public maxlen = {
        ncbSelfCreditScore: 3
    };

    private SECTION_CONFIG = [
        'incomeInfo',
        'wealthInfo',
        'debtInfo'
    ];

    public ddl: any = {
        countries: [],
        personalAssetAmts: [],
        ncbs: []
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
        this.loadCountries();
        this.loadPersonalAssetAmts();
        this.loadNcbList();
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
            incomeInfo: true,
            wealthInfo: true,
            debtInfo: true
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

    public trackByFn(index) {
        return index;
    }

    private loadCountries() {
        if (!this.fieldProps.countryOfIncome.hidden) {
            this.mockDataService.getCountryList().then((res: any) => {
                if (res.header.success) {
                    this.ddl.countries = res.data.items;
                }
            });
        }
    }

    private loadPersonalAssetAmts() {
        if (!this.fieldProps.personalAssetAmt.hidden) {
            this.mockDataService.getPersonalAssetAmtList().then((res: any) => {
                if (res.header.success) {
                    this.ddl.personalAssetAmts = res.data.items;
                }
            });
        }
    }

    private loadNcbList() {
        if (!this.fieldProps.ncbEConsent.hidden) {
            this.mockDataService.getNcbList().then((res: any) => {
                if (res.header.success) {
                    this.ddl.ncbs = res.data.items;
                }
            });
        }
    }

    public countryOfIncomeSelectChange(countryName: string = "") {
        this.displayName.countryOfIncome = countryName;
    }
}
