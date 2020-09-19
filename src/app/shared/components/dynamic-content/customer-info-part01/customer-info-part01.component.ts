import { Component, OnInit, Input, AfterViewChecked, ViewChild, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { Constants } from "../../../services/constants";
import { sectionMapping } from "../../../form-config/customer-part01-section-mapping";
import { fieldMapping } from "../../../field-config/customer-part01-field-mapping";
import { NgForm } from "@angular/forms";
import { UtilService } from "../../../services/util.service";
import { BaseComponent } from "../../base.component";
import { AppStateService } from "../../../services/app-state.service";
import { ModalService } from "../../../services/modal.service";
import { AlertDialogComponent } from "../../../components/modal-dialog/alert-dialog/alert-dialog.component";
import { CustomerMasterService } from "../../../services/customer-master.service";
import { ProductMasterService } from "../../../services/product-master.service";
import { userInfo } from "../../../test/user-info";
import { DateService } from "../../../services/date.service";

@Component({
    selector: "app-customer-info-part01",
    templateUrl: "./customer-info-part01.component.html",
    styleUrls: ["./customer-info-part01.component.scss"],
})
export class CustomerInfoPart01Component extends BaseComponent implements OnInit, AfterViewInit, AfterViewChecked {
    public message: string;
    public submitted = false;
    private modalConfig: any;

    public maxlen = {
        idNo: this.constants.MAXLEN.CITIZEN_ID,
        firstNameTh: this.constants.MAXLEN.FIRST_NAME,
        lastNameTh: this.constants.MAXLEN.LAST_NAME,
        firstNameEn: this.constants.MAXLEN.FIRST_NAME,
        lastNameEn: this.constants.MAXLEN.LAST_NAME,
        expWorkYear: 2,
        phoneNo: 50,
        expWorkMonth: 2,
        l1YExpWorkYear: 4,
        l1YExpWorkMonth: 2,
        otherOccupation: 50
    };

    private SECTION_CONFIG = ["basicInfo"];

    public ddl: any = {
        cardTypes: [],
        titleThs: [],
        titleEns: [],
        nationalities: [],
        genders: []
    };

    @Input() params: any;

    @ViewChild("form", { static: true })
    private form: NgForm;

    constructor(
        private appState: AppStateService,
        private constants: Constants,
        public util: UtilService,
        private cdf: ChangeDetectorRef,
        private modalService: ModalService,
        private customerMasterService: CustomerMasterService,
        private productMasterService: ProductMasterService,
        private dateService: DateService
    ) {
        super(util);
    }

    ngOnInit(): void {
        this.init();
    }

    ngAfterViewInit(): void {
        const customerInfo = this.appState.formData;
        const customerInfoPart01DisplayName = this.appState.displayName;
        if (customerInfo) {
            fieldMapping.forEach((fieldName: string) => {
                this.formData[fieldName] = customerInfo[fieldName];
                if (fieldName === 'docTypeId') {
                    this.docTypeSelectChange();
                }
                this.displayName[fieldName] = customerInfoPart01DisplayName[fieldName];
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
                if (f.fieldCode !== 'birthDate') {
                    this.appState.formData[f.fieldCode] = f.value;
                } else {
                    this.appState.formData[f.fieldCode] = this.dateService.parseDate(f.value);
                }
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
            basicInfo: true
        };
    }

    public docTypeSelectChange() {
        const docTypeId = this.formData.docTypeId;
        if (docTypeId === "001") {
            this.maxlen.idNo = this.constants.MAXLEN.CITIZEN_ID;
        } else {
            this.maxlen.idNo = this.constants.MAXLEN.PASSPORT;
        }
    }

    private loadDefaultValue(): void {
        this.defaultFields.forEach((field: any) => {
            this.formData[field.fieldCode] = field.defaultValue;
        });
    }

    private loadMasterData(): void {
        this.loadCardTypes();
        this.loadTitleTHs();
        this.loadTitleENs();
        this.loadNationalities();
        this.loadGenders();
    }

    private loadCardTypes() {
        if (!this.fieldProps.docTypeId.hidden) {
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

    private loadGenders() {
        if (!this.fieldProps.gender.hidden) {
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

    private loadTitleTHs() {
        if (!this.fieldProps.titleTh.hidden) {
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

    private loadTitleENs() {
        if (!this.fieldProps.titleEn.hidden) {
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

    private loadNationalities() {
        if (!this.fieldProps.nationality.hidden) {
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

    public nationalitySelectChange(nationalityName: string = "") {
        this.displayName.nationality = nationalityName;
    }
}
