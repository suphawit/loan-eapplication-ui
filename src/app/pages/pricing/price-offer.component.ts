import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { DataService } from "../../shared/services/data.service";
import { Constants } from "../../shared/services/constants";
import { AppStateService } from "../../shared/services/app-state.service";
import { NavExtrasService } from "../../shared/services/nav-extras.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { InstallmentTypeModel } from "../../shared/models/installment-type-model";
import { MockDataService } from '../../shared/services/mock-data-service';
import { PricingService } from '../../shared/services/pricing.service';
import { userInfo } from 'src/app/shared/test/user-info';

@Component({
    selector: "app-price-offer",
    templateUrl: "./price-offer.component.html",
    styleUrls: ["./price-offer.component.scss"],
})
export class PriceOfferComponent implements OnInit {
    public nextPage: any;
    public title: string;
    public submitted = false;

    public formData: any;
    public productCode: any;
    public installmentTypes: Array<InstallmentTypeModel>;
    public priceCode: string;
    private currentUserInfo: any;
    public maxLoanAmt: number;
    public minLoanAmt: number;
    public minDownAmt: number;
    public maxDownAmt: number;
    public minDownPercent: number;
    public loanInfo: any[];
    public gridColWidth: string;

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
        private router: Router
    ) {
    }

    ngOnInit(): void {
       this.init();
    }

    public goToNextPage(): void {
        this.getNextPage(this.nextPage.nextFlowCode, this.nextPage.productGroup, this.nextPage.nextStepNo, 'newprecal').then((res: any) => {
            this.navExtras.setExtras(res.data);
            const nextRoute = this.constants.ROUTE_MAPPING[res.data.nextPageCode];
            console.log(`nextRoute ===> ${nextRoute}`);
            this.router.navigate([nextRoute]);
        });
    }

    private getNextPage(flowCode: string, productGroup: string, stepNo: string, txnStatusCode: string): Promise<{}> {
        const req = { flowCode, productGroup, stepNo, txnStatusCode };
        const ctx = this.constants.CTX.LOAN_APP;
        const serviceCode = this.constants.SERVICE_CODE.GET_NEXT_PAGE;
        return this.dataService.connect(ctx, serviceCode, req);
    }

    private prepareFormData(): void {
        this.formData = {
            loanAmount: "",
            downAmount: "",
        };
    }

    private init(): void {
        this.appState.userInfo = userInfo;
        this.nextPage = this.navExtras.getExtras();
        this.title = 'Pricing Offering';


        this.prepareFormData();
        this.productCode = 'UsedCar';
        this.formData.loanAmount = '1000000';

        this.getCalculatePriceOffers();

        if (!(this.productCode === 'UsedCar')) {
            this.gridColWidth = `${Number(96 / 3)}%`;
        } else {
            this.gridColWidth = `${Number(96 / 2)}%`;
        }

    }

    private getCalculatePriceOffers() {
        console.log('I:--START--:--Calculate PriceOffers--');
        this.pricingService.getPriceOffers(this.req).then((objResponse: any) => {
        // this.mockDataService.getPriceList().then((objResponse: any) => {
            console.log('---> objResponse : ', objResponse);

            if (objResponse.errorCode) {
                console.log('lbl.warning', objResponse.errorDesc, 'btn.ok');
            } else {
                this.installmentTypes = objResponse.installmentTypes;
                this.formData.pricingToken = objResponse.pricingToken;
                this.maxLoanAmt = objResponse.maxLoanAmt;
                this.minLoanAmt = objResponse.minLoanAmt;
                this.loanInfo = objResponse.loanInfo;
                this.minDownAmt = objResponse.minDownAmt;
                this.maxDownAmt = objResponse.maxDownAmt;
                this.minDownPercent = objResponse.minDownPercent;
                this.formData.percentDown = objResponse.percentDown;

                if (this.formData.loanAmount === '') {
                    this.formData.loanAmount = this.maxLoanAmt;
                }

                // Case: New Car
                if (!(this.productCode === 'UsedCar')) {
                    if (this.formData.downAmount === '') {
                        this.formData.downAmount = this.minDownAmt;
                    }
                }
            }

        }).catch((ex: any) => {
            console.debug(ex);
        });
    }

    public getPriceDetail(priceDetail: any): void {
        // this.model.priceDetail = undefined;
        this.formData.priceDetail = priceDetail;
        console.log("Selected priceOffer => ", priceDetail);
        // if (!priceDetail.carShieldOverDown) {
        //         this.model.priceDetail = priceDetail;
        //         console.log('--> this.model.priceDetail :', this.model.priceDetail);
        //         if (!priceDetail.showPrice) {
        //             const incomeFormatter = this.currencyFormatter.transform(priceDetail.additionalIncome, true, 0);
        //             const guaIncomeFormatter = this.currencyFormatter.transform(priceDetail.additionalGuaIncome, true, 0);
        //             if (!this.isUsedCar) {
        //                 const downAmtformatter = this.currencyFormatter.transform(priceDetail.additionalDownAmt, true, 0);
        //                 const msg = this.translate.instant('msg.warningShowPriceNewCar', { income: incomeFormatter, downAmt: downAmtformatter, guaIncome: guaIncomeFormatter });
        //                 this.util.showAlert('lbl.warning', msg, 'btn.close');
        //             } else {
        //                 const loanAmtformatter = this.currencyFormatter.transform(priceDetail.additionalLoanAmt, true, 0);
        //                 const msg = this.translate.instant('msg.warningShowPrice', { income: incomeFormatter, loanAmt: loanAmtformatter, guaIncome: guaIncomeFormatter });
        //                 this.util.showAlert('lbl.warning', msg, 'btn.close');
        //             }
        //         }
        // } else {
        //     const formatter = this.currencyFormatter.transform(priceDetail.carShieldAmt, true, 0);
        //     const msg = this.translate.instant('msg.warningCarshieldOverDown', { downAmt: formatter });
        //     this.util.showAlert('lbl.warning', msg, 'btn.close');
        // }
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

    public get isAutoloan(): boolean {
        return this.productCode === 'UsedCar' || this.productCode === 'CQC';
    }

    public get isPloan(): boolean {
        return this.productCode === 'Ploan';
    }

    private get req(): any {
        const req  = {
                loanQuotation: {
                   quoteRef: {
                      token: "975bc9b6-6c44-4f4b-875b-3617b3af08d7"
                   },
                   customers: [
                      {
                         priority: "M",
                         cifId: "5195000333",
                         type: "2",
                         vatType: "2",
                         profile: {
                            titleNameTh: "คุณ",
                            firstNameTh: "นาวี",
                            lastNameTh: "อัศวดารากร",
                            birthdate: "1983-09-16T01:00:00.000Z",
                            deptBurden: "0",
                            mainIncome: 9000,
                            idNo: "3101601022674",
                            startWorkingDate: "2011-06-26",
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
                            token: "471e1231-9ec1-4f33-bbec-31723b4e2845"
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
                         sellIncludeVat: "false",
                         carShield: {
                            code: "CS-0002",
                            desc: "Extra"
                         },
                         insuranceOffer: {
                            code: "MOTOR-0007",
                            desc: "ซื้อ KK - ประกันภัยรถยนต์ ประเภท 1"
                         },
                         insurancePA: {
                            insuranceCode: "PA-0002",
                            insuranceName: "ไม่มี"
                         },
                         insuranceEW: {
                            insuranceCode: "EW-0004",
                            insuranceName: "แถม – ยอดจัดรวม CS ตั้งแต่ 300,000-399,999 บาท"
                         },
                         insuranceACT: {
                            insuranceCode: "ACT-0002",
                            insuranceName: "ไม่มี"
                         }
                      },
                      shortDetail: "Sedan 4dr D Auto 4sp FWD 1.5i"
                   },
                   attachments: [

                   ],
                   additional: {
                      salesConsultant: "",
                      remark: "",
                      carTransferType: "kk",
                      overCampaignFlag: "N",
                      payslipType: "2",
                      addInterestRate: "",
                      comPercent: "",
                      comTerm: "",
                      promotion: {

                      }
                   },
                   pdpg: {
                      pdpgName: "Used Car ปกติ LTV 70%_TERM 72",
                      pdpgCode: "U301"
                   },
                   campaign: {
                      token: "bffea199-076b-47ad-a15e-8a3c177181d6",
                      code: "CU-ALL-0006",
                      name: "แุคมเปญดอกเบี้ยพิเศษ 0% 6 เดิอน"
                   },
                   pricing: {
                      guarantorFlag: "N",
                      loanAmt: 0,
                      downAmt: 0,
                      refinanceFlag: "N",
                      refinanceLoanAmt: "0",
                      refinanceOutstanding: "0"
                   }
                }
        };
        return req;
    }
}
