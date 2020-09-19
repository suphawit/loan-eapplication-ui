import { PriceModel } from './price-model';

export class PriceOfferModel {
    priceListCode: string;
    maxLoanAmtPerPDPG: number;
    loanAmt: number;
    pdpgMaxTerm: number;
    pdpgMnDown: number;
    campaignMaxTerm: number;
    campaignMinDown: number;
    prices: Array<PriceModel>;
}