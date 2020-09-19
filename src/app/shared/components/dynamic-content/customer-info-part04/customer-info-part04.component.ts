import { Component, OnInit, Input, AfterViewChecked, ViewChild, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { Constants } from "../../../services/constants";
import { sectionMapping } from "../../../form-config/customer-part04-section-mapping";
import { fieldMapping } from "../../../field-config/customer-part04-field-mapping";
import { NgForm } from "@angular/forms";
import { UtilService } from "../../../services/util.service";
import { BaseComponent } from "../../base.component";
import { AppStateService } from "../../../services/app-state.service";
import { ModalService } from "../../../services/modal.service";
import { MockDataService } from "../../../services/mock-data-service";
import { userInfo } from "../../../test/user-info";

@Component({
  selector: 'app-customer-info-part04',
  templateUrl: './customer-info-part04.component.html',
  styleUrls: ['./customer-info-part04.component.scss']
})
export class CustomerInfoPart04Component extends BaseComponent implements OnInit, AfterViewInit, AfterViewChecked {
    public message: string;
    public submitted = false;

    public maxlen = {
        idNo: this.constants.MAXLEN.CITIZEN_ID,
        firstNameTh: this.constants.MAXLEN.FIRST_NAME,
        lastNameTh: this.constants.MAXLEN.LAST_NAME,
        phone: this.constants.MAXLEN.PHONE,
    };

    private SECTION_CONFIG = ["familyInfo"];

    public ddl: any = {}

    @Input() params: any;

    @ViewChild("form", { static: true })
    private form: NgForm;

    constructor(
        private mockDataService: MockDataService,
        private appState: AppStateService,
        private constants: Constants,
        public util: UtilService,
        private cdf: ChangeDetectorRef
    ) {
        super(util);
    }

    ngOnInit() {
        this.init();
    }

    ngAfterViewInit(): void {
        const customerInfo = this.appState.formData;
        const customerInfoPart04DisplayName = this.appState.displayName;
        if (customerInfo) {
            fieldMapping.forEach((fieldName: string) => {
                this.formData[fieldName] = customerInfo[fieldName];
                if (fieldName === 'maritalStatus') {
                    this.showSpouseChild();
                }
                if (fieldName === 'childNo') {
                    this.childrenCountSelectChange();
                }
                this.displayName[fieldName] = customerInfoPart04DisplayName[fieldName];
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
        this.appState.userInfo = userInfo;
        this.prepareFieldProperties();
        this.prepareFormData();
        this.prepareHideSection();
        this.fields = this.params.fieldList;
        this.submitted = this.params.submitted;
        if (this.params.componentData && !this.appState.initialized) {
            this.params.componentData.fieldList.forEach((f: any) => {
                this.appState.formData[f.fieldCode] = f.value;
            });
            this.appState.initialized = true;
        }
        this.prepareFormFields(this.SECTION_CONFIG, sectionMapping);
        this.loadMasterData();
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
            familyInfo: true
        };
    }

    private loadDefaultValue(): void {
        this.defaultFields.forEach((field: any) => {
            this.formData[field.fieldCode] = field.defaultValue;
            if (field.fieldCode === "maritalStatus") {
                this.showSpouseChild();
            }
            if (field.fieldCode === 'childNo') {
                this.childrenCountSelectChange();
            }
        });
    }

    public showSpouseChild() {
        const { maritalStatus } = this.formData;
        if (maritalStatus !== 1) {
            this.fieldProps.spouseIdNo.required = true;
            this.fieldProps.spouseFirstNameTh.required = true;
            this.fieldProps.spouseLastNameTh.required = true;
            this.fieldProps.spousePhoneNo.required = true;
        }
    }

    public childrenCountSelectChange() {
        for (let i = 1; i <= this.constants.MAX_CHILD_NO; i++) {
            this.fieldProps[`childIdNo${i}`].hidden = false;
            this.fieldProps[`childIdNo${i}`].required = true;
            this.fieldProps[`childIdNo${i}`].editing = false;
        }

        const childNo = this.formData.cochildNo;
        if (childNo > 0) {
            for (let i = 1; i <= childNo; i++) {
                this.fieldProps[`childIdNo${i}`].hidden = false;
                this.fieldProps[`childIdNo${i}`].required = true;
                this.fieldProps[`childIdNo${i}`].editing = true;
            }
        }
    }

    private loadMasterData(): void {
        this.getMaritalStatus();
        this.getChildrenCountList();
        this.getEducationLevel();
    }

    private getMaritalStatus() {
        if (!this.fieldProps.maritalStatus.hidden) {
            this.mockDataService.getMaritalStatus().then((res: any) => {
                if (res.header.success) {
                    this.ddl.maritalStatus = res.data.items;
                }
            });
        }
    }

    private getChildrenCountList() {
        if (!this.fieldProps.childNo.hidden) {
            this.mockDataService.getChildrenCountList().then((res: any) => {
                if (res.header.success) {
                    this.ddl.childrenCount = res.data.items;
                }
            });
        }
    }

    private getEducationLevel() {
        if (!this.fieldProps.educationLevel.hidden) {
            this.mockDataService.getEducationLevel().then((res: any) => {
                if (res.header.success) {
                    this.ddl.educationLevels = res.data.items;
                }
            });
        }
    }

}
