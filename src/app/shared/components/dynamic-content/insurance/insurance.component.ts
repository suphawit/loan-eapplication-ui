import { Component, OnInit, Input, ViewChild, AfterViewChecked, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { NgForm } from '@angular/forms';
import { AppStateService } from '../../../services/app-state.service';
import { BaseComponent } from '../../base.component';
import { Constants } from "../../../services/constants";
import { sectionMapping } from '../../../form-config/insurance-section-mapping';
import { fieldMapping } from "../../../field-config/insurance-field-mapping";
import { UtilService } from '../../../services/util.service';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.scss']
})
export class InsuranceComponent extends BaseComponent implements OnInit, AfterViewInit, AfterViewChecked {
    public message: string;
    public submitted = false;

    public maxlen = {
        addrNumber: this.constants.MAXLEN.ADDRNUMBER,
        moo: this.constants.MAXLEN.MOO,
        floor: this.constants.MAXLEN.FLOOR,
        room: this.constants.MAXLEN.ROOM,
        village: this.constants.MAXLEN.VILLAGE,
        soi: this.constants.MAXLEN.SOI,
        road: this.constants.MAXLEN.ROAD,
        postal: this.constants.MAXLEN.POSTAL
    };

    private SECTION_CONFIG = [
        'carInsurance',
        'motorReceipt',
        'actSelect',
        'actReceipt',
        'carshieldSelect',
        'carshieldReceipt',
        'ewSelect',
        'ewReceipt',
        'paSelect',
        'paReceipt',
    ];

    public ddl: any = {
        insuranceList: [
            {
                name: 'ไม่มี',
                value: 1,
            },
            {
                name: 'ลูกค้าซื้อ',
                value: 2,
            },
            {
                name: 'ธนาคารแถม',
                value: 3,
            },
            {
                name: 'ผู้แทนจำหน่ายแจ้งประกัน',
                value: 4,
            },
            {
                name: "ลูกค้าแจ้งประกันเอง",
                value: 5
            }
        ],
        paymentMethod: [
            {
                name: 'ต้องการการหักหน้าเช็ค',
                value: '1'
            },
            {
                name: 'ต้องการชำระเอง',
                value: '2'
            }
        ],
        motorReceiptProvinces: [],
        motorReceiptDistricts: [],
        motorReceiptSubdistricts: []
    };

    // public displayName = {
    //     motorSelect: "",
    //     motorPaymentMethod: "",
    //     motorUsageFlg: "",
    //     motorInsurerCode: "",
    //     motorPackageCode: "",
    //     motorReceiptProvince: "",
    //     motorReceiptDistrict: "",
    //     motorReceiptSubdistrict: "",
    //     motorPricingTaylormade: "",
    //     motorWHT: "",
    //     actPackageCode: "",
    //     actPaymentMethod: "",
    //     actSelect: "",
    //     actWHT: "",
    //     carshieldSelect: "",
    //     carshieldPaymentMethod: "",
    //     carshieldInsurerCode: "",
    //     carshieldPackageCode: "",
    //     carshieldWHT: "",
    //     ewSelect: "",
    //     ewPaymentMethod: "",
    //     ewPackageCode: "",
    //     ewWHT: "",
    //     paSelect: "",
    //     paPaymentMethod: "",
    //     paPackageCode: "",
    //     paWHT: ""
    // };

    @Input() params: any;

    @ViewChild('form', { static: true })
    private form: NgForm;

    constructor(
        private appState: AppStateService,
        private cdf: ChangeDetectorRef,
        private constants: Constants,
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
                this.displayName[fieldName] = displayName[fieldName];
            });
            if (!this.submitted) {
                this.loadDefaultValue();
            }

            this.cdf.detectChanges();
        }
    }

    public motorSelectChange() {
        this.fieldProps.motorPaymentMethod.hidden = true;
        this.fieldProps.motorUsageFlg.hidden = true;
        this.fieldProps.motorNoticeNo.hidden = true;
        this.fieldProps.motorInsurerCode.hidden = true;
        this.formData.motorWHT = "";

        if (this.formData.motorSelect === '2') {
            this.fieldProps.motorPaymentMethod.hidden = false;
            this.fieldProps.motorUsageFlg.hidden = false;
            this.fieldProps.motorNoticeNo.hidden = false;
            this.fieldProps.motorInsurerCode.hidden = false;
        } else if (this.formData.motorSelect === '3') {
            this.formData.motorWHT = true;
        }
    }

    public paymentMethodChange(prefix) {
        this.fieldProps[`${prefix}PaymentMethod`].hidden = true;
        this.formData[`${prefix}WHT`] = "";
        if (this.formData[`${prefix}Select`] === '2') {
            this.fieldProps[`${prefix}PaymentMethod`].hidden = false;
        } else if (this.formData[`${prefix}Select`] === '3') {
            this.formData[`${prefix}WHT`] = true;
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

        this.motorSelectChange();
        this.paymentMethodChange('act');
        this.paymentMethodChange('carshield');
        this.paymentMethodChange('ew');
        this.paymentMethodChange('pa');
    }

    ngAfterViewChecked(): void {
        this.appState.formValid = this.form.valid;
        this.appState.displayName = this.displayName;
        if (this.form.valid) {
            this.appState.formData = this.formData;
        }
    }

    private loadMasterData(): void {
    }

    public trackByFn(index) {
        return index;
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
            carInsurance: true
        };
    }

    private loadDefaultValue(): void {
        this.defaultFields.forEach((field: any) => {
            this.formData[field.fieldCode] = field.defaultValue;
        });
    }

    public motorInsurerSelectChange(motorInsurerName: string = "") {
        this.displayName.motorInsurerCode = motorInsurerName;
    }
}
