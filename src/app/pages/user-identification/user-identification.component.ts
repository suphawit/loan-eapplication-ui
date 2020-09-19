import { Component, OnInit } from "@angular/core";
import { AppStateService } from "../../shared/services/app-state.service";
import { DataService } from "../../shared/services/data.service";
import { Constants } from "../../shared/services/constants";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { ValidationService } from "../../shared/services/validation.service";
import { Router } from "@angular/router";
import { NavExtrasService } from "../../shared/services/nav-extras.service";
import { userInfo } from "../../shared/test/user-info";
import { ModalService } from "../../shared/services/modal.service";
import { AlertDialogComponent } from "../../shared/components/modal-dialog/alert-dialog/alert-dialog.component";

@Component({
    selector: "app-user-identification",
    templateUrl: "./user-identification.component.html",
    styleUrls: ["./user-identification.component.scss"],
})
export class UserIdentificationComponent implements OnInit {
    public userIdForm: FormGroup;
    public submitted: any = false;
    private modalConfig: any;

    public ddl: any = {
        cardTypes: []
    };

    constructor(
        private fb: FormBuilder,
        private appState: AppStateService,
        private dataService: DataService,
        private constants: Constants,
        public router: Router,
        private navExtras: NavExtrasService,
        private modalService: ModalService
    ) {
    }

    ngOnInit(): void {
        this.init();
    }

    private init(): void {
        this.appState.userInfo = userInfo;
        this.loadDynamicComponents();
        this.loadMasterData();
        this.buildForm();
    }

    private buildForm(): void {
        this.userIdForm = this.fb.group({
            docTypeId: new FormControl("", [ValidationService.requiredValidator]),
            idNo: new FormControl("", [ValidationService.requiredValidator])
        });
    }

    private loadDynamicComponents(): void {
        const ctx = this.constants.CTX.LOAN_APP;
        const serviceCode = this.constants.SERVICE_CODE.GET_ALL_COMPONENT;
        this.dataService.connect(ctx, serviceCode, {}).then((res: any) => {
            if (res.header.success) {
                res.data.componentList.forEach((component: any) => {
                    const dynamicComponent: any = {
                        componentName: component[0],
                        moduleName: "DynamicContentModule",
                        modulePath: "src/app/shared/components/dynamic-content/dynamic-content.module"
                    };
                    this.appState.dynamicComponents.push(dynamicComponent);
                });
            } else {
                this.modalConfig = { title: 'Message', message: res.error.message };
                this.modalService.show(AlertDialogComponent, 'modal-sm', this.modalConfig);
            }
        });
    }

    private loadMasterData(): void {
        const ctx = this.constants.CTX.PRODUCT_MASTER;
        const serviceCode = this.constants.SERVICE_CODE.CARD_TYPES;
        this.dataService.connect(ctx, serviceCode, {}).then((res: any) => {
            if (res.header.success) {
                this.ddl.cardTypes = res.data.items;
            } else {
                this.modalConfig = { title: 'Message', message: res.error.message };
                this.modalService.show(AlertDialogComponent, 'modal-sm', this.modalConfig);
            }
        });
    }

    public trackByFn(index) {
        return index;
    }

    public goToPreCalPage(): void {
        this.submitted = true;
        if (this.userIdForm.valid) {
            this.getNextPage("FLOW_PRECAL", "HPNEW", "0", "newprecal").then((res: any) => {
                this.navExtras.setExtras(res.data);
                const nextRoute = this.constants.ROUTE_MAPPING[res.data.nextPageCode];
                console.log(`nextRoute ===> ${nextRoute}`);
                this.router.navigate([nextRoute]);
            });
        }
    }

    private getNextPage(flowCode: string, productGroup: string, stepNo: string, txnStatusCode: string): Promise<{}> {
        const req = { flowCode, productGroup, stepNo, txnStatusCode };
        const ctx = this.constants.CTX.LOAN_APP;
        const serviceCode = this.constants.SERVICE_CODE.GET_NEXT_PAGE;
        return this.dataService.connect(ctx, serviceCode, req);
    }
}
