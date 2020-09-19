import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CustomRadioButtonListComponent } from "./custom-radio-button-list.component";

describe("CustomRadioButtonListComponent", () => {
    let component: CustomRadioButtonListComponent;
    let fixture: ComponentFixture<CustomRadioButtonListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CustomRadioButtonListComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CustomRadioButtonListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
