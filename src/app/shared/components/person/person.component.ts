import { Component, OnInit, Input, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { ControlContainer, NgForm } from "@angular/forms";
import { MockDataService } from "../../services/mock-data-service";
import { AppStateService } from "../../services/app-state.service";
import { Constants } from "../../services/constants";

@Component({
    selector: "app-person",
    templateUrl: "./person.component.html",
    styleUrls: ["./person.component.scss"],
    viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class PersonComponent implements OnInit, AfterViewInit {
    public fieldNames: any = {};

    public ddl: any = {
        relations: [],
    };

    private MAX_PERSON = 4;

    public text = "";
    public personObjectName: string;

    public maxlen = {
        idNo: this.constants.MAXLEN.CITIZEN_ID,
        firstNameTh: this.constants.MAXLEN.FIRST_NAME,
        lastNameTh: this.constants.MAXLEN.LAST_NAME,
        phoneNo: 50,
    };

    @Input() public prefix: string;
    @Input() public header: string;
    @Input() public formData: any;
    @Input() public fieldProps: any;
    @Input() public displayName: any;
    @Input() public hidden: boolean;
    @Input() public submitted: boolean;
    @Input() public componentName = "CustomerInfoComponent";

    constructor(
        private mockDataService: MockDataService,
        private appState: AppStateService,
        private constants: Constants,
        private cdf: ChangeDetectorRef
    ) {}

    ngOnInit(): void {
        this.init();
    }

    private init() {
        this.prepareFormData();
        this.pushPersonField();
        this.getRelationshipList();
    }

    private getRelationshipList() {
        this.mockDataService.getRelationshipList()
            .then((res: any) => {
                if (res.header.success) {
                    this.ddl.relations = res.data.items;
                }
        });
    }

    ngAfterViewInit(): void {
        const info = this.appState[
            this.constants.FORM_DATA[this.componentName]
        ];
        if (info) {
            this.formData[`${this.prefix}Person`] =
                info[`${this.prefix}Person`];
            this.text = JSON.stringify(this.formData[this.personObjectName]);
            this.cdf.detectChanges();
        }
    }

    private prepareFormData(): void {
        this.formData[`${this.prefix}Person`] = [];
        this.personObjectName = `${this.prefix}Person`;
    }

    public trackByFn(index) {
        return index;
    }

    public pushPersonField() {
        if (this.formData[this.personObjectName].length < this.MAX_PERSON) {
            this.formData[this.personObjectName].push({
                relation: "",
                idNo: "",
                firstNameTh: "",
                lastNameTh: "",
                phoneNo: "",
            });
        }
    }

    public removePersonField(i) {
        const arr = this.formData[this.personObjectName];
        if (arr.length > 1) {
            arr.splice(i, 1);
        }
    }

    public getDisplayName(fieldName: string) {
        if (fieldName in this.displayName) {
            return this.displayName[fieldName];
        }
        return "";
    }
}
