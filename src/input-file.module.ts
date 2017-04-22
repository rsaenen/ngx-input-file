import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DropZoneDirective } from './directives/drop-zone.directive';
import { InputFileComponent } from './components/input-file.component';
import { InputFileRepository } from './repositories/input-file.repository';

@NgModule({
	declarations: [ 
		DropZoneDirective, 
		InputFileComponent
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	exports : [ 
		DropZoneDirective, 
		InputFileComponent 
	],
	providers: [ InputFileRepository ]
})

export class InputFileModule {}