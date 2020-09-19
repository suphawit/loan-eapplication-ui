import { Component, Optional, Inject, Input, ViewChild } from "@angular/core";
import { NgModel, NG_VALUE_ACCESSOR, NG_VALIDATORS, NG_ASYNC_VALIDATORS } from "@angular/forms";
import { ElementBase } from "../element-base";
import { animations } from "../animations";

@Component({
    selector: "custom-select",
    templateUrl: "./custom-select.component.html",
    styleUrls: ["./custom-select.component.scss"],
    animations,
    providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomSelectComponent,
      multi: true,
    }],
})
export class CustomSelectComponent extends ElementBase<string> {
    @Input() public label: string;
    @Input() public placeholder = "";
    @Input() public labelCss = "col-sm-3";
    @Input() public inputCss = "col-sm-4 col-xs-9";
    @Input() public editing = false;
    @Input() public required = false;
    @Input() public submitted = false;
    @Input() public selectedValue = "";
    @Input() public options = [];
    @Input() public displayName = "";

    @ViewChild(NgModel, { static: true }) model: NgModel;

    public identifier = `form-select-${identifier++}`;

    constructor(
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>
    ) {
        super(validators, asyncValidators);
    }

    public trackByFn(index) {
        return index;
    }
}

let identifier = 0;
