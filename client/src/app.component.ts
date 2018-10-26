import { Component, OnInit } from '@angular/core';

import { DemoService } from './services';
import { Link } from './models';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
    title = 'Demo App';
    angularLinks: Link[] = [];
    materialLinks: Link[] = [];

    constructor(
        private demoService: DemoService
    ) { }

    ngOnInit(): void {
        this.demoService.getAngular().subscribe((links) => this.angularLinks = links);
        this.demoService.getMaterial().subscribe((links) => this.materialLinks = links);
    }
}
