import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DropZoneDirective } from './directives/drop-zone.directive';
import { InputFileComponent } from './components/input-file.component';

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
	providers: [],
	entryComponents: [ InputFileComponent ]
})

export class InputFileModule {
	static forRoot() {
    	return {
			ngModule: InputFileModule
		}
	}
}