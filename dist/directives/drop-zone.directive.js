"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
    return DropZoneDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DropZoneDirective.prototype, "disabled", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DropZoneDirective.prototype, "fileDragOver", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DropZoneDirective.prototype, "fileDragLeave", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DropZoneDirective.prototype, "fileDrop", void 0);
__decorate([
    core_1.HostListener('dragover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], DropZoneDirective.prototype, "onDragOver", null);
__decorate([
    core_1.HostListener('dragleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], DropZoneDirective.prototype, "onDragLeave", null);
__decorate([
    core_1.HostListener('drop', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DropZoneDirective.prototype, "onDrop", null);
DropZoneDirective = __decorate([
    core_1.Directive({
        selector: '[dropZone]'
    }),
    __metadata("design:paramtypes", [])
], DropZoneDirective);
exports.DropZoneDirective = DropZoneDirective;
//# sourceMappingURL=drop-zone.directive.js.map