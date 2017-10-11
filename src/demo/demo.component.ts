import { Component } from '@angular/core';

@Component({
    selector: 'demo',
    templateUrl: 'demo.component.html'
})

export class DemoComponent {
    public inputFileModel: Array<any> = new Array<any>();

    public onAccept(file: any): void { }

    public onRemove(file: any): void { }
}
