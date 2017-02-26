/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */
import {Component, OnInit, ElementRef } from '@angular/core';
import {CitationService} from "../../services/citation.service";
import {Citation} from "../../models/citation";
import { Router } from '@angular/router';
import { D3Service, D3, Selection } from 'd3-ng2-service';

@Component({
    selector: 'my-heroes',
    templateUrl: './app/components/citations/citations.component.html'
})

export class CitationsComponent implements OnInit {

    private d3: D3; // <-- Define the private member which will hold the d3 reference
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
        let d3 = this.d3; // <-- for convenience use a block scope variable
        let d3ParentElement: Selection<any, any, any, any>; // <-- Use the Selection interface (very basic here for illustration only)
    }

    handleChange(amount: number) {
        console.log(this.amount);
        this.amount = amount;
        this.getCitations();
    }
}
