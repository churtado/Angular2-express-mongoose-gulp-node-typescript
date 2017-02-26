/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'my-dashboard',
    templateUrl: './app/components/home/home.component.html',
    styleUrls: ['./app/components/dashboard/home.component.css']
})

export class HomeComponent implements OnInit {

    constructor(
        private router: Router) {
    }

    ngOnInit() {
        console.log("on init");
    }

}