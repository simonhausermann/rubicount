import * as tslib_1 from "tslib";
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Component } from '@angular/core';
let Tab1PageModule = class Tab1PageModule {
    constructor() {
        this.timeBegan = null;
        this.timeStopped = null;
        this.stoppedDuration = 0;
        this.started = null;
        this.running = false;
        this.blankTime = "00:00.000";
        this.time = "00:00.000";
    }
    start() {
        if (this.running)
            return;
        if (this.timeBegan === null) {
            this.reset();
            this.timeBegan = new Date();
        }
        if (this.timeStopped !== null) {
            let newStoppedDuration = (+new Date() - this.timeStopped);
            this.stoppedDuration = this.stoppedDuration + newStoppedDuration;
        }
        this.started = setInterval(this.clockRunning.bind(this), 10);
        this.running = true;
    }
    stop() {
        this.running = false;
        this.timeStopped = new Date();
        clearInterval(this.started);
    }
    reset() {
        this.running = false;
        clearInterval(this.started);
        this.stoppedDuration = 0;
        this.timeBegan = null;
        this.timeStopped = null;
        this.time = this.blankTime;
    }
    zeroPrefix(num, digit) {
        let zero = '';
        for (let i = 0; i < digit; i++) {
            zero += '0';
        }
        return (zero + num).slice(-digit);
    }
    clockRunning() {
        let currentTime = new Date();
        let timeElapsed = new Date(currentTime - this.timeBegan - this.stoppedDuration);
        let hour = timeElapsed.getUTCHours();
        let min = timeElapsed.getUTCMinutes();
        let sec = timeElapsed.getUTCSeconds();
        let ms = timeElapsed.getUTCMilliseconds();
        this.time =
            this.zeroPrefix(hour, 2) + ":" +
                this.zeroPrefix(min, 2) + ":" +
                this.zeroPrefix(sec, 2) + "." +
                this.zeroPrefix(ms, 3);
    }
    ;
};
Tab1PageModule = tslib_1.__decorate([
    Component({
        selector: 'page-tab1',
        templateUrl: 'tab1.page.html'
    }),
    NgModule({
        imports: [
            IonicModule,
            CommonModule,
            FormsModule,
            ExploreContainerComponentModule,
            RouterModule.forChild([{ path: '', component: Tab1Page }])
        ],
        declarations: [Tab1Page]
    })
], Tab1PageModule);
export { Tab1PageModule };
//# sourceMappingURL=tab1.module.js.map