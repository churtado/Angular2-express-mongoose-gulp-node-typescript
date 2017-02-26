/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import DataAccess = require('../DataAccess');
import ICitationModel = require("./../../model/interfaces/CitationModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class CitationSchema {

    static get schema () {
        var schema =  mongoose.Schema({
            source : {
                type: String,
                required: true
            },
            target: {
                type: String,
                required: true
            }
        });

        return schema;
    }
}
var schema = mongooseConnection.model<ICitationModel>("academic_paper_citations", CitationSchema.schema);
export = schema;""