import { DeductListModel } from './deduct-list-model';

export class PdpgModel {
    name: string;
    value: string;
    deductList: Array<DeductListModel>;

    constructor(name: string, value: string) {
        this.name = name;
        this.value = value;
    }
}
