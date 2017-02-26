/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import CitationModel = require("./../model/CitationModel");
import ICitationModel = require("./../model/interfaces/CitationModel");
import CitationSchema = require("./../dataAccess/schemas/CitationSchema");
import RepositoryBase = require("./BaseRepository");

class CitationRepository  extends RepositoryBase<ICitationModel> {
    constructor () {
        super(CitationSchema);
    }
}

Object.seal(CitationRepository);
export = CitationRepository;