import { Component, OnInit, Input } from "@angular/core";
import { DateService } from "../../services/date.service";
import { ModalService } from "../../services/modal.service";
import { ConfirmDialogComponent } from "../modal-dialog/confirm-dialog/confirm-dialog.component";
import { UtilService } from "../../services/util.service";
import { AlertDialogComponent } from "../modal-dialog/alert-dialog/alert-dialog.component";

@Component({
    selector: "app-document-attached",
    templateUrl: "./document-attached.component.html",
    styleUrls: ["./document-attached.component.scss"],
})
export class DocumentAttachedComponent implements OnInit {
    @Input() public label: string;
    @Input() public placeholder = "";
    @Input() public labelCss = "col-sm-3";
    @Input() public inputCss = "col-sm-4 col-xs-9";

    @Input() public formData: any;
    @Input() public fieldProps: any;
    @Input() public displayName: any;
    @Input() public submitted = false;

    public fileUploads = [];
    public modalConfig = {};

    constructor(
        private dateService: DateService,
        private modalService: ModalService,
        private util: UtilService
    ) {
    }

    ngOnInit() {}

    public onUploadFile(event: any) {
        if (!this.util.isNullOrEmpty(event)) {
            console.log("====> FileUpload: ", event);
            this.fileUploads.push({
                name: event.name,
                dt: this.dateService.getCurrentDate()
            });
            this.formData.fileUpload = null;
        } else {
            this.modalConfig = { title: 'Message', message: 'Please select a file to upload.' };
            this.modalService.show(AlertDialogComponent, "modal-sm", this.modalConfig);
        }
    }

    public trackByFn(index, item) {
        return index;
    }

    public deleteItem(idx: number) {
        this.modalConfig = { title: 'Message', message: 'Confirm delete item?' };
        const modalRef = this.modalService.show(ConfirmDialogComponent, 'modal-sm', this.modalConfig);

        modalRef.subscribe((confirm: any) => {
            console.log('---> confirm : ', confirm);
            if (confirm) {
                this.fileUploads.splice(idx, 1);
            }
        });
    }
}
