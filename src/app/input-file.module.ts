import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropZoneDirective } from './directives/drop-zone.directive';
import { HttpClientModule } from '@angular/common/http';
import { InputFileComponent } from './components/input-file.component';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [
        DropZoneDirective,
        InputFileComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule
    ],
    exports : [
        DropZoneDirective,
        InputFileComponent
    ],
    providers: [ ],
    entryComponents: [ InputFileComponent ]
})

export class InputFileModule {}
