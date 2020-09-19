import { Injectable } from "@angular/core";
import { Constants } from "./constants";
import { MessageCode } from "./message-code";
import { BaseService } from "./base.service";
import { ApiService } from "./api.service";
import { DateService } from "./date.service";
import { UtilService } from "./util.service";
import { HttpClient } from "./http-client";

@Injectable()
export class DataService extends BaseService {

    constructor(
        public constants: Constants,
        public msg: MessageCode,
        public api: ApiService,
        public dateService: DateService,
        public util: UtilService,
        public http: HttpClient
    ) {
        super(constants, api, dateService, util);
    }
}
