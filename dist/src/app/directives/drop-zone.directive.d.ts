import { EventEmitter } from '@angular/core';
export declare class DropZoneDirective {
    disabled: boolean;
    fileDragOver: EventEmitter<any>;
    fileDragLeave: EventEmitter<any>;
    fileDrop: EventEmitter<any>;
    isDragOverDisabled: boolean;
    /**
     * Drag Over event handler.
     * @param event
     */
    onDragOver(event: Event): void;
    /**
     * Drag Leave event handler.
     * @param event
     */
    onDragLeave(event: Event): void;
    /**
     * Drop event handler.
     * @param event
     */
    onDrop(event: any): void;
    /**
     * Prevents and stops event propagration.
     * @param event
     */
    private preventAndStopEventPropagation(event);
}
