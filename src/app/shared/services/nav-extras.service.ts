import { Injectable } from "@angular/core";

@Injectable()
export class NavExtrasService {
    extras: any;

    constructor() {}

    public setExtras(data) {
        this.extras = data;
    }

    public getExtras() {
        return this.extras;
    }
}
