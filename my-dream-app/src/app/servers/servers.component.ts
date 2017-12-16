import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
    allowNewServer = false;
    serverCreationStatus = 'no server was created';
    serverName = 'Testserver';
    serverStatus: string = 'offline';
    serverId = '11';
    servers = ['Testserver', 'Testerserver 2'];
    serverCreated = false;
    showDetails = false;
    detailsBelow = 'no details to show';
    detailsName = 'popcorn'


constructor() {
    setTimeout(() => {
        this.allowNewServer = true;
    }, 2000);
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
}

getServerStatus() {
    return this.serverStatus;
}

getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
}

ngOnInit() {

}

onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName)
    this.serverCreationStatus = 'server was created, name is ' + this.serverName;
}

onUpdateServerName() {
    this.serverName = (<HTMLInputElement>event.target).value;
}

onDisplayDetails() {
    this.showDetails = true;
    this.detailsBelow = 'this is the secret message you get for clicking on the button ' + this.detailsName
}
}

