"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DropZoneDirective = (function () {
    /**
     * Creates an instance of DropZoneDirective.
     *
     * @memberOf DropZoneDirective
     */
    function DropZoneDirective() {
        this.disabled = false;
        this.fileDragOver = new core_1.EventEmitter();
        this.fileDragLeave = new core_1.EventEmitter();
        this.fileDrop = new core_1.EventEmitter();
        this.isDragOverDisabled = false;
    }
    // Events ----------------------------------------------------------------
    /**
     * Drag Over event handler.
     *
     * @param {Event} event The event.
     *
     * @memberOf DropZoneDirective
     */
    DropZoneDirective.prototype.onDragOver = function (event) {
        this.preventAndStopEventPropagation(event);
        if (!this.isDragOverDisabled && !this.disabled) {
            this.isDragOverDisabled = true;
            this.fileDragOver.emit();
        }
    };
    /**
     * Drag Leave event handler.
     *
     * @param {Event} event The event.
     *
     * @memberOf DropZoneDirective
     */
    DropZoneDirective.prototype.onDragLeave = function (event) {
        this.preventAndStopEventPropagation(event);
        if (this.isDragOverDisabled && !this.disabled) {
            this.isDragOverDisabled = false;
            this.fileDragLeave.emit();
        }
    };
    /**
     * Drop event handler.
     *
     * @param {*} event The event.
     *
     * @memberOf DropZoneDirective
     */
    DropZoneDirective.prototype.onDrop = function (event) {
        if (!this.disabled) {
            this.isDragOverDisabled = false;
            this.preventAndStopEventPropagation(event);
            this.fileDrop.emit(event.dataTransfer.files);
        }
    };
    // Private ---------------------------------------------------------------
    /**
     * Prevents and stops event propagration.
     *
     * @private
     * @param {Event} event The event.
     *
     * @memberOf DropZoneDirective
     */
    DropZoneDirective.prototype.preventAndStopEventPropagation = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    DropZoneDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[dropZone]'
                },] },
    ];
    /** @nocollapse */
    DropZoneDirective.ctorParameters = function () { return []; };
    DropZoneDirective.propDecorators = {
        'disabled': [{ type: core_1.Input },],
        'fileDragOver': [{ type: core_1.Output },],
        'fileDragLeave': [{ type: core_1.Output },],
        'fileDrop': [{ type: core_1.Output },],
        'onDragOver': [{ type: core_1.HostListener, args: ['dragover', ['$event'],] },],
        'onDragLeave': [{ type: core_1.HostListener, args: ['dragleave', ['$event'],] },],
        'onDrop': [{ type: core_1.HostListener, args: ['drop', ['$event'],] },],
    };
    return DropZoneDirective;
}());
exports.DropZoneDirective = DropZoneDirective;
//# sourceMappingURL=drop-zone.directive.js.map