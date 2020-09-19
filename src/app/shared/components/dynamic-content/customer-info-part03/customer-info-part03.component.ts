import { Component, OnInit, Input, AfterViewChecked, ViewChild, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { Constants } from "../../../services/constants";
import { sectionMapping } from "../../../form-config/customer-part03-section-mapping";
import { fieldMapping } from "../../../field-config/customer-part03-field-mapping";
import { NgForm } from "@angular/forms";
import { UtilService } from "../../../services/util.service";
import { BaseComponent } from "../../base.component";
import { AppStateService } from "../../../services/app-state.service";
import { ModalService } from "../../../services/modal.service";
import { AlertDialogComponent } from "../../../components/modal-dialog/alert-dialog/alert-dialog.component";
import { MockDataService } from "../../../services/mock-data-service";
import { CustomerMasterService } from "../../../services/customer-master.service";
import { ProductMasterService } from "../../../services/product-master.service";
import { userInfo } from "../../../test/user-info";
import { LoanEAPPService } from "../../../services/loan-eapp.service";

@Component({
  selector: 'app-customer-info-part03',
  templateUrl: './customer-info-part03.component.html',
  styleUrls: ['./customer-info-part03.component.scss']
})
export class CustomerInfoPart03Component extends BaseComponent implements OnInit, AfterViewInit, AfterViewChecked {
    public message: string;
    public submitted = false;
    private modalConfig: any;

    public maxlen = {
        addrNumber: this.constants.MAXLEN.ADDRNUMBER,
        moo: this.constants.MAXLEN.MOO,
        floor: this.constants.MAXLEN.FLOOR,
        room: this.constants.MAXLEN.ROOM,
        village: this.constants.MAXLEN.VILLAGE,
        soi: this.constants.MAXLEN.SOI,
        road: this.constants.MAXLEN.ROAD,
        postal: this.constants.MAXLEN.POSTAL,
        phone: this.constants.MAXLEN.PHONE,
        expWorkYear: this.constants.MAXLEN.WORKYEAR,
        expWorkMonth: this.constants.MAXLEN.WORKMONTH,
        otherOccupation: this.constants.MAXLEN.OCCUPATION,
    }

    private SECTION_CONFIG = ["workingInfo"];

    public ddl: any = {
        occupations: [],
        subOccupations: [],
        jobBusinessTypes: [],
        officeTitles: [],
        companyNames: [],
        companyTypes: [],
        provinces: [],
        districts: [],
        subdistricts: [],
        countries: [],
        jobPositions: [],
        receiveSalaryMethods: []
    };

    @Input() params: any;

    @ViewChild("form", { static: true })
    private form: NgForm;

    constructor(
        private mockDataService: MockDataService,
        private customerMasterService: CustomerMasterService,
        private loanEAPPService: LoanEAPPService,
        private productMasterService: ProductMasterService,
        private appState: AppStateService,
        private constants: Constants,
        public util: UtilService,
        private cdf: ChangeDetectorRef,
        private modalService: ModalService
    ) {
        super(util);
    }

    ngOnInit() {
        this.init();
    }

    ngAfterViewInit(): void {
        const customerInfo = this.appState.formData;
        const customerInfoPart03DisplayName = this.appState.displayName;
        if (customerInfo) {
            fieldMapping.forEach((fieldName: string) => {
                this.formData[fieldName] = customerInfo[fieldName];
                this.displayName[fieldName] = customerInfoPart03DisplayName[fieldName];
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

        console.log("=====> this.formData : ", this.formData);
    }

    private prepareHideSection(): void {
        this.hideSection = {
            workingInfo: true
        };
    }

    private loadDefaultValue(): void {
        this.defaultFields.forEach((field: any) => {
            this.formData[field.fieldCode] = field.defaultValue;
        });
    }

    private loadMasterData(): void {
        this.getOccupationList();
        this.getJobBusinessType();
        this.getOfficeTitle();
        this.getCompanyName();
        this.getCompanyType();
        this.loadProvinces();
        this.loadCountries();
        this.receiveSalaryMethods();
        this.getJobPosition();
    }

    public greaterThanYear(name) {
        if (this.formData[name] > 11) {
            this.formData[name] = 11;
        }
    }

    public provinceSelectChange(p) {
        const provinceCode = this.formData[`${p.prefix}AddrProvince`];
        this.displayName[`${p.prefix}AddrProvince`] = p.name;

        this.ddl.districts = [];
        this.formData[`${p.prefix}AddrDistrict`] = '';

        this.ddl.subdistricts = [];
        this.formData[`${p.prefix}AddrSubdistrict`] = '';

        if (!this.util.isNullOrEmpty(provinceCode)) {
            this.loanEAPPService.getDistricts(provinceCode).then((res: any) => {
                if (res.errorCode) {
                    this.modalConfig = { title: 'Message', message: res.errorDesc };
                    this.modalService.show(AlertDialogComponent, 'modal-sm', this.modalConfig);
                } else {
                    this.ddl.districts = res;
                }
            });
        }
    }

    public districtSelectChange(p) {
        const provinceCode = this.formData[`${p.prefix}AddrProvince`];
        const districtCode = this.formData[`${p.prefix}AddrDistrict`];
        this.displayName[`${p.prefix}AddrDistrict`] = p.name;

        this.ddl.subdistricts = [];
        this.formData[`${p.prefix}AddrSubdistrict`] = '';

        if (!this.util.isNullOrEmpty(districtCode)) {
            this.loanEAPPService.getSubdistricts(provinceCode, districtCode).then((res: any) => {
                if (res.errorCode) {
                    this.modalConfig = { title: 'Message', message: res.errorDesc };
                    this.modalService.show(AlertDialogComponent, 'modal-sm', this.modalConfig);
                } else {
                    this.ddl.subdistricts = res;
                }
            });
        }
    }

    public subdistrictSelectChange(p) {
        const subdistrict = this.formData[`${p.prefix}AddrSubdistrict`];
        this.displayName[`${p.prefix}AddrSubdistrict`] = p.name;
        const filtered = this.ddl.subdistricts.find((x: any) => x.value === subdistrict);
        if (filtered) {
            this.formData[`${p.prefix}AddrPostal`] = filtered.postal;
        }
    }

    private getOccupationList() {
        if (!this.fieldProps.l1YOccupation.hidden || !this.fieldProps.currentOccupation.hidden) {
            this.productMasterService.getOccupationList().then((res: any) => {
                this.ddl.occupations = res || [];
            });
        }
    }

    public changeOccupation(prefix) {
        if (!this.fieldProps[`${prefix}SubOccupation`].hidden) {
            this.productMasterService.getSubOccupationList(this.formData[`${prefix}Occupation`]).then((res: any) => {
                this.ddl.subOccupations = res || [];
            });
        }
    }

    private getJobBusinessType() {
        if (!this.fieldProps.currentJobBusinessType.hidden) {
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
        if (!this.fieldProps.l1YOfficeTitle.hidden || !this.fieldProps.currentOfficeTitle.hidden) {
            this.mockDataService.getOfficeTitle().then((res: any) => {
                if (res.header.success) {
                    this.ddl.officeTitles = res.data.items;
                }
            });
        }
    }

    private getCompanyName() {
        if (!this.fieldProps.l1YOfficeName.hidden || !this.fieldProps.currentOfficeName.hidden) {
            this.mockDataService.getCompanyName().then((res: any) => {
                if (res.header.success) {
                    this.ddl.companyNames = res.data.items;
                }
            });
        }
    }

    private getCompanyType() {
        if (!this.fieldProps.l1YCompanyType.hidden || !this.fieldProps.currentCompanyType.hidden) {
            this.mockDataService.getCompanyType().then((res: any) => {
                if (res.header.success) {
                    this.ddl.companyTypes = res.data.items;
                }
            });
        }
    }

    private loadProvinces() {
        if (!this.fieldProps.officeAddrProvince.hidden) {
            this.loanEAPPService.getProvinces().then((res: any) => {
                if (res.errorCode) {
                    this.modalConfig = { title: 'Message', message: res.errorDesc };
                    this.modalService.show(AlertDialogComponent, 'modal-sm', this.modalConfig);
                } else {
                    this.ddl.provinces = res;
                }
            });
        }
    }

    private loadCountries() {
        if (
            !this.fieldProps.officeAddrCountry.hidden ||
            !this.fieldProps.l1YOfficeAddrCountry.hidden
        ) {
            this.mockDataService.getCountryList().then((res: any) => {
                if (res.header.success) {
                    this.ddl.countries = res.data.items;
                }
            });
        }
    }

    private receiveSalaryMethods() {
        this.mockDataService.getReceiveSalaryMethod().then((res: any) => {
            if (res.header.success) {
                this.ddl.receiveSalaryMethods = res.data.items;
            }
        });
    }

    private getJobPosition() {
        if (!this.fieldProps.l1YJobPosition.hidden || !this.fieldProps.currentJobPosition.hidden) {
            this.mockDataService.getJobPosition().then((res: any) => {
                if (res.header.success) {
                    this.ddl.jobPositions = res.data.items;
                }
            });
        }
    }
}
