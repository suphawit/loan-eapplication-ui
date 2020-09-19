import { Component, OnInit } from "@angular/core";
import { DataService } from "../../shared/services/data.service";
import { Constants } from "../../shared/services/constants";
import { AppStateService } from "../../shared/services/app-state.service";
import { NavExtrasService } from "../../shared/services/nav-extras.service";
import { Router } from "@angular/router";
import { LoanEAPPService } from "../../shared/services/loan-eapp.service";
import { ModalService } from "../../shared/services/modal.service";
import { AlertDialogComponent } from "../../shared/components/modal-dialog/alert-dialog/alert-dialog.component";

@Component({
    selector: "app-pre-cal",
    templateUrl: "./pre-cal.component.html",
    styleUrls: ["./pre-cal.component.scss"],
})
export class PreCalComponent implements OnInit {
    public componentList: any;
    public submitted = false;
    public nextPage: any;
    public selectedComponent: any;
    public title: string;
    private modalConfig: any;
    private templateCode: string;
    public componentData: any;

    constructor(
        private dataService: DataService,
        private constants: Constants,
        private appState: AppStateService,
        private navExtras: NavExtrasService,
        private router: Router,
        private loanEAPPService: LoanEAPPService,
        private modalService: ModalService
    ) {
    }

    ngOnInit(): void {
        this.init();
    }

    private init(): void {
        this.nextPage = this.navExtras.getExtras();
        this.getPreCalTemplate();
    }

    public trackByFn(index) {
        return index;
    }

    private getPreCalTemplate(): void {
        const req = {
            componentCode: this.nextPage.nextComponentCode,
            templateCode: this.nextPage.nextTemplateCode
        };

        const ctx = this.constants.CTX.LOAN_APP;
        const serviceCode = this.constants.SERVICE_CODE.GET_FORM_CONFIG;
        this.dataService.connect(ctx, serviceCode, req).then((res: any) => {
            console.log("O:--SUCCESS--:--Get FormConfig--res/", res.data.componentList);
            this.templateCode = res.data.templateCode;
            this.componentList = res.data.componentList;
            this.selectedComponent = this.componentList[0];
            this.title = this.selectedComponent.componentName;
            this.clearFormData();
            this.loadTxnData();
        });
    }

    private clearFormData(): void {
        this.appState.clearForm();
        this.navExtras.setExtras(undefined);
    }

    public goToNextPage(): void {
        this.submitted = true;
        const isFormValid = this.appState.formValid;

        if (isFormValid) {
            this.submitted = false;
            this.saveTxnData().then((res: any) => {
                if (res.errorCode) {
                    this.modalConfig = { title: 'Message', message: res.errorDesc };
                    this.modalService.show(AlertDialogComponent, 'modal-sm', this.modalConfig);
                } else {
                    this.appState.txn = res.data;
                    this.getNextPage();
                }
            });
        }
    }

    private getNextPage(): void {
        const req = {
            flowCode: this.nextPage.nextFlowCode,
            productGroup: this.nextPage.productGroup,
            stepNo: this.nextPage.nextStepNo,
            txnStatusCode: 'newprecal'
        };

        const ctx = this.constants.CTX.LOAN_APP;
        const serviceCode = this.constants.SERVICE_CODE.GET_NEXT_PAGE;
        this.dataService.connect(ctx, serviceCode, req).then((res: any) => {
            if (res.errorCode) {
                this.modalConfig = { title: 'Message', message: res.errorDesc };
                this.modalService.show(AlertDialogComponent, 'modal-sm', this.modalConfig);
            } else {
                if (res.data.nextPageCode === 'PreCalComponent') {
                    this.nextPage = res.data;
                    this.title = this.nextPage.nextComponentCode;
                    this.getPreCalTemplate();
                } else {
                    this.navExtras.setExtras(res.data);
                    const nextRoute = this.constants.ROUTE_MAPPING[res.data.nextPageCode];
                    console.log(`nextRoute ===> ${nextRoute}`);
                    this.router.navigate([nextRoute]);
                }
            }
        });
    }

    private loadTxnData(): void {
        if (this.selectedComponent && this.appState.txn) {
            const ctx = this.constants.CTX.LOAN_APP;
            const serviceCode = this.constants.SERVICE_CODE.INQUERY_TXN_BY_COMPONENT;
            const req: any = {};
            req.componentCode = this.selectedComponent.componentCode;
            req.templateCode = this.templateCode;
            req.txnId = this.appState.txn.txnId;
                // componentCode: this.selectedComponent.componentCode,
                // // templateCode: 'HPNEW_PRECAL',
                // templateCode: this.templateCode,
                // // txnId: 'MKT202006191352000000000001'

            this.loanEAPPService.connect(ctx, serviceCode, req).then((res: any) => {
                if (res.errorCode) {
                    this.modalConfig = { title: 'Message', message: res.errorDesc };
                    this.modalService.show(AlertDialogComponent, 'modal-sm', this.modalConfig);
                } else {
                    this.componentData = res.data;
                }
            });
        }
    }

    private saveTxnData(): Promise<{}> {
        const ctx = this.constants.CTX.LOAN_APP;
        const serviceCode = this.constants.SERVICE_CODE.SAVE_TXN_BY_COMPONENT;

        const req: any = {};
        req.flowCode = this.nextPage.nextFlowCode;
        req.productGroup = 'HPNEW';
        req.componentCode = this.selectedComponent.componentCode;

        if (this.appState.txn) {
            req.txnId = this.appState.txn.txnId;
        }

        if (this.appState.formData) {
            req.fieldList = [];
            Object.keys(this.appState.formData).forEach((key: string) => {
                const field: any = {};
                field.fieldCode = key;
                field.value = this.appState.formData[key];
                req.fieldList.push(field);
            });
        }

        return this.loanEAPPService.connect(ctx, serviceCode, req);
    }
}
