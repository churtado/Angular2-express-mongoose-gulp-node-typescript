/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import ICitationModel = require('./interfaces/CitationModel');

class CitationModel {

    private _citationModel: ICitationModel;

    constructor(citationModel: ICitationModel) {
        this._citationModel = citationModel;
    }
    get source (): string {
        return this._citationModel.source;
    }

    get target (): string {
        return this._citationModel.target;
    }

}
Object.seal(CitationModel);
export =  CitationModel;