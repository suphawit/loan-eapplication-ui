import { Component, OnInit, Input } from "@angular/core";
import { ControlContainer, NgForm } from '@angular/forms';
import { Constants } from "../../services/constants";
import { UtilService } from "../../services/util.service";
import { ModalService } from "../../services/modal.service";
import { AlertDialogComponent } from "../../components/modal-dialog/alert-dialog/alert-dialog.component";
import { LoanEAPPService } from "../../services/loan-eapp.service";

@Component({
    selector: 'app-insurance-receipt',
    templateUrl: './insurance-receipt.component.html',
    styleUrls: ['./insurance-receipt.component.scss'],
    viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class InsuranceReceiptComponent implements OnInit {
    public fieldNames: any = {};
    public sectionId = "";

    public ddl: any = {
        provinces: [],
        districts: [],
        subdistrict: []
    };

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

    private modalConfig: any;

    @Input() public section: boolean;
    @Input() public header: string;
    @Input() public prefix: string;
    @Input() public formData: any;
    @Input() public fieldProps: any;
    @Input() public displayName: any;
    @Input() public submitted: boolean;
    @Input() public componentName = 'CustomerInfoComponent';

    constructor(
        private loanEAPPService: LoanEAPPService,
        private modalService: ModalService,
        private constants: Constants,
        private util: UtilService
    ) {
    }

    ngOnInit(): void {
        this.init();
    }

    private loadProvinces() {
        if (!this.fieldProps[this.fieldNames.province].hidden) {
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

    private init() {
        this.sectionId = `${this.prefix}Receipt`;
        this.prepareFieldNames();
        this.loadProvinces();
    }

    private prepareFieldNames(): void {
        this.fieldNames.addrNumber = `${this.prefix}ReceiptNumber`;
        this.fieldNames.moo = `${this.prefix}ReceiptMoo`;
        this.fieldNames.floor = `${this.prefix}ReceiptFloor`;
        this.fieldNames.room = `${this.prefix}ReceiptRoom`;
        this.fieldNames.village = `${this.prefix}ReceiptVillage`;
        this.fieldNames.soi = `${this.prefix}ReceiptSoi`;
        this.fieldNames.road = `${this.prefix}ReceiptRoad`;
        this.fieldNames.province = `${this.prefix}ReceiptProvince`;
        this.fieldNames.district = `${this.prefix}ReceiptDistrict`;
        this.fieldNames.subdistrict = `${this.prefix}ReceiptSubdistrict`;
        this.fieldNames.postal = `${this.prefix}ReceiptPostal`;
        this.fieldNames.beneficiaryName = `${this.prefix}BeneficiaryName`;
    }

    public trackByFn(index) {
        return index;
    }

    public autofillProvinceDistrict() {
        const postal = this.formData[this.fieldNames.postal];
        if (postal.length === 5) {
            this.formData[this.fieldNames.province] = postal.substr(0, 2);
            this.formData[this.fieldNames.district] = postal.substr(0, 3);
            this.formData[this.fieldNames.subdistrict] = postal.substr(0, 4);
            this.provinceSelectChange();
        }
    }

    public provinceSelectChange() {
        const provinceCode = this.formData[this.fieldNames.province];

        this.ddl.districts = [];
        this.formData[this.fieldNames.district] = '';

        this.ddl.subdistricts = [];
        this.formData[this.fieldNames.subdistrict] = '';

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

    public districtSelectChange() {
        const provinceCode = this.formData[this.fieldNames.province];
        const districtCode = this.formData[this.fieldNames.district];

        this.ddl.subdistricts = [];
        this.formData[this.fieldNames.subdistrict] = '';

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

    public getDisplayName(fieldName: string) {
        if (fieldName in this.displayName) {
            return this.displayName[fieldName];
        }
        return '';
    }
}
