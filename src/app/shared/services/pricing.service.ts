import { Injectable } from "@angular/core";
import { Constants } from "./constants";
import { MessageCode } from "./message-code";
import { BaseService } from "./base.service";
import { ApiService } from "./api.service";
import { DateService } from "./date.service";
import { UtilService } from "./util.service";
import { HttpClient } from "./http-client";
import { ErrorMessageModel } from "../models/error-message-model";
import { CampaignModel } from '../models/campaign-model';
import { CarShieldModel } from '../models/car-shield-model';
import { InsuranceMotorModel } from '../models/insurance-motor-model';
import { InsurancePaModel } from '../models/insurance-pa-model';
import { InsuranceEwModel } from '../models/insurance-ew-model';
import { InsuranceActModel } from '../models/insurance-act-model';
import { RateFactorGroupModel } from '../models/rate-factor-group-model';
import { RateFactorSubGroupModel } from '../models/rate-factor-sub-group-model';
import { RateFactorModel } from '../models/rate-factor-model';
import { InstallmentTypeModel } from '../models/installment-type-model';
import { PdpgModel } from '../models/pdpg-model';
import { PdpgCampaignModel } from '../models/pdpg-campaign-model';
import { DeductListModel } from '../models/deduct-list-model';
import { DeductOptionModel } from '../models/deduct-option-model';
import { PriceModel } from '../models/price-model';
import { PriceOfferModel } from '../models/price-offer-model';
import { InstallmentPlanModel } from '../models/installment-plan-model';

@Injectable()
export class PricingService extends BaseService {
    ctx = this.constants.CTX.QUOTATION_API;

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

    public getCampaigns(data: any) {
        const p = new Promise((resolve) => {
            const serviceCode = this.constants.SERVICE_CODE.CAMPAIGNS;
            this.connect(this.ctx, serviceCode, data).then((res: any) => {
                if (res.header.success) {
                    const campaignList = this.preparedCampaigns(res.data.campaigns);
                    const pdpgList = this.preparedPdpgs(res.data.productPrograms);
                    const pdpgCampaignList = new PdpgCampaignModel();
                    pdpgCampaignList.campaignList = campaignList;
                    pdpgCampaignList.pdpgList = pdpgList;
                    console.log(pdpgCampaignList);
                    resolve(pdpgCampaignList);
                } else {
                    resolve(new ErrorMessageModel(res.error.code, res.error.message));
                }
            });
        });
        return p;
    }

    private preparedPdpgs(productPrograms) {
        const pdpgList = Array<PdpgModel>();

        productPrograms.forEach(x => {
            const pdpg = new PdpgModel(x.pdpgName, x.pdpgCode);
            if (x.deductList) {
                const deductList = Array<DeductListModel>();
                x.deductList.forEach(dd => {
                    const deduct = new DeductListModel(dd.title, dd.seq);
                    if (dd.options) {
                        const options = Array<DeductOptionModel>();
                        dd.options.forEach(op => {
                            const option = new DeductOptionModel();
                            option.orderNo = op.orderNo;
                            option.value = op.item;
                            option.deductLtv = op.deductLtv;
                            option.deductDown = op.deductDown;
                            option.replaceLtv = op.replaceLtv;
                            option.replaceDown = op.replaceDown;
                            option.replaceTerm = op.replaceTerm;
                            options.push(option);
                        });
                        deduct.options = options;
                    }
                    deductList.push(deduct);
                });
                pdpg.deductList = deductList;
            }
            pdpgList.push(pdpg);
        });
        return pdpgList;
    }

    private preparedCampaigns(campaigns) {
        const campaignList = Array<CampaignModel>();

        campaigns.forEach(x => {
            const campaign = new CampaignModel(x.name, x.code);
            campaign.token = x.token;

            // Prepared installmentTypes
            if (x.installmentTypes) {
                const installmentTypes = Array<InstallmentTypeModel>();

                x.installmentTypes.forEach(sp => {
                    const insurance = new InstallmentTypeModel(sp.name, sp.code);
                    installmentTypes.push(insurance);
                });

                campaign.installmentTypes = installmentTypes;
            }

            // Prepared ProductProgram
            if (x.productPrograms) {
                const productPrograms = Array<PdpgModel>();

                x.productPrograms.forEach(pp => {
                    const productProgram = new PdpgModel(pp.pdpgName, pp.pdpgCode);
                    productPrograms.push(productProgram);
                });

                campaign.pdpgs = productPrograms;
            }

            // Prepared carShields
            if (x.carShields) {
                const carShields = Array<CarShieldModel>();

                x.carShields.forEach(cs => {
                    const carShield = new CarShieldModel(cs.desc, cs.code);
                    carShields.push(carShield);
                });

                campaign.carShields = carShields;
            }
            // Prepared insurancePlans
            if (x.insuranceOffers) {
                const insuranceMotors = Array<InsuranceMotorModel>();

                x.insuranceOffers.forEach(sp => {
                    const insurance = new InsuranceMotorModel(sp.desc, sp.code);
                    insuranceMotors.push(insurance);
                });

                campaign.insuranceMotors = insuranceMotors;
            }
            if (x.insurancePAList) {
                const insurancePas = Array<InsurancePaModel>();

                x.insurancePAList.forEach(sp => {
                    const insurance = new InsurancePaModel(sp.insuranceName, sp.insuranceCode);
                    insurancePas.push(insurance);
                });

                campaign.insurancePas = insurancePas;
                }
            if (x.insuranceEWList) {
                const insuranceEws = Array<InsuranceEwModel>();

                x.insuranceEWList.forEach(sp => {
                    const insurance = new InsuranceEwModel(sp.insuranceName, sp.insuranceCode);
                    insuranceEws.push(insurance);
                });

                campaign.insuranceEws = insuranceEws;
            }
            if (x.insuranceACTList) {
                const insuranceActs = Array<InsuranceActModel>();

                x.insuranceACTList.forEach(sp => {
                    const insurance = new InsuranceActModel(sp.insuranceName, sp.insuranceCode);
                    insuranceActs.push(insurance);
                });

                campaign.insuranceActs = insuranceActs;
            }

            // Prepared rateFactorGroups
            if (x.rateFactorGroups) {
                const rateFactorGroups = Array<RateFactorGroupModel>();

                x.rateFactorGroups.forEach(gr => {
                    const group = new RateFactorGroupModel();
                    group.value = gr.groupCode;
                    group.name = gr.groupName;
                    group.seq = gr.seq;

                    if (gr.rateFactorSubGroups) {
                        const rateFactorSubGroups = Array<RateFactorSubGroupModel>();

                        gr.rateFactorSubGroups.forEach(subGr => {
                            const subGroup =  new RateFactorSubGroupModel();
                            subGroup.value = subGr.subGroupCode;
                            subGroup.name = subGr.subGroupName;

                            if (subGr.rateFactors) {
                                const rateFactors = Array<RateFactorModel>();

                                subGr.rateFactors.forEach(rf => {
                                    const rateFactor = new RateFactorModel();
                                    rateFactor.value = rf.code;
                                    rateFactor.name = rf.name;
                                    rateFactor.seq = rf.seq;

                                    rateFactors.push(rateFactor);
                                });
                                subGroup.rateFactors = rateFactors;
                            }
                            rateFactorSubGroups.push(subGroup);
                        });
                        group.rateFactorSubGroups = rateFactorSubGroups;
                    }
                    rateFactorGroups.push(group);
                });

                campaign.rateFactorGroups = rateFactorGroups;
            }

            campaignList.push(campaign);
        });

        return campaignList;
    }

    public getPriceOffers(data: any) {
        const p = new Promise((resolve) => {
            const serviceCode = this.constants.SERVICE_CODE.PRICE_OFFERS;
            this.connect(this.ctx, serviceCode, data).then((res: any) => {
                if (res.header.success) {
                const priceOffer = this.preparedPriceOffer(res.data);
                resolve(priceOffer);
                } else {
                    resolve(new ErrorMessageModel(res.error.code, res.errorDesc));
                }
            });
        });
        return p;
    }

    private preparedPriceOffer(data) {

        const token = data.token;
        const offers = data.installmentTypes;
        const installmentTypes = new Array<InstallmentTypeModel>();
        const maxLoanAmt = data.maxLoanAmt;
        const minLoanAmt = data.minLoanAmt;
        const minDownPercent = data.minDownPercent;
        const loanInfo = [];
        const customer = data.customer || {};
        let initialize = true;

        const maxDownAmt = data.maxDownAmt;
        const minDownAmt = data.minDownAmt;
        let percentDown = 0;

        offers.forEach(offer => {
            const installmentType = new InstallmentTypeModel(offer.name, offer.code);

            if (offer.priceOffers) {
                if (initialize) {
                    offer.priceOffers.forEach((x: any) => {
                        loanInfo.push({
                            totalTerm: x.pdpgMaxTerm,
                            maxLoanAmt: x.maxLoanAmtPerPDPG
                        });
                    });

                    initialize = false;
                }

                const priceInfo = offer.priceOffers[0];
                const priceOffer = new PriceOfferModel();
                priceOffer.pdpgMaxTerm = priceInfo.pdpgMaxTerm;
                priceOffer.maxLoanAmtPerPDPG = priceInfo.maxLoanAmtPerPDPG;

                if (priceInfo.prices) {
                    const prices = new Array<PriceModel>();

                    priceInfo.prices.forEach((x: any) => {
                        const price = new PriceModel();
                        price.priceCode = x.priceCode;
                        price.totalTerm = x.totalTerm;
                        price.insAmt = x.insAmt;
                        price.showPrice = x.showPrice;
                        price.loanAmt = x.loanAmt;
                        price.overDbr = x.overDbr;
                        price.planCode = x.planCode;
                        price.interestRate = x.interestRate;
                        price.remark = x.remark;
                        price.carShieldAmt = x.carShieldAmt;
                        price.percentDown = x.percentDown;
                        price.carShieldOverDown = x.carShieldOverDown;
                        price.additionalDownAmt = x.additionalDownAmt;
                        price.additionalIncome = x.additionalIncome;
                        price.additionalLoanAmt = x.additionalLoanAmt;
                        price.additionalGuaIncome = x.additionalGuaIncome;

                        if (x.installments) {
                            const installments = new Array<InstallmentPlanModel>();

                            x.installments.forEach(ins => {
                                const installment = new InstallmentPlanModel();
                                installment.seq = ins.seq;
                                installment.insAmt = ins.insAmt;
                                installment.startTerm = ins.startTerm;
                                installment.endTerm = ins.endTerm;
                                installment.rate = ins.rate;
                                installment.desc = ins.desc;
                                installments.push(installment);
                            });

                            price.installments = installments;
                        }

                        prices.push(price);
                    });

                    priceOffer.prices = prices;
                    percentDown = priceOffer.prices[0].percentDown;
                }

                const priceOffers = new Array<PriceOfferModel>();
                priceOffers.push(priceOffer);
                installmentType.priceOffers = priceOffers;
            }

            installmentTypes.push(installmentType);
        });

        const result = {
            pricingToken: token,
            maxLoanAmt,
            minLoanAmt,
            maxDownAmt,
            minDownAmt,
            minDownPercent,
            percentDown,
            installmentTypes,
            loanInfo,
            customer
        };

        return result;
    }
}
