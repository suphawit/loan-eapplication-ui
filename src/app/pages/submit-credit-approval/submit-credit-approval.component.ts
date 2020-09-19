import { Component, OnInit } from "@angular/core";
import { MockDataService } from "../../shared/services/mock-data-service";
import { AppStateService } from "../../shared/services/app-state.service";
import { Router } from "@angular/router";
import { NavExtrasService } from "../../shared/services/nav-extras.service";
import { Constants } from '../../shared/services/constants';

@Component({
    selector: "app-submit-credit-approval",
    templateUrl: "./submit-credit-approval.component.html",
    styleUrls: ["./submit-credit-approval.component.scss"],
})
export class SubmitCreditApprovalComponent implements OnInit {
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
        // this.mockDataService.getSubmitCATemplate().then((res: any) => {
        //     this.componentList = res.data.componentList;
        //     console.log(this.componentList);
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
            this.navExtras.setExtras(true);
            this.router.navigate(["/confirm-application"]);
        }
    }
}
