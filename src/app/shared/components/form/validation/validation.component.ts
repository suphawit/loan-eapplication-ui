import { Component, Input } from "@angular/core";

@Component({
    selector: "validation",
    templateUrl: "./validation.component.html",
    styleUrls: ["./validation.component.scss"],
})
export class ValidationComponent {
    @Input() messages: Array<string>;
    constructor() {}
}
