export class InputFile {
    public id: any;
    public file: File;
    public preview: string;

    constructor(
        id: any,
        preview: string,
        file?: File
    ) {
        this.id = id;
        this.preview = preview;
        this.file = file;
    }
}
