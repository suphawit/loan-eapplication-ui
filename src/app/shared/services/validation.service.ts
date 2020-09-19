import { Injectable } from "@angular/core";

@Injectable()
export class ValidationService {

    constructor() { }

    static getValidatorErrorMessage(validatorName: string) {
        const config = {
            required: "valErr.required",
            duplicated: "valErr.duplicated",
            invalidDate: "valErr.invalidDate",
            invalidEmail: "valErr.invalidEmail"
        };

        return config[validatorName];
    }

    static requiredValidator(control) {
        const input = control.value;

        if (
            input === undefined ||
            input == null ||
            input === "" ||
            input.length === 0
        ) {
            return { required: true };
        }

        return null;
    }

    static nonStringValidator(control) {
        if (control.value.match(/^\d+$/)) {
            return null;
        } else {
            return { invalidNonString: true };
        }
    }

    static emailValidator(control) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (control.value.match(re)) {
            return null;
        }

        return { invalidEmail: true };
    }
}
