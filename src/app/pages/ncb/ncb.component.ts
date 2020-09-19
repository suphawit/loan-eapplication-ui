import { Component, OnInit } from "@angular/core";
import { DataService } from "../../shared/services/data.service";
import { Constants } from "../../shared/services/constants";
import { NavExtrasService } from "../../shared/services/nav-extras.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-ncb",
    templateUrl: "./ncb.component.html",
    styleUrls: ["./ncb.component.scss"],
})
export class NcbComponent implements OnInit {
    public nextPage: any;
    public title: string;

    constructor(
        private dataService: DataService,
        private constants: Constants,
        private navExtras: NavExtrasService,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.init();
    }

    private init(): void {
        this.nextPage = this.navExtras.getExtras();
        this.title = 'NCB Question (Refer to NCB Question)';
    }

    public goToNextPage(): void {
        this.getNextPage(this.nextPage.nextFlowCode, this.nextPage.productGroup, this.nextPage.nextStepNo, 'newprecal').then((res: any) => {
            this.navExtras.setExtras(res.data);
            const nextRoute = this.constants.ROUTE_MAPPING[res.data.nextPageCode];
            console.log(`nextRoute ===> ${nextRoute}`);
            this.router.navigate([nextRoute]);
        });
    }

    private getNextPage(flowCode: string, productGroup: string, stepNo: string, txnStatusCode: string): Promise<{}> {
        const req = { flowCode, productGroup, stepNo, txnStatusCode };
        const ctx = this.constants.CTX.LOAN_APP;
        const serviceCode = this.constants.SERVICE_CODE.GET_NEXT_PAGE;
        return this.dataService.connect(ctx, serviceCode, req);
    }
}
