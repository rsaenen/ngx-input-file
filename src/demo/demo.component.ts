import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'demo',
    templateUrl: 'demo.component.html'
})

export class DemoComponent {
    public control = new FormControl([{
        // tslint:disable-next-line: max-line-length
        preview: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'
    }]);
}
