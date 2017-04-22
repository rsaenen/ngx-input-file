import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { File } from '../dto/file';
import { InputFileOptions } from '../utils/input-file.options';
import { environment } from '../../../../../../environments/environment.dev';

@Injectable()
export class InputFileRepository {
    private controller = 'images';
    private postMethod: string = 'POST';
    private options: InputFileOptions = new InputFileOptions();

    constructor() {}

    public setOptions(options: InputFileOptions): void {
        this.options = options;
    }

    public post(file: any): Observable<any> {
        return Observable.create((observer: any) => {
            let authToken = localStorage.getItem('auth-token-value');
            let authTokenHeader = 'Authorization';

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

            // xd

            xhr.open(this.postMethod, environment.baseUrl + this.controller, true);
            xhr.setRequestHeader(authTokenHeader, authToken);
            xhr.send(formData);
        });
    }

    private buildFormData(file: any): FormData {
        let formData: FormData = new FormData();

        formData.append("file", file.file, file.file.name);

        return formData;
    }
}