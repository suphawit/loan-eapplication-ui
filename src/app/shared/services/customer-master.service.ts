import { Injectable } from "@angular/core";
import { Constants } from "./constants";
import { MessageCode } from "./message-code";
import { BaseService } from "./base.service";
import { ApiService } from "./api.service";
import { DateService } from "./date.service";
import { UtilService } from "./util.service";
import { HttpClient } from "./http-client";
import { GenderModel } from "../models/gender-model";
import { ErrorMessageModel } from "../models/error-message-model";
import { TitleModel } from "../models/title-model";
import { NationalityModel } from "../models/nationality-model";
import { BusinessTypeModel } from '../models/business-type-model';
import { MaritalStatusModel } from '../models/marital-status-model';
import { EducationModel } from '../models/education-model';

@Injectable()
export class CustomerMasterService extends BaseService {
    ctx = this.constants.CTX.CUSTOMER_MASTER;

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

    public getGenders() {
        const p = new Promise((resolve) => {
            const serviceCode = this.constants.SERVICE_CODE.GENDERS;
            this.connect(this.ctx, serviceCode, {}).then((res: any) => {
                if (res.header.success) {
                    const genderList = Array<GenderModel>();
                    res.data.genders.forEach((item: any) => {
                        const gender = new GenderModel(item.genderName, item.genderCode);
                        genderList.push(gender);
                    });
                    resolve(genderList);
                } else {
                    resolve(new ErrorMessageModel(res.error.code, res.error.message));
                }
            });
        });
        return p;
    }

    public getTitleThs() {
        const p = new Promise((resolve) => {
            const serviceCode = this.constants.SERVICE_CODE.TITLE;
            this.connect(this.ctx, serviceCode, {}).then((res: any) => {
                if (res.header.success) {
                    const titles = Array<TitleModel>();
                    res.data.titles.forEach((item: any) => {
                        const title = new TitleModel(item.titleNameTh, item.titleCode);
                        titles.push(title);
                    });
                    resolve(titles);
                } else {
                    resolve(new ErrorMessageModel(res.error.code, res.error.message));
                }
            });
        });
        return p;
    }

    public getTitleEns() {
        const p = new Promise((resolve) => {
            const serviceCode = this.constants.SERVICE_CODE.TITLE;
            this.connect(this.ctx, serviceCode, {}).then((res: any) => {
                if (res.header.success) {
                    const titles = Array<TitleModel>();
                    res.data.titles.forEach((item: any) => {
                        const title = new TitleModel(item.titleNameEn, item.titleCode);
                        titles.push(title);
                    });
                    resolve(titles);
                } else {
                    resolve(new ErrorMessageModel(res.error.code, res.error.message));
                }
            });
        });
        return p;
    }

    public getNationalities() {
        const p = new Promise((resolve) => {
            const serviceCode = this.constants.SERVICE_CODE.NATIONALITIES;
            this.connect(this.ctx, serviceCode, {}).then((res: any) => {
                if (res.header.success) {
                    const nationalities = Array<NationalityModel>();
                    res.data.nationalities.forEach((item: any) => {
                        const nationality = new NationalityModel(item.nationalityName, item.nationalityCode);
                        nationalities.push(nationality);
                    });
                    resolve(nationalities);
                } else {
                    resolve(new ErrorMessageModel(res.error.code, res.error.message));
                }
            });
        });
        return p;
    }

    public getJobBusinessType() {
        const p = new Promise((resolve) => {
            const serviceCode = this.constants.SERVICE_CODE.BUSINESS_TYPES;
            this.connect(this.ctx, serviceCode, {}).then((res: any) => {
                if (res.header.success) {
                    const businessTypeList = Array<BusinessTypeModel>();
                    res.data.businessTypes.forEach((item: any) => {
                        const businessType = new BusinessTypeModel(item.businessDesc, item.businessCode);
                        businessTypeList.push(businessType);
                    });
                    resolve(businessTypeList);
                } else {
                    resolve(new ErrorMessageModel(res.error.code, res.error.message));
                }
            });
        });
        return p;
    }

    public getMaritalStatuses() {
        const p = new Promise((resolve) => {
            const serviceCode = this.constants.SERVICE_CODE.MARITAL_STATUSES;
            this.connect(this.ctx, serviceCode, {}).then((res: any) => {
                if (res.header.success) {
                    const maritalStatusList = Array<MaritalStatusModel>();
                    res.data.maritalStatuses.forEach((item: any) => {
                        const maritalStatus = new MaritalStatusModel(item.maritalStatusName, item.maritalStatusCode);
                        maritalStatusList.push(maritalStatus);
                    });
                    resolve(maritalStatusList);
                } else {
                    resolve(new ErrorMessageModel(res.error.code, res.error.message));
                }
            });
        });
        return p;
    }

    public getEducation() {
        const p = new Promise((resolve) => {
            const serviceCode = this.constants.SERVICE_CODE.EDUCATIONS;
            this.connect(this.ctx, serviceCode, {}).then((res: any) => {
                if (res.header.success) {
                    const educationList = Array<EducationModel>();
                    res.data.educations.forEach((item: any) => {
                        const education = new EducationModel(item.educationName, item.educationCode);
                        educationList.push(education);
                    });
                    resolve(educationList);
                } else {
                    resolve(new ErrorMessageModel(res.error.code, res.error.message));
                }
            });
        });
        return p;
    }
}
