"use strict";
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
    InputFileRepository.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    InputFileRepository.ctorParameters = function () { return []; };
    return InputFileRepository;
}());
exports.InputFileRepository = InputFileRepository;
//# sourceMappingURL=input-file.repository.js.map