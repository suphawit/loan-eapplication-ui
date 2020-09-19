import { Component, Optional, Inject, Input, ViewChild } from "@angular/core";
import { NgModel, NG_VALUE_ACCESSOR, NG_VALIDATORS, NG_ASYNC_VALIDATORS } from "@angular/forms";
import { ElementBase } from "../element-base";
import { animations } from "../animations";

@Component({
  selector: 'custom-datepicker',
  templateUrl: './custom-datepicker.component.html',
  styleUrls: ['./custom-datepicker.component.scss'],
  animations,
  providers: [
      {
          provide: NG_VALUE_ACCESSOR,
          useExisting: CustomDatepickerComponent,
          multi: true,
      },
  ]
})
export class CustomDatepickerComponent extends ElementBase<string> {
    @Input() public label: string;
    @Input() public placeholder = "";
    @Input() public labelCss = "col-sm-3";
    @Input() public inputCss = "col-sm-4 col-xs-9";
    @Input() public editing = false;
    @Input() public required = false;
    @Input() public submitted = false;

    @ViewChild(NgModel, { static: true }) model: NgModel;

    public identifier = `form-datepicker-${identifier++}`;

    constructor(
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>
    ) {
        super(validators, asyncValidators);
    }
}

let identifier = 0;
