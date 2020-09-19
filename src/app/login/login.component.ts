import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { ValidationService } from "../shared/services/validation.service";
import { ModalService } from "../shared/services/modal.service";
import { AlertDialogComponent } from "../shared/components/modal-dialog/alert-dialog/alert-dialog.component";
import { AppStateService } from "../shared/services/app-state.service";
import { Constants } from "../shared/services/constants";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;
    public submitted: any = false;
    private modalConfig: any;

    constructor(
        public router: Router,
        private fb: FormBuilder,
        private modalService: ModalService,
        public appState: AppStateService,
        public constants: Constants
    ) {
    }

    ngOnInit(): void {
        this.init();
    }

    private init(): void {
        this.submitted = false;
        this.buildForm();
    }

    private buildForm(): void {
        this.loginForm = this.fb.group({
            username: new FormControl("", [ValidationService.requiredValidator]),
            password: new FormControl("", [ValidationService.requiredValidator])
        });
    }

    public onLoggedin(): void {
        this.submitted = true;

        if (this.loginForm.valid) {
            const username = this.loginForm.value.username;
            const password = this.loginForm.value.password;
            this.router.navigate(["/pre-approval"]);
        } else {
            this.modalConfig = {title: "Message", message: "Please enter all required field."};
            this.modalService.show(AlertDialogComponent, "modal-sm", this.modalConfig);
        }
    }
}
