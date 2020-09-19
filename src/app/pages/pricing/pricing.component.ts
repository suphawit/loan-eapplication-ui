import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { DataService } from "../../shared/services/data.service";
import { Constants } from "../../shared/services/constants";
import { NavExtrasService } from "../../shared/services/nav-extras.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { AppStateService } from "../../shared/services/app-state.service";
import { CampaignModel } from '../../shared/models/campaign-model';
import { PdpgModel } from '../../shared/models/pdpg-model';
import { CarShieldModel } from '../../shared/models/car-shield-model';
import { DeductListModel } from '../../shared/models/deduct-list-model';
import { InsuranceMotorModel } from '../../shared/models/insurance-motor-model';
import { InsurancePaModel } from '../../shared/models/insurance-pa-model';
import { InsuranceEwModel } from '../../shared/models/insurance-ew-model';
import { InsuranceActModel } from '../../shared/models/insurance-act-model';
import { RateFactorGroupModel } from '../../shared/models/rate-factor-group-model';
import { InstallmentTypeModel } from '../../shared/models/installment-type-model';
import { PreloadService } from '../../shared/services/preload.service';
import { MockDataService } from '../../shared/services/mock-data-service';
import { PricingService } from '../../shared/services/pricing.service';
import { userInfo } from 'src/app/shared/test/user-info';

@Component({
    selector: "app-pricing",
    templateUrl: "./pricing.component.html",
    styleUrls: ["./pricing.component.scss"],
})
export class PricingComponent implements OnInit {
    public nextPage: any;
    public title: string;
    public submitted = false;
    public isValid = false;
    public productCode: any;

    public formData: any;
    public pdpgList: Array<PdpgModel>;
    public campaignList: Array<CampaignModel>;
    public filterCampaignList: Array<CampaignModel>;
    public deductList: Array<DeductListModel>;
    public carShieldList: Array<CarShieldModel>;
    public insuranceMotorList: Array<InsuranceMotorModel>;
    public insurancePaList: Array<InsurancePaModel>;
    public insuranceEwList: Array<InsuranceEwModel>;
    public insuranceActList: Array<InsuranceActModel>;
    public rateFactorGroups: Array<RateFactorGroupModel>;
    public installmentTypeList: Array<InstallmentTypeModel>;
    public comPercentList = ['20', '30', '40'];
    public comTermList = ['24', '48', '60', '72', '84'];

    @Input() params: any;

    @ViewChild("form", { static: true })
    private form: NgForm;

    constructor(
        private appState: AppStateService,
        private mockDataService: MockDataService,
        private pricingService: PricingService,
        private dataService: DataService,
        private constants: Constants,
        private navExtras: NavExtrasService,
        private router: Router,
        private preload: PreloadService
    ) {
    }

    ngOnInit(): void {
        this.init();
    }

    private init(): void {
        this.appState.userInfo = userInfo;
        this.nextPage = this.navExtras.getExtras();
        this.title = 'Pricing Offering';
        this.productCode = 'UsedCar';

        this.prepareFormData();
        this.getCampaignList();
    }

    // public goToNextPage(): void {
    //     this.getNextPage(this.nextPage.nextFlowCode, this.nextPage.productGroup, this.nextPage.nextStepNo, 'newprecal').then((res: any) => {
    //         this.navExtras.setExtras(res.data);
    //         const nextRoute = this.constants.ROUTE_MAPPING[res.data.nextPageCode];
    //         console.log(`nextRoute ===> ${nextRoute}`);
    //         this.router.navigate([nextRoute]);
    //     });
    // }
    public goToNextPage(): void { // for test next page
        this.navExtras.setExtras('res.data');
        const nextRoute = '/price-offer';
        console.log(`nextRoute ===> ${nextRoute}`);
        this.router.navigate([nextRoute]);
    }

    private getNextPage(flowCode: string, productGroup: string, stepNo: string, txnStatusCode: string): Promise<{}> {
        const req = { flowCode, productGroup, stepNo, txnStatusCode };
        const ctx = this.constants.CTX.LOAN_APP;
        const serviceCode = this.constants.SERVICE_CODE.GET_NEXT_PAGE;
        return this.dataService.connect(ctx, serviceCode, req);
    }

    private prepareFormData(): void {
        this.formData = {
            pdpg: "",
            campaign: "",
        };
    }

    public onSelectDeduct(seq: any, option: any): void {
        console.log(`O:--Deduct SelectChanged--:seq/${seq}/:deduct/`, option);
        this.formData.deduct[seq] = option;
        console.log(' this.model.deduct : ', this.formData.deduct);
    }

    public onSelectRateFactor(groupCode: any, subGroupCode: any, rateFactor: any): void {
        console.log(`O:--RateFactor SelectChanged--:GroupCode/${groupCode}/:subGroupCode/${subGroupCode}:rateFactor/`, rateFactor);
        if (this.formData.rateFactor[groupCode] === undefined) {
            this.formData.rateFactor[groupCode] = {};
        }
        this.formData.rateFactor[groupCode][subGroupCode] = rateFactor;
        console.log('this.model.rateFactor : ', this.formData.rateFactor);
    }

    public onSelectCampaign(campaignCode) {
        console.log("campaignCode on selected => ", campaignCode);
        this.campaignList.forEach(campaign => {
            if (campaign.value === campaignCode) {
                this.formData.campaign = campaign;
                this.campaignCallback();
                this.preparedParams(this.formData);
            }
        });
    }

    public pdpgCallback(pdpg) {
        console.log('O:--ProductProgram ValueChanged--:--Clear campaign--', pdpg);
        this.formData.pdpg = pdpg;
        delete this.formData.campaign;
        delete this.formData.carShield;
        delete this.formData.insuranceMotor;
        delete this.formData.insurancePa;
        delete this.formData.insuranceEw;
        delete this.formData.insuranceAct;
        this.formData.rateFactor = {};
        this.formData.deduct = {};
    }

    public campaignCallback() {
        delete this.formData.carShield;
        delete this.formData.insuranceMotor;
        delete this.formData.insurancePa;
        delete this.formData.insuranceEw;
        delete this.formData.insuranceAct;
        this.formData.rateFactor = {};
        this.formData.deduct = {};
    }

    private getCampaignList() {
        // this.mockDataService.getCampaignList().then((objResponse: any) => {
        this.pricingService.getCampaigns(this.req).then((objResponse: any) => {
            console.log('--> objResponse: ', objResponse);

            if (objResponse.errorCode) {
                console.log('lbl.warning', objResponse.errorDesc, 'btn.ok');
            } else {
                this.isValid = true;
                this.campaignList = objResponse.campaignList;
                // let defaultValue = this.util.getObject(this.model, 'campaign.value') || this.model.campaign || '';
                // this.model.campaign = this.campaignList.find(x => x.value === defaultValue);
                this.pdpgList = objResponse.pdpgList;
                // let defaultValuePdpg = this.util.getObject(this.model, 'pdpg.name') || this.model.pdpg || '';
                // this.model.pdpg = this.pdpgList.find(x => x.name === defaultValuePdpg);
                console.log("this.campaignList is => ", this.campaignList);
                if (this.pdpgList.length === 1) {
                    this.formData.pdpg = this.pdpgList[0];
                }

                if (this.formData.pdpg) {
                    this.filterCampaignList = this.prepareCampaign(this.formData);

                    if (this.formData.campaign) {
                        this.preparedParams(this.formData);
                    } else {
                        this.formData.rateFactor = {};
                        this.formData.deduct = {};
                        delete this.formData.insuranceMotor;
                        delete this.formData.carShield;
                        delete this.formData.insurancePa;
                        delete this.formData.insuranceEw;
                        delete this.formData.insuranceAct;
                    }
                } else {
                    this.formData.rateFactor = {};
                    this.formData.deduct = {};
                    delete this.formData.insuranceMotor;
                    delete this.formData.carShield;
                    delete this.formData.insurancePa;
                    delete this.formData.insuranceEw;
                    delete this.formData.insuranceAct;
                    delete this.formData.campaign;
                }
            }
        });
    }

    private prepareCampaign(model) {
        const filterList = new Array<CampaignModel>();
        if (this.campaignList) {

            this.campaignList.forEach(campaign => {

                if (campaign.pdpgs) {
                    campaign.pdpgs.forEach(pdpg => {
                        if (pdpg.value === model.pdpg.value) {
                            filterList.push(campaign);
                        }
                    });
                }
        });
        }
        console.log('O:--return filterList--:', filterList);
        return filterList;
    }

    private preparedParams(model) {
        console.log("campaign in preparam => ", model.campaign);
        this.carShieldList = model.campaign.carShields;
        this.insuranceMotorList = model.campaign.insurancePlans;
        this.insurancePaList = model.campaign.insurancePas;
        this.insuranceEwList = model.campaign.insuranceEws;
        this.insuranceActList = model.campaign.insuranceActs;
        this.installmentTypeList = model.campaign.installmentTypes;
        this.rateFactorGroups = model.campaign.rateFactorGroups;
        this.deductList = model.pdpg.deductList;

        // Default installment Type
        if (this.installmentTypeList && this.installmentTypeList.length === 1) {
            if (!this.formData.installmentType) {
                this.formData.installmentType = this.installmentTypeList[0];
            }
        }

        // Default insurance plan
        if (this.carShieldList && this.carShieldList.length === 1) {
            if (!this.formData.carShield) {
                this.formData.carShield = this.carShieldList[0];
            }
        }
        if (this.insuranceMotorList && this.insuranceMotorList.length === 1) {
            if (!this.formData.insuranceMotor) {
                this.formData.insuranceMotor = this.insuranceMotorList[0];
            }
        }
        if (this.insurancePaList && this.insurancePaList.length === 1) {
            if (!this.formData.insurancePa) {
                this.formData.insurancePa = this.insurancePaList[0];
            }
        }
        if (this.insuranceEwList && this.insuranceEwList.length === 1) {
            if (!this.formData.insuranceEw) {
                this.formData.insuranceEw = this.insuranceEwList[0];
            }
        }
        if (this.insuranceActList && this.insuranceActList.length === 1) {
            if (!this.formData.insuranceAct) {
                this.formData.insuranceAct = this.insuranceActList[0];
            }
        }

        // /Default every rate factor group
        if (this.rateFactorGroups) {
            this.rateFactorGroups.forEach(group => {
                if (this.formData.rateFactor === undefined) {
                    this.formData.rateFactor = {};
                }
                if (group.rateFactorSubGroups && this.formData.rateFactor[group.value] === undefined) {
                    this.formData.rateFactor[group.value] = {};
                    group.rateFactorSubGroups.forEach(subGroup => {
                        if (subGroup.rateFactors) {
                            this.formData.rateFactor[group.value][subGroup.value] = subGroup.rateFactors[0];
                        }
                    });
                }
            });
        }

        // Default deductList
        if (this.deductList) {
            this.deductList.forEach(dd => {
                if (this.formData.deduct === undefined) {
                    this.formData.deduct = {};
                }
                if (dd.options && this.formData.deduct[dd.seq] === undefined) {
                    this.formData.deduct[dd.seq] =  dd.options[0];
                }
            });
        }

        if (this.formData.campaignCalChoice === undefined) {
            this.formData.campaignCalChoice = 'standard';
        }
        if (this.formData.carTransfer === undefined) {
            this.formData.carTransfer = 'kk';
        }
        if (this.formData.overCampaignFlag === undefined) {
            this.formData.overCampaignFlag = 'N';
        }
    }

    public logModel(): void {
        console.log(this.formData);
    }

    public trackByFn(index) {
        return index;
    }

    public get isNewCar(): boolean {
        return this.productCode === 'NewCar';
    }

    private get req(): any {
        const req  = {
                loanQuotation: {
                   quoteRef: {
                      token: "39391cc7-867b-45af-ad82-dc5973e82311"
                   },
                   customers: [
                      {
                         priority: "M",
                         cifId: "5195000333",
                         type: "2",
                         profile: {
                            titleNameTh: "คุณ",
                            firstNameTh: "นาวี",
                            lastNameTh: "อัศวดารากร",
                            birthdate: "1983-09-16T01:00:00.000Z",
                            deptBurden: "0",
                            mainIncome: 150000,
                            idNo: "3101601022674",
                            startWorkingDate: "2009-07-08",
                            mobileNo: "0811111111",
                            email: "traininguser1@kiatnakin.co.th",
                            onBoardCdf: true,
                            otherIncome: "0",
                            gender: "M",
                            nationality: "TH",
                            occupation: "1",
                            idType: "001"
                         },
                         ncb: {
                            verificationMethod: "NCB_QUESTION",
                            token: "3c43ea62-81c7-43a5-8447-b654e74a225c"
                         }
                      }
                   ],
                   product: {
                      shop: {
                         type: "Dealer",
                         dealerCode: "1000913178",
                         name: "บจก. เอเชีย ทรัค",
                         hub: "BKK",
                         hubName: "กทม."
                      },
                      bankProduct: {
                         code: "1302001"
                      },
                      mktProduct: {
                         code: "1302001_newCustomer"
                      },
                      detail: {
                         profile: {
                            purpose: {
                               code: "1",
                               name: "ใช้ส่วนบุคคล"
                            },
                            brand: "MG",
                            model: "MG5",
                            yearGroup: 2019,
                            monthGroup: 0,
                            subModel: "MG  19AQ",
                            price: 487000,
                            type: "เก๋ง"
                         },
                         sellPrice: 400000,
                         sellIncludeVat: "false"
                      },
                      shortDetail: "Sedan 4dr D Auto 4sp FWD 1.5i"
                   },
                   attachments: [

                   ],
                   additional: {
                      salesConsultant: "",
                      remark: "",
                      payslipType: "2",
                      promotion: {

                      }
                   },
                   pricing: {
                      guarantorFlag: "N",
                      loanAmt: 0,
                      downAmt: 0
                   }
                }
        };
        return req;
    }

}
