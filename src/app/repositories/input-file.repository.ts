import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { File } from '../dto/file';
import { InputFileOptions } from '../utils/input-file.options';

@Injectable()
export class InputFileRepository {
    private postMethod: string = 'POST';
    private options: InputFileOptions;

    constructor() {}

    public setOptions(options: InputFileOptions) {
        this.options = options;
    }

    /**
     * Posts a file.
     * 
     * @param {*} file 
     * @param {string} apiUrl 
     * @returns {Observable<any>} 
     * 
     * @memberof InputFileRepository
     */
    public post(file: any, apiUrl: string): Observable<any> {
        return Observable.create((observer: any) => {
            let authToken = null;
            let authTokenHeader = null;
            if (this.options.authToken != null && this.options.authTokenHeader != null) {
                authToken = localStorage.getItem(this.options.authToken);
                authTokenHeader = this.options.authTokenHeader;
            }

            let formData: FormData = this.buildFormData(file);
            let xhr: XMLHttpRequest = new XMLHttpRequest();

            xhr.upload.onprogress = (event:any) => {
                let progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
            };

            xhr.onload = () => {
                let response = observer.next(JSON.parse(xhr.response));
                observer.complete();
            };

            xhr.onerror = () => {
                observer.error(xhr.response);
            };

            xhr.onabort = () => {
                observer.error();
            };

            xhr.open(this.postMethod, apiUrl, true);
            if (this.options.authToken != null && this.options.authTokenHeader != null) {
                xhr.setRequestHeader(authTokenHeader, authToken);
            }
            xhr.send(formData);
        });
    }

    /**
     * Builds the form data.
     * 
     * @private
     * @param {*} file 
     * @returns {FormData} 
     * 
     * @memberof InputFileRepository
     */
    private buildFormData(file: any): FormData {
        let formData: FormData = new FormData();

        formData.append("file", file.file, file.file.name);

        return formData;
    }
}