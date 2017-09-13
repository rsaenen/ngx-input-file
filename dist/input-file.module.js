"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var drop_zone_directive_1 = require("./directives/drop-zone.directive");
var input_file_component_1 = require("./components/input-file.component");
var input_file_repository_1 = require("./repositories/input-file.repository");
var InputFileModule = (function () {
    function InputFileModule(inputFileRepository) {
        this.inputFileRepository = inputFileRepository;
    }
    InputFileModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        drop_zone_directive_1.DropZoneDirective,
                        input_file_component_1.InputFileComponent
                    ],
                    imports: [
                        platform_browser_1.BrowserModule,
                        forms_1.FormsModule
                    ],
                    exports: [
                        drop_zone_directive_1.DropZoneDirective,
                        input_file_component_1.InputFileComponent
                    ],
                    providers: [input_file_repository_1.InputFileRepository],
                    entryComponents: [input_file_component_1.InputFileComponent]
                },] },
    ];
    /** @nocollapse */
    InputFileModule.ctorParameters = function () { return [
        { type: input_file_repository_1.InputFileRepository, },
    ]; };
    return InputFileModule;
}());
exports.InputFileModule = InputFileModule;
//# sourceMappingURL=input-file.module.js.map