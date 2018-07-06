import { CommonModule } from '@angular/common';
import { DropZoneDirective } from './directives/drop-zone/drop-zone.directive';
import { FormsModule } from '@angular/forms';
import { InputFileComponent } from './components/input-file/input-file.component';
import { InputFileConfig } from './interfaces/input-file-config';
import { InputFileService } from './services/input-file.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ModuleWithProviders, NgModule } from '@angular/core';

@NgModule({
    declarations: [
        DropZoneDirective,
        InputFileComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatIconModule
    ],
    exports : [
        InputFileComponent
    ],
    providers: [
        InputFileService
    ],
    entryComponents: [ InputFileComponent ]
})

export class InputFileModule {
    public static forRoot(config?: InputFileConfig): ModuleWithProviders {
        return {
            ngModule: InputFileModule,
            providers: [
                InputFileService,
                { provide: 'config', useValue: config }
            ]
        };
    }
}
