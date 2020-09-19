import { Constants } from './constants';
import { ErrorMessageModel } from '../models/error-message-model';
import { ApiService } from './api.service';
import { DateService } from './date.service';
import { UtilService } from './util.service';

export class BaseService {

    constructor(
        public constants: Constants,
        public api: ApiService,
        public dateService: DateService,
        public util: UtilService
    ) {
    }

    public connect(ctx: string, serviceCode: string, data: any, isSkip = false) {
        const dt = this.dateService.getCurrentDate();
        const refNo = this.util.getRefNo(dt);
        const txnDate = this.util.getTxnDate(dt);

        const req: any = {
            header: {
                channelId: this.constants.CHANNEL_ID,
                clientIp: '127.0.0.1',
                lang: this.constants.CULTURE_SHORTNAME_THAI,
                referenceNo: refNo,
                serviceCode,
                transactionDate: txnDate,
                userId: 'mkt'
            },
            data
        };

        let serviceUri = serviceCode;
        if (!this.util.isNullOrEmpty(ctx)) {
            serviceUri = `${ctx}/${serviceCode}`;
        }

        const p = new Promise(resolve => {
            console.log(`I:--START--:--${serviceCode}--`);

            this.api.post(`${this.constants.APP_BASE_URL}/${serviceUri}`, req, isSkip).then(res => {
                if (res.error) {
                    const errorMessage = new ErrorMessageModel(res.error.code, res.error.message);
                    console.log(`O:--FAIL--:--${serviceCode}--:errorCode/${errorMessage.errorCode}:errorDesc/${errorMessage.errorDesc}`);
                    resolve(errorMessage);
                } else {
                    resolve(res);
                    console.log(`O:--SUCCESS--:--${serviceCode}--`);
                }
            });
        }).catch((ex: any) => {
            console.debug(ex);
        });

        return p;
    }
}
