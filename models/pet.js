"use strict";

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const PetSchema = new Schema({
    name: { type: String, required: true },
    species: { type: String },
    birthday: { type: Date },
    picUrl: { type: String },
    picUrlSq: { type: String },
    favoriteFood: { type: String },
    description: { type: String }
}, {
    timestamps: true
});

mongoosePaginate.paginate.options = { limit: 3 };
PetSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Pet', PetSchema);
