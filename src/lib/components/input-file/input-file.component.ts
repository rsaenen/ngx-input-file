import { Component, ElementRef, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputFile } from '../../dto/input-file';
import { InputFileRejected } from '../../interfaces/input-file-rejected';
import { InputFileRejectedReason } from '../../enums/input-file-rejected-reason';
import { InputFileService } from '../../services/input-file.service';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'input-file',
    templateUrl: './input-file.component.html',
    styleUrls: ['./input-file.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputFileComponent),
            multi: true
        }
    ]
})
export class InputFileComponent implements ControlValueAccessor {
    private _fileAccept: string;
    private _fileLimit: number;
    private _sizeLimit: number;

    @Input() disabled: boolean;
    @Input() inputId: string;

    @Input() set fileAccept(fileAccept: string) {
        this._fileAccept = fileAccept;
    }

    get fileAccept() {
        return this._fileAccept || this.inputFileService.config.fileAccept || '*';
    }

    @Input() set fileLimit(fileLimit: number) {
        this._fileLimit = fileLimit;
    }

    get fileLimit() {
        return this._fileLimit || this.inputFileService.config.fileLimit || 1;
    }

    @Input() set sizeLimit(sizeLimit: number) {
        this._sizeLimit = sizeLimit;
    }

    get sizeLimit() {
        return this._sizeLimit || this.inputFileService.config.sizeLimit || null;
    }

    @Output() rejectedFile = new EventEmitter<InputFileRejected>();
    @ViewChild('fileInput') fileInput: ElementRef;

    public files = new Array<InputFile>();
    public onChange = (files: Array<InputFile>) => { };
    public onTouched = () => { };

    get canAddFile(): boolean {
        return this.files && this.files.length < this.fileLimit;
    }

    constructor(
        private inputFileService: InputFileService
    ) { }

    /**
     * On delete a file event handler.
     * @param index
     */
    public onDeleteFile(index: number): void {
        if (!this.disabled) {
            const files = this.files.slice();
            files.splice(index, 1);
            this.writeValue(files);
        }
    }

    /**
     * On drag over event handler.
     * Adds a ripple effect on the button.
     */
    public onDragOver(button: MatButton): void {
        button.ripple.launch({ centered: true, persistent: true });
    }

    /**
     * On drag leave event handler.
     * Fades the ripple effect of the button.
     */
    public onDragLeave(button: MatButton): void {
        button.ripple.fadeOutAll();
    }

    /**
     * On replace one file event handler.
     * Writes the value.
     * @param fileList
     * @param index
     * @param fileInput
     */
    public onReplaceFile(fileList: FileList, index: number, button: MatButton, fileInput?: HTMLInputElement): void {
        if (!this.disabled) {
            // Copies the array without reference.
            const files = this.files.slice();
            button.ripple.fadeOutAll();
            // Assumes that a single file can be replaced by a single file.
            if (this.fileGuard(files, fileList.item(0), true)) {
                files[index] = <InputFile>fileList.item(0);
            }
            this.writeValue(files);
            if (fileInput) {
                fileInput.value = '';
            }
        }
    }

    /**
     * On select one or more files event handler.
     * Writes the value.
     * @param fileList
     */
    public onSelectFile(fileList: FileList, button: MatButton): void {
        if (!this.disabled) {
            button.ripple.fadeOutAll();
            // Copies the array without reference.
            const files = this.files.slice();
            Array.from(fileList).forEach(file => {
                if (this.fileGuard(files, file)) {
                    files.push(<InputFile>file);
                }
            });
            this.writeValue(files);
            this.fileInput.nativeElement.value = '';
        }
    }

    /**
     * Implementation of ControlValueAccessor.
     * @param fn
     */
    public registerOnChange(fn: (files: Array<InputFile>) => void): void {
        this.onChange = fn;
    }

    /**
     * Implementation of ControlValueAccessor.
     * @param fn
     */
    public registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    /**
     * Implementation of ControlValueAccessor.
     * @param isDisabled
     */
    public setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    /**
     * Implementation of ControlValueAccessor.
     * @param files
     */
    public writeValue(files: Array<InputFile>): void {
        if (!this.disabled) {
            this.files = files;
            this.setFilePreview();
            this.onChange(this.files);
        }
    }

    /**
     * Whether the file can be added to the model.
     * @param files
     * @param file
     */
    private fileGuard(files: Array<InputFile>, file: File | InputFile, bypassLimit?: boolean): boolean {
        if (!bypassLimit && !this.inputFileService.limitGuard(files, this.fileLimit)) {
            this.rejectedFile.emit({ reason: InputFileRejectedReason.limitReached, file: file });
            return false;
        }

        if (!this.inputFileService.sizeGuard(file, this.sizeLimit)) {
            this.rejectedFile.emit({ reason: InputFileRejectedReason.sizeReached, file: file });
            return false;
        }

        if (!this.inputFileService.typeGuard(file, this.fileAccept)) {
            this.rejectedFile.emit({ reason: InputFileRejectedReason.badFile, file: file });
            return false;
        }

        return true;
    }


    /**
     * Sets the file preview with FileReader.
     */
    public setFilePreview(): void {
        for (const index in this.files) {
            if (this.inputFileService.typeGuard(this.files[index], 'image/*')) {
                const fr = new FileReader();
                fr.onload = () => {
                    this.files[index].preview = fr.result;
                };
                fr.readAsDataURL(this.files[index]);
            }
        }
    }
}
