/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import {Injectable} from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Citation} from "../models/citation";

@Injectable()
export class CitationService {

    private citationsBaseUrl = 'api/citations/list/';  // URL to web api

    constructor(private http: Http) { }

    getCitations(amount: number): Promise<Citation[]> {

        var url = this.citationsBaseUrl + amount.toString();
        return this.http.get(url)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}