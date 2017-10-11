import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { DropZoneDirective } from '../directives/drop-zone.directive';
import { File } from '../dto/file';

@Component ({
    selector: 'input-file',
    styleUrls: ['input-file.component.css'],
    templateUrl: 'input-file.component.html'
})

export class InputFileComponent {
    // #region public attributes
    // #region input
    @Input() public inputId: string;
    @Input() public inputAccept: string;
    @Input() public disableUpload = false;
    @Input() public inputMaxFiles = 1;
    @Input() public model: Array<File> = new Array<File>();
    @Input() public textBrowse = 'Browse';
    @Input() public textFileSelected = 'files selected';
    @Input() public textNoFile = 'No file selected';
    @Input() public textRemove = 'Remove';
    @Input() public textUpload = 'Upload';
    // #endregion

    // #region output
    @Output() public limitReached: EventEmitter<any> = new EventEmitter<any>();
    @Output() public acceptedFile: EventEmitter<File> = new EventEmitter<File>();
    @Output() public rejectedFile: EventEmitter<File> = new EventEmitter<File>();
    @Output() public removedFile: EventEmitter<File> = new EventEmitter<File>();
    @Output() public uploadFiles: EventEmitter<any> = new EventEmitter<any>();
    // #endregion

    // #region view child
    @ViewChild('inputFile')public inputFile: any;
    // #region view child

    public dropZoneDisabled = false;
    public isDragOver = false;
    public isInputActive = false;
    // #endregion
    // #region public attributes
    private iconExtension = '.png';
    private pathIcon = 'assets/img/';
    private typeImage = 'image/';
    // #endregion

    // #region public functions
    // #region events

    /**
     * Blur event handler.
     */
    public onBlur(): void {
        this.isInputActive = false;
    }

    /**
     * Change event handler.
     * @param event
     */
    public onChange(event: any): void {
        this.addInputFile(event.target.files);
    }

    /**
     * Focus event handler
     */
    public onFocus(): void {
        this.isInputActive = true;
    }

    /**
     * File Drag Over event handler.
     */
    public onFileDragOver(): void {
        this.isDragOver = true;
    }

    /**
     * File Drag Leave event handler.
     */
    public onFileDragLeave(): void {
        this.isDragOver = false;
    }

    /**
     * File Drop event handler.
     * @param files.
     */
    public onFileDrop(files: any): void {
        this.isDragOver = false;
        this.addInputFile(files);
    }

    /**
     * Remove event handler.
     * Removes all files of the model.
     */
    public onRemove(): void {
        for (const file of this.model) {
            this.removedFileHandler(file);
        }
        this.removeHandler();
    }

    /**
     * Remove file event handler.
     * @param index
     */
    public onRemoveFile(index: number): void {
        this.removedFileHandler(this.model[index]);
        this.model.splice(index, 1);
        this.dropZoneDisabled = false;
        if (!this.model.length) {
            this.removeHandler();
        }
    }

    /**
     * Upload event handler;
     */
    public onUpload(): void {
        this.uploadFiles.emit();
    }

    // #endregion

    // #region functions

    /**
     * Gets the text of the input.
     */
    public getInputText(): string {
        let inputText: string;

        if (this.model == null || !this.model.length) {
            inputText = this.textNoFile;
        } else if (this.model.length < 2 && this.model[0].file != null) {
            inputText = this.model[0].file.name;
        } else {
            inputText = this.model.length + ' ' + this.textFileSelected;
        }

        return inputText;
    }

    /**
     * Checks if the model is null or empty.
     */
    public isNotNullOrEmpty(): boolean {
        return this.model != null && this.model.length != null && this.model.length > 0;
    }

    // #endregion
    // #endregion

    // #region private functions

    /**
     * Accepted file handler.
     * @param file
     */
    private acceptedFileHandler(file: File): void {
        this.acceptedFile.emit(file);
    }

    /**
     * Adds multiple files to the model.
     * @param files
     */
    private addInputFile(files: Array<any>): void {
        const limit: number = +this.inputMaxFiles;

        for (let index = 0; index < files.length; index++) {
            // Checks the limit
            if (this.model.length < limit) {
                // Checks the type
                if (this.isTypeEnabled(files[index])) {
                    const file = new File();
                    this.setSize(file, files[index]);
                    // Checks the icon
                    if (FileReader && this.isTypeImage(files[index])) {
                        this.readFileHandler(file, files[index]);
                    } else {
                        this.setFileIcon(file, files[index]);
                    }
                    file.file = files[index];
                    this.model.push(file);
                    this.acceptedFileHandler(file);
                } else {
                    this.rejectedFileHandler(files[index]);
                }
            } else {
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
     * @param file
     */
    private isTypeImage(file: any): boolean {
        return file.type.startsWith(this.typeImage);
    }

    /**
     * Checks if the type of the file is enabled.
     * @param file
     */
    private isTypeEnabled(file: any): boolean {
        let enabled = this.inputAccept == null;
        if (this.inputAccept) {
            const accept = this.inputAccept.replace('*', '');
            const types = accept.split(',');
            for (const type of types) {
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
     */
    private limitReachedHandler(): void {
        this.dropZoneDisabled = true;
        this.limitReached.emit();
    }

    /**
     * Read file handler.
     * @param image.
     */
    private readFileHandler(file: File, image: any): void {
        const fr = new FileReader();

        fr.onload = function () {
            file.icon = fr.result;
        };

        fr.readAsDataURL(image);
    }

    /**
     * Rejected file handler.
     * @param file
     */
    private rejectedFileHandler(file: File): void {
        this.rejectedFile.emit(file);
    }

    /**
     * Removed file handler.
     * @param file
     */
    private removedFileHandler(file: File): void {
        this.removedFile.emit(file);
    }

    /**
     * Remove handler.
     */
    private removeHandler(): void {
        this.dropZoneDisabled = false;
        this.inputFile.nativeElement.value = '';
        this.model = new Array<File>();
    }

    /**
     * Sets the icon of the file.
     * @param file
     * @param inputFile
     */
    private setFileIcon(file: File, inputFile: any): void {
        let icon: string;

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
     * @param file
     */
    private setSize(file: File, inputFile: any): void {
        const size = Math.round(inputFile.size / 1024);
        file.size = '(' + size + ' KB)';
    }

    // #endregion
}
