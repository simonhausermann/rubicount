import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab4Page } from './tab4.page';
describe('Tab4Page', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Tab4Page],
            imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
        }).compileComponents();
        fixture = TestBed.createComponent(Tab4Page);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=tab4.page.spec.js.map