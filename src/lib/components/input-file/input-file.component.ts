import {
    Component,
    ElementRef,
    EventEmitter,
    forwardRef,
    HostBinding,
    Input,
    Output,
    ViewChild
    } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputFileRejectedReason } from '../../enums/input-file-rejected-reason';
import { InputFileService } from '../../services/input-file.service';
import { MatButton } from '@angular/material/button';
import { InputFileRejected,  } from '../../interfaces/input-file-rejected';

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
    private fr: FileReader;

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
    @ViewChild('selectButton') selectButton: MatButton;

    public files = new Array<File>();
    public onChange = (files: Array<File>) => { };
    public onTouched = () => { };

    get canAddFile(): boolean {
        return this.files && this.files.length < this.fileLimit;
    }

    constructor(
        private inputFileService: InputFileService
    ) {
        this.fr = new FileReader();
    }

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
    public onDragOver(): void {
        this.selectButton.ripple.launch({ centered: true, persistent: true});
    }

    /**
     * On drag leave event handler.
     * Fades the ripple effect of the button.
     */
    public onDragLeave(): void {
        this.selectButton.ripple.fadeOutAll();
    }

    /**
     * On replace one file event handler.
     * Writes the value.
     * @param fileList
     * @param index
     * @param fileInput
     */
    public onReplaceFile(fileList: FileList, index: number, fileInput?: HTMLInputElement): void {
        // Copies the array without reference.
        const files = this.files.slice();
        // Assumes that a single file can be replaced by a single file.
        if (this.fileGuard(files, fileList.item(0), true)) {
            files[index] = fileList.item(0);
        }
        this.writeValue(files);
        if (fileInput) {
            fileInput.value = '';
        }
    }

    /**
     * On select one or more files event handler.
     * Writes the value.
     * @param fileList
     */
    public onSelectFile(fileList: FileList): void {
        if (!this.disabled) {
            this.selectButton.ripple.fadeOutAll();
            // Copies the array without reference.
            const files = this.files.slice();
            Array.from(fileList).forEach(file => {
                if (this.fileGuard(files, file)) {
                    files.push(file);
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
    public registerOnChange(fn: (files: Array<File>) => void): void {
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
    public writeValue(files: Array<File>): void {
        if (!this.disabled) {
            this.files = files;
            this.onChange(this.files);
        }
    }

    /**
     * Whether the file can be added to the model.
     * @param files
     * @param file
     */
    private fileGuard(files: Array<File>, file: File, bypassLimit?: boolean): boolean {
        if (!bypassLimit && !this.limitGuard(files)) {
            this.rejectedFile.emit({ reason: InputFileRejectedReason.limitReached, file: file });
            return false;
        }

        if (!this.sizeGuard(file)) {
            this.rejectedFile.emit({ reason: InputFileRejectedReason.sizeReached, file: file });
            return false;
        }

        if (!this.typeGuard(file)) {
            this.rejectedFile.emit({ reason: InputFileRejectedReason.badFile, file: file });
            return false;
        }

        return true;
    }

    /**
     * Whether the limit is not reached.
     * @param files
     */
    private limitGuard(files: Array<File>): boolean {
        return files.length < this.fileLimit;
    }

    /**
     * Read file handler.
     * @param image.
     */
    private readFileHandler(file: any): void {
        this.fr.onload = () => {
            file.icon = this.fr.result;
        };
        this.fr.readAsDataURL(file);
    }

    /**
     * Whether the file size is not bigger than the limit.
     * @param file
     */
    private sizeGuard(file: File): boolean {
        return !+this.sizeLimit || file.size < +this.sizeLimit * 1024 * 1024; // TODO : improve
    }

    /**
     * Whether the type of the file is enabled.
     * @param file
     */
    private typeGuard(file: File): boolean {
        let enabled = this.fileAccept == null;
        if (this.fileAccept) {
            const accept = this.fileAccept.replace('*', '');
            const types = accept.split(',');
            for (const type of types) {
                if (file.type.startsWith(type) || (type.charAt(0) === '.' && file.name != null && file.name.endsWith(type))) {
                    enabled = true;
                    break;
                }
            }
        }

        return enabled;
    }
}
