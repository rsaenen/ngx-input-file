import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoComponent } from './demo.component';
import { InputFileModule } from '../app/input-file.module';
import {CommonModule} from '@angular/common';

const routes: Routes = [
    {
        path: '',
        component: DemoComponent,
    }
];

@NgModule({
    imports: [
        CommonModule,
        InputFileModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [DemoComponent],
    bootstrap: [DemoComponent],
})

export class DemoModule { }
