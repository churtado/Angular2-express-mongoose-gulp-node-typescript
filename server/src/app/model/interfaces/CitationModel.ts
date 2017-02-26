/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import mongoose = require("mongoose");

interface CitationModel extends mongoose.Document {
    source: string;
    target: string;
}

export = CitationModel;