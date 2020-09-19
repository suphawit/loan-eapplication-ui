export class ErrorMessageModel {
  errorCode: any;
  errorDesc: string;

  constructor(errorCode: any, errorDesc: string) {
    this.errorCode = errorCode;
    this.errorDesc = errorDesc;
  }
}
