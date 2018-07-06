import { Inject, Injectable } from '@angular/core';
import { InputFileConfig } from '../interfaces/input-file-config';

@Injectable({
    providedIn: 'root'
})
export class InputFileService {

    constructor(
        @Inject('config') private _config: InputFileConfig
    ) { }

    get config() {
        return this._config;
    }
}
