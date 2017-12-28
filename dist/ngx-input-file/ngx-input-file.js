import { Component, Directive, EventEmitter, HostListener, Injectable, Input, NgModule, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Observable as Observable$1 } from 'rxjs/Observable';

class DropZoneDirective {
    constructor() {
        this.disabled = false;
        this.fileDragOver = new EventEmitter();
        this.fileDragLeave = new EventEmitter();
        this.fileDrop = new EventEmitter();
        this.isDragOverDisabled = false;
    }
    /**
     * Drag Over event handler.
     * @param {?} event
     * @return {?}
     */
    onDragOver(event) {
        this.preventAndStopEventPropagation(event);
        if (!this.isDragOverDisabled && !this.disabled) {
            this.isDragOverDisabled = true;
            this.fileDragOver.emit();
        }
    }
    /**
     * Drag Leave event handler.
     * @param {?} event
     * @return {?}
     */
    onDragLeave(event) {
        this.preventAndStopEventPropagation(event);
        if (this.isDragOverDisabled && !this.disabled) {
            this.isDragOverDisabled = false;
            this.fileDragLeave.emit();
        }
    }
    /**
     * Drop event handler.
     * @param {?} event
     * @return {?}
     */
    onDrop(event) {
        if (!this.disabled) {
            this.isDragOverDisabled = false;
            this.preventAndStopEventPropagation(event);
            this.fileDrop.emit(event.dataTransfer.files);
        }
    }
    /**
     * Prevents and stops event propagration.
     * @param {?} event
     * @return {?}
     */
    preventAndStopEventPropagation(event) {
        event.preventDefault();
        event.stopPropagation();
    }
}
DropZoneDirective.decorators = [
    { type: Directive, args: [{
                selector: '[dropZone]'
            },] },
];
/**
 * @nocollapse
 */
DropZoneDirective.ctorParameters = () => [];
DropZoneDirective.propDecorators = {
    'disabled': [{ type: Input },],
    'fileDragOver': [{ type: Output },],
    'fileDragLeave': [{ type: Output },],
    'fileDrop': [{ type: Output },],
    'onDragOver': [{ type: HostListener, args: ['dragover', ['$event'],] },],
    'onDragLeave': [{ type: HostListener, args: ['dragleave', ['$event'],] },],
    'onDrop': [{ type: HostListener, args: ['drop', ['$event'],] },],
};

class File {
}

class InputFileComponent {
    constructor() {
        this.disableUpload = false;
        this.inputMaxFiles = 1;
        this.minimal = false;
        this.model = new Array();
        this.textBrowse = 'Browse';
        this.textFileSelected = 'files selected';
        this.textNoFile = 'No file selected';
        this.textRemove = 'Remove';
        this.textUpload = 'Upload';
        this.limitReached = new EventEmitter();
        this.acceptedFile = new EventEmitter();
        this.rejectedFile = new EventEmitter();
        this.removedFile = new EventEmitter();
        this.uploadFiles = new EventEmitter();
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
    onBlur() {
        this.isInputActive = false;
    }
    /**
     * Change event handler.
     * @param {?} event
     * @return {?}
     */
    onChange(event) {
        this.addInputFile(event.target.files);
    }
    /**
     * Focus event handler
     * @return {?}
     */
    onFocus() {
        this.isInputActive = true;
    }
    /**
     * File Drag Over event handler.
     * @return {?}
     */
    onFileDragOver() {
        this.isDragOver = true;
    }
    /**
     * File Drag Leave event handler.
     * @return {?}
     */
    onFileDragLeave() {
        this.isDragOver = false;
    }
    /**
     * File Drop event handler.
     * @param {?} files
     * @return {?}
     */
    onFileDrop(files) {
        this.isDragOver = false;
        this.addInputFile(files);
    }
    /**
     * Remove event handler.
     * Removes all files of the model.
     * @return {?}
     */
    onRemove() {
        for (const /** @type {?} */ file of this.model) {
            this.removedFileHandler(file);
        }
        this.removeHandler();
    }
    /**
     * Remove file event handler.
     * @param {?} index
     * @return {?}
     */
    onRemoveFile(index) {
        this.removedFileHandler(this.model[index]);
        this.model.splice(index, 1);
        this.dropZoneDisabled = false;
        if (!this.model.length) {
            this.removeHandler();
        }
    }
    /**
     * Upload event handler;
     * @return {?}
     */
    onUpload() {
        this.uploadFiles.emit();
    }
    /**
     * Gets the text of the input.
     * @return {?}
     */
    getInputText() {
        let /** @type {?} */ inputText;
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
    }
    /**
     * Checks if the model is null or empty.
     * @return {?}
     */
    isNotNullOrEmpty() {
        return this.model != null && this.model.length != null && this.model.length > 0;
    }
    /**
     * Accepted file handler.
     * @param {?} file
     * @return {?}
     */
    acceptedFileHandler(file) {
        this.acceptedFile.emit(file);
    }
    /**
     * Adds multiple files to the model.
     * @param {?} files
     * @return {?}
     */
    addInputFile(files) {
        const /** @type {?} */ limit = +this.inputMaxFiles;
        for (let /** @type {?} */ index = 0; index < files.length; index++) {
            // Checks the limit
            if (this.model.length < limit) {
                // Checks the type
                if (this.isTypeEnabled(files[index])) {
                    const /** @type {?} */ file = new File();
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
    }
    /**
     * Checks if the file is an image.
     * @param {?} file
     * @return {?}
     */
    isTypeImage(file) {
        return file.type.startsWith(this.typeImage);
    }
    /**
     * Checks if the type of the file is enabled.
     * @param {?} file
     * @return {?}
     */
    isTypeEnabled(file) {
        let /** @type {?} */ enabled = this.inputAccept == null;
        if (this.inputAccept) {
            const /** @type {?} */ accept = this.inputAccept.replace('*', '');
            const /** @type {?} */ types = accept.split(',');
            for (const /** @type {?} */ type of types) {
                if (file.type.startsWith(type) || (type.charAt(0) === '.' && file.name.endsWith(type))) {
                    enabled = true;
                    break;
                }
            }
        }
        return enabled;
    }
    /**
     * Limit reached handler.
     * @return {?}
     */
    limitReachedHandler() {
        this.dropZoneDisabled = true;
        this.limitReached.emit();
    }
    /**
     * Read file handler.
     * @param {?} file
     * @param {?} image
     * @return {?}
     */
    readFileHandler(file, image) {
        const /** @type {?} */ fr = new FileReader();
        fr.onload = function () {
            file.icon = fr.result;
        };
        fr.readAsDataURL(image);
    }
    /**
     * Rejected file handler.
     * @param {?} file
     * @return {?}
     */
    rejectedFileHandler(file) {
        this.rejectedFile.emit(file);
    }
    /**
     * Removed file handler.
     * @param {?} file
     * @return {?}
     */
    removedFileHandler(file) {
        this.removedFile.emit(file);
    }
    /**
     * Remove handler.
     * @return {?}
     */
    removeHandler() {
        this.dropZoneDisabled = false;
        this.inputFile.nativeElement.value = '';
        this.model = new Array();
    }
    /**
     * Sets the icon of the file.
     * @param {?} file
     * @param {?} inputFile
     * @return {?}
     */
    setFileIcon(file, inputFile) {
        let /** @type {?} */ icon;
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
    }
    /**
     * Gets the size of the file to display.
     * @param {?} file
     * @param {?} inputFile
     * @return {?}
     */
    setSize(file, inputFile) {
        const /** @type {?} */ size = Math.round(inputFile.size / 1024);
        file.size = '(' + size + ' KB)';
    }
}
// #endregion
InputFileComponent.decorators = [
    { type: Component, args: [{
                selector: 'input-file',
                styles: [`
      .input-file .drop-zone {
        border: 1px dashed #a2958a;
        border-radius: 5px;
        height: 320px;
        text-align: center; }

      .input-file .drop-zone-minimal {
        border: 1px dashed #a2958a;
        border-radius: 5px;
        height: 38px; }

      .input-file .file-preview {
        border: 1px solid #ddd;
        border-radius: 5px;
        margin-bottom: 5px;
        overflow: auto;
        padding: 5px;
        width: 100%; }
        .input-file .file-preview .file-preview-item {
          border: 1px solid #ddd;
          -webkit-box-shadow: 1px 1px 5px 0 #a2958a;
                  box-shadow: 1px 1px 5px 0 #a2958a;
          display: table;
          float: left;
          margin: 8px;
          padding: 6px;
          position: relative;
          text-align: center; }
          .input-file .file-preview .file-preview-item .file-content {
            height: 170px; }
            .input-file .file-preview .file-preview-item .file-content img {
              height: 160px;
              width: auto; }
          .input-file .file-preview .file-preview-item .file-thumbnail-footer {
            height: 70px;
            padding-top: 10px; }
            .input-file .file-preview .file-preview-item .file-thumbnail-footer .file-footer-caption {
              color: #777;
              display: block;
              font-size: 11px;
              margin: 5px auto;
              overflow: hidden;
              padding-top: 4px;
              text-align: center;
              text-overflow: ellipsis;
              white-space: nowrap;
              width: 160px; }
          .input-file .file-preview .file-preview-item:hover {
            -webkit-box-shadow: 3px 3px 5px 0 #333;
                    box-shadow: 3px 3px 5px 0 #333; }

      .input-file .file-caption-main {
        width: 100%; }
        .input-file .file-caption-main .input-active {
          background-color: #fff;
          border-color: #5cb3fd;
          color: #464a4c;
          outline: 0; }
        .input-file .file-caption-main .file-caption-name :focus {
          outline: 0; }
        .input-file .file-caption-main .form-control,
        .input-file .file-caption-main .btn-action {
          z-index: 10; }

      .input-file .btn-file input[type='file'] {
        background: none;
        cursor: inherit;
        display: block;
        min-height: 100%;
        min-width: 100%;
        opacity: 0;
        position: absolute;
        right: 0;
        text-align: right;
        top: 0; }
    `],
                template: `
      <div class="row input-file" dropZone [disabled]="dropZoneDisabled" (fileDragOver)="onFileDragOver()" (fileDragLeave)="onFileDragLeave()" (fileDrop)="onFileDrop($event)">
          <ng-container *ngIf="!minimal; else minimalButton">    
              <div class="col-12" *ngIf="isDragOver">
                  <div class="drop-zone"></div>
              </div>
              <div class="col-12" *ngIf="isNotNullOrEmpty() && !isDragOver">
                  <div class="file-preview">
                      <button type="button" class="close" (click)="onRemove()">
                          <span aria-hidden="true">&times;</span>
                      </button>
                      <div class="file-preview-container">
                          <div class="file-preview-item" *ngFor="let file of model; let i = index">
                              <button type="button" class="close" (click)="onRemoveFile(i)">
                                  <span aria-hidden="true">&times;</span>
                              </button>
                              <div class="file-content">
                                  <img src="{{ file.icon }}" *ngIf="file.icon"> 
                              </div>
                              <div class="file-thumbnail-footer">
                                  <div class="file-footer-caption" *ngIf="file.file">
                                      <p>{{ file.file.name }}</p>
                                      <samp>{{ file.size }}</samp>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-12 input-group file-caption-main" *ngIf="!isDragOver">
                  <div class="form-control" [ngClass]="{'input-active': isInputActive}">
                      <div class="file-caption-name" tabindex="500">
                          <i class="fa fa-file-o" aria-hidden="true" *ngIf="isNotNullOrEmpty()"></i>
                          <span>{{ getInputText() }}</span>
                      </div>
                  </div>
                  <span class="input-group-btn">
                      <button class="btn btn-secondary btn-action" type="button" title="Clear selected files" (click)="onRemove()" *ngIf="isNotNullOrEmpty()">
                          <i class="fa fa-trash-o" aria-hidden="true"></i>  
                          <span class="d-none d-md-inline-flex">{{ textRemove }}</span>
                      </button>
                  </span>
                  <span class="input-group-btn" *ngIf="!disableUpload">
                      <button class="btn btn-secondary btn-action" type="button" title="Upload selected files" (click)="onUpload()" *ngIf="isNotNullOrEmpty()">
                          <i class="fa fa-cloud-upload" aria-hidden="true"></i>  
                          <span class="d-none d-md-inline-flex">{{ textUpload }}</span>
                      </button>
                  </span>
                  <span class="input-group-btn">
                      <div class="btn btn-primary btn-file" [ngClass]="{'disabled': dropZoneDisabled}">
                          <i class="fa fa-folder-open-o" aria-hidden="true"></i>
                          <span class="d-none d-md-inline-flex">{{ textBrowse }}</span>
                          <input id="{{ inputId }}" class="file" name="input-file-name" type="file" 
                              accept="{{ inputAccept }}" 
                              [attr.multiple]="inputMaxFiles > 1 ? true : null" 
                              [disabled]="dropZoneDisabled"
                              (change)="onChange($event)" 
                              (blur)="onBlur()" 
                              (focus)="onFocus()" 
                              #inputFile>
                      </div>
                  </span>
              </div>
          </ng-container>
          <ng-template #minimalButton>
              <div class="col-12" *ngIf="isDragOver; else minimalInput">
                  <div class="drop-zone-minimal"></div>
              </div>
              <ng-template #minimalInput>
                  <div class="col-12">
                      <div class="btn btn-primary btn-file" [ngClass]="{'disabled': dropZoneDisabled}">
                          <span class="d-none d-md-inline-flex">{{ textBrowse }}</span>
                          <input id="{{ inputId }}" class="file" name="input-file-name" type="file" 
                              accept="{{ inputAccept }}" 
                              [attr.multiple]="inputMaxFiles > 1 ? true : null" 
                              [disabled]="dropZoneDisabled"
                              (change)="onChange($event)" 
                              (blur)="onBlur()" 
                              (focus)="onFocus()" 
                              #inputFile>
                      </div>
                  </div>
              </ng-template>
          </ng-template>
      </div>
    `
            },] },
];
/**
 * @nocollapse
 */
InputFileComponent.ctorParameters = () => [];
InputFileComponent.propDecorators = {
    'inputId': [{ type: Input },],
    'inputAccept': [{ type: Input },],
    'disableUpload': [{ type: Input },],
    'inputMaxFiles': [{ type: Input },],
    'minimal': [{ type: Input },],
    'model': [{ type: Input },],
    'textBrowse': [{ type: Input },],
    'textFileSelected': [{ type: Input },],
    'textNoFile': [{ type: Input },],
    'textRemove': [{ type: Input },],
    'textUpload': [{ type: Input },],
    'limitReached': [{ type: Output },],
    'acceptedFile': [{ type: Output },],
    'rejectedFile': [{ type: Output },],
    'removedFile': [{ type: Output },],
    'uploadFiles': [{ type: Output },],
    'inputFile': [{ type: ViewChild, args: ['inputFile',] },],
};

class InputFileRepository {
    constructor() {
        this.postMethod = 'POST';
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        this.options = options;
    }
    /**
     * Posts a file.
     *
     *
     * \@memberof InputFileRepository
     * @param {?} file
     * @param {?} apiUrl
     * @return {?}
     */
    post(file, apiUrl) {
        return Observable$1.create((observer) => {
            let /** @type {?} */ authToken = null;
            let /** @type {?} */ authTokenHeader = null;
            if (this.options.authToken != null && this.options.authTokenHeader != null) {
                authToken = localStorage.getItem(this.options.authToken);
                authTokenHeader = this.options.authTokenHeader;
            }
            let /** @type {?} */ formData = this.buildFormData(file);
            let /** @type {?} */ xhr = new XMLHttpRequest();
            xhr.upload.onprogress = (event) => {
                
            };
            xhr.onload = () => {
                let /** @type {?} */ response = observer.next(JSON.parse(xhr.response));
                observer.complete();
            };
            xhr.onerror = () => {
                observer.error(xhr.response);
            };
            xhr.onabort = () => {
                observer.error();
            };
            xhr.open(this.postMethod, apiUrl, true);
            if (this.options.authToken != null && this.options.authTokenHeader != null) {
                xhr.setRequestHeader(authTokenHeader, authToken);
            }
            xhr.send(formData);
        });
    }
    /**
     * Builds the form data.
     *
     *
     * \@memberof InputFileRepository
     * @param {?} file
     * @return {?}
     */
    buildFormData(file) {
        let /** @type {?} */ formData = new FormData();
        formData.append("file", file.file, file.file.name);
        return formData;
    }
}
InputFileRepository.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
InputFileRepository.ctorParameters = () => [];

class InputFileModule {
    /**
     * @param {?=} inputFileRepository
     */
    constructor(inputFileRepository) {
        this.inputFileRepository = inputFileRepository;
    }
}
InputFileModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    DropZoneDirective,
                    InputFileComponent
                ],
                imports: [
                    BrowserModule,
                    FormsModule
                ],
                exports: [
                    DropZoneDirective,
                    InputFileComponent
                ],
                providers: [InputFileRepository],
                entryComponents: [InputFileComponent]
            },] },
];
/**
 * @nocollapse
 */
InputFileModule.ctorParameters = () => [
    { type: InputFileRepository, },
];

class InputFileOptions {
    /**
     * @param {?=} authToken
     * @param {?=} authTokenHeader
     */
    constructor(authToken, authTokenHeader) {
        this.authToken = authToken;
        this.authTokenHeader = authTokenHeader;
    }
}

/**
 * Generated bundle index. Do not edit.
 */

export { DropZoneDirective, InputFileComponent, InputFileModule, InputFileOptions, InputFileRepository };
//# sourceMappingURL=ngx-input-file.js.map
