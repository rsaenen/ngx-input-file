(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/platform-browser'), require('@angular/common/http')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/forms', '@angular/platform-browser', '@angular/common/http'], factory) :
	(factory((global['ngx-input-file'] = {}),global.ng.core,global.ng.forms,global.ng.platformBrowser,global.ng.common.http));
}(this, (function (exports,core,forms,platformBrowser,http) { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */









function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DropZoneDirective = /** @class */ (function () {
    function DropZoneDirective() {
        this.disabled = false;
        this.fileDragOver = new core.EventEmitter();
        this.fileDragLeave = new core.EventEmitter();
        this.fileDrop = new core.EventEmitter();
        this.isDragOverDisabled = false;
    }
    /**
     * Drag Over event handler.
     * @param {?} event
     * @return {?}
     */
    DropZoneDirective.prototype.onDragOver = function (event) {
        this.preventAndStopEventPropagation(event);
        if (!this.isDragOverDisabled && !this.disabled) {
            this.isDragOverDisabled = true;
            this.fileDragOver.emit();
        }
    };
    /**
     * Drag Leave event handler.
     * @param {?} event
     * @return {?}
     */
    DropZoneDirective.prototype.onDragLeave = function (event) {
        this.preventAndStopEventPropagation(event);
        if (this.isDragOverDisabled && !this.disabled) {
            this.isDragOverDisabled = false;
            this.fileDragLeave.emit();
        }
    };
    /**
     * Drop event handler.
     * @param {?} event
     * @return {?}
     */
    DropZoneDirective.prototype.onDrop = function (event) {
        if (!this.disabled) {
            this.isDragOverDisabled = false;
            this.preventAndStopEventPropagation(event);
            this.fileDrop.emit(event.dataTransfer.files);
        }
    };
    /**
     * Prevents and stops event propagration.
     * @param {?} event
     * @return {?}
     */
    DropZoneDirective.prototype.preventAndStopEventPropagation = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    return DropZoneDirective;
}());
DropZoneDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[dropZone]'
            },] },
];
/** @nocollapse */
DropZoneDirective.ctorParameters = function () { return []; };
DropZoneDirective.propDecorators = {
    "disabled": [{ type: core.Input },],
    "fileDragOver": [{ type: core.Output },],
    "fileDragLeave": [{ type: core.Output },],
    "fileDrop": [{ type: core.Output },],
    "onDragOver": [{ type: core.HostListener, args: ['dragover', ['$event'],] },],
    "onDragLeave": [{ type: core.HostListener, args: ['dragleave', ['$event'],] },],
    "onDrop": [{ type: core.HostListener, args: ['drop', ['$event'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var File = /** @class */ (function () {
    function File() {
    }
    return File;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var InputFileComponent = /** @class */ (function () {
    function InputFileComponent() {
        this.disableUpload = false;
        this.inputMaxFiles = 1;
        this.minimal = false;
        this.model = new Array();
        this.textBrowse = 'Browse';
        this.textFileSelected = 'files selected';
        this.textNoFile = 'No file selected';
        this.textRemove = 'Remove';
        this.textUpload = 'Upload';
        // #endregion
        // #region output
        this.limitReached = new core.EventEmitter();
        this.acceptedFile = new core.EventEmitter();
        this.rejectedFile = new core.EventEmitter();
        this.removedFile = new core.EventEmitter();
        this.uploadFiles = new core.EventEmitter();
        this.dropZoneDisabled = false;
        this.isDragOver = false;
        this.isInputActive = false;
        this.iconExtension = '.png';
        this.pathIcon = 'assets/img/';
        this.typeImage = 'image/';
    }
    /**
     * Blur event handler.
     * @return {?}
     */
    InputFileComponent.prototype.onBlur = function () {
        this.isInputActive = false;
    };
    /**
     * Change event handler.
     * @param {?} event
     * @return {?}
     */
    InputFileComponent.prototype.onChange = function (event) {
        this.addInputFile(event.target.files);
    };
    /**
     * Focus event handler
     * @return {?}
     */
    InputFileComponent.prototype.onFocus = function () {
        this.isInputActive = true;
    };
    /**
     * File Drag Over event handler.
     * @return {?}
     */
    InputFileComponent.prototype.onFileDragOver = function () {
        this.isDragOver = true;
    };
    /**
     * File Drag Leave event handler.
     * @return {?}
     */
    InputFileComponent.prototype.onFileDragLeave = function () {
        this.isDragOver = false;
    };
    /**
     * File Drop event handler.
     * @param {?} files
     * @return {?}
     */
    InputFileComponent.prototype.onFileDrop = function (files) {
        this.isDragOver = false;
        this.addInputFile(files);
    };
    /**
     * Remove event handler.
     * Removes all files of the model.
     * @return {?}
     */
    InputFileComponent.prototype.onRemove = function () {
        try {
            for (var _a = __values(this.model), _b = _a.next(); !_b.done; _b = _a.next()) {
                var file = _b.value;
                this.removedFileHandler(file);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.removeHandler();
        var e_1, _c;
    };
    /**
     * Remove file event handler.
     * @param {?} index
     * @return {?}
     */
    InputFileComponent.prototype.onRemoveFile = function (index) {
        this.removedFileHandler(this.model[index]);
        this.model.splice(index, 1);
        this.dropZoneDisabled = false;
        if (!this.model.length) {
            this.removeHandler();
        }
    };
    /**
     * Upload event handler;
     * @return {?}
     */
    InputFileComponent.prototype.onUpload = function () {
        this.uploadFiles.emit();
    };
    /**
     * Gets the text of the input.
     * @return {?}
     */
    InputFileComponent.prototype.getInputText = function () {
        var /** @type {?} */ inputText;
        if (this.model == null || !this.model.length) {
            inputText = this.textNoFile;
        }
        else if (this.model.length < 2 && this.model[0].file != null) {
            inputText = this.model[0].file.name;
        }
        else {
            inputText = this.model.length + ' ' + this.textFileSelected;
        }
        return inputText;
    };
    /**
     * Checks if the model is null or empty.
     * @return {?}
     */
    InputFileComponent.prototype.isNotNullOrEmpty = function () {
        return this.model != null && this.model.length != null && this.model.length > 0;
    };
    /**
     * Accepted file handler.
     * @param {?} file
     * @return {?}
     */
    InputFileComponent.prototype.acceptedFileHandler = function (file) {
        this.acceptedFile.emit(file);
    };
    /**
     * Adds multiple files to the model.
     * @param {?} files
     * @return {?}
     */
    InputFileComponent.prototype.addInputFile = function (files) {
        var /** @type {?} */ limit = +this.inputMaxFiles;
        for (var /** @type {?} */ index = 0; index < files.length; index++) {
            // Checks the limit
            if (this.model.length < limit) {
                // Checks the type
                if (this.isTypeEnabled(files[index])) {
                    var /** @type {?} */ file = new File();
                    this.setSize(file, files[index]);
                    // Checks the icon
                    if (FileReader && this.isTypeImage(files[index])) {
                        this.readFileHandler(file, files[index]);
                    }
                    else {
                        this.setFileIcon(file, files[index]);
                    }
                    file.file = files[index];
                    this.model.push(file);
                    this.acceptedFileHandler(file);
                }
                else {
                    this.rejectedFileHandler(files[index]);
                }
            }
            else {
                // Limit reached
                break;
            }
        }
        if (this.model.length >= limit && !this.minimal) {
            this.limitReachedHandler();
        }
    };
    /**
     * Checks if the file is an image.
     * @param {?} file
     * @return {?}
     */
    InputFileComponent.prototype.isTypeImage = function (file) {
        return file.type.startsWith(this.typeImage);
    };
    /**
     * Checks if the type of the file is enabled.
     * @param {?} file
     * @return {?}
     */
    InputFileComponent.prototype.isTypeEnabled = function (file) {
        var /** @type {?} */ enabled = this.inputAccept == null;
        if (this.inputAccept) {
            var /** @type {?} */ accept = this.inputAccept.replace('*', '');
            var /** @type {?} */ types = accept.split(',');
            try {
                for (var types_1 = __values(types), types_1_1 = types_1.next(); !types_1_1.done; types_1_1 = types_1.next()) {
                    var type = types_1_1.value;
                    if (file.type.startsWith(type) || (type.charAt(0) === '.' && file.name.endsWith(type))) {
                        enabled = true;
                        break;
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (types_1_1 && !types_1_1.done && (_a = types_1.return)) _a.call(types_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        return enabled;
        var e_2, _a;
    };
    /**
     * Limit reached handler.
     * @return {?}
     */
    InputFileComponent.prototype.limitReachedHandler = function () {
        this.dropZoneDisabled = true;
        this.limitReached.emit();
    };
    /**
     * Read file handler.
     * @param {?} file
     * @param {?} image
     * @return {?}
     */
    InputFileComponent.prototype.readFileHandler = function (file, image) {
        var /** @type {?} */ fr = new FileReader();
        fr.onload = function () {
            file.icon = fr.result;
        };
        fr.readAsDataURL(image);
    };
    /**
     * Rejected file handler.
     * @param {?} file
     * @return {?}
     */
    InputFileComponent.prototype.rejectedFileHandler = function (file) {
        this.rejectedFile.emit(file);
    };
    /**
     * Removed file handler.
     * @param {?} file
     * @return {?}
     */
    InputFileComponent.prototype.removedFileHandler = function (file) {
        this.removedFile.emit(file);
    };
    /**
     * Remove handler.
     * @return {?}
     */
    InputFileComponent.prototype.removeHandler = function () {
        this.dropZoneDisabled = false;
        this.inputFile.nativeElement.value = '';
        this.model = new Array();
    };
    /**
     * Sets the icon of the file.
     * @param {?} file
     * @param {?} inputFile
     * @return {?}
     */
    InputFileComponent.prototype.setFileIcon = function (file, inputFile) {
        var /** @type {?} */ icon;
        switch (inputFile.type) {
            case 'application/pdf':
                icon = 'pdf';
                break;
            case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
                icon = 'doc';
                break;
            case 'application/zip':
                icon = 'zip';
                break;
            default:
                icon = 'file';
        }
        file.icon = this.pathIcon + icon + this.iconExtension;
    };
    /**
     * Gets the size of the file to display.
     * @param {?} file
     * @param {?} inputFile
     * @return {?}
     */
    InputFileComponent.prototype.setSize = function (file, inputFile) {
        var /** @type {?} */ size = Math.round(inputFile.size / 1024);
        file.size = '(' + size + ' KB)';
    };
    return InputFileComponent;
}());
InputFileComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'input-file',
                styles: [".input-file .drop-zone{\n  border:1px dashed #a2958a;\n  border-radius:5px;\n  height:320px;\n  text-align:center; }\n.input-file .drop-zone-minimal{\n  border:1px dashed #a2958a;\n  border-radius:5px;\n  height:38px; }\n.input-file .file-preview{\n  border:1px solid #ddd;\n  border-radius:5px;\n  margin-bottom:5px;\n  overflow:auto;\n  padding:5px;\n  width:100%; }\n  .input-file .file-preview .file-preview-item{\n    border:1px solid #ddd;\n    -webkit-box-shadow:1px 1px 5px 0 #a2958a;\n            box-shadow:1px 1px 5px 0 #a2958a;\n    display:table;\n    float:left;\n    margin:8px;\n    padding:6px;\n    position:relative;\n    text-align:center; }\n    .input-file .file-preview .file-preview-item .file-content{\n      height:170px; }\n      .input-file .file-preview .file-preview-item .file-content img{\n        height:160px;\n        width:auto; }\n    .input-file .file-preview .file-preview-item .file-thumbnail-footer{\n      height:70px;\n      padding-top:10px; }\n      .input-file .file-preview .file-preview-item .file-thumbnail-footer .file-footer-caption{\n        color:#777;\n        display:block;\n        font-size:11px;\n        margin:5px auto;\n        overflow:hidden;\n        padding-top:4px;\n        text-align:center;\n        text-overflow:ellipsis;\n        white-space:nowrap;\n        width:160px; }\n    .input-file .file-preview .file-preview-item:hover{\n      -webkit-box-shadow:3px 3px 5px 0 #333;\n              box-shadow:3px 3px 5px 0 #333; }\n.input-file .file-caption-main{\n  width:100%; }\n  .input-file .file-caption-main .input-active{\n    background-color:#fff;\n    border-color:#5cb3fd;\n    color:#464a4c;\n    outline:0; }\n  .input-file .file-caption-main .file-caption-name :focus{\n    outline:0; }\n  .input-file .file-caption-main .form-control,\n  .input-file .file-caption-main .btn-action{\n    z-index:10; }\n.input-file .btn-file input[type='file']{\n  background:none;\n  cursor:inherit;\n  display:block;\n  min-height:100%;\n  min-width:100%;\n  opacity:0;\n  position:absolute;\n  right:0;\n  text-align:right;\n  top:0; }\n"],
                template: "<div class=\"row input-file\" dropZone [disabled]=\"dropZoneDisabled\" (fileDragOver)=\"onFileDragOver()\" (fileDragLeave)=\"onFileDragLeave()\" (fileDrop)=\"onFileDrop($event)\">\n    <ng-container *ngIf=\"!minimal; else minimalButton\">\n        <div class=\"col-12\" *ngIf=\"isDragOver\">\n            <div class=\"drop-zone\"></div>\n        </div>\n        <div class=\"col-12\" *ngIf=\"isNotNullOrEmpty() && !isDragOver\">\n            <div class=\"file-preview\">\n                <button type=\"button\" class=\"close\" (click)=\"onRemove()\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n                <div class=\"file-preview-container\">\n                    <div class=\"file-preview-item\" *ngFor=\"let file of model; let i = index\">\n                        <button type=\"button\" class=\"close\" (click)=\"onRemoveFile(i)\">\n                            <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                        <div class=\"file-content\">\n                            <img src=\"{{ file.icon }}\" *ngIf=\"file.icon\">\n                        </div>\n                        <div class=\"file-thumbnail-footer\">\n                            <div class=\"file-footer-caption\" *ngIf=\"file.file\">\n                                <p>{{ file.file.name }}</p>\n                                <samp>{{ file.size }}</samp>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-12 input-group file-caption-main\" *ngIf=\"!isDragOver\">\n            <div class=\"form-control\" [ngClass]=\"{'input-active': isInputActive}\">\n                <div class=\"file-caption-name\" tabindex=\"500\">\n                    <i class=\"fa fa-file-o\" aria-hidden=\"true\" *ngIf=\"isNotNullOrEmpty()\"></i>\n                    <span>{{ getInputText() }}</span>\n                </div>\n            </div>\n            <div class=\"input-group-append\">\n                <button class=\"btn btn-secondary btn-action\" type=\"button\" title=\"Clear selected files\" (click)=\"onRemove()\" *ngIf=\"isNotNullOrEmpty()\">\n                    <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n                    <span class=\"d-none d-md-inline-flex\">{{ textRemove }}</span>\n                </button>\n            </div>\n            <div class=\"input-group-append\" *ngIf=\"!disableUpload\">\n                <button class=\"btn btn-secondary btn-action\" type=\"button\" title=\"Upload selected files\" (click)=\"onUpload()\" *ngIf=\"isNotNullOrEmpty()\">\n                    <i class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i>\n                    <span class=\"d-none d-md-inline-flex\">{{ textUpload }}</span>\n                </button>\n            </div>\n            <div class=\"input-group-append\">\n                <div class=\"btn btn-primary btn-file\" [ngClass]=\"{'disabled': dropZoneDisabled}\">\n                    <i class=\"fa fa-folder-open-o\" aria-hidden=\"true\"></i>\n                    <span class=\"d-none d-md-inline-flex\">{{ textBrowse\u00A0}}</span>\n                    <input id=\"{{ inputId }}\" class=\"file\" name=\"input-file-name\" type=\"file\"\n                        accept=\"{{ inputAccept }}\"\n                        [attr.multiple]=\"inputMaxFiles > 1 ? true : null\"\n                        [disabled]=\"dropZoneDisabled\"\n                        (change)=\"onChange($event)\"\n                        (blur)=\"onBlur()\"\n                        (focus)=\"onFocus()\"\n                        #inputFile>\n                </div>\n            </div>\n        </div>\n    </ng-container>\n    <ng-template #minimalButton>\n        <div class=\"col-12\" *ngIf=\"isDragOver; else minimalInput\">\n            <div class=\"drop-zone-minimal\"></div>\n        </div>\n        <ng-template #minimalInput>\n            <div class=\"col-12\">\n                <div class=\"btn btn-primary btn-file\">\n                    <span class=\"d-none d-md-inline-flex\">{{ textBrowse\u00A0}}</span>\n                    <input id=\"{{ inputId }}\" class=\"file\" name=\"input-file-name\" type=\"file\"\n                        accept=\"{{ inputAccept }}\"\n                        [attr.multiple]=\"inputMaxFiles > 1 ? true : null\"\n                        (change)=\"onChange($event)\"\n                        #inputFile>\n                </div>\n            </div>\n        </ng-template>\n    </ng-template>\n</div>"
            },] },
];
// #endregion
/** @nocollapse */
InputFileComponent.ctorParameters = function () { return []; };
InputFileComponent.propDecorators = {
    "inputId": [{ type: core.Input },],
    "inputAccept": [{ type: core.Input },],
    "disableUpload": [{ type: core.Input },],
    "inputMaxFiles": [{ type: core.Input },],
    "minimal": [{ type: core.Input },],
    "model": [{ type: core.Input },],
    "textBrowse": [{ type: core.Input },],
    "textFileSelected": [{ type: core.Input },],
    "textNoFile": [{ type: core.Input },],
    "textRemove": [{ type: core.Input },],
    "textUpload": [{ type: core.Input },],
    "limitReached": [{ type: core.Output },],
    "acceptedFile": [{ type: core.Output },],
    "rejectedFile": [{ type: core.Output },],
    "removedFile": [{ type: core.Output },],
    "uploadFiles": [{ type: core.Output },],
    "inputFile": [{ type: core.ViewChild, args: ['inputFile',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var InputFileModule = /** @class */ (function () {
    function InputFileModule() {
    }
    return InputFileModule;
}());
InputFileModule.decorators = [
    { type: core.NgModule, args: [{
                declarations: [
                    DropZoneDirective,
                    InputFileComponent
                ],
                imports: [
                    platformBrowser.BrowserModule,
                    forms.FormsModule,
                    http.HttpClientModule
                ],
                exports: [
                    DropZoneDirective,
                    InputFileComponent
                ],
                providers: [],
                entryComponents: [InputFileComponent]
            },] },
];
/** @nocollapse */
InputFileModule.ctorParameters = function () { return []; };

exports.DropZoneDirective = DropZoneDirective;
exports.InputFileComponent = InputFileComponent;
exports.InputFileModule = InputFileModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-input-file.umd.js.map
