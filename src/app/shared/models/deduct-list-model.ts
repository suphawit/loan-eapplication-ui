
import { DeductOptionModel } from "./deduct-option-model";

export class DeductListModel {
    title: string;
    seq: string;
    options: Array<DeductOptionModel>;

    constructor(title: string, seq: string) {
        this.title = title;
        this.seq = seq;
    }
}
