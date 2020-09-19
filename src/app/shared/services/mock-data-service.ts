import { Injectable } from '@angular/core';
import { cardType } from '../test/card-type';
import { gender } from '../test/gender';
import { titleTh } from '../test/title-th';
import { titleEn } from '../test/title-en';
import { nationality } from '../test/nationality';
import { carBrand } from '../test/car-brand';
import { carModel } from '../test/car-model';
import { carSubModel } from '../test/car-sub-model';
import { carYear } from '../test/car-year';
import { carType } from '../test/car-type';
import { carGearType } from '../test/car-gear-type';
import { carFuelType } from '../test/car-fuel-type';
import { carOwnership } from '../test/car-owner-ship';
import { carOwnerPerson } from '../test/car-owner-person';
import { carOwnerStatus } from '../test/car-owner-status';
import { dealerCodeNewCar } from '../test/dealer-code-newcar';
import { dealerNameNewCar } from '../test/dealer-name-newcar';
import { bankCurrentHP } from '../test/bank-currentHP';
import { bankCarRegisterPawn } from '../test/bank-car-registerPawn';
import { loanPurpuse } from '../test/loan-purpuse';
import { carUseType } from '../test/car-use-type';
import { carVatFlg } from '../test/car-vat-flg';
import { province } from '../test/province';
import { district } from '../test/district';
import { subdistrict } from '../test/subdistrict';
import { country } from '../test/country';
import { personalAssetAmt } from '../test/personal-asset';
import { ncb } from '../test/ncb';
import { occupation } from '../test/occupation';
import { jobBusinessType } from '../test/job-business-type';
import { officeTitle } from '../test/office-title';
import { companyName } from '../test/company-name';
import { companyType } from '../test/company-type';
import { jobPosition } from '../test/job-position';
import { receiveSalaryMethod } from '../test/receive-salary-method';
import { maritalStatus } from '../test/marital-status';
import { educationLevel } from '../test/education-level';
import { everHPwithKKPFlg } from '../test/ever-hp-with-kkp-flg';
import { childrenCount } from '../test/children-count';
import { residentStatuses } from '../test/resident-status';
import { relationships } from '../test/relationship';
import { hometypes } from '../test/hometypes';
import { customerInfo } from '../test/customer-info';
import { employeeNum } from '../test/employee-num';
import { PreloadService } from './preload.service';

import { campaign } from '../test/campaign';
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
import { priceOffers } from '../test/price-offer';
import { PriceModel } from '../models/price-model';
import { PriceOfferModel } from '../models/price-offer-model';
import { InstallmentPlanModel } from '../models/installment-plan-model';

@Injectable()
export class MockDataService {

    constructor(
        private preload: PreloadService
    ) {
    }

    public getCardTypeList() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(cardType);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getProvinceList() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(province);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getDistrictList() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(district);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getSubDistrictList() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(subdistrict);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getChildrenCountList() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(childrenCount);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getResidentStatusList() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(residentStatuses);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getRelationshipList() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(relationships);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getHomeTypeList() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(hometypes);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getCustomerInfoByIdNo(idNo: string) {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                const filtered = customerInfo.data.items.find((x: any) => x.idNo === idNo);
                resolve(filtered);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getTitleThList() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(titleTh);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getTitleEnList() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(titleEn);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getNationalityList() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(nationality);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getCountryList() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(country);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getPersonalAssetAmtList() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(personalAssetAmt);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getNcbList() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(ncb);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getOccupationList() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(occupation);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getSubOccupationList() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(occupation);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getJobBusinessType() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(jobBusinessType);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getOfficeTitle() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(officeTitle);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getCompanyName() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(companyName);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getCompanyType() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(companyType);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getJobPosition() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(jobPosition);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getReceiveSalaryMethod() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(receiveSalaryMethod);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getMaritalStatus() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(maritalStatus);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getEducationLevel() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(educationLevel);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getEverHPwithKKPFlg() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(everHPwithKKPFlg);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getGenderList() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(gender);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getCarBrandList() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(carBrand);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getCarModelList() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(carModel);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getCarSubmodelList() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(carSubModel);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getCarYearList() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(carYear);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getCarType() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(carType);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getCarGearTypeList() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(carGearType);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getCarFuelTypeList() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(carFuelType);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getCarOwnershipList() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(carOwnership);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getcarOwnerPersonList() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(carOwnerPerson);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getcarOwnerStatusList() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(carOwnerStatus);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getDealerCodeNewCarList() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(dealerCodeNewCar);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getDealerNameNewCarList() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(dealerNameNewCar);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getBankCurrentHPList() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(bankCurrentHP);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getBankCarRegisterPawnList() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(bankCarRegisterPawn);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getLoanPurpuseList() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(loanPurpuse);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getCarUseTypeList() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(carUseType);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getCarVatFlgList() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(carVatFlg);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;
    }

    public getEmployeeNumList() {
        this.showLoader();
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve(employeeNum);
            }, 100);
        }).finally(() => {
            this.hideLoader();
        });
        return p;

    }

    public getCampaignList() {
        this.showLoader();
        const p = new Promise((resolve) => {
            const result = campaign.result;

            const campaignList = this.preparedCampaigns(result.data.campaigns);
            const pdpgList = this.preparedPdpgs(result.data.productPrograms);
            const pdpgCampaignList = new PdpgCampaignModel();
            pdpgCampaignList.campaignList = campaignList;
            pdpgCampaignList.pdpgList = pdpgList;
            console.log(pdpgCampaignList);
            resolve(pdpgCampaignList);
        }).finally(() => {
            this.hideLoader();
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

        campaigns.forEach((x: any) => {
            const campaignModel = new CampaignModel(x.name, x.code);
            campaignModel.token = x.token;

            // Prepared installmentTypes
            if (x.installmentTypes) {
                const installmentTypes = Array<InstallmentTypeModel>();

                x.installmentTypes.forEach(sp => {
                    const insurance = new InstallmentTypeModel(sp.name, sp.code);
                    installmentTypes.push(insurance);
                });

                campaignModel.installmentTypes = installmentTypes;
            }

            // Prepared ProductProgram
            if (x.productPrograms) {
                const productPrograms = Array<PdpgModel>();

                x.productPrograms.forEach(pp => {
                    const productProgram = new PdpgModel(pp.pdpgName, pp.pdpgCode);
                    productPrograms.push(productProgram);
                });

                campaignModel.pdpgs = productPrograms;
            }

            // Prepared carShields
            if (x.carShields) {
                const carShields = Array<CarShieldModel>();

                x.carShields.forEach(cs => {
                    const carShield = new CarShieldModel(cs.desc, cs.code);
                    carShields.push(carShield);
                });

                campaignModel.carShields = carShields;
            }
            // Prepared insurancePlans
            if (x.insuranceOffers) {
                const insuranceMotors = Array<InsuranceMotorModel>();

                x.insuranceOffers.forEach(sp => {
                    const insurance = new InsuranceMotorModel(sp.desc, sp.code);
                    insuranceMotors.push(insurance);
                });

                campaignModel.insuranceMotors = insuranceMotors;
            }
            if (x.insurancePAList) {
                const insurancePas = Array<InsurancePaModel>();

                x.insurancePAList.forEach(sp => {
                    const insurance = new InsurancePaModel(sp.insuranceName, sp.insuranceCode);
                    insurancePas.push(insurance);
                });

                campaignModel.insurancePas = insurancePas;
                }
            if (x.insuranceEWList) {
                const insuranceEws = Array<InsuranceEwModel>();

                x.insuranceEWList.forEach(sp => {
                    const insurance = new InsuranceEwModel(sp.insuranceName, sp.insuranceCode);
                    insuranceEws.push(insurance);
                });

                campaignModel.insuranceEws = insuranceEws;
            }
            if (x.insuranceACTList) {
                const insuranceActs = Array<InsuranceActModel>();

                x.insuranceACTList.forEach(sp => {
                    const insurance = new InsuranceActModel(sp.insuranceName, sp.insuranceCode);
                    insuranceActs.push(insurance);
                });

                campaignModel.insuranceActs = insuranceActs;
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

                campaignModel.rateFactorGroups = rateFactorGroups;
            }

            campaignList.push(campaignModel);
        });

        return campaignList;
    }

    public getPriceList() {
        this.showLoader();
        const p = new Promise((resolve) => {
            const result = priceOffers.result;

            const priceOffer = this.preparedPriceOffer(result.data);
            resolve(priceOffer);
        }).finally(() => {
            this.hideLoader();
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

                const priceOfferList = new Array<PriceOfferModel>();
                priceOfferList.push(priceOffer);
                installmentType.priceOffers = priceOfferList;
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

    private showLoader(): void {
        this.preload.show();
    }

    private hideLoader() {
        setTimeout(() => {
            this.preload.hide();
        }, 500);
    }
}
