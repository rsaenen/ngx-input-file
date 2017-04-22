import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { DropZoneDirective } from '../directives/drop-zone.directive';
import { File } from '../dto/file';

@Component ({
    selector: 'input-file',
    templateUrl: './input-file.component.html'
})

export class InputFileComponent {
    @Input() 
    public inputId: string;
    @Input()
    public inputAccept: string;
    @Input()
    public inputBrowse: string = "Browse";
    @Input()
    public inputFileSelected: string = "files selected";
    @Input() 
    public inputMaxFiles: number = 1;
    @Input()
    public inputNoFile: string = "No file selected";
    @Input()
    public inputRemove: string = "Remove";
    @Input() 
    public model: Array<File> = new Array<File>();

    @Output() 
    public limitReached: EventEmitter<any> = new EventEmitter<any>();
    @Output() 
    public rejectedFile: EventEmitter<any> = new EventEmitter<any>();
    @Output() 
    public uploadFiles: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild('inputFile') 
    public inputFile: any;
    
    public dropZoneDisabled: boolean = false;
    public isDragOver: boolean = false;
    public isInputActive: boolean = false;
    
    private iconExtension: string = ".png";
    private pathIcon: string = "public/img/";
    private typeImage: string = "image/";
    
    /**
     * Creates an instance of InputFileComponent.
     * 
     * 
     * @memberOf InputFileComponent
     */
    constructor () {}

    // Events ----------------------------------------------------------------

    /**
     * Blur event handler.
     * 
     * 
     * @memberOf InputFileComponent
     */
    public onBlur(): void {
        this.isInputActive = false;
    }

    /**
     * Change event handler.
     * 
     * @param {*} event The event.
     * 
     * @memberOf InputFileComponent
     */
    public onChange(event: any): void {
        this.addInputFile(event.target.files);
    }

    /**
     * Focus event handler
     * 
     * 
     * @memberOf InputFileComponent
     */
    public onFocus(): void {
        this.isInputActive = true;
    }

    /**
     * File Drag Over event handler.
     * 
     * 
     * @memberOf InputFileComponent
     */
    public onFileDragOver(): void {
        this.isDragOver = true;
    }

    /**
     * File Drag Leave event handler.
     * 
     * 
     * @memberOf InputFileComponent
     */
    public onFileDragLeave(): void {
        this.isDragOver = false;
    }

    /**
     * File Drop event handler.
     * 
     * @param {*} files The files.
     * 
     * @memberOf InputFileComponent
     */
    public onFileDrop(files: any): void {
        this.isDragOver = false;
        this.addInputFile(files);
    }

    /**
     * Remove event handler. 
     * Removes all files of the model.
     * 
     * 
     * @memberOf InputFileComponent
     */
    public onRemove(): void {
        this.dropZoneDisabled = false;
        this.inputFile.nativeElement.value = "";
        this.model = new Array<any>();
    }

    /**
     * Remove file event handler.
     * 
     * @param {number} index The file.
     * 
     * @memberOf InputFileComponent
     */
    public onRemoveFile(index: number): void {
        this.model.splice(index, 1);
        this.dropZoneDisabled = false;
        if (!this.model.length) {
            this.onRemove();
        }
    }

    public onUpload(): void {
        this.uploadFiles.emit();
    }

    // Public ----------------------------------------------------------------

    /**
     * Gets the text of the input.
     * 
     * @returns {string} 
     * 
     * @memberOf InputFileComponent
     */
    public getInputText(): string {
        let inputText: string;

        if (this.model == null || !this.model.length) {
            inputText = this.inputNoFile;
        } 
        else if (this.model.length < 2) {
            inputText = this.model[0].file.name;
        }
        else {
            inputText = this.model.length + " " + this.inputFileSelected;
        }

        return inputText;
    }

    public isNotNullOrEmpty(): boolean {
        return this.model != null && this.model.length != null && this.model.length > 0;
    }

    // Private ---------------------------------------------------------------
    
    /**
     * Adds multiple files to the model.
     * 
     * @private
     * @param {Array<any>} files The files.
     * 
     * @memberOf InputFileComponent
     */
    private addInputFile(files: Array<any>): void {
        let limit: number = +this.inputMaxFiles;

        for (let index = 0; index < files.length; index++) {
            // Checks the limit
            if (this.model.length < limit) {
                // Checks the type
                if (this.isTypeEnabled(files[index])) {
                    let file = new File();
                    this.setSize(file, files[index]);
                    // Checks the icon
                    if (FileReader && this.isTypeImage(files[index])) {
                        this.readFileHandler(file, files[index]);
                    } else {
                        this.setFileIcon(file, files[index]);
                    }
                    file.file = files[index];
                    this.model.push(file);
                }
                else {
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
     * 
     * @private
     * @param {*} file The file.
     * @returns {boolean} 
     * 
     * @memberOf InputFileComponent
     */
    private isTypeImage(file: any): boolean {
        return file.type.startsWith(this.typeImage);
    }

    /**
     * Checks if the type of the file is enabled.
     * 
     * @private
     * @param {*} file : the file.
     * @returns {boolean} 
     * 
     * @memberOf InputFileComponent
     */
    private isTypeEnabled(file: any): boolean {
        let enabled = this.inputAccept == null;
        if (this.inputAccept) {
            let accept = this.inputAccept.replace('*', '');
            let types = accept.split(',');
            for (let type of types) {
                if (file.type.startsWith(type) || (type.charAt(0) == '.' && file.name.endsWith(type))) {
                    enabled = true;
                    break;
                }
            }
        }

        return enabled;
    }

    /**
     * Limit reached handler.
     * 
     * @private
     * 
     * @memberOf InputFileComponent
     */
    private limitReachedHandler(): void {
        this.dropZoneDisabled = true;
        this.limitReached.emit();
    }

    /**
     * Read file handler.
     * 
     * @private
     * @param {*} image The file.
     * 
     * @memberOf InputFileComponent
     */
    private readFileHandler(file: File, image: any): void {
        let fr = new FileReader();

        fr.onload = function () {
            file.icon = fr.result;
        }
        
        fr.readAsDataURL(image);
    }

    /**
     * Rejected file handler.
     * 
     * @private
     * @param {*} file The file.
     * 
     * @memberOf InputFileComponent
     */
    private rejectedFileHandler(file: any): void {
        this.rejectedFile.emit(file);
    }

    /**
     * Sets the icon of the file.
     * 
     * @private
     * @param {*} file The file.
     * 
     * @memberOf InputFileComponent
     */
    private setFileIcon(file: File, inputFile: any): void {
        let icon: string;
        
        switch(inputFile.type) {
            case 'application/pdf': 
                icon = 'pdf'
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
     * 
     * @private
     * @param {*} file The file.
     * @returns {string} 
     * 
     * @memberOf InputFileComponent
     */
    private setSize(file: File, inputFile: any): void {
        let size = Math.round(inputFile.size / 1024);
        file.size = '(' + size + ' KB)';
    }
}

