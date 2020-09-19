import { Injectable } from "@angular/core";
import { Constants } from "./constants";
import { MessageCode } from "./message-code";
import { BaseService } from "./base.service";
import { ApiService } from "./api.service";
import { DateService } from "./date.service";
import { UtilService } from "./util.service";
import { HttpClient } from "./http-client";
import { CarBrandModel } from "../models/car-brand-model";
import { CarModel } from "../models/car-model";
import { CarYearModel } from "../models/car-year-model";
import { CarSubmodel } from "../models/car-submodel";
import { OccupationModel } from "../models/occupation-model"
import { ErrorMessageModel } from "../models/error-message-model";

@Injectable()
export class ProductMasterService extends BaseService {
    ctx = this.constants.CTX.PRODUCT_MASTER;

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

    public getCardTypes() {
        const p = new Promise((resolve) => {
            const serviceCode = this.constants.SERVICE_CODE.CARD_TYPES;
            this.connect(this.ctx, serviceCode, {}).then((res: any) => {
                if (res.header.success) {
                    resolve(res.data.items);
                } else {
                    resolve(new ErrorMessageModel(res.error.code, res.error.message));
                }
            });
        });
        return p;
    }

    public getCarBrands() {
        const p = new Promise((resolve) => {
            const serviceCode = this.constants.SERVICE_CODE.MKT_BRAND;
            this.connect(this.ctx, serviceCode, {}).then((res: any) => {
                if (res.header.success) {
                    const carBrandList = Array<CarBrandModel>();
                    res.data.forEach((item: any) => {
                        const brand = new CarBrandModel(item.name, item.value);
                        carBrandList.push(brand);
                    });
                    resolve(carBrandList);
                } else {
                    resolve(new ErrorMessageModel(res.error.code, res.error.message));
                }
            });
        });
        return p;
    }

    public getCarModels(brandCode) {
        const p = new Promise((resolve) => {
            const serviceCode = this.constants.SERVICE_CODE.MKT_MODEL;
            this.connect(this.ctx, serviceCode, { brandCode }).then((res: any) => {
                if (res.header.success) {
                    const carModelList = Array<CarModel>();
                    res.data.forEach((item: any) => {
                        const model = new CarModel(item.name, item.value);
                        carModelList.push(model);
                    });
                    resolve(carModelList);
                } else {
                    resolve(new ErrorMessageModel(res.error.code, res.error.message));
                }
            });
        });
        return p;
    }

    public getCarYears(modelCode) {
        const p = new Promise((resolve) => {
            const serviceCode = this.constants.SERVICE_CODE.MKT_MODELYEAR;
            this.connect(this.ctx, serviceCode, { modelCode }).then((res: any) => {
                if (res.header.success) {
                    const carYearList = Array<CarYearModel>();
                    res.data.forEach((item: any) => {
                        const year = new CarYearModel(item.name, item.value);
                        carYearList.push(year);
                    });
                    resolve(carYearList);
                } else {
                    resolve(new ErrorMessageModel(res.error.code, res.error.message));
                }
            });
        });
        return p;
    }

    public getCarSubmodel(modelYearCode) {
        const p = new Promise((resolve) => {
            const serviceCode = this.constants.SERVICE_CODE.MKT_SUBMODEL;
            this.connect(this.ctx, serviceCode, { modelYearCode }).then((res: any) => {
                if (res.header.success) {
                    const carSubmodelList = Array<CarSubmodel>();
                    res.data.forEach((item: any) => {
                        const submodel = new CarSubmodel(item.name, item.value);
                        submodel.autoType = item.autoType;
                        carSubmodelList.push(submodel);
                    });
                    resolve(carSubmodelList);
                } else {
                    resolve(new ErrorMessageModel(res.error.code, res.error.message));
                }
            });
        });
        return p;
    }

    public getOccupationList() {
        const p = new Promise((resolve) => {
            const serviceCode = this.constants.SERVICE_CODE.OCCUPATION;
            this.connect(this.ctx, serviceCode, {}).then((res: any) => {
                if (res.header.success) {
                    const occupationModelList = Array<OccupationModel>();
                    res.data.forEach((item: any) => {
                        const occupation = new OccupationModel(item.name, item.code);
                        occupationModelList.push(occupation);
                    });
                    resolve(occupationModelList);
                } else {
                    resolve(new ErrorMessageModel(res.error.code, res.error.message));
                }
            });
        });
        return p;
    }

    public getSubOccupationList(groupCode) {
        const p = new Promise((resolve) => {
            const serviceCode = this.constants.SERVICE_CODE.SUBOCCUPATION;
            this.connect(this.ctx, serviceCode, { groupCode }).then((res: any) => {
                if (res.header.success) {
                    const subOccupationModelList = Array<OccupationModel>();
                    res.data.forEach((item: any) => {
                        const subOccupation = new OccupationModel(item.name, item.code);
                        subOccupationModelList.push(subOccupation);
                    });
                    resolve(subOccupationModelList);
                } else {
                    resolve(new ErrorMessageModel(res.error.code, res.error.message));
                }
            });
        });
        return p;
    }
}
