import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-the-warning',
    templateUrl: './warning.component.html',
    styleUrls: ['./warning.component.css']
})
export class WarningComponent {
    title = 'this is a warning, be aware';
    warningId: number = 10;
    warningStatus: string = 'low-warning';
    


    getWarning() {
        return this.warningStatus;
    }

    getTitle() {
        return this.title;
    }
}