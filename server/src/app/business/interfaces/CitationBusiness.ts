/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import BaseBusiness = require("./../BaseBusiness");
import ICitationModel = require("./../../model/interfaces/CitationModel");

interface CitationBusiness extends BaseBusiness<ICitationModel> {
    
}
export = CitationBusiness;