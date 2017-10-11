import { Directive, EventEmitter, HostListener, Output, Input } from '@angular/core';

@Directive({
    selector: '[dropZone]'
})

export class DropZoneDirective {
    @Input() public disabled = false;
    @Output() public fileDragOver = new EventEmitter<any>();
    @Output() public fileDragLeave = new EventEmitter<any>();
    @Output() public fileDrop = new EventEmitter<any>();

    public isDragOverDisabled = false;

    /**
     * Drag Over event handler.
     * @param event
     */
    @HostListener('dragover', ['$event'])
    public onDragOver(event: Event): void {
        this.preventAndStopEventPropagation(event);
        if (!this.isDragOverDisabled && !this.disabled) {
            this.isDragOverDisabled = true;
            this.fileDragOver.emit();
        }
    }

    /**
     * Drag Leave event handler.
     * @param event
     */
    @HostListener('dragleave', ['$event'])
    public onDragLeave(event: Event): void {
        this.preventAndStopEventPropagation(event);
        if (this.isDragOverDisabled && !this.disabled) {
            this.isDragOverDisabled = false;
            this.fileDragLeave.emit();
        }
    }

    /**
     * Drop event handler.
     * @param event
     */
    @HostListener('drop', ['$event'])
    public onDrop(event: any): void {
        if (!this.disabled) {
            this.isDragOverDisabled = false;
            this.preventAndStopEventPropagation(event);
            this.fileDrop.emit(event.dataTransfer.files);
        }
    }

    /**
     * Prevents and stops event propagration.
     * @param event
     */
    private preventAndStopEventPropagation(event: Event): void {
        event.preventDefault();
        event.stopPropagation();
    }
}
