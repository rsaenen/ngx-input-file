import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'demo',
    templateUrl: 'demo.component.html'
})

export class DemoComponent {
    public control = new FormControl([{
        preview: 'https://www.planwallpaper.com/static/images/Nikon-D810-Image-Sample-6.jpg'
    }]);
}
