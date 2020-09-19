import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreCalComponent } from './pre-cal.component';

const routes: Routes = [
    {
        path: '',
        component: PreCalComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PreCalRoutingModule {}
