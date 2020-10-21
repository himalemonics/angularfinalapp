import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { UnitTestComponent } from "./unittest.component";

describe("UnitTestComponent", () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ 
                RouterTestingModule
            ], 
            declarations: [
                UnitTestComponent
            ]
        }).compileComponents();
    }));

    it("should create the app", () => {
        const fixture = TestBed.createComponent(UnitTestComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'Unit Test'`, () => {
        const fixture = TestBed.createComponent(UnitTestComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual("Unit Test");
    });

    it("should render title in a h1 tag", () => {
        const fixture = TestBed.createComponent(UnitTestComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain("Welcome to Unit Test!");
    });
})