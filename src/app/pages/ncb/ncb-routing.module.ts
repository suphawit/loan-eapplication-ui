import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NcbComponent } from './ncb.component';

const routes: Routes = [
    {
        path: '',
        component: NcbComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NcbRoutingModule {}
