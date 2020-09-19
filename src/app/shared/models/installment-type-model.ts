import { PriceOfferModel } from "./price-offer-model";

export class InstallmentTypeModel {

    name: string;
    value: string;
    priceOffers: Array<PriceOfferModel>;

    constructor(name: string, value: string) {
        this.name = name;
        this.value = value;
    }
}
