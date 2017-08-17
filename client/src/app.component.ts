import { Component, OnInit } from '@angular/core';

import { DemoService } from './demo.service';
import { Link } from './link';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
    title = 'Demo App';
    angularLinks: Link[] = [];
    materialLinks: Link[] = [];

    constructor(private demoService: DemoService) {
        // empty constructor
    }

    ngOnInit(): void {
        this.demoService.getAngular().then((links) => this.angularLinks = links);
        this.demoService.getMaterial().then((links) => this.materialLinks = links);
    }
}
