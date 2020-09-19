import { Component, OnInit, Input, AfterViewChecked, ViewChild, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { Constants } from "../../../services/constants";
import { sectionMapping } from "../../../form-config/customer-part05-section-mapping";
import { fieldMapping } from "../../../field-config/customer-part05-field-mapping";
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
import { DateService } from "../../../services/date.service";

@Component({
  selector: 'app-customer-info-part05',
  templateUrl: './customer-info-part05.component.html',
  styleUrls: ['./customer-info-part05.component.scss']
})
export class CustomerInfoPart05Component extends BaseComponent implements OnInit, AfterViewInit, AfterViewChecked {
    public message: string;
    public submitted = false;
    private modalConfig: any;

    public maxlen = {};

    private SECTION_CONFIG = ["info"];

    public ddl: any = {
        everHPwithKKPFlg: []
    };

    @Input() params: any;

    @ViewChild("form", { static: true })
    private form: NgForm;

    constructor(
        private mockDataService: MockDataService,
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
        const customerInfoPart04DisplayName = this.appState.displayName;
        if (customerInfo) {
            fieldMapping.forEach((fieldName: string) => {
                this.formData[fieldName] = customerInfo[fieldName];
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
            info: true
        };
    }

    private loadDefaultValue(): void {
        this.defaultFields.forEach((field: any) => {
            this.formData[field.fieldCode] = field.defaultValue;
        });
    }

    private loadMasterData(): void {
        this.getEverHPwithKKPFlg();
    }

    private getEverHPwithKKPFlg() {
        if (!this.fieldProps.everHPwithKKPFlg.hidden) {
            this.mockDataService.getEverHPwithKKPFlg().then((res: any) => {
                if (res.header.success) {
                    this.ddl.everHPwithKKPFlg = res.data.items;
                }
            });
        }
    }
}
