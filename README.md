# ngx-input-file

**ngx-input-file** is a module to replace the html element input file and also allows you to upload files.  
Style is based on [Bootstrap File Input](http://plugins.krajee.com/file-input/demo).  
The component is compatible with [Bootstrap 4](https://v4-alpha.getbootstrap.com/).

![Input File screenshot](http://img4.hostingpics.net/pics/626115inputfile1.png)

![Input File screenshot](http://img4.hostingpics.net/pics/206713inputfile2.png)

## Key features
 - Preview of the file
 - Drag and drop zone
 - Uploads files with headers like `Authorization`.

## Installation 
```bash
npm install ngx-input-file
```

## Basic Configuration
Create a new `ngx-input-file.module.ts` file with the following code:
```ts
import { NgModule } from '@angular/core';
import { InputFileModule, InputFileOptions, InputFileRepository } from 'ngx-input-file';

const options: InputFileOptions = new InputFileOptions(
    'auth-token-value',
    'Authorization'
);

@NgModule({
    imports: [ InputFileModule ],
    exports: [ InputFileModule ]
})

export class NgxInputFileModule {
    constructor(private repository: InputFileRepository) {
        repository.setOptions(options);
    }
}
```
Import this module in your module.

## Component Attributes
| Attribute             | Type          | Description                               |
| --------------------- |:-------------:| -----------------------------------------:|
| inputId               | string                | The attribute identifier of the html element input. |
| inputAccept           | string                | The attribute [accept](https://www.w3schools.com/tags/att_input_accept.asp) of the html element input. |
| disableUpload         | boolean               | Default `false`. Hide the button upload. |
| inputMaxFiles         | number                | Default `1`. The maximum files that the user can upload. |
| model                 | Array<File>           | The model. |
| textBrowse            | string                | Default `Browse`. The text of the button browse. |
| textFileSelected      | string                | Default `files selected`. The text when x files is selected. |
| textNoFile            | string                | Default `No file selected`. The text when no files is selected. |
| textRemove            | string                | Default `Remove`. The text of the button remove. |
| textUpload            | string                | Default `Upload`. The text of the button upload. |
| limitReached          | EventEmitter<any>     | Triggered when `inputMaxFiles` is reached. |
| acceptedFile          | EventEmitter<File>    | Triggered when a file is accepted. |
| rejectedFile          | EventEmitter<File>    | Triggered when a file is rejected. |
| removedFile           | EventEmitter<File>    | Triggered when a file is removed. |
| uploadFiles           | EventEmitter<any>     | Triggered when the user click on the button upload. |

## Example

```html
<input-file 
    inputId="images" 
    inputAccept=".docx,.pdf,image/*"
    [disableUpload]="true"
    inputMaxFiles="4" 
    [(model)]="inputFileModel"
    [textBrowse]="Rechercher"
    [textFileSelected]="'COMMON.FORM.FILES.SELECTED' | translate"
    [textNoFile]="'COMMON.FORM.FILES.NO' | translate"
    [textRemove]="'COMMON.REMOVE' | translate"
    (acceptedFile)="onAccept($event)"
    (removedFile)="onRemoveImage($event)">
</input-file> 
```

## For developpers
Any help is welcome, please fork this repository to make pull request.