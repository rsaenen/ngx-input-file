import { EventEmitter } from '@angular/core';
export declare class DropZoneDirective {
    disabled: boolean;
    fileDragOver: EventEmitter<any>;
    fileDragLeave: EventEmitter<any>;
    fileDrop: EventEmitter<any>;
    isDragOverDisabled: boolean;
    /**
     * Creates an instance of DropZoneDirective.
     *
     * @memberOf DropZoneDirective
     */
    constructor();
    /**
     * Drag Over event handler.
     *
     * @param {Event} event The event.
     *
     * @memberOf DropZoneDirective
     */
    onDragOver(event: Event): void;
    /**
     * Drag Leave event handler.
     *
     * @param {Event} event The event.
     *
     * @memberOf DropZoneDirective
     */
    onDragLeave(event: Event): void;
    /**
     * Drop event handler.
     *
     * @param {*} event The event.
     *
     * @memberOf DropZoneDirective
     */
    onDrop(event: any): void;
    /**
     * Prevents and stops event propagration.
     *
     * @private
     * @param {Event} event The event.
     *
     * @memberOf DropZoneDirective
     */
    private preventAndStopEventPropagation(event);
}
