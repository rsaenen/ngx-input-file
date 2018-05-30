## Breaking changes
Input file repository dropped.    
See below how to upload a file.

# ngx-input-file

**ngx-input-file** is a module to replace the html element input file and also allows you to upload files.  
Style is based on [Bootstrap File Input](http://plugins.krajee.com/file-input/demo).

![Input File screenshot](http://img4.hostingpics.net/pics/626115inputfile1.png)

![Input File screenshot](http://img4.hostingpics.net/pics/206713inputfile2.png)

## Key features
- Preview of the file
- Drag and drop zone
- Responsive
- [Bootstrap 4](https://getbootstrap.com/) required.
- [Font Awesome 5](http://fontawesome.com/) support

## Installation 
```bash
npm install ngx-input-file --save
```

## Basic Configuration
```typescript
import { NgModule } from '@angular/core';
import { InputFileModule } from 'ngx-input-file';


@NgModule({
    imports: [
        ... 
        InputFileModule,
        ...
    ],
    ...
})

export class MyModule {}
```
Import `InputFileModule` in your module.

## Component Attributes
| Attribute             | Type          | Description                               |
| --------------------- |:-------------:| :---------------------------------------- |
| inputId               | string                | The attribute identifier of the html element input. |
| inputAccept           | string                | The attribute [accept](https://www.w3schools.com/tags/att_input_accept.asp) of the html element input. |
| disableUpload         | boolean               | Default `false`. Hide the button upload. |
| inputMaxFiles         | number                | Default `1`. The maximum files that the user can upload. |
| minimal               | boolean               | Default `false`. If true, puts the input file to the minimal mode, a simple button browse without icon. |
| model                 | Array<File>           | The model. 
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

### Minimal Mode Attributes
| Attribute             | Type          | Description                               |
| --------------------- |:-------------:| :---------------------------------------- |
| inputId               | string                | The attribute identifier of the html element input. |
| inputAccept           | string                | The attribute [accept](https://www.w3schools.com/tags/att_input_accept.asp) of the html element input. |
| model                 | Array<File>           | The model. 
| textBrowse            | string                | Default `Browse`. The text of the button browse. |
| acceptedFile          | EventEmitter<File>    | Triggered when a file is accepted. |
| rejectedFile          | EventEmitter<File>    | Triggered when a file is rejected. |

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
Here's an example to post a file:
```ts
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MyRepository {

constructor(
    private http: HttpClient
) {}

public post(file: any): Observable<any> {
    const apiUrl = 'my-url';
    const formData = new FormData();
    formData.append('file', file.file, file.file.name);
    return this.http.post(apiUrl, formData)
        .map(res => <any>res);
}
```

## IMPORTANT!
Icons is not packaged with the module.  
Default path of file icons is `assets/img` with the extension `.png`.  
Any help is welcome to package icons or configure the path and extension.
You can pick icons free [here](https://www.iconfinder.com/search?q=File&license=2&price=free).

## For developpers
You're welcome, please fork this repository to a make pull request.

### Demonstration
Clone this repository and run `npm start`.
