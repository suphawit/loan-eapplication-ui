import { UtilService } from '../services/util.service';

export class BaseComponent {

    public isCollapsed = true;
    public fields: any;
    public fieldProps: any;
    public sectionFocus: string;
    public inputFocus: string;
    public formData: any;
    public defaultFields: any = [];
    public hideSection: any;
    public displayName: any;

    constructor(
        public util: UtilService
    ) {
    }

    public prepareFormFields(sectionConfig: any, sectionMapping: any): void {
        sectionConfig.forEach((sectionCode: string) => {
            const section = sectionMapping.sections.find(x => x.sectionCode === sectionCode);
            if (section && section.fields.length > 0) {
                console.log(`this.hideSection[${sectionCode}]: `, this.hideSection[sectionCode]);
                section.fields.forEach((field: any) => {
                    this.bindFormField(field.fieldCode, sectionCode);
                });
            }
        });
    }

    public bindFormField(fieldCode: string, sectionCode = null) {
        const fieldFound = this.fields.find((x: any) => x.fieldCode === fieldCode);
        if (fieldFound && fieldFound.fieldRequire !== 'F') {
            this.fieldProps[fieldCode].hidden = false;
            this.fieldProps[fieldCode].required = fieldFound.fieldRequire === 'M' ;
            this.fieldProps[fieldCode].editing = fieldFound.fieldMode !== 'view';
            if (!this.util.isNullOrEmpty(fieldFound.defaultValue)) {
                this.formData[fieldCode] = fieldFound.defaultValue;
                this.defaultFields.push(fieldFound);
            }
            if (sectionCode !== null) {
                this.hideSection[sectionCode] = false;
            }
            if (fieldFound.fieldMode === 'edit') {
                this.sectionFocus = sectionCode;
                this.inputFocus = fieldCode;
                this.isCollapsed = false;
            }
        } else if (fieldFound && fieldFound.fieldRequire === 'F') {
            this.fieldProps[fieldCode].hidden = true;
            this.formData[fieldCode] = fieldFound.defaultValue;
        }
    }
}
