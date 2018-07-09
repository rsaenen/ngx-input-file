import { InputFile } from '../dto/input-file';
import { InputFileRejectedReason } from '../enums/input-file-rejected-reason';

export interface InputFileRejected {
    reason: InputFileRejectedReason;
    file: InputFile;
}
