# ngx-input-file

**ngx-input-file** is a module to replace the html element input file and also allows you to upload files.  
Style is based on [Bootstrap File Input](http://plugins.krajee.com/file-input/demo).  
The component is compatible with [Bootstrap 4 beta](https://getbootstrap.com/).

![Input File screenshot](http://img4.hostingpics.net/pics/626115inputfile1.png)

![Input File screenshot](http://img4.hostingpics.net/pics/206713inputfile2.png)

## Key features
 - Preview of the file
 - Drag and drop zone
 - Responsive
 - [Font Awesome](http://fontawesome.io/) support
 - Uploads files with headers like `Authorization` (deprecated, other modules uploads files better than this one)

## Installation 
```bash
npm install ngx-input-file --save
```

## Basic Configuration (deprecated)
The goal of this module is not to upload file but to provide a component to replace the html element input.  
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
| --------------------- |:-------------:| :---------------------------------------- |
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

## Supported icons
The type is the mime type of the file.  
The extension is a shortly example of the file extension.
To add an other type, please open a issue.

| Type                                                                    | Extension      |
| ----------------------------------------------------------------------- |:--------------:|
| application/pdf                                                         | pdf            |
| application/vnd.openxmlformats-officedocument.wordprocessingml.document | doc, docx, ... |
| application/zip                                                         | zip            |
| default                                                                 | any            |

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

```ts
import { InputFileRepository } from 'ngx-input-file';

constructor(
    public inputFileRepository: InputFileRepository) 
{}

public post(file: any): Observable<Image> {
    const apiUrl = 'http://dumb.any/api/files';
    return this.inputFileRepository.post(file, apiUrl);
}
```

## IMPORTANT!
Icons is not packaged with the module.  
Default path of file icons is `assets/img` with the extension `.png`.  
Please use [@angular/cli](https://cli.angular.io/), `ng new ...` manages the folder `assets`.  
Any help is welcome to package icons or configure the path and extension.
You can pick icons free [here](https://www.iconfinder.com/search?q=File&license=2&price=free).

## For developpers
You're welcome, please fork this repository to a make pull request.

### Demonstration
Clone this repository and run `npm start`.