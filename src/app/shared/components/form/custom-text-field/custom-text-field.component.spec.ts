import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CustomTextFieldComponent } from "./custom-text-field.component";

describe("CustomTextFieldComponent", () => {
    let component: CustomTextFieldComponent;
    let fixture: ComponentFixture<CustomTextFieldComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CustomTextFieldComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CustomTextFieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
