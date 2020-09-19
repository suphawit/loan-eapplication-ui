import { Injectable } from '@angular/core';

@Injectable()
export class Constants {

    DATE_FORMAT_DEFAULT = "YYYY-MM-DD";
    FORMAT_SHORT_DATE = "YYYY-MM-DD";
    FORMAT_TXN_DATE = "YYYY-MM-DD'T'HH:mm:ss.SSS'Z'";
    FORMAT_REF_NO = "YYYYMMDDHHmmssSSS";

    CULTURE_SHORTNAME_THAI = "TH";
    CULTURE_SHORTNAME_ENGLISH = "EN";

    KNOWN_CULTURE_ENLISH_US = "en-US";
    KNOWN_CULTURE_THAI = "th-TH";

    CHANNEL_ID = "MKT";

    YES = "Y";
    NO = "N";

    IMAGE_PATH = "assets/images";

    MAX_FILE_UPLOAD_SIZE = 2147483648; // 2GB

    APP_CONFIG: {
        STEP_WIZARD: string;
        ALERT_MESSAGE: string;
    };

    COMPRESS_TYPE = {
        DEFLATE: 'DEFLATE',
        GZIP: 'GZIP'
    };

    MAXLEN = {
        MOO: 5,
        MOBILE: 10,
        PHONE: 50,
        FLOOR: 6,
        CITIZEN_ID: 13,
        EMAIL: 20,
        ROOM: 21,
        ADDRNUMBER: 30,
        SOI: 37,
        ROAD: 37,
        FIRST_NAME: 40,
        LAST_NAME: 40,
        SOCIAL: 100,
        OCCUPATION: 255,
        PASSPORT: 255,
        POSTAL: 5,
        VILLAGE: 40,
        WORKYEAR: 3,
        WORKMONTH: 2
    };

    MAX_CHILD_NO = 4;

    CSV_LINE_SEPARATOR = '\r\n';
    CSV_COLUMN_SEPARATOR = ',';

    SERVICE_CODE: {
        GET_FORM_CONFIG: string;
        GET_ALL_COMPONENT: string;
        GET_NEXT_PAGE: string;
        CARD_TYPES: string;
        GENDERS: string;
        NATIONALITIES: string;
        PROVINCES: string;
        DISTRICTS: string;
        SUBDISTRICTS: string;
        MKT_BRAND: string;
        MKT_MODEL: string;
        MKT_MODELYEAR: string;
        MKT_SUBMODEL: string;
        TITLE: string;
        BUSINESS_TYPES: string;
        MARITAL_STATUSES: string;
        EDUCATIONS: string;
        INQUERY_TXN_BY_COMPONENT: string;
        CAMPAIGNS: string;
        PRICE_OFFERS: string;
        OCCUPATION: string;
        SUBOCCUPATION: string;
        SAVE_TXN_BY_COMPONENT: string;
    };

    CTX: {
        LOAN_APP: string;
        CUSTOMER_MASTER: string;
        PRODUCT_MASTER: string;
        QUOTATION_API: string;
    };

    APP_BASE_URL = '/api';

    FORM_DATA = {
        FinancialInfoComponent: 'financialInfo',
        LivingConditionComponent: 'livingCondition',
        CarInfoComponent: 'carInfo',
        LoanExpectationComponent: 'loanExpectation',
        AdditionalInfoComponent: 'additionalInfo',
        GuarantorCustomerInfoComponent: 'guarantorCustomerInfo',
        GuarantorFinancialInfoComponent: 'guarantorFinancialInfo',
        GuarantorLivingConditionComponent: 'guarantorlivingCondition',
        GuarantorBusinessOwnerComponent: 'guarantorBusinessOwner',
        CoBorrowerFinancialInfoComponent: 'coBorrowerFinancialInfo',
        CoBorrowerLivingConditionComponent: 'coBorrowerlivingCondition',
        CoBorrowerBusinessOwnerComponent: 'coBorrowerBusinessOwner',
        CustomerInfoPart01Component: 'customerInfoPart01',
        CustomerInfoPart02Component: 'customerInfoPart02',
        CustomerInfoPart03Component: 'customerInfoPart03',
        CustomerInfoPart04Component: 'customerInfoPart04',
        CustomerInfoPart05Component: 'customerInfoPart05',
        DisburseComponent: 'disburse',
        InsuranceComponent: 'insurance',
        CoBorrowerCustomerInfoComponent: 'coBorrowerCustomerInfo',
        BusinessOwnerComponent: 'businessOwner'
    };

    FORM_VALID = {
        FinancialInfoComponent: 'financialInfoFormValid',
        LivingConditionComponent: 'livingConditionFormValid',
        CarInfoComponent: 'carInfoFormValid',
        LoanExpectationComponent: 'loanExpectationFormValid',
        AdditionalInfoComponent: 'additionalInfoFormValid',
        GuarantorCustomerInfoComponent: 'guarantorCustomerInfoFormValid',
        GuarantorFinancialInfoComponent: 'guarantorFinancialInfoFormValid',
        GuarantorLivingConditionComponent: 'guarantorlivingConditionFormValid',
        GuarantorBusinessOwnerComponent: 'guarantorBusinessOwnerFormValid',
        CoBorrowerFinancialInfoComponent: 'coBorrowerFinancialInfoFormValid',
        CoBorrowerLivingConditionComponent: 'coBorrowerlivingConditionFormValid',
        CoBorrowerBusinessOwnerComponent: 'coBorrowerBusinessOwnerFormValid',
        CustomerInfoPart01Component: 'customerInfoPart01FormValid',
        CustomerInfoPart02Component: 'customerInfoPart02FormValid',
        CustomerInfoPart03Component: 'customerInfoPart03FormValid',
        CustomerInfoPart04Component: 'customerInfoPart04FormValid',
        CustomerInfoPart05Component: 'customerInfoPart05FormValid',
        DisburseComponent: 'disburseFormValid',
        InsuranceComponent: 'insuranceFormValid',
        CoBorrowerCustomerInfoComponent: 'coBorrowerCustomerInfoFormValid',
        BusinessOwnerComponent: 'businessOwnerFormValid'
    };

    ROUTE_MAPPING = {
        PreCalComponent: '/pre-cal',
        NcbComponent: '/ncb',
        PricingComponent: '/pricing'
    };

    constructor() {
        this.APP_CONFIG = {
            STEP_WIZARD: "STEP_WIZARD",
            ALERT_MESSAGE: "ALERT_MESSAGE"
        };

        this.SERVICE_CODE = {
            GET_FORM_CONFIG: "getFormConfig",
            GET_ALL_COMPONENT: "getAllComponent",
            GET_NEXT_PAGE: "getNextPage",
            CARD_TYPES: "cardTypes",
            GENDERS: "genders",
            NATIONALITIES: "nationalities",
            PROVINCES: "provinces",
            DISTRICTS: "districts",
            SUBDISTRICTS: "subDistricts",
            MKT_BRAND: "mktBrand",
            MKT_MODEL: "mktModel",
            MKT_MODELYEAR: "mktModelYear",
            MKT_SUBMODEL: "mktSubModel",
            TITLE: "titles",
            BUSINESS_TYPES: "businessTypes",
            MARITAL_STATUSES: "maritalStatuses",
            EDUCATIONS: "educations",
            INQUERY_TXN_BY_COMPONENT: "inquiryTransactionByComponent",
            CAMPAIGNS: "campaigns",
            PRICE_OFFERS: "priceOffers",
            OCCUPATION: "occupation",
            SUBOCCUPATION: "subOccupation",
            SAVE_TXN_BY_COMPONENT: "saveTransactionByComponent"
        };

        this.CTX = {
            LOAN_APP: "LoanEAPP",
            CUSTOMER_MASTER: "CustomerMaster",
            PRODUCT_MASTER: "ProductMaster",
            QUOTATION_API: "Saletool/Quotation"
        };
    }
}
