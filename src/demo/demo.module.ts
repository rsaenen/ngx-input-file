import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DemoComponent } from './demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputFileConfig } from '../lib/interfaces/input-file-config';
import { InputFileModule } from '../lib/input-file.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const config: InputFileConfig = {
    fileAccept: '*',
    fileLimit: 4
};

const routes: Routes = [
    {
        path: '',
        component: DemoComponent,
    }
];

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        InputFileModule.forRoot(config),
        MatToolbarModule,
        RouterModule.forRoot(routes),
        ReactiveFormsModule
    ],
    declarations: [DemoComponent],
    bootstrap: [DemoComponent],
})

export class DemoModule { }
