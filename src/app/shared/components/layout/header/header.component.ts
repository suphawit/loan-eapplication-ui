import { Component, OnInit } from "@angular/core";
import { Constants } from "../../../services/constants";
import { MessageCode } from "../../../services/message-code";
import { ConfirmDialogComponent } from "../../../components/modal-dialog/confirm-dialog/confirm-dialog.component";
import { ModalService } from "../../../services/modal.service";
import { Router } from "@angular/router";
import * as env from "../../../../../environments/environment.prod";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
    private modalConfig: any;
    public buildVersion = env.environment.version;

    constructor(
        public constants: Constants,
        public msg: MessageCode,
        private modalService: ModalService,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        console.log(`O:--SUCCESS--:--Get Build Version--:buildVersion/${this.buildVersion}`);
    }

    public onLoggedout(): void {
        this.modalConfig = { title: "Message", message: "Confirm logout?" };
        const modalRef = this.modalService.show(ConfirmDialogComponent, "modal-sm", this.modalConfig);

        modalRef.subscribe((confirm: any) => {
            if (confirm) {
                this.router.navigate(["/login"]);
            }
        });
    }
}
