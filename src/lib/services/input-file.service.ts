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

    /**
     * Whether the limit is not reached.
     * @param files
     */
    public limitGuard(files: Array<File>, fileLimit): boolean {
        return files.length < fileLimit;
    }

    /**
     * Whether the file size is not bigger than the limit.
     * @param file
     * @param sizeLimit
     */
    public sizeGuard(file: File, sizeLimit: number): boolean {
        return !sizeLimit || file.size < sizeLimit * 1024 * 1024; // TODO : improve
    }

    /**
     * Whether the type of the file is enabled.
     * @param file
     * @param fileAccept
     */
    public typeGuard(file: File, fileAccept: string): boolean {
        let enabled = fileAccept == null;
        if (fileAccept) {
            const accept = fileAccept.replace('*', '');
            const types = accept.split(',');
            for (const type of types) {
                if (file.type.startsWith(type) || (type.charAt(0) === '.' && file.name != null && file.name.endsWith(type))) {
                    enabled = true;
                    break;
                }
            }
        }

        return enabled;
    }
}
