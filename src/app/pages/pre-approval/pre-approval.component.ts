import { Component, OnInit } from "@angular/core";
import { MockDataService } from "../../shared/services/mock-data-service";
import { AppStateService } from "../../shared/services/app-state.service";
import { Router } from "@angular/router";
import { NavExtrasService } from "../../shared/services/nav-extras.service";
import { Constants } from '../../shared/services/constants';

@Component({
    selector: "app-pre-approval",
    templateUrl: "./pre-approval.component.html",
    styleUrls: ["./pre-approval.component.scss"],
})
export class PreApprovalComponent implements OnInit {
    public componentList: any;
    public submitted = false;

    constructor(
        private mockDataService: MockDataService,
        private appState: AppStateService,
        private router: Router,
        private navExtras: NavExtrasService,
        private constants: Constants
    ) {
    }

    ngOnInit(): void {
        this.init();
    }

    private init(): void {
        // this.mockDataService.getPreApprovalTemplate().then((res: any) => {
        //     this.componentList = res.data.componentList;
        //     this.clearFormData();
        // });
    }

    public trackByFn(index) {
        return index;
    }

    onSave(): void {
        this.submitted = true;
        let isFormValid = true;

        this.componentList.forEach((component: any) => {
            isFormValid = isFormValid && this.appState[this.constants.FORM_VALID[component.componentCode]];
        });

        if (isFormValid) {
            this.router.navigate(["/confirm-application"]);
        }
    }

    private clearFormData(): void {
        this.appState.clearForm();
        this.navExtras.setExtras(undefined);
    }
}
