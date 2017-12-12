import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-the-warning',
    templateUrl: './warning.component.html',
    styleUrls: ['./warning.component.css']
})
export class WarningComponent {
    title = 'this is a warning, be aware';
    warningId: number = 10;
    warningStatus: string = 'low-warning'
    serverCreated = false;

    getWarning() {
        return this.warningStatus;
    }

    allowNewServer = false;
    // serverCreationStatus = 'No Server was created'

    constructor() { 
    setTimeout(() => {
        this.allowNewServer = true;
    }, 2000);
    }

    ngOnInit() {

    }

    onCreateServer() {
        this.serverCreated = true;
        // this.serverCreationStatus = 'server was created';
    }
}

