import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SubmitCreditApprovalComponent } from "./submit-credit-approval.component";

describe("SubmitCreditApprovalComponent", () => {
    let component: SubmitCreditApprovalComponent;
    let fixture: ComponentFixture<SubmitCreditApprovalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SubmitCreditApprovalComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SubmitCreditApprovalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
