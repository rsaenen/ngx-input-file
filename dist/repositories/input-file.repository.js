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
var Observable_1 = require("rxjs/Observable");
var InputFileRepository = (function () {
    function InputFileRepository() {
        this.postMethod = 'POST';
    }
    InputFileRepository.prototype.setOptions = function (options) {
        this.options = options;
    };
    /**
     * Posts a file.
     *
     * @param {*} file
     * @param {string} apiUrl
     * @returns {Observable<any>}
     *
     * @memberof InputFileRepository
     */
    InputFileRepository.prototype.post = function (file, apiUrl) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            var authToken = null;
            var authTokenHeader = null;
            if (_this.options.authToken != null && _this.options.authTokenHeader != null) {
                authToken = localStorage.getItem(_this.options.authToken);
                authTokenHeader = _this.options.authTokenHeader;
            }
            var formData = _this.buildFormData(file);
            var xhr = new XMLHttpRequest();
            xhr.upload.onprogress = function (event) {
                var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
            };
            xhr.onload = function () {
                var response = observer.next(JSON.parse(xhr.response));
                observer.complete();
            };
            xhr.onerror = function () {
                observer.error(xhr.response);
            };
            xhr.onabort = function () {
                observer.error();
            };
            xhr.open(_this.postMethod, apiUrl, true);
            if (_this.options.authToken != null && _this.options.authTokenHeader != null) {
                xhr.setRequestHeader(authTokenHeader, authToken);
            }
            xhr.send(formData);
        });
    };
    /**
     * Builds the form data.
     *
     * @private
     * @param {*} file
     * @returns {FormData}
     *
     * @memberof InputFileRepository
     */
    InputFileRepository.prototype.buildFormData = function (file) {
        var formData = new FormData();
        formData.append("file", file.file, file.file.name);
        return formData;
    };
    return InputFileRepository;
}());
InputFileRepository = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], InputFileRepository);
exports.InputFileRepository = InputFileRepository;
//# sourceMappingURL=input-file.repository.js.map