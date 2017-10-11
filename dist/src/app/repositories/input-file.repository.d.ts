import { Observable } from 'rxjs/Observable';
import { InputFileOptions } from '../utils/input-file.options';
export declare class InputFileRepository {
    private postMethod;
    private options;
    constructor();
    setOptions(options: InputFileOptions): void;
    /**
     * Posts a file.
     *
     * @param {*} file
     * @param {string} apiUrl
     * @returns {Observable<any>}
     *
     * @memberof InputFileRepository
     */
    post(file: any, apiUrl: string): Observable<any>;
    /**
     * Builds the form data.
     *
     * @private
     * @param {*} file
     * @returns {FormData}
     *
     * @memberof InputFileRepository
     */
    private buildFormData(file);
}
