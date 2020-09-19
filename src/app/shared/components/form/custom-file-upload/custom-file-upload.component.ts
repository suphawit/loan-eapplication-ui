import { Component, Optional, Inject, Input, ViewChild, Output, EventEmitter, ElementRef } from "@angular/core";
import { NgModel, NG_VALUE_ACCESSOR, NG_VALIDATORS, NG_ASYNC_VALIDATORS } from "@angular/forms";
import { ElementBase } from "../element-base";
import { animations } from "../animations";

@Component({
    selector: "custom-file-upload",
    templateUrl: "./custom-file-upload.component.html",
    styleUrls: ["./custom-file-upload.component.scss"],
    animations,
    providers: [
      {
          provide: NG_VALUE_ACCESSOR,
          useExisting: CustomFileUploadComponent,
          multi: true,
      },
  ]
})
export class CustomFileUploadComponent extends ElementBase<string> {
    @Input() public label: string;
    @Input() public placeholder = "";
    @Input() public labelCss = "col-sm-3";
    @Input() public inputCss = "col-sm-4 col-xs-9";
    @Input() public editing = false;
    @Input() public required = false;
    @Input() public submitted = false;

    @Output() fileUploadChanged = new EventEmitter();

    @ViewChild(NgModel, { static: true }) model: NgModel;
    @ViewChild('fileInput', { static: true }) fileInput: ElementRef;

    public identifier = `form-text-${identifier++}`;
    public fileToUpload = null;

    constructor(
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>
    ) {
        super(validators, asyncValidators);
    }

    public handleFileSelect(evt: any) {
        const files = evt.target.files;
        if (files && files.length > 0) {
            this.fileToUpload = files[0];
        }
    }

    public onUploadFile(): void {
        this.fileUploadChanged.emit(this.fileToUpload);
        this.fileToUpload = null;
    }
}

let identifier = 0;
