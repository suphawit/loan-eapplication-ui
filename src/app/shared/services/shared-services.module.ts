import { NgModule, ModuleWithProviders } from "@angular/core";
import { HttpModule } from "@angular/http";
import { AppStateService } from "../services/app-state.service";
import { Constants } from "../services/constants";
import { DateService } from '../services/date.service';
import { MessageCode } from '../services/message-code';
import { UtilService } from '../services/util.service';
import { ValidationService } from '../services/validation.service';
import { PreloadService } from '../services/preload.service';
import { ModalService } from '../services/modal.service';
import { TranslateModule } from "@ngx-translate/core";
import { MockDataService } from "../services/mock-data-service";
import { NavExtrasService } from "../services/nav-extras.service";
import { HttpClient } from "../services/http-client";
import { ApiService } from "../services/api.service";
import { DataService } from "../services/data.service";
import { CustomerMasterService } from "../services/customer-master.service";
import { ProductMasterService } from "../services/product-master.service";
import { LoanEAPPService } from "../services/loan-eapp.service";
import { PricingService } from "../services/pricing.service";

@NgModule({
    imports: [
        HttpModule,
        TranslateModule.forChild()
    ],
    providers: [
    ],
    exports: [
    ]
})
export class SharedServicesModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedServicesModule,
            providers: [
                AppStateService,
                Constants,
                DateService,
                MessageCode,
                UtilService,
                ValidationService,
                PreloadService,
                ModalService,
                MockDataService,
                NavExtrasService,
                HttpClient,
                ApiService,
                DataService,
                CustomerMasterService,
                ProductMasterService,
                LoanEAPPService,
                PricingService
            ]
        };
    }
}
