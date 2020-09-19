import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CoBorrowerBusinessOwnerComponent } from "./co-borrower-business-owner.component";

describe("CoBorrowerBusinessOwnerComponent", () => {
    let component: CoBorrowerBusinessOwnerComponent;
    let fixture: ComponentFixture<CoBorrowerBusinessOwnerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CoBorrowerBusinessOwnerComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CoBorrowerBusinessOwnerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
