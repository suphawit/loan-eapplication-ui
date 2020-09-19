import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DocumentAttachedComponent } from "./document-attached.component";

describe("DocumentAttachedComponent", () => {
    let component: DocumentAttachedComponent;
    let fixture: ComponentFixture<DocumentAttachedComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DocumentAttachedComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DocumentAttachedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
