import { Component, OnInit, Input, AfterViewChecked, ViewChild, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { MockDataService } from "../../../services/mock-data-service";
import { sectionMapping } from "../../../form-config/guarantor-customer-section-mapping";
import { fieldMapping } from "../../../field-config/guarantor-customer-field-mapping";
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
    selector: "app-guarantor-customer-info",
    templateUrl: "./guarantor-customer-info.component.html",
    styleUrls: ["./guarantor-customer-info.component.scss"],
})
export class GuarantorCustomerInfoComponent extends BaseComponent
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
        email: this.constants.MAXLEN.EMAIL,
        companyEmail: this.constants.MAXLEN.EMAIL,
        appleId: this.constants.MAXLEN.SOCIAL,
        googleId: this.constants.MAXLEN.SOCIAL,
        lineId: this.constants.MAXLEN.SOCIAL,
        facebookAcc: this.constants.MAXLEN.SOCIAL,
        twitter: this.constants.MAXLEN.SOCIAL,
        otherOccupation: this.constants.MAXLEN.OCCUPATION,
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
                if (fieldName === 'gtdocTypeId') {
                    this.docTypeSelectChange();
                }
                if (fieldName === 'gtcurrentOccupation') {
                    this.occupationSelectChange('gtcurrentOccupation', 'gtcurrentSubOccupation');
                }
                if (fieldName === 'gtexpWorkYear') {
                    this.expWorkYearTextChange();
                }
                if (fieldName === 'gt1YOccupation') {
                    this.occupationSelectChange('gt1YOccupation', 'gt1YSubOccupation');
                }
                if (fieldName === 'gtspouseIdNo') {
                    this.showSpouseChild();
                }
                if (fieldName === 'gtchildNo') {
                    this.childrenCountSelectChange();
                }
                if (fieldName === 'gtidNo') {
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
        if (!this.fieldProps.gtdocTypeId.hidden) {
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
        if (!this.fieldProps.gtchildNo.hidden) {
            this.mockDataService.getChildrenCountList().then((res: any) => {
                if (res.header.success) {
                    this.ddl.childrenCount = res.data.items;
                }
            });
        }
    }

    private getGenderList() {
        if (!this.fieldProps.gtgender.hidden) {
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
        if (!this.fieldProps.gttitleTh.hidden) {
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
        if (!this.fieldProps.gttitleEn.hidden) {
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
        if (!this.fieldProps.gtnationality.hidden) {
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
        if (!this.fieldProps.gt1YOccupation.hidden || !this.fieldProps.gtcurrentOccupation.hidden) {
            this.productMasterService.getOccupationList().then((res: any) => {
                this.ddl.occupations = res || [];
            });
        }
    }

    private getJobBusinessType() {
        if (!this.fieldProps.gtcurrentJobBusinessType.hidden) {
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
        if (!this.fieldProps.gtl1YOfficeTitle.hidden || !this.fieldProps.gtcurrentOfficeTitle.hidden) {
            this.mockDataService.getOfficeTitle().then((res: any) => {
                if (res.header.success) {
                    this.ddl.officeTitles = res.data.items;
                }
            });
        }
    }

    private getCompanyName() {
        if (!this.fieldProps.gtl1YOfficeName.hidden || !this.fieldProps.gtcurrentOfficeName.hidden) {
            this.mockDataService.getCompanyName().then((res: any) => {
                if (res.header.success) {
                    this.ddl.companyNames = res.data.items;
                }
            });
        }
    }

    private getCompanyType() {
        if (!this.fieldProps.gtl1YCompanyType.hidden || !this.fieldProps.gtcurrentCompanyType.hidden) {
            this.mockDataService.getCompanyType().then((res: any) => {
                if (res.header.success) {
                    this.ddl.companyTypes = res.data.items;
                }
            });
        }
    }

    private getJobPosition() {
        if (!this.fieldProps.gtl1YJobPosition.hidden || !this.fieldProps.gtcurrentJobPosition.hidden) {
            this.mockDataService.getJobPosition().then((res: any) => {
                if (res.header.success) {
                    this.ddl.jobPositions = res.data.items;
                }
            });
        }
    }

    private getMaritalStatus() {
        if (!this.fieldProps.gtmaritalStatus.hidden) {
            this.mockDataService.getMaritalStatus().then((res: any) => {
                if (res.header.success) {
                    this.ddl.maritalStatus = res.data.items;
                }
            });
        }
    }

    private getEducationLevel() {
        if (!this.fieldProps.gteducationLevel.hidden) {
            this.mockDataService.getEducationLevel().then((res: any) => {
                if (res.header.success) {
                    this.ddl.educationLevels = res.data.items;
                }
            });
        }
    }

    private getEverHPwithKKPFlg() {
        if (!this.fieldProps.gteverHPwithKKPFlg.hidden) {
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
                this.formData.gtregisterAddrProvince = res.provinceCode;
                this.displayName.gtregisterAddrProvince = res.provinceName;
                this.formData.gtregisterAddrDistrict = res.districtCode;
                this.displayName.gtregisterAddrDistrict = res.districtName;
            }
        });
    }

    public trackByFn(index) {
        return index;
    }

    public childrenCountSelectChange() {
        this.fieldProps.gtchildIdNo1.required = false;
        this.fieldProps.gtchildIdNo1.hidden = true;
        this.fieldProps.gtchildIdNo1.editing = false;

        this.fieldProps.gtchildIdNo2.required = false;
        this.fieldProps.gtchildIdNo2.hidden = true;
        this.fieldProps.gtchildIdNo2.editing = false;

        this.fieldProps.gtchildIdNo3.required = false;
        this.fieldProps.gtchildIdNo3.hidden = true;
        this.fieldProps.gtchildIdNo3.editing = false;

        this.fieldProps.gtchildIdNo4.required = false;
        this.fieldProps.gtchildIdNo4.hidden = true;
        this.fieldProps.gtchildIdNo4.editing = false;

        const { gtchildNo } = this.formData;

        if (gtchildNo > 0) {
            for (let i = 1; i <= gtchildNo; i++) {
                this.fieldProps["gtchildIdNo" + i].hidden = false;
                this.fieldProps["gtchildIdNo" + i].required = true;
                this.fieldProps["gtchildIdNo" + i].editing = true;
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
        const gtdocTypeId = this.formData.gtdocTypeId;
        if (gtdocTypeId === "001") {
            this.maxlen.idNo = this.constants.MAXLEN.CITIZEN_ID;
        } else {
            this.maxlen.idNo = this.constants.MAXLEN.PASSPORT;
        }
    }

    public showSpouseChild() {
        const gtmaritalStatus = this.formData.gtmaritalStatus;
        if (gtmaritalStatus !== 1) {
            this.fieldProps.gtspouseIdNo.required = true;
            this.fieldProps.gtspouseFirstNameTh.required = true;
            this.fieldProps.gtspouseLastNameTh.required = true;
            this.fieldProps.gtspousePhoneNo.required = true;
        }
    }

    public greaterThanYear(name) {
        if (this.formData[name] > 11) {
            this.formData[name] = 11;
        }
    }

    public expWorkYearTextChange() {
        const { gtexpWorkYear } = this.formData;
        if (gtexpWorkYear < 1) {
            this.bindFormField("gtl1yProvince");
            this.fieldProps.gtl1yProvince.required = true;
            this.bindFormField("gtl1yDistrict");
            this.fieldProps.gtl1yDistrict.required = true;
        } else {
            this.fieldProps.gtl1yProvince.required = false;
            this.fieldProps.gtl1yProvince.hidden = true;
            this.fieldProps.gtl1yDistrict.required = false;
            this.fieldProps.gtl1yDistrict.hidden = true;
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
            if (field.fieldCode === "gtchildNo") {
                this.childrenCountSelectChange();
            }
            if (field.fieldCode === 'gtcurrentOccupation') {
                this.occupationSelectChange('gtcurrentOccupation', 'gtcurrentSubOccupation');
            }
            if (field.fieldCode === 'gtexpWorkYear') {
                this.expWorkYearTextChange();
            }
            if (field.fieldCode === 'gt1YOccupation') {
                this.occupationSelectChange('gt1YOccupation', 'gt1YSubOccupation');
            }
            if (field.fieldCode === "gtmaritalStatus") {
                this.showSpouseChild();
            }
        });
    }
}
