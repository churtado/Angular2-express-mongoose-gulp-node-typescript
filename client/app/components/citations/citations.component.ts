/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */
import {Component, OnInit} from '@angular/core';
import {CitationService} from "../../services/citation.service";
import {Citation} from "../../models/citation";
import { Router } from '@angular/router';

@Component({
    selector: 'my-heroes',
    templateUrl: './app/components/citations/citations.component.html'
})

export class CitationsComponent implements OnInit {

    citations: Citation[];
    amount: number = 150;
    error: any;

    constructor(
        private router: Router,
        private citationService: CitationService) { 
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
