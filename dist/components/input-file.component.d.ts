import { EventEmitter } from '@angular/core';
import { File } from '../dto/file';
export declare class InputFileComponent {
    inputId: string;
    inputAccept: string;
    disableUpload: boolean;
    inputMaxFiles: number;
    model: Array<File>;
    textBrowse: string;
    textFileSelected: string;
    textNoFile: string;
    textRemove: string;
    textUpload: string;
    limitReached: EventEmitter<any>;
    acceptedFile: EventEmitter<File>;
    rejectedFile: EventEmitter<File>;
    removedFile: EventEmitter<File>;
    uploadFiles: EventEmitter<any>;
    inputFile: any;
    dropZoneDisabled: boolean;
    isDragOver: boolean;
    isInputActive: boolean;
    private iconExtension;
    private pathIcon;
    private typeImage;
    /**
     * Creates an instance of InputFileComponent.
     *
     *
     * @memberOf InputFileComponent
     */
    constructor();
    /**
     * Blur event handler.
     *
     *
     * @memberOf InputFileComponent
     */
    onBlur(): void;
    /**
     * Change event handler.
     *
     * @param {*} event The event.
     *
     * @memberOf InputFileComponent
     */
    onChange(event: any): void;
    /**
     * Focus event handler
     *
     *
     * @memberOf InputFileComponent
     */
    onFocus(): void;
    /**
     * File Drag Over event handler.
     *
     *
     * @memberOf InputFileComponent
     */
    onFileDragOver(): void;
    /**
     * File Drag Leave event handler.
     *
     *
     * @memberOf InputFileComponent
     */
    onFileDragLeave(): void;
    /**
     * File Drop event handler.
     *
     * @param {*} files The files.
     *
     * @memberOf InputFileComponent
     */
    onFileDrop(files: any): void;
    /**
     * Remove event handler.
     * Removes all files of the model.
     *
     *
     * @memberOf InputFileComponent
     */
    onRemove(): void;
    /**
     * Remove file event handler.
     *
     * @param {number} index The file.
     *
     * @memberOf InputFileComponent
     */
    onRemoveFile(index: number): void;
    /**
     * Upload event handler;
     *
     *
     * @memberOf InputFileComponent
     */
    onUpload(): void;
    /**
     * Gets the text of the input.
     *
     * @returns {string}
     *
     * @memberOf InputFileComponent
     */
    getInputText(): string;
    isNotNullOrEmpty(): boolean;
    /**
     * Accepted file handler.
     *
     * @private
     * @param {File} file The file.
     *
     * @memberOf InputFileComponent
     */
    private acceptedFileHandler(file);
    /**
     * Adds multiple files to the model.
     *
     * @private
     * @param {Array<any>} files The files.
     *
     * @memberOf InputFileComponent
     */
    private addInputFile(files);
    /**
     * Checks if the file is an image.
     *
     * @private
     * @param {*} file The file.
     * @returns {boolean}
     *
     * @memberOf InputFileComponent
     */
    private isTypeImage(file);
    /**
     * Checks if the type of the file is enabled.
     *
     * @private
     * @param {*} file : the file.
     * @returns {boolean}
     *
     * @memberOf InputFileComponent
     */
    private isTypeEnabled(file);
    /**
     * Limit reached handler.
     *
     * @private
     *
     * @memberOf InputFileComponent
     */
    private limitReachedHandler();
    /**
     * Read file handler.
     *
     * @private
     * @param {*} image The file.
     *
     * @memberOf InputFileComponent
     */
    private readFileHandler(file, image);
    /**
     * Rejected file handler.
     *
     * @private
     * @param {File} file The file.
     *
     * @memberOf InputFileComponent
     */
    private rejectedFileHandler(file);
    /**
     * Removed file handler.
     *
     * @private
     * @param {File} file The file.
     *
     * @memberOf InputFileComponent
     */
    private removedFileHandler(file);
    /**
     * Remove handler.
     *
     * @private
     *
     * @memberOf InputFileComponent
     */
    private removeHandler();
    /**
     * Sets the icon of the file.
     *
     * @private
     * @param {File} file The file.
     * @param {*} inputFile The input file.
     *
     * @memberOf InputFileComponent
     */
    private setFileIcon(file, inputFile);
    /**
     * Gets the size of the file to display.
     *
     * @private
     * @param {*} file The file.
     * @returns {string}
     *
     * @memberOf InputFileComponent
     */
    private setSize(file, inputFile);
}
