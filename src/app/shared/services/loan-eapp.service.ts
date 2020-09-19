import { Injectable } from "@angular/core";
import { Constants } from "./constants";
import { MessageCode } from "./message-code";
import { BaseService } from "./base.service";
import { ApiService } from "./api.service";
import { DateService } from "./date.service";
import { UtilService } from "./util.service";
import { HttpClient } from "./http-client";

import { ProvinceModel } from "../models/province-model";
import { DistrictModel } from "../models/district-model";
import { SubDistrictModel } from "../models/sub-district-model";
import { ErrorMessageModel } from "../models/error-message-model";

@Injectable()
export class LoanEAPPService extends BaseService {
    ctx = this.constants.CTX.LOAN_APP;

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

    public getProvinces() {
        const p = new Promise((resolve) => {
            const serviceCode = this.constants.SERVICE_CODE.PROVINCES;
            this.connect(this.ctx, serviceCode, {}).then((res: any) => {
                if (res.header.success) {
                    const provinceList = Array<ProvinceModel>();
                    res.data.provinces.forEach((item: any) => {
                        const province = new ProvinceModel(item.longDescTh, item.provinceCode);
                        provinceList.push(province);
                    });
                    resolve(provinceList);
                } else {
                    resolve(new ErrorMessageModel(res.error.code, res.error.message));
                }
            });
        });
        return p;
    }

    public getDistricts(provinceCode: string) {
        const p = new Promise((resolve) => {
            const serviceCode = this.constants.SERVICE_CODE.DISTRICTS;
            this.connect(this.ctx, serviceCode, { provinceCode }).then((res: any) => {
                if (res.header.success) {
                    const districtList = Array<DistrictModel>();
                    res.data.districts.forEach((item: any) => {
                        const district = new DistrictModel(item.longDescTh, item.districCode);
                        districtList.push(district);
                    });
                    resolve(districtList);
                } else {
                    resolve(new ErrorMessageModel(res.error.code, res.error.message));
                }
            });
        });
        return p;
    }

    public getSubdistricts(provinceCode: string, districtCode: string) {
        const p = new Promise((resolve) => {
            const serviceCode = this.constants.SERVICE_CODE.SUBDISTRICTS;
            this.connect(this.ctx, serviceCode, { provinceCode, districtCode }).then((res: any) => {
                if (res.header.success) {
                    const subDistrictList = Array<SubDistrictModel>();
                    res.data.subDistricts.forEach((item: any) => {
                        const subDistrict = new SubDistrictModel(item.longDescTh, item.subdistricCode, item.postalCode);
                        subDistrictList.push(subDistrict);
                    });
                    resolve(subDistrictList);
                } else {
                    resolve(new ErrorMessageModel(res.error.code, res.error.message));
                }
            });
        });
        return p;
    }

    public saveTxnByComponent(data: any) {
        const p = new Promise((resolve) => {
            const serviceCode = this.constants.SERVICE_CODE.SAVE_TXN_BY_COMPONENT;
            this.connect(this.ctx, serviceCode, data).then((res: any) => {
                if (res.header.success) {
                    resolve(res.data);
                } else {
                    resolve(new ErrorMessageModel(res.error.code, res.error.message));
                }
            });
        });
        return p;
    }
}
