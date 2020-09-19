import { Component, Optional, Inject, Input, ViewChild } from "@angular/core";
import { NgModel, NG_VALUE_ACCESSOR, NG_VALIDATORS, NG_ASYNC_VALIDATORS } from "@angular/forms";
import { ElementBase } from "../element-base";
import { animations } from "../animations";

@Component({
    selector: 'custom-label',
    templateUrl: './custom-label.component.html',
    styleUrls: ['./custom-label.component.scss'],
    animations,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: CustomLabelComponent,
            multi: true,
        },
    ],
})
export class CustomLabelComponent extends ElementBase<string> {
    @Input() public label: string;
    @Input() public input: object;
    @Input() public labelCss = "col-sm-3";
    @Input() public inputCss = "col-sm-4 col-xs-9";

    @ViewChild(NgModel, { static: true }) model: NgModel;

    public identifier = `form-text-${identifier++}`;

    constructor(
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>
    ) {
        super(validators, asyncValidators);
    }
}

let identifier = 0;

