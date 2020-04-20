import * as tslib_1 from "tslib";
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab4Page } from './tab4.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
let Tab4PageModule = class Tab4PageModule {
};
Tab4PageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            IonicModule,
            CommonModule,
            FormsModule,
            ExploreContainerComponentModule,
            RouterModule.forChild([{ path: '', component: Tab4Page }])
        ],
        declarations: [Tab4Page]
    })
], Tab4PageModule);
export { Tab4PageModule };
//# sourceMappingURL=tab4.module.js.map