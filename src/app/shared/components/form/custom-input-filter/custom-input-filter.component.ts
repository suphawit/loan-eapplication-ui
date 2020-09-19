import { Component, Optional, Inject, Input, ViewChild, Output, EventEmitter, OnChanges, SimpleChange } from "@angular/core";
import { NgModel, NG_VALUE_ACCESSOR, NG_VALIDATORS, NG_ASYNC_VALIDATORS } from "@angular/forms";
import { ElementBase } from "../element-base";
import { animations } from "../animations";
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';
import { UtilService } from "../../../services/util.service";

@Component({
    selector: "custom-input-filter",
    templateUrl: "./custom-input-filter.component.html",
    styleUrls: ["./custom-input-filter.component.scss"],
    animations,
    providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomInputFilterComponent,
      multi: true,
    }],
})
export class CustomInputFilterComponent extends ElementBase<string> implements OnChanges {
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

    @Output() public onComplete: EventEmitter<any> = new EventEmitter();

    @ViewChild(NgModel, { static: true }) model: NgModel;

    private noResult = true;
    public identifier = `form-input-filter-${identifier++}`;

    constructor(
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
        private util: UtilService
    ) {
        super(validators, asyncValidators);
    }

    public onSelect(event: TypeaheadMatch): void {
        this.value = event.item.value;
        this.noResult = false;
        this.onComplete.emit(this.displayName);
    }

    public typeaheadNoResults(event: any): void {
        this.noResult = event;
        if (this.noResult) {
            this.value = '';
            this.displayName = '';
            this.noResult = true;
            this.onComplete.emit();
        }
    }

    public onTextChange(): void {
        if (this.util.isNullOrEmpty(this.displayName)) {
            this.value = '';
            this.onComplete.emit();
        }
    }

    ngOnChanges(changes: { [propName: string]: SimpleChange }): void {
        if (changes['selectedValue'] && this.util.isNullOrEmpty(changes['selectedValue'].currentValue)) {
            this.displayName = '';
        }
    }
}

let identifier = 0;

