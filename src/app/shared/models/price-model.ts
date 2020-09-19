import { InstallmentPlanModel } from "./installment-plan-model";

export class PriceModel {
    totalTerm: number;
    percentDown: number;
    loanAmt: number;
    insAmt: number;
    remark: string;
    interestRate: number;
    priceCode: string;
    showPrice: boolean;
    maxLoanAmt: number;
    overDbr: boolean;
    planCode?: string;
    installments: Array<InstallmentPlanModel>;
    carShieldAmt: number;
    carShieldOverDown: boolean;
    additionalDownAmt: number;
    additionalIncome: number;
    additionalLoanAmt: number;
    additionalGuaIncome: number;
    additionalInterest: number;
    additionalInterestRate: number;
    additionalInstallment: number;
    additionalDownCS: number;
}
