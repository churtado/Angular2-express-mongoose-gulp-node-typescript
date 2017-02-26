/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import express = require("express");
import CitationBusiness = require("./../app/business/CitationBusiness");
import IBaseController = require("./BaseController");
import ICitationModel = require("./../app/model/interfaces/CitationModel");

class CitationController implements IBaseController <CitationBusiness> {

    retrieve(req: express.Request, res: express.Response): void {
        try {

            var citationBusiness = new CitationBusiness();
            citationBusiness.retrieve((error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }

    retrieve_amount(req: express.Request, res: express.Response): void {
        try {

            var _amount: number = req.params._amount;
            var citationBusiness = new CitationBusiness();
            citationBusiness.retrieve_amount(_amount, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }

    findById(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var citationBusiness = new CitationBusiness();
            citationBusiness.findById(_id, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }

    create(req: express.Request, res: express.Response): void {
        try {

            var hero: ICitationModel = <ICitationModel>req.body;
            var heroBusiness = new CitationBusiness();
            heroBusiness.create(hero, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    update(req: express.Request, res: express.Response): void {
        try {
            var hero: ICitationModel = <ICitationModel>req.body;
            var _id: string = req.params._id;
            var heroBusiness = new CitationBusiness();
            heroBusiness.update(_id, hero, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    delete(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var heroBusiness = new CitationBusiness();
            heroBusiness.delete(_id, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
}

export = CitationController;