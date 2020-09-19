import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SharedServicesModule } from '../shared/services/shared-services.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedDirectivesModule } from '../shared/directives/shared-directives.module';
import { LayoutModule } from '../shared/components/layout/layout.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        SharedServicesModule,
        FormsModule,
        ReactiveFormsModule,
        SharedDirectivesModule,
        LayoutModule,
        TranslateModule.forChild()
    ],
    declarations: [
        LoginComponent
    ]
})
export class LoginModule { }
