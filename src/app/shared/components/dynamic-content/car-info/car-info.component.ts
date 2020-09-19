import { Component, OnInit, Input, AfterViewChecked, ViewChild, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { NgForm } from '@angular/forms';
import { MockDataService } from '../../../services/mock-data-service';
import { sectionMapping } from '../../../form-config/car-info-section-mapping';
import { AppStateService } from "../../../services/app-state.service";
import { ModalService } from "../../../services/modal.service";
import { UtilService } from '../../../services/util.service';
import { BaseComponent } from '../../base.component';
import { AlertDialogComponent } from "../../modal-dialog/alert-dialog/alert-dialog.component";
import { LoanEAPPService } from "../../../services/loan-eapp.service";
import { ProductMasterService } from "../../../services/product-master.service";
import { fieldMapping } from "../../../field-config/car-info-field-mapping";
import { userInfo } from "../../../test/user-info";

@Component({
    selector: "app-car-info",
    templateUrl: "./car-info.component.html",
    styleUrls: ["./car-info.component.scss"]
})
export class CarInfoComponent extends BaseComponent implements OnInit, AfterViewInit, AfterViewChecked {
    public message: string;
    public submitted = false;
    private modalConfig: any;

    public maxlen = {
        carRegisterId: 10,
        carBodyNo: 50,
        buyerFirstNameUsedCar: 40,
        buyerLastNameUsedCar: 40,
        buyerPhoneNoUsedCar: 50
    };

    private SECTION_CONFIG = [
        'carInfo'
    ];

    public ddl: any = {
        provinces: [],
        carBrands: [],
        carModels: [],
        carSubmodels: [],
        carYears: [],
        carTypes: [],
        carGearTypes: [],
        carFuelTypes: [],
        carOwnerships: [],
        carOwnerPersons: [],
        carOwnerStatuses: [],
        dealerCodeNewCars: [],
        dealerNameNewCars: [],
        bankCurrentHPs: [],
        carUseTypes: [],
        carVatFlgs: []
    };

    @Input() params: any;

    @ViewChild('form', { static: true })
    private form: NgForm;

    constructor(
        private mockDataService: MockDataService,
        private appState: AppStateService,
        public util: UtilService,
        private cdf: ChangeDetectorRef,
        private modalService: ModalService,
        private loanEAPPService: LoanEAPPService,
        private productMasterService: ProductMasterService
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
                if (fieldName === 'carBrand') {
                    this.carBrandSelectChange();
                }
                if (fieldName === 'carModel') {
                    this.carModelSelectChange();
                }
                if (fieldName === 'carYear') {
                    this.carYearSelectChange();
                }
                if (fieldName === 'carSubModel') {
                    this.carSubModelSelectChange();
                }
                if (fieldName === 'carOwnership') {
                    this.carOwnershipCheckChange();
                }
                if (fieldName === 'carOwnerStatus') {
                    this.carOwnerStatusCheckChange();
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
        this.appState.userInfo = userInfo;
        this.prepareFieldProperties();
        this.prepareFormData();
        this.prepareHideSection();
        this.fields = this.params.fieldList;
        this.submitted = this.params.submitted;
        this.prepareFormFields(this.SECTION_CONFIG, sectionMapping);
        this.loadMasterData();
    }

    public carBrandSelectChange(brandName: string = "") {
        const carBrand = this.formData.carBrand;
        this.displayName.carBrand = brandName;

        this.ddl.carModels = [];
        this.formData.carModel = '';
        this.ddl.carYears = [];
        this.formData.carYear = '';
        this.ddl.carSubmodels = [];
        this.formData.carSubModel = '';
        this.formData.carType = '';

        if (!this.util.isNullOrEmpty(carBrand)) {
            this.productMasterService.getCarModels(carBrand).then((res: any) => {
                if (res.errorCode) {
                    this.modalConfig = { title: 'Message', message: res.errorDesc };
                    this.modalService.show(AlertDialogComponent, 'modal-sm', this.modalConfig);
                } else {
                    this.ddl.carModels = res;
                }
            });
        }
    }

    public carModelSelectChange(carModelName: string = "") {
        const carModel = this.formData.carModel;
        this.displayName.carModel = carModelName;

        this.ddl.carYears = [];
        this.formData.carYear = '';
        this.ddl.carSubmodels = [];
        this.formData.carSubModel = '';
        this.formData.carType = '';

        if (!this.util.isNullOrEmpty(carModel)) {
            this.productMasterService.getCarYears(carModel).then((res: any) => {
                if (res.errorCode) {
                    this.modalConfig = { title: 'Message', message: res.errorDesc };
                    this.modalService.show(AlertDialogComponent, 'modal-sm', this.modalConfig);
                } else {
                    this.ddl.carYears = res;
                }
            });
        }
    }

    public carYearSelectChange(carYearName: string = "") {
        const carYear = this.formData.carYear;
        this.displayName.carYear = carYearName;

        this.ddl.carSubmodels = [];
        this.formData.carSubModel = '';
        this.formData.carType = '';

        if (!this.util.isNullOrEmpty(carYear)) {
            this.productMasterService.getCarSubmodel(carYear).then((res: any) => {
                if (res.errorCode) {
                    this.modalConfig = { title: 'Message', message: res.errorDesc };
                    this.modalService.show(AlertDialogComponent, 'modal-sm', this.modalConfig);
                } else {
                    this.ddl.carSubmodels = res;
                    this.formData.carType = '';
                }
            });
        }
    }

    public carSubModelSelectChange(carSubmodelName: string = "") {
        const carSubModel = this.formData.carSubModel;
        this.displayName.carSubModel = carSubmodelName;
        const filtered = this.ddl.carSubmodels.find((x: any) => x.value === carSubModel);
        if (filtered) {
            this.formData.carType = filtered.autoType;
        }
    }

    public provinceSelectChange(provinceName: string = "") {
        this.displayName.carRegisterProvince = provinceName;
    }

    public bankCurrentHPSelectChange(bankCurrentHPName: string = "") {
        this.displayName.bankCurrentHP = bankCurrentHPName;
    }

    // carOwnerShip Condition
    public carOwnershipCheckChange(): void {
        const fields = [
        // เป็นเจ้าของกรรมสิทธิ์
            'carOwnerPerson',
            'carOwnerStatus',
        // ซื้อรถใหม่/รถเต้นท์ (จาก Dealer/Tents)
            'dealerCodeNewCar',
            'dealerNameNewCar',
        // ซื้อรถมือสอง จากบุคคลทั่วไป
            'buyerFirstNameUsedCar',
            'buyerLastNameUsedCar',
            'buyerPhoneNoUsedCar',
        // กําลังผ่อนเช่าซื้อ
            'bankCurrentHP',
            'loanAmtCurrentHP',
            'installmentAmtCurrentHP',
        // ผ่อนจำนำทะเบียน
            'bankCarRegisterPawn',
            'loanAmtCarRegisterPawn',
            'installmentAmtCarRegisterPawn'
        ];

        fields.forEach((key: string) => {
            this.fieldProps[key].hidden = true;
            this.fieldProps[key].required = false;
        });

        const status = this.formData.carOwnership;
        let selectedFields = [];

        if (status === '1') {
            selectedFields = ['carOwnerPerson', 'carOwnerStatus'];
        } else if (status === '2') {
            selectedFields = ['dealerCodeNewCar', 'dealerNameNewCar'];
        } else if (status === '3') {
            selectedFields = ['buyerFirstNameUsedCar', 'buyerLastNameUsedCar', 'buyerPhoneNoUsedCar'];
        }

        selectedFields.forEach((key: string) => {
            this.bindFormField(key);
            this.fieldProps[key].required = true;

            if (key === 'carOwnerPerson') {
                this.loadCarOwnerPersons();
            }
            if (key === 'carOwnerStatus') {
                this.loadCarOwnerStatuses();
            }
        });

        this.cdf.detectChanges();
    }

    public carOwnerStatusCheckChange(): void {
        const fields = [
        // กําลังผ่อนเช่าซื้อ
            'bankCurrentHP',
            'loanAmtCurrentHP',
            'installmentAmtCurrentHP',
        // ผ่อนจำนำทะเบียน
            'bankCarRegisterPawn',
            'loanAmtCarRegisterPawn',
            'installmentAmtCarRegisterPawn'
        ];

        fields.forEach((key: string) => {
            this.fieldProps[key].hidden = true;
            this.fieldProps[key].required = false;
        });

        const status = this.formData.carOwnerStatus;
        let selectedFields = [];
        if (status === '2') {
            selectedFields = ['bankCurrentHP', 'loanAmtCurrentHP', 'installmentAmtCurrentHP'];
        } else if (status === '3') {
            selectedFields = ['bankCarRegisterPawn', 'loanAmtCarRegisterPawn', 'installmentAmtCarRegisterPawn'];
        }

        selectedFields.forEach((key: string) => {
            this.bindFormField(key);
            this.fieldProps[key].required = true;

            if (key === 'bankCurrentHP') {
                this.loadBankCurrentHPs();
            }
        });
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
            carInfo: true
        };
    }

    private loadDefaultValue(): void {
        this.defaultFields.forEach((field: any) => {
            this.formData[field.fieldCode] = field.defaultValue;
            if (field.fieldCode === 'carOwnership') {
                this.carOwnershipCheckChange();
            }
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

    private loadMasterData(): void {
        this.loadProvinces();
        this.loadCarBrand();
        this.loadCarGearTypes();
        this.loadCarFuelTypes();
        this.loadCarOwnerships();
        this.getCarUseTypeList();
        this.getCarVatFlgList();
    }

    private getCarVatFlgList() {
        if (!this.fieldProps.carVatFlg.hidden) {
            this.mockDataService.getCarVatFlgList().then((res: any) => {
                if (res.header.success) {
                    this.ddl.carVatFlgs = res.data.items;
                }
            });
        }
    }

    private getCarUseTypeList() {
        if (!this.fieldProps.carUseType.hidden) {
            this.mockDataService.getCarUseTypeList().then((res: any) => {
                if (res.header.success) {
                    this.ddl.carUseTypes = res.data.items;
                }
            });
        }
    }

    private loadProvinces() {
        if (!this.fieldProps.carRegisterProvince.hidden) {
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

    private loadCarBrand() {
        if (!this.fieldProps.carBrand.hidden) {
            this.productMasterService.getCarBrands().then((res: any) => {
                if (res.errorCode) {
                    this.modalConfig = { title: 'Message', message: res.errorDesc };
                    this.modalService.show(AlertDialogComponent, 'modal-sm', this.modalConfig);
                } else {
                    this.ddl.carBrands = res;
                }
            });
        }
    }

    private loadCarGearTypes() {
        if (!this.fieldProps.carGearType.hidden) {
            this.mockDataService.getCarGearTypeList().then((res: any) => {
                if (res.header.success) {
                    this.ddl.carGearTypes = res.data.items;
                }
            });
        }
    }

    private loadCarFuelTypes() {
        if (!this.fieldProps.carFuelType.hidden) {
            this.mockDataService.getCarFuelTypeList().then((res: any) => {
                if (res.header.success) {
                    this.ddl.carFuelTypes = res.data.items;
                }
            });
        }
    }

    private loadCarOwnerships() {
        if (!this.fieldProps.carOwnership.hidden) {
            this.mockDataService.getCarOwnershipList().then((res: any) => {
                if (res.header.success) {
                    this.ddl.carOwnerships = res.data.items;
                }
            });
        }
    }

    private loadCarOwnerPersons() {
        if (!this.fieldProps.carOwnerPerson.hidden) {
            this.mockDataService.getcarOwnerPersonList().then((res: any) => {
                if (res.header.success) {
                    this.ddl.carOwnerPersons = res.data.items;
                }
            });
        }
    }

    private loadCarOwnerStatuses() {
        if (!this.fieldProps.carOwnerPerson.hidden) {
            this.mockDataService.getcarOwnerStatusList().then((res: any) => {
                if (res.header.success) {
                    this.ddl.carOwnerStatuses = res.data.items;
                }
            });
        }
    }

    private loadDealerNames() {
        if (!this.fieldProps.dealerCodeNewCar.hidden) {
            this.mockDataService.getDealerNameNewCarList().then((res: any) => {
                if (res.header.success) {
                    this.ddl.dealerNameNewCars = res.data.items;
                }
            });
        }
    }

    private loadBankCurrentHPs() {
        if (!this.fieldProps.bankCurrentHP.hidden) {
            this.mockDataService.getBankCurrentHPList().then((res: any) => {
                if (res.header.success) {
                    this.ddl.bankCurrentHPs = res.data.items;
                }
            });
        }
    }
}
