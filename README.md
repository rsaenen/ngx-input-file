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
import { InputFileConfig, InputFileModule } from 'ngx-input-file';

const config: InputFileConfig = {};

@NgModule({
    imports: [
        ... 
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
| inputId                 | string                  | The attribute identifier of the html element input. |
| fileAccept              | string                  | The attribute [accept](https://www.w3schools.com/tags/att_input_accept.asp) of the html element input. |
| fileLimit               | number                  | The maximum files that the user can upload. |
| sizeLimit               | number                  | The maximum size of the file (kB). |
| disabled                | boolean                 | Whether the component is disabled. |
| placeholder             | string                  | The placeholder of the component. |
| ngModel/formControlname | Array<InputFile>        | Template driven or reactive form works. 
| acceptedFile            | EventEmitter<InputFile> | Triggered when a file is accepted. |
| deletedFile             | EventEmitter<InputFile> | Triggered when a file is deleted. |
| rejectedFile            | EventEmitter<InputFile> | Triggered when a file is rejected. |

### Configuration Attributes
| Attribute               | Type                    | Description                              |
| ----------------------- |:-----------------------:| :---------------------------------------- |
| fileAccept              | number                 | The attribute [accept](https://www.w3schools.com/tags/att_input_accept.asp) of the html element input. |
| fileLimit               | number                  | The maximum files that the user can upload. |
| sizeLimit               | number                  | The maximum size of the file (kB). |

## Example

```html
<input-file 
    inputId="files"
    placeholder="My files"
    [(ngModel)]="myModel">
</input-file>

<input-file 
    inputId="images"
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