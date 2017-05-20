(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/forms"), require("@angular/platform-browser"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/forms", "@angular/platform-browser"], factory);
	else if(typeof exports === 'object')
		exports["ngx-input-file"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/platform-browser"));
	else
		root["ngx-input-file"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/platform-browser"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_23__, __WEBPACK_EXTERNAL_MODULE_24__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
// CommonJS / Node have global context exposed as "global" variable.
// We don't want to include the whole node.d.ts this this compilation unit so we'll just fake
// the global "global" var for now.
var __window = typeof window !== 'undefined' && window;
var __self = typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' &&
    self instanceof WorkerGlobalScope && self;
var __global = typeof global !== 'undefined' && global;
var _root = __window || __global || __self;
exports.root = _root;
// Workaround Closure Compiler restriction: The body of a goog.module cannot use throw.
// This is needed when used with angular/tsickle which inserts a goog.module statement.
// Wrap in IIFE
(function () {
    if (!_root) {
        throw new Error('RxJS could not find any global context (window, self, global)');
    }
})();
//# sourceMappingURL=root.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var file_1 = __webpack_require__(11);
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
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], InputFileComponent.prototype, "inputId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], InputFileComponent.prototype, "inputAccept", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], InputFileComponent.prototype, "disableUpload", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], InputFileComponent.prototype, "inputMaxFiles", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], InputFileComponent.prototype, "model", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], InputFileComponent.prototype, "textBrowse", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], InputFileComponent.prototype, "textFileSelected", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], InputFileComponent.prototype, "textNoFile", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], InputFileComponent.prototype, "textRemove", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], InputFileComponent.prototype, "textUpload", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], InputFileComponent.prototype, "limitReached", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], InputFileComponent.prototype, "acceptedFile", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], InputFileComponent.prototype, "rejectedFile", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], InputFileComponent.prototype, "removedFile", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], InputFileComponent.prototype, "uploadFiles", void 0);
__decorate([
    core_1.ViewChild('inputFile'),
    __metadata("design:type", Object)
], InputFileComponent.prototype, "inputFile", void 0);
InputFileComponent = __decorate([
    core_1.Component({
        selector: 'input-file',
        style: "\n.input-file .drop-zone {\n  border: 1px dashed #66afe9;\n  border-radius: 5px;\n  background-image: url('../img/dropzone.png');\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 128px;\n  height: 320px;\n  margin-bottom: 15px;\n}\n.input-file .drop-zone .drop-zone-message {\n  text-align: center;\n}\n.input-file .file-preview {\n  border-radius: 5px;\n  border: 1px solid #ddd;\n  margin-bottom: 5px;\n  overflow: auto;\n  padding: 5px;\n  width: 100%;\n}\n.input-file .file-preview .file-preview-item {\n  border: 1px solid #ddd;\n  box-shadow: 1px 1px 5px 0 #a2958a;\n  display: table;\n  float: left;\n  margin: 8px;Urls: [ '../styles/style.css' ]\n  padding: 6px;\n  position: relative;\n  text-align: center;\n}\n.input-file .file-preview .file-preview-item .file-content {\n  height: 170px;\n}\n.input-file .file-preview .file-preview-item .file-content img {\n  height: 160px;\n  width: auto;\n}\n.input-file .file-preview .file-preview-item .file-thumbnail-footer {\n  height: 70px;\n  padding-top: 10px;\n}\n.input-file .file-preview .file-preview-item .file-thumbnail-footer .file-footer-caption {\n  color: #777;\n  display: block;\n  font-size: 11px;\n  margin: 5px auto;\n  overflow: hidden;\n  padding-top: 4px;\n  text-align: center;\n  text-overflow: ellipsis;\n  width: 160px;\n  white-space: nowrap;\n}\n.input-file .file-preview .file-preview-item:hover {\n  box-shadow: 3px 3px 5px 0 #333;\n}\n.input-file .file-caption-main {\n  width: 100%;\n}\n.input-file .file-caption-main .input-active {\n  background-color: #fff;\n  border-color: #5cb3fd;\n  color: #464a4c;\n  outline: 0;\n}\n.input-file .file-caption-main .file-caption-name:focus {\n  outline: 0;\n}\n.input-file .file-caption-main .form-control,\n.input-file .file-caption-main .btn-action {\n  z-index: 10;\n}\n.input-file .file-caption-main .btn-file input[type=file] {\n  background: none;\n  cursor: inherit;\n  display: block;\n  min-width: 100%;\n  min-height: 100%;\n  opacity: 0;\n  position: absolute;\n  right: 0;\n  text-align: right;\n  top: 0;\n}",
        template: "\n<div class=\"row input-file\" dropZone [disabled]=\"dropZoneDisabled\" (fileDragOver)=\"onFileDragOver()\" (fileDragLeave)=\"onFileDragLeave()\" (fileDrop)=\"onFileDrop($event)\">\n    <div class=\"col-12 drop-zone\" *ngIf=\"isDragOver\">\n        <div class=\"drop-zone-message\">\n        </div>\n    </div>\n    <div class=\"col-12\" *ngIf=\"isNotNullOrEmpty() && !isDragOver\">\n        <div class=\"file-preview\">\n            <button type=\"button\" class=\"close\" (click)=\"onRemove()\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n            <div class=\"file-preview-container\">\n                <div class=\"file-preview-item\" *ngFor=\"let file of model; let i = index\">\n                    <button type=\"button\" class=\"close\" (click)=\"onRemoveFile(i)\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                    <div class=\"file-content\">\n                        <img src=\"{{ file.icon }}\" *ngIf=\"file.icon\"> \n                    </div>\n                    <div class=\"file-thumbnail-footer\">\n                        <div class=\"file-footer-caption\" *ngIf=\"file.file\">\n                            <p>{{ file.file.name }}</p>\n                            <samp>{{ file.size }}</samp>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-12 input-group file-caption-main\" *ngIf=\"!isDragOver\">\n        <div class=\"form-control\" [ngClass]=\"{'input-active': isInputActive}\">\n            <div class=\"file-caption-name\" tabindex=\"500\">\n                <i class=\"fa fa-file-o\" aria-hidden=\"true\" *ngIf=\"isNotNullOrEmpty()\"></i>\n                <span>{{ getInputText() }}</span>\n            </div>\n        </div>\n        <span class=\"input-group-btn\">\n            <button class=\"btn btn-secondary btn-action\" type=\"button\" title=\"Clear selected files\" tabindex=\"500\" (click)=\"onRemove()\" *ngIf=\"isNotNullOrEmpty()\">\n                <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>  \n                <span class=\"hidden-xs-down\">{{ textRemove }}</span>\n            </button>\n        </span>\n        <span class=\"input-group-btn\" *ngIf=\"!disableUpload\">\n            <button class=\"btn btn-secondary btn-action\" type=\"button\" title=\"Upload selected files\" tabindex=\"500\" (click)=\"onUpload()\" *ngIf=\"isNotNullOrEmpty()\">\n                <i class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i>  \n                <span class=\"hidden-xs-down\">{{ textUpload }}</span>\n            </button>\n        </span>\n        <span class=\"input-group-btn\">\n            <div class=\"btn btn-primary btn-file\" tabindex=\"500\" [ngClass]=\"{'disabled': dropZoneDisabled}\">\n                <i class=\"fa fa-folder-open-o\" aria-hidden=\"true\"></i>\n                <span class=\"hidden-xs-down\">{{ textBrowse\u00A0}}</span>\n                <input id=\"{{ inputId }}\" class=\"file\" name=\"input-file-name\" type=\"file\" \n                    accept=\"{{ inputAccept }}\" \n                    [attr.multiple]=\"inputMaxFiles > 1 ? true : null\" \n                    [disabled]=\"dropZoneDisabled\"\n                    (change)=\"onChange($event)\" \n                    (blur)=\"onBlur()\" \n                    (focus)=\"onFocus()\" \n                    #inputFile>\n            </div>\n        </span>\n    </div>\n</div>"
    }),
    __metadata("design:paramtypes", [])
], InputFileComponent);
exports.InputFileComponent = InputFileComponent;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var DropZoneDirective = (function () {
    /**
     * Creates an instance of DropZoneDirective.
     *
     * @memberOf DropZoneDirective
     */
    function DropZoneDirective() {
        this.disabled = false;
        this.fileDragOver = new core_1.EventEmitter();
        this.fileDragLeave = new core_1.EventEmitter();
        this.fileDrop = new core_1.EventEmitter();
        this.isDragOverDisabled = false;
    }
    // Events ----------------------------------------------------------------
    /**
     * Drag Over event handler.
     *
     * @param {Event} event The event.
     *
     * @memberOf DropZoneDirective
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
     *
     * @param {Event} event The event.
     *
     * @memberOf DropZoneDirective
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
     *
     * @param {*} event The event.
     *
     * @memberOf DropZoneDirective
     */
    DropZoneDirective.prototype.onDrop = function (event) {
        if (!this.disabled) {
            this.isDragOverDisabled = false;
            this.preventAndStopEventPropagation(event);
            this.fileDrop.emit(event.dataTransfer.files);
        }
    };
    // Private ---------------------------------------------------------------
    /**
     * Prevents and stops event propagration.
     *
     * @private
     * @param {Event} event The event.
     *
     * @memberOf DropZoneDirective
     */
    DropZoneDirective.prototype.preventAndStopEventPropagation = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    return DropZoneDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DropZoneDirective.prototype, "disabled", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DropZoneDirective.prototype, "fileDragOver", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DropZoneDirective.prototype, "fileDragLeave", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DropZoneDirective.prototype, "fileDrop", void 0);
__decorate([
    core_1.HostListener('dragover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], DropZoneDirective.prototype, "onDragOver", null);
__decorate([
    core_1.HostListener('dragleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], DropZoneDirective.prototype, "onDragLeave", null);
__decorate([
    core_1.HostListener('drop', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DropZoneDirective.prototype, "onDrop", null);
DropZoneDirective = __decorate([
    core_1.Directive({
        selector: '[dropZone]'
    }),
    __metadata("design:paramtypes", [])
], DropZoneDirective);
exports.DropZoneDirective = DropZoneDirective;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var Observable_1 = __webpack_require__(13);
var InputFileRepository = (function () {
    function InputFileRepository() {
        this.postMethod = 'POST';
    }
    InputFileRepository.prototype.setOptions = function (options) {
        this.options = options;
    };
    /**
     * Posts a file.
     *
     * @param {*} file
     * @param {string} apiUrl
     * @returns {Observable<any>}
     *
     * @memberof InputFileRepository
     */
    InputFileRepository.prototype.post = function (file, apiUrl) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            var authToken = null;
            var authTokenHeader = null;
            if (_this.options.authToken != null && _this.options.authTokenHeader != null) {
                authToken = localStorage.getItem(_this.options.authToken);
                authTokenHeader = _this.options.authTokenHeader;
            }
            var formData = _this.buildFormData(file);
            var xhr = new XMLHttpRequest();
            xhr.upload.onprogress = function (event) {
                var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
            };
            xhr.onload = function () {
                var response = observer.next(JSON.parse(xhr.response));
                observer.complete();
            };
            xhr.onerror = function () {
                observer.error(xhr.response);
            };
            xhr.onabort = function () {
                observer.error();
            };
            xhr.open(_this.postMethod, apiUrl, true);
            if (_this.options.authToken != null && _this.options.authTokenHeader != null) {
                xhr.setRequestHeader(authTokenHeader, authToken);
            }
            xhr.send(formData);
        });
    };
    /**
     * Builds the form data.
     *
     * @private
     * @param {*} file
     * @returns {FormData}
     *
     * @memberof InputFileRepository
     */
    InputFileRepository.prototype.buildFormData = function (file) {
        var formData = new FormData();
        formData.append("file", file.file, file.file.name);
        return formData;
    };
    return InputFileRepository;
}());
InputFileRepository = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], InputFileRepository);
exports.InputFileRepository = InputFileRepository;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) { throw err; },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__(1);
var Symbol = root_1.root.Symbol;
exports.rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function') ?
    Symbol.for('rxSubscriber') : '@@rxSubscriber';
/**
 * @deprecated use rxSubscriber instead
 */
exports.$$rxSubscriber = exports.rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// typeof any so that it we don't have to cast when comparing a result to the error object
exports.errorObject = { e: {} };
//# sourceMappingURL=errorObject.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(23);
var platform_browser_1 = __webpack_require__(24);
var drop_zone_directive_1 = __webpack_require__(3);
var input_file_component_1 = __webpack_require__(2);
var input_file_repository_1 = __webpack_require__(4);
var InputFileModule = (function () {
    function InputFileModule(inputFileRepository) {
        this.inputFileRepository = inputFileRepository;
    }
    return InputFileModule;
}());
InputFileModule = __decorate([
    core_1.NgModule({
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
    }),
    __metadata("design:paramtypes", [input_file_repository_1.InputFileRepository])
], InputFileModule);
exports.InputFileModule = InputFileModule;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InputFileOptions = (function () {
    function InputFileOptions(authToken, authTokenHeader) {
        this.authToken = authToken;
        this.authTokenHeader = authTokenHeader;
    }
    return InputFileOptions;
}());
exports.InputFileOptions = InputFileOptions;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var File = (function () {
    function File() {
    }
    return File;
}());
exports.File = File;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var drop_zone_directive_1 = __webpack_require__(3);
exports.DropZoneDirective = drop_zone_directive_1.DropZoneDirective;
var input_file_component_1 = __webpack_require__(2);
exports.InputFileComponent = input_file_component_1.InputFileComponent;
var input_file_module_1 = __webpack_require__(9);
exports.InputFileModule = input_file_module_1.InputFileModule;
var input_file_options_1 = __webpack_require__(10);
exports.InputFileOptions = input_file_options_1.InputFileOptions;
var input_file_repository_1 = __webpack_require__(4);
exports.InputFileRepository = input_file_repository_1.InputFileRepository;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__(1);
var toSubscriber_1 = __webpack_require__(20);
var observable_1 = __webpack_require__(16);
/**
 * A representation of any set of values over any amount of time. This the most basic building block
 * of RxJS.
 *
 * @class Observable<T>
 */
var Observable = (function () {
    /**
     * @constructor
     * @param {Function} subscribe the function that is  called when the Observable is
     * initially subscribed to. This function is given a Subscriber, to which new values
     * can be `next`ed, or an `error` method can be called to raise an error, or
     * `complete` can be called to notify of a successful completion.
     */
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    /**
     * Creates a new Observable, with this Observable as the source, and the passed
     * operator defined as the new observable's operator.
     * @method lift
     * @param {Operator} operator the operator defining the operation to take on the observable
     * @return {Observable} a new observable with the Operator applied
     */
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            operator.call(sink, this.source);
        }
        else {
            sink.add(this._trySubscribe(sink));
        }
        if (sink.syncErrorThrowable) {
            sink.syncErrorThrowable = false;
            if (sink.syncErrorThrown) {
                throw sink.syncErrorValue;
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            sink.syncErrorThrown = true;
            sink.syncErrorValue = err;
            sink.error(err);
        }
    };
    /**
     * @method forEach
     * @param {Function} next a handler for each value emitted by the observable
     * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
     * @return {Promise} a promise that either resolves on observable completion or
     *  rejects with the handled error
     */
    Observable.prototype.forEach = function (next, PromiseCtor) {
        var _this = this;
        if (!PromiseCtor) {
            if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
                PromiseCtor = root_1.root.Rx.config.Promise;
            }
            else if (root_1.root.Promise) {
                PromiseCtor = root_1.root.Promise;
            }
        }
        if (!PromiseCtor) {
            throw new Error('no Promise impl found');
        }
        return new PromiseCtor(function (resolve, reject) {
            // Must be declared in a separate statement to avoid a RefernceError when
            // accessing subscription below in the closure due to Temporal Dead Zone.
            var subscription;
            subscription = _this.subscribe(function (value) {
                if (subscription) {
                    // if there is a subscription, then we can surmise
                    // the next handling is asynchronous. Any errors thrown
                    // need to be rejected explicitly and unsubscribe must be
                    // called manually
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscription.unsubscribe();
                    }
                }
                else {
                    // if there is NO subscription, then we're getting a nexted
                    // value synchronously during subscription. We can just call it.
                    // If it errors, Observable's `subscribe` will ensure the
                    // unsubscription logic is called, then synchronously rethrow the error.
                    // After that, Promise will trap the error and send it
                    // down the rejection path.
                    next(value);
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        return this.source.subscribe(subscriber);
    };
    /**
     * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
     * @method Symbol.observable
     * @return {Observable} this instance of the observable
     */
    Observable.prototype[observable_1.observable] = function () {
        return this;
    };
    // HACK: Since TypeScript inherits static properties too, we have to
    // fight against TypeScript here so Subject can have a different static create signature
    /**
     * Creates a new cold Observable by calling the Observable constructor
     * @static true
     * @owner Observable
     * @method create
     * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
     * @return {Observable} a new cold observable
     */
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;
//# sourceMappingURL=Observable.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isFunction_1 = __webpack_require__(8);
var Subscription_1 = __webpack_require__(15);
var Observer_1 = __webpack_require__(5);
var rxSubscriber_1 = __webpack_require__(6);
/**
 * Implements the {@link Observer} interface and extends the
 * {@link Subscription} class. While the {@link Observer} is the public API for
 * consuming the values of an {@link Observable}, all Observers get converted to
 * a Subscriber, in order to provide Subscription-like capabilities such as
 * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
 * implementing operators, but it is rarely used as a public API.
 *
 * @class Subscriber<T>
 */
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    /**
     * @param {Observer|function(value: T): void} [destinationOrNext] A partially
     * defined Observer or a `next` callback function.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     */
    function Subscriber(destinationOrNext, error, complete) {
        _super.call(this);
        this.syncErrorValue = null;
        this.syncErrorThrown = false;
        this.syncErrorThrowable = false;
        this.isStopped = false;
        switch (arguments.length) {
            case 0:
                this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        this.destination = destinationOrNext;
                        this.destination.add(this);
                    }
                    else {
                        this.syncErrorThrowable = true;
                        this.destination = new SafeSubscriber(this, destinationOrNext);
                    }
                    break;
                }
            default:
                this.syncErrorThrowable = true;
                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
                break;
        }
    }
    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () { return this; };
    /**
     * A static factory for a Subscriber, given a (potentially partial) definition
     * of an Observer.
     * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
     * Observer represented by the given arguments.
     */
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    /**
     * The {@link Observer} callback to receive notifications of type `next` from
     * the Observable, with a value. The Observable may call this method 0 or more
     * times.
     * @param {T} [value] The `next` value.
     * @return {void}
     */
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    /**
     * The {@link Observer} callback to receive notifications of type `error` from
     * the Observable, with an attached {@link Error}. Notifies the Observer that
     * the Observable has experienced an error condition.
     * @param {any} [err] The `error` exception.
     * @return {void}
     */
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    /**
     * The {@link Observer} callback to receive a valueless notification of type
     * `complete` from the Observable. Notifies the Observer that the Observable
     * has finished sending push-based notifications.
     * @return {void}
     */
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        this._parent = null;
        this._parents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parent = _parent;
        this._parents = _parents;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        _super.call(this);
        this._parentSubscriber = _parentSubscriber;
        var next;
        var context = this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer_1.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = this.unsubscribe.bind(this);
            }
        }
        this._context = context;
        this._next = next;
        this._error = error;
        this._complete = complete;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._error) {
                if (!_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                throw err;
            }
            else {
                _parentSubscriber.syncErrorValue = err;
                _parentSubscriber.syncErrorThrown = true;
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            throw err;
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            parent.syncErrorValue = err;
            parent.syncErrorThrown = true;
            return true;
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));
//# sourceMappingURL=Subscriber.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isArray_1 = __webpack_require__(18);
var isObject_1 = __webpack_require__(19);
var isFunction_1 = __webpack_require__(8);
var tryCatch_1 = __webpack_require__(21);
var errorObject_1 = __webpack_require__(7);
var UnsubscriptionError_1 = __webpack_require__(17);
/**
 * Represents a disposable resource, such as the execution of an Observable. A
 * Subscription has one important method, `unsubscribe`, that takes no argument
 * and just disposes the resource held by the subscription.
 *
 * Additionally, subscriptions may be grouped together through the `add()`
 * method, which will attach a child Subscription to the current Subscription.
 * When a Subscription is unsubscribed, all its children (and its grandchildren)
 * will be unsubscribed as well.
 *
 * @class Subscription
 */
var Subscription = (function () {
    /**
     * @param {function(): void} [unsubscribe] A function describing how to
     * perform the disposal of resources when the `unsubscribe` method is called.
     */
    function Subscription(unsubscribe) {
        /**
         * A flag to indicate whether this Subscription has already been unsubscribed.
         * @type {boolean}
         */
        this.closed = false;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    /**
     * Disposes the resources held by the subscription. May, for instance, cancel
     * an ongoing Observable execution or cancel any other type of work that
     * started when the Subscription was created.
     * @return {void}
     */
    Subscription.prototype.unsubscribe = function () {
        var hasErrors = false;
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parent = _a._parent, _parents = _a._parents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parent = null;
        this._parents = null;
        // null out _subscriptions first so any child subscriptions that attempt
        // to remove themselves from this subscription will noop
        this._subscriptions = null;
        var index = -1;
        var len = _parents ? _parents.length : 0;
        // if this._parent is null, then so is this._parents, and we
        // don't have to remove ourselves from any parent subscriptions.
        while (_parent) {
            _parent.remove(this);
            // if this._parents is null or index >= len,
            // then _parent is set to null, and the loop exits
            _parent = ++index < len && _parents[index] || null;
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
            if (trial === errorObject_1.errorObject) {
                hasErrors = true;
                errors = errors || (errorObject_1.errorObject.e instanceof UnsubscriptionError_1.UnsubscriptionError ?
                    flattenUnsubscriptionErrors(errorObject_1.errorObject.e.errors) : [errorObject_1.errorObject.e]);
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            index = -1;
            len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
                    if (trial === errorObject_1.errorObject) {
                        hasErrors = true;
                        errors = errors || [];
                        var err = errorObject_1.errorObject.e;
                        if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(err.errors));
                        }
                        else {
                            errors.push(err);
                        }
                    }
                }
            }
        }
        if (hasErrors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    /**
     * Adds a tear down to be called during the unsubscribe() of this
     * Subscription.
     *
     * If the tear down being added is a subscription that is already
     * unsubscribed, is the same reference `add` is being called on, or is
     * `Subscription.EMPTY`, it will not be added.
     *
     * If this subscription is already in an `closed` state, the passed
     * tear down logic will be executed immediately.
     *
     * @param {TeardownLogic} teardown The additional logic to execute on
     * teardown.
     * @return {Subscription} Returns the Subscription used or created to be
     * added to the inner subscriptions list. This Subscription can be used with
     * `remove()` to remove the passed teardown logic from the inner subscriptions
     * list.
     */
    Subscription.prototype.add = function (teardown) {
        if (!teardown || (teardown === Subscription.EMPTY)) {
            return Subscription.EMPTY;
        }
        if (teardown === this) {
            return this;
        }
        var subscription = teardown;
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (typeof subscription._addParent !== 'function' /* quack quack */) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default:
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
        var subscriptions = this._subscriptions || (this._subscriptions = []);
        subscriptions.push(subscription);
        subscription._addParent(this);
        return subscription;
    };
    /**
     * Removes a Subscription from the internal list of subscriptions that will
     * unsubscribe during the unsubscribe process of this Subscription.
     * @param {Subscription} subscription The subscription to remove.
     * @return {void}
     */
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.prototype._addParent = function (parent) {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        if (!_parent || _parent === parent) {
            // If we don't have a parent, or the new parent is the same as the
            // current parent, then set this._parent to the new parent.
            this._parent = parent;
        }
        else if (!_parents) {
            // If there's already one parent, but not multiple, allocate an Array to
            // store the rest of the parent Subscriptions.
            this._parents = [parent];
        }
        else if (_parents.indexOf(parent) === -1) {
            // Only add the new parent to the _parents list if it's not already there.
            _parents.push(parent);
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__(1);
function getSymbolObservable(context) {
    var $$observable;
    var Symbol = context.Symbol;
    if (typeof Symbol === 'function') {
        if (Symbol.observable) {
            $$observable = Symbol.observable;
        }
        else {
            $$observable = Symbol('observable');
            Symbol.observable = $$observable;
        }
    }
    else {
        $$observable = '@@observable';
    }
    return $$observable;
}
exports.getSymbolObservable = getSymbolObservable;
exports.observable = getSymbolObservable(root_1.root);
/**
 * @deprecated use observable instead
 */
exports.$$observable = exports.observable;
//# sourceMappingURL=observable.js.map

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when one or more errors have occurred during the
 * `unsubscribe` of a {@link Subscription}.
 */
var UnsubscriptionError = (function (_super) {
    __extends(UnsubscriptionError, _super);
    function UnsubscriptionError(errors) {
        _super.call(this);
        this.errors = errors;
        var err = Error.call(this, errors ?
            errors.length + " errors occurred during unsubscription:\n  " + errors.map(function (err, i) { return ((i + 1) + ") " + err.toString()); }).join('\n  ') : '');
        this.name = err.name = 'UnsubscriptionError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return UnsubscriptionError;
}(Error));
exports.UnsubscriptionError = UnsubscriptionError;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
//# sourceMappingURL=isArray.js.map

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isObject(x) {
    return x != null && typeof x === 'object';
}
exports.isObject = isObject;
//# sourceMappingURL=isObject.js.map

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Subscriber_1 = __webpack_require__(14);
var rxSubscriber_1 = __webpack_require__(6);
var Observer_1 = __webpack_require__(5);
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
            return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
exports.toSubscriber = toSubscriber;
//# sourceMappingURL=toSubscriber.js.map

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var errorObject_1 = __webpack_require__(7);
var tryCatchTarget;
function tryCatcher() {
    try {
        return tryCatchTarget.apply(this, arguments);
    }
    catch (e) {
        errorObject_1.errorObject.e = e;
        return errorObject_1.errorObject;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}
exports.tryCatch = tryCatch;
;
//# sourceMappingURL=tryCatch.js.map

/***/ }),
/* 22 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_23__;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_24__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=ngx-input-file.umd.js.map