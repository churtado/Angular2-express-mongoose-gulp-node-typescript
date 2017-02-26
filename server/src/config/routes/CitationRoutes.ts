/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import express = require("express");
import CitationController = require("./../../controllers/CitationController");

var router = express.Router();
class CitationRoutes {
    private _citationController: CitationController;

    constructor () {
        this._citationController = new CitationController();
    }
    get routes () {
        var controller = this._citationController;

        router.get("/list", controller.retrieve);
        router.get("/list/:_amount", controller.retrieve_amount);

        return router;
    }


}

Object.seal(CitationRoutes);
export = CitationRoutes;