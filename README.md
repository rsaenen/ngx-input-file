# ngx-input-file

**ngx-input-file** is a module to replace the html element input file with Material Design.

Try it with [Stackblitz](https://stackblitz.com/edit/ngx-input-file)!

For the previous version with bootstrap: `ngx-input-file@1.0.4`.

## Key features
- Preview of the file
- Drag and drop zone
- Responsive

## Installation 
```bash
npm install ngx-input-file --save
```

## Basic Configuration
```typescript
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputFileConfig, InputFileModule } from 'ngx-input-file';

const config: InputFileConfig = {};

@NgModule({
    imports: [
        ...
        BrowserAnimationsModule,
        InputFileModule.forRoot(config),
        ...
    ],
    ...
})

export class MyModule {}
```

Please include `material-design-icons` in your `angular.json`:
```json
"styles": [
    "node_modules/material-design-icons/iconfont/material-icons.css",
    "src/styles.scss"
]
```

### Component Attributes
These settings will overide the configuration defined with `forRoot()` method.  

| Attribute               | Type                    | Description                              |
| ----------------------- |:-----------------------:| :---------------------------------------- |
| fileAccept              | Input - string                  | The attribute [accept](https://www.w3schools.com/tags/att_input_accept.asp) of the html element input. |
| fileLimit               | Input - number                  | The maximum files that the user can upload. |
| iconAdd                   | Input - string                | The icon for add. |
| iconDelete               | Input - string           | The icon for delete. |
| iconFile               | Input - string               | The icon for file. |
| iconLink               | Input - string       | The icon for link. |
| linkEnabled               | Input - boolean      | Whether adding is url is enabled. |
| placeholderLink               | Input - string      | The placeholder for the link input. |
| sizeLimit               | Input - number                  | The maximum size of the file (kB). |
| disabled                | Input - boolean                 | Whether the component is disabled. |
| placeholder             | Input - string                  | The placeholder of the component. |
| classAnimation          | Input - string                  | The class of the image container which allow to animate the container when select or drop a file. |
| ngModel/formControlname | Array<InputFile>        | Template driven or reactive form works. 
| acceptedFile            | Output - InputFile | Triggered when a file is accepted. |
| deletedFile             | Output - InputFile | Triggered when a file is deleted. |
| rejectedFile            | Output - InputFile | Triggered when a file is rejected. |

### Configuration Attributes
| Attribute               | Type        | Default         | Description                              |
| ----------------------- |:----------: |:-------------:| :---------------------------------------- |
| classAnimation          | string      | 'bounce-in' | The class of the image container which allow to animate the container when select or drop a file. |
| fileAccept              | string      | '*'        | The attribute [accept](https://www.w3schools.com/tags/att_input_accept.asp) of the html element input. |
| fileLimit                 | number      | 1          | The maximum files that the user can upload. |
| iconAdd                   | string        | 'add'          | The icon for add. |
| iconDelete               | string     | 'delete'             | The icon for add. |
| iconFile               | string       | 'insert_drive_file'           | The icon for file. |
| iconLink               | string       | 'link'         | The icon for link. |
| linkEnabled               | boolean    | false              | Whether adding is url is enabled. |
| placeholderLink               | string    | 'Link'              | The placeholder for the link input. |
| sizeLimit               | number      | null     | The maximum size of the file (kB). |

## Example

```html
<input-file
    placeholder="My files"
    [(ngModel)]="myModel">
</input-file>

<input-file
    placeholder="Pictures"
    formControlName="myField">
</input-file> 
```

### Bonus
Here's an example to post a file:
```ts
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MyRepository {

constructor(
    private http: HttpClient
) {}

public post(file: InputFile): Observable<YourClass> {
    const apiUrl = 'my-url';
    const formData = new FormData();
    formData.append('file', file.file, file.file.name);
    return this.http.post<YourClass>(apiUrl, formData).pipe(
        .catchError(...)
}
```

## For developpers
You're welcome, please fork this repository to a make pull request.

## Demonstration
Clone this repository and run `npm start`.
