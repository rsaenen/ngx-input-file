"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var file_1 = require("../dto/file");
var InputFileComponent = (function () {
    /**
     * Creates an instance of InputFileComponent.
     *
     *
     * @memberOf InputFileComponent
     */
    function InputFileComponent() {
        this.disableUpload = false;
        this.inputMaxFiles = 1;
        this.model = new Array();
        this.textBrowse = "Browse";
        this.textFileSelected = "files selected";
        this.textNoFile = "No file selected";
        this.textRemove = "Remove";
        this.textUpload = "Upload";
        this.limitReached = new core_1.EventEmitter();
        this.acceptedFile = new core_1.EventEmitter();
        this.rejectedFile = new core_1.EventEmitter();
        this.removedFile = new core_1.EventEmitter();
        this.uploadFiles = new core_1.EventEmitter();
        this.dropZoneDisabled = false;
        this.isDragOver = false;
        this.isInputActive = false;
        this.iconExtension = ".png";
        this.pathIcon = "assets/img/";
        this.typeImage = "image/";
    }
    // Events ----------------------------------------------------------------
    /**
     * Blur event handler.
     *
     *
     * @memberOf InputFileComponent
     */
    InputFileComponent.prototype.onBlur = function () {
        this.isInputActive = false;
    };
    /**
     * Change event handler.
     *
     * @param {*} event The event.
     *
     * @memberOf InputFileComponent
     */
    InputFileComponent.prototype.onChange = function (event) {
        this.addInputFile(event.target.files);
    };
    /**
     * Focus event handler
     *
     *
     * @memberOf InputFileComponent
     */
    InputFileComponent.prototype.onFocus = function () {
        this.isInputActive = true;
    };
    /**
     * File Drag Over event handler.
     *
     *
     * @memberOf InputFileComponent
     */
    InputFileComponent.prototype.onFileDragOver = function () {
        this.isDragOver = true;
    };
    /**
     * File Drag Leave event handler.
     *
     *
     * @memberOf InputFileComponent
     */
    InputFileComponent.prototype.onFileDragLeave = function () {
        this.isDragOver = false;
    };
    /**
     * File Drop event handler.
     *
     * @param {*} files The files.
     *
     * @memberOf InputFileComponent
     */
    InputFileComponent.prototype.onFileDrop = function (files) {
        this.isDragOver = false;
        this.addInputFile(files);
    };
    /**
     * Remove event handler.
     * Removes all files of the model.
     *
     *
     * @memberOf InputFileComponent
     */
    InputFileComponent.prototype.onRemove = function () {
        for (var _i = 0, _a = this.model; _i < _a.length; _i++) {
            var file = _a[_i];
            this.removedFileHandler(file);
        }
        this.removeHandler();
    };
    /**
     * Remove file event handler.
     *
     * @param {number} index The file.
     *
     * @memberOf InputFileComponent
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
     *
     *
     * @memberOf InputFileComponent
     */
    InputFileComponent.prototype.onUpload = function () {
        this.uploadFiles.emit();
    };
    // Public ----------------------------------------------------------------
    /**
     * Gets the text of the input.
     *
     * @returns {string}
     *
     * @memberOf InputFileComponent
     */
    InputFileComponent.prototype.getInputText = function () {
        var inputText;
        if (this.model == null || !this.model.length) {
            inputText = this.textNoFile;
        }
        else if (this.model.length < 2 && this.model[0].file != null) {
            inputText = this.model[0].file.name;
        }
        else {
            inputText = this.model.length + " " + this.textFileSelected;
        }
        return inputText;
    };
    InputFileComponent.prototype.isNotNullOrEmpty = function () {
        return this.model != null && this.model.length != null && this.model.length > 0;
    };
    // Private ---------------------------------------------------------------
    /**
     * Accepted file handler.
     *
     * @private
     * @param {File} file The file.
     *
     * @memberOf InputFileComponent
     */
    InputFileComponent.prototype.acceptedFileHandler = function (file) {
        this.acceptedFile.emit(file);
    };
    /**
     * Adds multiple files to the model.
     *
     * @private
     * @param {Array<any>} files The files.
     *
     * @memberOf InputFileComponent
     */
    InputFileComponent.prototype.addInputFile = function (files) {
        var limit = +this.inputMaxFiles;
        for (var index = 0; index < files.length; index++) {
            // Checks the limit
            if (this.model.length < limit) {
                // Checks the type
                if (this.isTypeEnabled(files[index])) {
                    var file = new file_1.File();
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
        if (this.model.length >= limit) {
            this.limitReachedHandler();
        }
    };
    /**
     * Checks if the file is an image.
     *
     * @private
     * @param {*} file The file.
     * @returns {boolean}
     *
     * @memberOf InputFileComponent
     */
    InputFileComponent.prototype.isTypeImage = function (file) {
        return file.type.startsWith(this.typeImage);
    };
    /**
     * Checks if the type of the file is enabled.
     *
     * @private
     * @param {*} file : the file.
     * @returns {boolean}
     *
     * @memberOf InputFileComponent
     */
    InputFileComponent.prototype.isTypeEnabled = function (file) {
        var enabled = this.inputAccept == null;
        if (this.inputAccept) {
            var accept = this.inputAccept.replace('*', '');
            var types = accept.split(',');
            for (var _i = 0, types_1 = types; _i < types_1.length; _i++) {
                var type = types_1[_i];
                if (file.type.startsWith(type) || (type.charAt(0) == '.' && file.name.endsWith(type))) {
                    enabled = true;
                    break;
                }
            }
        }
        return enabled;
    };
    /**
     * Limit reached handler.
     *
     * @private
     *
     * @memberOf InputFileComponent
     */
    InputFileComponent.prototype.limitReachedHandler = function () {
        this.dropZoneDisabled = true;
        this.limitReached.emit();
    };
    /**
     * Read file handler.
     *
     * @private
     * @param {*} image The file.
     *
     * @memberOf InputFileComponent
     */
    InputFileComponent.prototype.readFileHandler = function (file, image) {
        var fr = new FileReader();
        fr.onload = function () {
            file.icon = fr.result;
        };
        fr.readAsDataURL(image);
    };
    /**
     * Rejected file handler.
     *
     * @private
     * @param {File} file The file.
     *
     * @memberOf InputFileComponent
     */
    InputFileComponent.prototype.rejectedFileHandler = function (file) {
        this.rejectedFile.emit(file);
    };
    /**
     * Removed file handler.
     *
     * @private
     * @param {File} file The file.
     *
     * @memberOf InputFileComponent
     */
    InputFileComponent.prototype.removedFileHandler = function (file) {
        this.removedFile.emit(file);
    };
    /**
     * Remove handler.
     *
     * @private
     *
     * @memberOf InputFileComponent
     */
    InputFileComponent.prototype.removeHandler = function () {
        this.dropZoneDisabled = false;
        this.inputFile.nativeElement.value = "";
        this.model = new Array();
    };
    /**
     * Sets the icon of the file.
     *
     * @private
     * @param {File} file The file.
     * @param {*} inputFile The input file.
     *
     * @memberOf InputFileComponent
     */
    InputFileComponent.prototype.setFileIcon = function (file, inputFile) {
        var icon;
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
     *
     * @private
     * @param {*} file The file.
     * @returns {string}
     *
     * @memberOf InputFileComponent
     */
    InputFileComponent.prototype.setSize = function (file, inputFile) {
        var size = Math.round(inputFile.size / 1024);
        file.size = '(' + size + ' KB)';
    };
    return InputFileComponent;
}());
InputFileComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'input-file',
                style: "\n.input-file .drop-zone {\n  border: 1px dashed #66afe9;\n  border-radius: 5px;\n  background-image: url('../img/dropzone.png');\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 128px;\n  height: 320px;\n  margin-bottom: 15px;\n}\n.input-file .drop-zone .drop-zone-message {\n  text-align: center;\n}\n.input-file .file-preview {\n  border-radius: 5px;\n  border: 1px solid #ddd;\n  margin-bottom: 5px;\n  overflow: auto;\n  padding: 5px;\n  width: 100%;\n}\n.input-file .file-preview .file-preview-item {\n  border: 1px solid #ddd;\n  box-shadow: 1px 1px 5px 0 #a2958a;\n  display: table;\n  float: left;\n  margin: 8px;Urls: [ '../styles/style.css' ]\n  padding: 6px;\n  position: relative;\n  text-align: center;\n}\n.input-file .file-preview .file-preview-item .file-content {\n  height: 170px;\n}\n.input-file .file-preview .file-preview-item .file-content img {\n  height: 160px;\n  width: auto;\n}\n.input-file .file-preview .file-preview-item .file-thumbnail-footer {\n  height: 70px;\n  padding-top: 10px;\n}\n.input-file .file-preview .file-preview-item .file-thumbnail-footer .file-footer-caption {\n  color: #777;\n  display: block;\n  font-size: 11px;\n  margin: 5px auto;\n  overflow: hidden;\n  padding-top: 4px;\n  text-align: center;\n  text-overflow: ellipsis;\n  width: 160px;\n  white-space: nowrap;\n}\n.input-file .file-preview .file-preview-item:hover {\n  box-shadow: 3px 3px 5px 0 #333;\n}\n.input-file .file-caption-main {\n  width: 100%;\n}\n.input-file .file-caption-main .input-active {\n  background-color: #fff;\n  border-color: #5cb3fd;\n  color: #464a4c;\n  outline: 0;\n}\n.input-file .file-caption-main .file-caption-name:focus {\n  outline: 0;\n}\n.input-file .file-caption-main .form-control,\n.input-file .file-caption-main .btn-action {\n  z-index: 10;\n}\n.input-file .file-caption-main .btn-file input[type=file] {\n  background: none;\n  cursor: inherit;\n  display: block;\n  min-width: 100%;\n  min-height: 100%;\n  opacity: 0;\n  position: absolute;\n  right: 0;\n  text-align: right;\n  top: 0;\n}",
                template: "\n<div class=\"row input-file\" dropZone [disabled]=\"dropZoneDisabled\" (fileDragOver)=\"onFileDragOver()\" (fileDragLeave)=\"onFileDragLeave()\" (fileDrop)=\"onFileDrop($event)\">\n    <div class=\"col-12 drop-zone\" *ngIf=\"isDragOver\">\n        <div class=\"drop-zone-message\">\n        </div>\n    </div>\n    <div class=\"col-12\" *ngIf=\"isNotNullOrEmpty() && !isDragOver\">\n        <div class=\"file-preview\">\n            <button type=\"button\" class=\"close\" (click)=\"onRemove()\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n            <div class=\"file-preview-container\">\n                <div class=\"file-preview-item\" *ngFor=\"let file of model; let i = index\">\n                    <button type=\"button\" class=\"close\" (click)=\"onRemoveFile(i)\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                    <div class=\"file-content\">\n                        <img src=\"{{ file.icon }}\" *ngIf=\"file.icon\"> \n                    </div>\n                    <div class=\"file-thumbnail-footer\">\n                        <div class=\"file-footer-caption\" *ngIf=\"file.file\">\n                            <p>{{ file.file.name }}</p>\n                            <samp>{{ file.size }}</samp>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-12 input-group file-caption-main\" *ngIf=\"!isDragOver\">\n        <div class=\"form-control\" [ngClass]=\"{'input-active': isInputActive}\">\n            <div class=\"file-caption-name\" tabindex=\"500\">\n                <i class=\"fa fa-file-o\" aria-hidden=\"true\" *ngIf=\"isNotNullOrEmpty()\"></i>\n                <span>{{ getInputText() }}</span>\n            </div>\n        </div>\n        <span class=\"input-group-btn\">\n            <button class=\"btn btn-secondary btn-action\" type=\"button\" title=\"Clear selected files\" tabindex=\"500\" (click)=\"onRemove()\" *ngIf=\"isNotNullOrEmpty()\">\n                <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>  \n                <span class=\"hidden-xs-down\">{{ textRemove }}</span>\n            </button>\n        </span>\n        <span class=\"input-group-btn\" *ngIf=\"!disableUpload\">\n            <button class=\"btn btn-secondary btn-action\" type=\"button\" title=\"Upload selected files\" tabindex=\"500\" (click)=\"onUpload()\" *ngIf=\"isNotNullOrEmpty()\">\n                <i class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i>  \n                <span class=\"hidden-xs-down\">{{ textUpload }}</span>\n            </button>\n        </span>\n        <span class=\"input-group-btn\">\n            <div class=\"btn btn-primary btn-file\" tabindex=\"500\" [ngClass]=\"{'disabled': dropZoneDisabled}\">\n                <i class=\"fa fa-folder-open-o\" aria-hidden=\"true\"></i>\n                <span class=\"hidden-xs-down\">{{ textBrowse\u00A0}}</span>\n                <input id=\"{{ inputId }}\" class=\"file\" name=\"input-file-name\" type=\"file\" \n                    accept=\"{{ inputAccept }}\" \n                    [attr.multiple]=\"inputMaxFiles > 1 ? true : null\" \n                    [disabled]=\"dropZoneDisabled\"\n                    (change)=\"onChange($event)\" \n                    (blur)=\"onBlur()\" \n                    (focus)=\"onFocus()\" \n                    #inputFile>\n            </div>\n        </span>\n    </div>\n</div>"
            },] },
];
/** @nocollapse */
InputFileComponent.ctorParameters = function () { return []; };
InputFileComponent.propDecorators = {
    'inputId': [{ type: core_1.Input },],
    'inputAccept': [{ type: core_1.Input },],
    'disableUpload': [{ type: core_1.Input },],
    'inputMaxFiles': [{ type: core_1.Input },],
    'model': [{ type: core_1.Input },],
    'textBrowse': [{ type: core_1.Input },],
    'textFileSelected': [{ type: core_1.Input },],
    'textNoFile': [{ type: core_1.Input },],
    'textRemove': [{ type: core_1.Input },],
    'textUpload': [{ type: core_1.Input },],
    'limitReached': [{ type: core_1.Output },],
    'acceptedFile': [{ type: core_1.Output },],
    'rejectedFile': [{ type: core_1.Output },],
    'removedFile': [{ type: core_1.Output },],
    'uploadFiles': [{ type: core_1.Output },],
    'inputFile': [{ type: core_1.ViewChild, args: ['inputFile',] },],
};
exports.InputFileComponent = InputFileComponent;
//# sourceMappingURL=input-file.component.js.map