import { Component } from '@angular/core';

@Component({
    selector: 'demo',
    templateUrl: 'demo.component.html'
})

export class DemoComponent {
    public inputFileModel: Array<any> = new Array<any>();
    public inputFileMinimalModel: Array<any> = new Array<any>();

    public onAccept(file: any): void {
        console.log('accept');
        console.log(file);
    }

    public onRemove(file: any): void {
        console.log('remove');
        console.log(file);
    }
}
