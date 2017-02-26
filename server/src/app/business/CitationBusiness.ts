/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import CitationRepository = require("./../repository/CitationRepository");
import ICitationBusiness = require("./interfaces/CitationBusiness");
import ICitationModel = require("./../model/interfaces/CitationModel");
import CitationModel = require("./../model/CitationModel");


class CitationBusiness implements ICitationBusiness {
    private _citationRepository: CitationRepository;

    constructor () {
        this._citationRepository = new CitationRepository();
    }

    create (item: ICitationModel, callback: (error: any, result: any) => void) {
        this._citationRepository.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this._citationRepository.retrieve(callback);
    }

    retrieve_amount (amount: number, callback: (error: any, result: any) => void) {
        this._citationRepository.retrieve_amount(amount, callback);
    }

    update (_id: string, item: ICitationModel, callback: (error: any, result: any) => void) {

        this._citationRepository.findById(_id, (err, res) => {
            if(err) callback(err, res);

            else
                this._citationRepository.update(res._id, item, callback);

        });
    }

    delete (_id: string, callback:(error: any, result: any) => void) {
        this._citationRepository.delete(_id , callback);
    }

    findById (_id: string, callback: (error: any, result: ICitationModel) => void) {
        this._citationRepository.findById(_id, callback);
    }

}


Object.seal(CitationBusiness);
export = CitationBusiness;