import { Injectable } from '@angular/core';

@Injectable()
export class AppStateService {

    constructor() { }

    private _dynamicComponents = [];
    private _userInfo: any = undefined;

    private _txn: any = undefined;
    private _formData: any = undefined;
    private _formValid: any = undefined;
    private _displayName: any = undefined;

    private _initialized = false;

    public get txn(): any {
        return this._txn;
    }
    public set txn(txn: any) {
        this._txn = txn;
    }

    public get dynamicComponents(): any {
        return this._dynamicComponents;
    }
    public set dynamicComponents(dynamicComponents: any) {
        this._dynamicComponents = dynamicComponents;
    }

    public get accessToken(): string {
        if (this.userInfo) {
            return this.userInfo.accessToken;
        }
    }

    public get isLoggedIn(): boolean {
        if (this.userInfo) {
            return true;
        }
        return false;
    }

    public get userInfo(): any {
        return this._userInfo;
    }
    public set userInfo(value: any) {
        this._userInfo = value;
    }

    public get formData(): any {
        return this._formData;
    }
    public set formData(value: any) {
        this._formData = value;
    }

    public get formValid(): any {
        return this._formValid;
    }
    public set formValid(value: any) {
        this._formValid = value;
    }

    public get displayName(): any {
        return this._displayName;
    }
    public set displayName(value: any) {
        this._displayName = value;
    }

    public get initialized(): any {
        return this._initialized;
    }
    public set initialized(value: any) {
        this._initialized = value;
    }

    public clearForm(): void {
        this.formData = undefined;
        this.formValid = false;
        this.displayName = undefined;
        this.initialized = false;
    }
}
