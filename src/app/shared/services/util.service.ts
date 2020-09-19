import { Injectable } from '@angular/core';
import { Constants } from '../services/constants';
import { TranslateService } from '@ngx-translate/core';
import { DateService } from '../services/date.service';

declare var $: any;
import * as FileSaver from "file-saver";

declare var BUILD_NUM: any;

@Injectable()
export class UtilService {

    constructor(
        private constants: Constants,
        private translate: TranslateService,
        private dateService: DateService
    ) {
    }

    public isNullOrEmpty(s: string): boolean {
        if (s === undefined || s === null || s === "" || s.length === 0) {
            return true;
        }

        return false;
    }

    public nullSafeTrim(s: string) {
        if (!this.isNullOrEmpty(s)) {
            return s.trim();
        }

        return '';
    }

    public validateForm(model: any, valList: any) {
        if (model !== undefined) {
            for (const val of valList) {
                console.log(val);
                console.log(model.hasOwnProperty(val));

                if (!model.hasOwnProperty(val)
                    || this.isNullOrEmpty(model[val])
                ) {
                    return { valid: false };
                }
            }
        }

        return { valid: true };
    }

    public scrollTop(): void {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    }

    public goToByScroll(sectionCode: string): void {
        if (sectionCode) {
            $('#' + sectionCode)[0].scrollIntoView({
                behavior: "smooth", // or "auto" or "instant"
                block: "start" // or "end"
            });
        }
    }

    public focusIn(inputCode: string): void {
        $('input[name="' + inputCode + '"]').focus();
    }

    public isEmptyObject(obj: any) {
        return obj && Object.keys(obj).length === 0;
    }

    public findInvalidControls(actionForm) {
        const invalid = [];
        const controls = actionForm.controls;
        for (const name in controls) {
            if (controls[name].invalid) {
                console.log("---> invalid : ", name);
                invalid.push(name);
            }
        }

        return invalid;
    }

    public openNewWindow(url: string): void {
        window.open(url, "_blank");
    }

    public formatRefNo(s: string): string {
        s = s.replace(/[^0-9]+/g, "");
        return s.replace(/(\d{2})(\d+)/, "$1-$2");
    }

    public bindForm(src: any, dest: any, key: string) {
        if (src[key]) {
            dest[key] = src[key].code;
        }
    }

    public bindData(src: any, dest: any, key: string) {
        if (!this.isNullOrEmpty(src.value[key])) {
            dest[key] = {};
            dest[key].code = src.value[key];
        }
    }

    public initTooltips(): void {
        $('[data-toggle="tooltip"]').each(function() {
            const options: any = { html: true  };

            if ($(this)[0].hasAttribute("data-type")) {
                options.template =
                    '<div class="tooltip ' +
                    $(this).attr("data-type") +
                    '" role="tooltip">' +
                    '	<div class="tooltip-arrow"></div>' +
                    '	<div class="tooltip-inner"></div>' +
                    "</div>";
            }

            $(this).tooltip(options);
        });
    }

    public clearInputError(form: any, inputName: string): void {
        form.controls[inputName].setErrors(null);
    }

    public addInputError(form: any, inputName: string, errors: any): void {
        form.controls[inputName].setErrors(errors);
    }

    public validateSingleInput(oInput: any, validFileExtensions: string[]) {
        if (oInput) {
            const sFileName = oInput.name;
            if (sFileName.length > 0) {
                let blnValid = false;
                for (const validFileExtension of validFileExtensions) {
                    const sCurExtension = validFileExtension;
                    if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() === sCurExtension.toLowerCase()) {
                        blnValid = true;
                        break;
                    }
                }
                if (!blnValid) {
                    return false;
                }
            }
        }

        return true;
    }

    public addClass(selector: string, className: string): void {
        $(selector).addClass(className);
    }
    public removeClass(selector: string, className: string): void {
        $(selector).removeClass(className);
    }

    public getRefNo(dt: Date): string {
        const timestamp = this.dateService.formatDate(dt, this.constants.FORMAT_REF_NO);
        const refNo = `MKT${timestamp}`;
        return refNo;
    }

    public getTxnDate(dt: Date): string {
        const txnDate = this.dateService.formatDate(dt, this.constants.FORMAT_TXN_DATE);
        return txnDate;
    }

    public saveFile(data: any, filename: string, type: string) {
        const blob = new Blob([data], { type: `${type}; charset=utf-8` });
        FileSaver.saveAs(blob, filename);
    }

    public getReadableFileSizeString(fileSizeInBytes: number) {
        let i = -1;
        const byteUnits = [" kB", " MB", " GB", " TB", "PB", "EB", "ZB", "YB"];
        do {
            fileSizeInBytes = fileSizeInBytes / 1024;
            i++;
        } while (fileSizeInBytes > 1024);

        return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
    }

    public capitalizeFirstLetter(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}
