/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */
import {Component, OnInit, ElementRef } from '@angular/core';
import {CitationService} from "../../services/citation.service";
import {Citation} from "../../models/citation";
import { Router } from '@angular/router';
import * as d3 from 'd3';

@Component({
    selector: 'my-heroes',
    templateUrl: './app/components/citations/citations.component.html'
})

export class CitationsComponent implements OnInit {

    private parentNativeElement: any;

    citations: Citation[];
    amount: number = 150;
    error: any;

    constructor(
        private router: Router,
        private citationService: CitationService
        , element: ElementRef
        //, d3Service: D3Service
        ) {
        }

    getCitations() {
        this.citationService.getCitations(this.amount).then(citations => this.citations = citations);
    }

    ngOnInit() {
        this.getCitations();
    }

    handleChange(amount: number) {
        console.log(this.amount);
        this.amount = amount;
        this.getCitations();
    }
}
