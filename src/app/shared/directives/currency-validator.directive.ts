import { Directive, forwardRef, Input } from '@angular/core';
import { Validator, FormControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[currencyValidator]',
    providers: [
        {
            multi: true,
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => CurrencyValidatorDirective),
        },
    ]
})
export class CurrencyValidatorDirective implements Validator {
    @Input()
    public maxDigit = 15;

    constructor() { }

    public validate(control: FormControl): {} {
        if (!control || !control.value) {
            return null;
        }

        const num = control.value.replace(/,/g, '');
        const digits = num.split('.')[0];
        const valMsg = digits.length <= this.maxDigit ? null : this.getValidationMessage();
        return valMsg;
    }

    private getValidationMessage() {
        const message = `Value must be ${this.maxDigit} digits`;
        return {
            currency: {
                message,
                order: 1,
            }
        };
    }
}
