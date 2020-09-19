import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CustomInputFilterComponent } from "./custom-input-filter.component";

describe("CustomInputFilterComponent", () => {
    let component: CustomInputFilterComponent;
    let fixture: ComponentFixture<CustomInputFilterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CustomInputFilterComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CustomInputFilterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
