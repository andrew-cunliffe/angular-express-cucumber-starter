import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Link } from '../models';

@Injectable({
    providedIn: 'root'
})
export class DemoService {

    private angularUrl = 'api/v1/angular';
    private materialUrl = 'api/v1/material';

    constructor(
        private http: HttpClient
    ) { }

    getAngular(): Observable<Array<Link>> {
        return this.http.get<Array<Link>>(this.angularUrl);
    }

    getMaterial(): Observable<Array<Link>> {
        return this.http.get<Array<Link>>(this.materialUrl);
    }
}
