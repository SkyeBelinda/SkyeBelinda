import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WarningComponent } from './warning.component';


@NgModule({
    declarations: [
        WarningComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [WarningComponent]
})
export class WarningModule { }