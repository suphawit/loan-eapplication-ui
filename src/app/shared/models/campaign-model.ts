import { CarShieldModel } from './car-shield-model';
import { InsuranceMotorModel } from './insurance-motor-model';
import { RateFactorGroupModel } from './rate-factor-group-model';
import { InstallmentTypeModel } from './installment-type-model';
import { PdpgModel } from './pdpg-model';
import { InsurancePaModel } from './insurance-pa-model';
import { InsuranceEwModel } from './insurance-ew-model';
import { InsuranceActModel } from './insurance-act-model';

export class CampaignModel {
    name: string;
    value: string;
    token: string;
    pdpgs: Array<PdpgModel>;
    carShields: Array<CarShieldModel>;
    insuranceMotors: Array<InsuranceMotorModel>;
    insurancePas: Array<InsurancePaModel>;
    insuranceEws: Array<InsuranceEwModel>;
    insuranceActs: Array<InsuranceActModel>;
    installmentTypes: Array<InstallmentTypeModel>;
    rateFactorGroups: Array<RateFactorGroupModel>;

    constructor(name: string, value: string) {
        this.name = name;
        this.value = value;
    }
}
