import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "breadcrumb",
    templateUrl: "./breadcrumb.component.html",
    styleUrls: ["./breadcrumb.component.scss"],
})
export class BreadcrumbComponent implements OnInit {

    @Input() public title: any;
    @Input() public stepNo: any;
    @Input() public totalStepNo: any;

    constructor() {}

    ngOnInit() {}
}
