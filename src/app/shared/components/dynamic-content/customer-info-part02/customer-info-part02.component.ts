import { Component, OnInit, Input, AfterViewChecked, ViewChild, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { Constants } from "../../../services/constants";
import { sectionMapping } from "../../../form-config/customer-part02-section-mapping";
import { fieldMapping } from "../../../field-config/customer-part02-field-mapping";
import { NgForm } from "@angular/forms";
import { UtilService } from "../../../services/util.service";
import { BaseComponent } from "../../base.component";
import { AppStateService } from "../../../services/app-state.service";
import { ModalService } from "../../../services/modal.service";
import { AlertDialogComponent } from "../../../components/modal-dialog/alert-dialog/alert-dialog.component";
import { MockDataService } from "../../../services/mock-data-service";
import { userInfo } from "../../../test/user-info";
import { LoanEAPPService } from "../../../services/loan-eapp.service";

@Component({
  selector: 'app-customer-info-part02',
  templateUrl: './customer-info-part02.component.html',
  styleUrls: ['./customer-info-part02.component.scss']
})
export class CustomerInfoPart02Component extends BaseComponent implements OnInit, AfterViewInit, AfterViewChecked {
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
        mobile: this.constants.MAXLEN.MOBILE,
        phone: this.constants.MAXLEN.PHONE,
        email: this.constants.MAXLEN.EMAIL,
        social: this.constants.MAXLEN.SOCIAL
    };

    private SECTION_CONFIG = ["contactInfo"];

    public ddl: any = {
        provinces: [],
        districts: [],
        subdistricts: [],
        countries: []
    };

    @Input() params: any;

    @ViewChild("form", { static: true })
    private form: NgForm;

    constructor(
        private mockDataService: MockDataService,
        private loanEAPPService: LoanEAPPService,
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
        const customerInfoPart02DisplayName = this.appState.displayName;
        if (customerInfo) {
            fieldMapping.forEach((fieldName: string) => {
                this.formData[fieldName] = customerInfo[fieldName];
                this.displayName[fieldName] = customerInfoPart02DisplayName[fieldName];
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
            contactInfo: true
        };
    }

    private loadDefaultValue(): void {
        this.defaultFields.forEach((field: any) => {
            this.formData[field.fieldCode] = field.defaultValue;
        });
    }

    private loadMasterData(): void {
        this.loadProvinces();
        this.loadCountries();
    }

    private loadProvinces() {
        if (
            !this.fieldProps.registerAddrProvince.hidden ||
            !this.fieldProps.homeAddrProvince.hidden ||
            !this.fieldProps.mailingAddrProvince.hidden ||
            !this.fieldProps.shippingAddrProvince.hidden
        ) {
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
            !this.fieldProps.registerAddrCountry.hidden ||
            !this.fieldProps.homeAddrCountry.hidden ||
            !this.fieldProps.mailingAddrCountry.hidden ||
            !this.fieldProps.shippingAddrCountry.hidden
        ) {
            this.mockDataService.getCountryList().then((res: any) => {
                if (res.header.success) {
                    this.ddl.countries = res.data.items;
                }
            });
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

    public disableAddressField(e, prefix) {
        if (e.target.checked) {
            this.formData[`${prefix}AddrNumber`] = "";
            this.formData[`${prefix}AddrMoo`] = "";
            this.formData[`${prefix}AddrFloor`] = "";
            this.formData[`${prefix}AddrRoom`] = "";
            this.formData[`${prefix}AddrVillage`] = "";
            this.formData[`${prefix}AddrSoi`] = "";
            this.formData[`${prefix}AddrRoad`] = "";
            this.formData[`${prefix}AddrProvince`] = "";
            this.formData[`${prefix}AddrDistrict`] = "";
            this.formData[`${prefix}AddrSubdistrict`] = "";
            this.formData[`${prefix}AddrPostal`] = "";
            this.formData[`${prefix}AddrCountry`] = "";
        }
    }
}
