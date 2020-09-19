import { NgModule, ModuleWithProviders } from '@angular/core';
import { CurrencyFormatterDirective } from './currency-formatter.directive';
import { NumberFormatterDirective } from './number-formatter.directive';
import { TextFormatterDirective } from './text-formatter.directive';
import { SharedPipesModule } from '../pipes/shared-pipes.module';
import { ClickOutsideDirective } from './click-outside.directive';
import { FormValidatorDirective } from './form-validator.directive';
import { FileDropDirective } from './file-drop.directive';
import { CurrencyValidatorDirective } from './currency-validator.directive';

@NgModule({
    imports: [
        SharedPipesModule
    ],
    declarations: [
        CurrencyFormatterDirective,
        NumberFormatterDirective,
        TextFormatterDirective,
        ClickOutsideDirective,
        FormValidatorDirective,
        FileDropDirective,
        CurrencyValidatorDirective
    ],
    providers: [
        CurrencyFormatterDirective,
        NumberFormatterDirective,
        TextFormatterDirective,
        ClickOutsideDirective,
        FormValidatorDirective,
        FileDropDirective,
        CurrencyValidatorDirective
    ],
    exports: [
        CurrencyFormatterDirective,
        NumberFormatterDirective,
        TextFormatterDirective,
        ClickOutsideDirective,
        FormValidatorDirective,
        FileDropDirective,
        CurrencyValidatorDirective
    ]
})
export class SharedDirectivesModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedDirectivesModule,
            providers: [
            ]
        };
    }
}
