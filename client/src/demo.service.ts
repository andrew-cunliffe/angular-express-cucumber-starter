import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Link } from './link'

@Injectable()
export class DemoService {

    private angularUrl = 'api/v1/angular';
    private materialUrl = 'api/v1/material';

    constructor(private http: Http) {
        // empty constructor
    }

    getAngular(): Promise<Link[]> {
        return this.http.get(this.angularUrl)
            .toPromise()
            .then((response) => response.json())
            .then((data) => data.links as Link[]);
    }

    getMaterial(): Promise<Link[]> {
        return this.http.get(this.materialUrl)
            .toPromise()
            .then((response) => response.json())
            .then((data) => data.links as Link[]);
    }
}
