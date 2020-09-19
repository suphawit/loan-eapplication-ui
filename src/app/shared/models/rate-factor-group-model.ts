import { RateFactorSubGroupModel } from "./rate-factor-sub-group-model";

export class RateFactorGroupModel {
    name: string;
    value: string;
    seq: number;
    rateFactorSubGroups: Array<RateFactorSubGroupModel>;
}
