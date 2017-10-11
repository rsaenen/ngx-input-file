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
     * Blur event handler.
     */
    onBlur(): void;
    /**
     * Change event handler.
     * @param event
     */
    onChange(event: any): void;
    /**
     * Focus event handler
     */
    onFocus(): void;
    /**
     * File Drag Over event handler.
     */
    onFileDragOver(): void;
    /**
     * File Drag Leave event handler.
     */
    onFileDragLeave(): void;
    /**
     * File Drop event handler.
     * @param files.
     */
    onFileDrop(files: any): void;
    /**
     * Remove event handler.
     * Removes all files of the model.
     */
    onRemove(): void;
    /**
     * Remove file event handler.
     * @param index
     */
    onRemoveFile(index: number): void;
    /**
     * Upload event handler;
     */
    onUpload(): void;
    /**
     * Gets the text of the input.
     */
    getInputText(): string;
    /**
     * Checks if the model is null or empty.
     */
    isNotNullOrEmpty(): boolean;
    /**
     * Accepted file handler.
     * @param file
     */
    private acceptedFileHandler(file);
    /**
     * Adds multiple files to the model.
     * @param files
     */
    private addInputFile(files);
    /**
     * Checks if the file is an image.
     * @param file
     */
    private isTypeImage(file);
    /**
     * Checks if the type of the file is enabled.
     * @param file
     */
    private isTypeEnabled(file);
    /**
     * Limit reached handler.
     */
    private limitReachedHandler();
    /**
     * Read file handler.
     * @param image.
     */
    private readFileHandler(file, image);
    /**
     * Rejected file handler.
     * @param file
     */
    private rejectedFileHandler(file);
    /**
     * Removed file handler.
     * @param file
     */
    private removedFileHandler(file);
    /**
     * Remove handler.
     */
    private removeHandler();
    /**
     * Sets the icon of the file.
     * @param file
     * @param inputFile
     */
    private setFileIcon(file, inputFile);
    /**
     * Gets the size of the file to display.
     * @param file
     */
    private setSize(file, inputFile);
}
