import { Component, OnInit, Input, AfterViewChecked, ViewChild, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { MockDataService } from "../../../services/mock-data-service";
import { sectionMapping } from "../../../form-config/co-borrower-customer-section-mapping";
import { fieldMapping } from "../../../field-config/co-borrower-customer-field-mapping";
import { AppStateService } from "../../../services/app-state.service";
import { NgForm } from "@angular/forms";
import { Constants } from "../../../services/constants";
import { UtilService } from "../../../services/util.service";
import { BaseComponent } from "../../base.component";
import { ModalService } from "../../../services/modal.service";
import { AlertDialogComponent } from "../../../components/modal-dialog/alert-dialog/alert-dialog.component";
import { CustomerMasterService } from "../../../services/customer-master.service";
import { ProductMasterService } from "../../../services/product-master.service";

@Component({
  selector: 'app-co-borrower-customer-info',
  templateUrl: './co-borrower-customer-info.component.html',
  styleUrls: ['./co-borrower-customer-info.component.scss']
})
export class CoBorrowerCustomerInfoComponent extends BaseComponent
    implements OnInit, AfterViewInit, AfterViewChecked {
    public message: string;
    public submitted = false;
    private modalConfig: any;

    public maxlen = {
        idNo: this.constants.MAXLEN.CITIZEN_ID,
        firstNameTh: this.constants.MAXLEN.FIRST_NAME,
        lastNameTh: this.constants.MAXLEN.LAST_NAME,
        firstNameEn: this.constants.MAXLEN.FIRST_NAME,
        lastNameEn: this.constants.MAXLEN.LAST_NAME,
        expWorkYear: 3,
        expWorkMonth: 2,
        mobileNo: 10,
        phoneNo: 50,
        otherOccupation: this.constants.MAXLEN.OCCUPATION,
        email: this.constants.MAXLEN.EMAIL,
        companyEmail: this.constants.MAXLEN.EMAIL,
        appleId: this.constants.MAXLEN.SOCIAL,
        googleId: this.constants.MAXLEN.SOCIAL,
        lineId: this.constants.MAXLEN.SOCIAL,
        facebookAcc: this.constants.MAXLEN.SOCIAL,
        twitter: this.constants.MAXLEN.SOCIAL,
        childIdNo1: this.constants.MAXLEN.CITIZEN_ID,
        childIdNo2: this.constants.MAXLEN.CITIZEN_ID,
        childIdNo3: this.constants.MAXLEN.CITIZEN_ID,
        childIdNo4: this.constants.MAXLEN.CITIZEN_ID,
    };

    private SECTION_CONFIG = [
        "basicInfo",
        "contactInfo",
        "workingInfo",
        "familyInfo",
        "educationInfo",
        "contactPerson",
        "guarantorPerson",
        "coborrowerPerson",
        "information",
    ];

    public ddl: any = {
        cardTypes: [],
        provinces: [],
        registerAddrDistricts: [],
        mailingDistricts: [],
        officeDistricts: [],
        l1yDistricts: [],
        childrenCount: [],
        genders: [],
        titleThs: [],
        titleEns: [],
        nationalities: [],
        occupations: [],
        subOccupations: [],
        jobBusinessTypes: [],
        officeTitles: [],
        companyNames: [],
        companyTypes: [],
        jobPositions: [],
        receiveSalaryMethods: [],
        maritalStatus: [],
        educationLevels: [],
    };

    @Input() params: any;

    @ViewChild("form", { static: true })
    private form: NgForm;

    constructor(
        private mockDataService: MockDataService,
        private appState: AppStateService,
        private constants: Constants,
        private cdf: ChangeDetectorRef,
        private modalService: ModalService,
        private customerMasterService: CustomerMasterService,
        private productMasterService: ProductMasterService,
        public util: UtilService
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
                if (fieldName === 'codocTypeId') {
                    this.docTypeSelectChange();
                }
                if (fieldName === 'cocurrentOccupation') {
                    this.occupationSelectChange('cocurrentOccupation', 'cocurrentSubOccupation');
                }
                if (fieldName === 'coexpWorkYear') {
                    this.expWorkYearTextChange();
                }
                if (fieldName === 'col1YOccupation') {
                    this.occupationSelectChange('col1YOccupation', 'col1YSubOccupation');
                }
                if (fieldName === 'cospouseIdNo') {
                    this.showSpouseChild();
                }
                if (fieldName === 'cochildNo') {
                    this.childrenCountSelectChange();
                }
                if (fieldName === 'coidNo') {
                    this.loadCustomerInfo(this.formData.coidNo);
                }
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
            basicInfo: true,
            contactInfo: true,
            workingInfo: true,
            familyInfo: true,
            educationInfo: false,
            contactPerson: false,
            guarantorPerson: false,
            coborrowerPerson: false,
            information: false,
        };
    }

    private loadMasterData(): void {
        this.getCardTypeList();
        this.getChildrenCountList();
        this.getGenderList();
        this.getTitleThList();
        this.getTitleEnList();
        this.getNationalityList();
        this.getOccupationList();
        this.getJobBusinessType();
        this.getOfficeTitle();
        this.getCompanyName();
        this.getCompanyType();
        this.getJobPosition();
        this.getMaritalStatus();
        this.getEducationLevel();
        this.getEverHPwithKKPFlg();
    }

    private getCardTypeList() {
        if (!this.fieldProps.codocTypeId.hidden) {
            this.productMasterService.getCardTypes().then((res: any) => {
                if (res.errorCode) {
                    this.modalConfig = { title: 'Message', message: res.error.message };
                    this.modalService.show(AlertDialogComponent, 'modal-sm', this.modalConfig);
                } else {
                    this.ddl.cardTypes = res;
                }
            });
        }
    }

    private getChildrenCountList() {
        if (!this.fieldProps.cochildNo.hidden) {
            this.mockDataService.getChildrenCountList().then((res: any) => {
                if (res.header.success) {
                    this.ddl.childrenCount = res.data.items;
                }
            });
        }
    }

    private getGenderList() {
        if (!this.fieldProps.cogender.hidden) {
            this.customerMasterService.getGenders().then((res: any) => {
                if (res.errorCode) {
                    this.modalConfig = { title: 'Message', message: res.error.message };
                    this.modalService.show(AlertDialogComponent, 'modal-sm', this.modalConfig);
                } else {
                    this.ddl.genders = res;
                }
            });
        }
    }

    private getTitleThList() {
        if (!this.fieldProps.cotitleTh.hidden) {
            this.customerMasterService.getTitleThs().then((res: any) => {
                if (res.errorCode) {
                    this.modalConfig = { title: 'Message', message: res.error.message };
                    this.modalService.show(AlertDialogComponent, 'modal-sm', this.modalConfig);
                } else {
                    this.ddl.titleThs = res;
                }
            });
        }
    }

    private getTitleEnList() {
        if (!this.fieldProps.cotitleEn.hidden) {
            this.customerMasterService.getTitleEns().then((res: any) => {
                if (res.errorCode) {
                    this.modalConfig = { title: 'Message', message: res.error.message };
                    this.modalService.show(AlertDialogComponent, 'modal-sm', this.modalConfig);
                } else {
                    this.ddl.titleEns = res;
                }
            });
        }
    }

    private getNationalityList() {
        if (!this.fieldProps.conationality.hidden) {
            this.customerMasterService.getNationalities().then((res: any) => {
                if (res.errorCode) {
                    this.modalConfig = { title: 'Message', message: res.error.message };
                    this.modalService.show(AlertDialogComponent, 'modal-sm', this.modalConfig);
                } else {
                    this.ddl.nationalities = res;
                }
            });
        }
    }

    private getOccupationList() {
        if (!this.fieldProps.col1YOccupation.hidden || !this.fieldProps.cocurrentOccupation.hidden) {
            this.productMasterService.getOccupationList().then((res: any) => {
                this.ddl.occupations = res || [];
            });
        }
    }

    private getJobBusinessType() {
        if (!this.fieldProps.cocurrentJobBusinessType.hidden) {
            // this.customerMasterService.getJobBusinessType().then((res: any) => {
            //     if (res.errorCode) {
            //         this.modalConfig = { title: 'Message', message: res.error.message };
            //         this.modalService.show(AlertDialogComponent, 'modal-sm', this.modalConfig);
            //     } else {
            //         this.ddl.jobBusinessTypes = res;
            //     }
            // });

            this.mockDataService.getJobBusinessType().then((res: any) => {
                if (res.header.success) {
                    this.ddl.jobBusinessTypes = res.data.items;
                }
            });
        }
    }

    private getOfficeTitle() {
        if (!this.fieldProps.col1YOfficeTitle.hidden || !this.fieldProps.cocurrentOfficeTitle.hidden) {
            this.mockDataService.getOfficeTitle().then((res: any) => {
                if (res.header.success) {
                    this.ddl.officeTitles = res.data.items;
                }
            });
        }
    }

    private getCompanyName() {
        if (!this.fieldProps.col1YOfficeName.hidden || !this.fieldProps.cocurrentOfficeName.hidden) {
            this.mockDataService.getCompanyName().then((res: any) => {
                if (res.header.success) {
                    this.ddl.companyNames = res.data.items;
                }
            });
        }
    }

    private getCompanyType() {
        if (!this.fieldProps.col1YCompanyType.hidden || !this.fieldProps.cocurrentCompanyType.hidden) {
            this.mockDataService.getCompanyType().then((res: any) => {
                if (res.header.success) {
                    this.ddl.companyTypes = res.data.items;
                }
            });
        }
    }

    private getJobPosition() {
        if (!this.fieldProps.col1YJobPosition.hidden || !this.fieldProps.cocurrentJobPosition.hidden) {
            this.mockDataService.getJobPosition().then((res: any) => {
                if (res.header.success) {
                    this.ddl.jobPositions = res.data.items;
                }
            });
        }
    }

    private getMaritalStatus() {
        if (!this.fieldProps.comaritalStatus.hidden) {
            this.mockDataService.getMaritalStatus().then((res: any) => {
                if (res.header.success) {
                    this.ddl.maritalStatus = res.data.items;
                }
            });
        }
    }

    private getEducationLevel() {
        if (!this.fieldProps.coeducationLevel.hidden) {
            this.mockDataService.getEducationLevel().then((res: any) => {
                if (res.header.success) {
                    this.ddl.educationLevels = res.data.items;
                }
            });
        }
    }

    private getEverHPwithKKPFlg() {
        if (!this.fieldProps.coeverHPwithKKPFlg.hidden) {
            this.mockDataService.getEverHPwithKKPFlg().then((res: any) => {
                if (res.header.success) {
                    this.ddl.everHPwithKKPFlg = res.data.items;
                }
            });
        }
    }

    private loadCustomerInfo(idNo: string) {
        this.mockDataService.getCustomerInfoByIdNo(idNo).then((res: any) => {
            if (res) {
                this.formData.coregisterAddrProvince = res.provinceCode;
                this.displayName.coregisterAddrProvince = res.provinceName;
                this.formData.coregisterAddrDistrict = res.districtCode;
                this.displayName.coregisterAddrDistrict = res.districtName;
            }
        });
    }

    public trackByFn(index) {
        return index;
    }

    public childrenCountSelectChange() {
        for (let i = 1; i <= this.constants.MAX_CHILD_NO; i++) {
            this.fieldProps[`cochildIdNo${i}`].hidden = false;
            this.fieldProps[`cochildIdNo${i}`].required = true;
            this.fieldProps[`cochildIdNo${i}`].editing = false;
        }

        const childNo = this.formData.cochildNo;
        if (childNo > 0) {
            for (let i = 1; i <= childNo; i++) {
                this.fieldProps[`cochildIdNo${i}`].hidden = false;
                this.fieldProps[`cochildIdNo${i}`].required = true;
                this.fieldProps[`cochildIdNo${i}`].editing = true;
            }
        }
    }

    public changeOccupation(occupation, subOccupation) {
        if (!this.fieldProps[subOccupation].hidden) {
            this.productMasterService.getSubOccupationList(this.formData[occupation]).then((res: any) => {
                this.ddl.subOccupations = res || [];
            });
        }
    }

    public docTypeSelectChange() {
        const codocTypeId = this.formData.codocTypeId;
        if (codocTypeId === "001") {
            this.maxlen.idNo = this.constants.MAXLEN.CITIZEN_ID;
        } else {
            this.maxlen.idNo = this.constants.MAXLEN.PASSPORT;
        }
    }

    public showSpouseChild() {
        const { comaritalStatus } = this.formData;
        if (comaritalStatus !== 1) {
            this.fieldProps.cospouseIdNo.required = true;
            this.fieldProps.cospouseFirstNameTh.required = true;
            this.fieldProps.cospouseLastNameTh.required = true;
            this.fieldProps.cospousePhoneNo.required = true;
        }
    }

    public greaterThanYear(name) {
        if (this.formData[name] > 11) {
            this.formData[name] = 11;
        }
    }

    public expWorkYearTextChange() {
        const { coexpWorkYear } = this.formData;
        if (coexpWorkYear < 1) {
            this.bindFormField("col1yProvince");
            this.fieldProps.col1yProvince.required = true;
            this.bindFormField("col1yDistrict");
            this.fieldProps.col1yDistrict.required = true;
        } else {
            this.fieldProps.col1yProvince.required = false;
            this.fieldProps.col1yProvince.hidden = true;
            this.fieldProps.col1yDistrict.required = false;
            this.fieldProps.col1yDistrict.hidden = true;
        }
    }

    public occupationSelectChange(occupation, subOccupation) {
        if (!this.fieldProps[subOccupation].hidden) {
            this.productMasterService.getSubOccupationList(this.formData[occupation]).then((res: any) => {
                this.ddl.subOccupations = res || [];
            });
        }
    }

    private loadDefaultValue(): void {
        this.defaultFields.forEach((field: any) => {
            this.formData[field.fieldCode] = field.defaultValue;
            if (field.fieldCode === "cochildNo") {
                this.childrenCountSelectChange();
            }
            if (field.fieldCode === 'cocurrentOccupation') {
                this.occupationSelectChange('cocurrentOccupation', 'cocurrentSubOccupation');
            }
            if (field.fieldCode === 'coexpWorkYear') {
                this.expWorkYearTextChange();
            }
            if (field.fieldCode === 'col1YOccupation') {
                this.occupationSelectChange('col1YOccupation', 'col1YSubOccupation');
            }
            if (field.fieldCode === "comaritalStatus") {
                this.showSpouseChild();
            }
        });
    }
}
