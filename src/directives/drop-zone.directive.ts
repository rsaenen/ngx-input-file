import { Directive, EventEmitter, HostListener, Output, Input } from '@angular/core';

@Directive({
    selector: '[dropZone]'
})

export class DropZoneDirective {
    @Input()
    public disabled: boolean = false;
    @Output()
    public fileDragOver: EventEmitter<any> = new EventEmitter<any>();
    @Output()
    public fileDragLeave: EventEmitter<any> = new EventEmitter<any>();
    @Output()
    public fileDrop: EventEmitter<any> = new EventEmitter<any>();

    public isDragOverDisabled: boolean = false;

    /**
     * Creates an instance of DropZoneDirective.
     * 
     * @memberOf DropZoneDirective
     */
    constructor() {}

    // Events ----------------------------------------------------------------

    /**
     * Drag Over event handler.
     * 
     * @param {Event} event The event.
     * 
     * @memberOf DropZoneDirective
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
     * 
     * @param {Event} event The event.
     * 
     * @memberOf DropZoneDirective
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
     * 
     * @param {*} event The event.
     * 
     * @memberOf DropZoneDirective
     */
    @HostListener('drop', ['$event'])
    public onDrop(event: any): void {
        if (!this.disabled) {
            this.isDragOverDisabled = false;
            this.preventAndStopEventPropagation(event);
            this.fileDrop.emit(event.dataTransfer.files);
        }
    }

    // Private ---------------------------------------------------------------

    /**
     * Prevents and stops event propagration.
     * 
     * @private
     * @param {Event} event The event.
     * 
     * @memberOf DropZoneDirective
     */
    private preventAndStopEventPropagation(event: Event): void {
        event.preventDefault();
        event.stopPropagation();
    }
}
