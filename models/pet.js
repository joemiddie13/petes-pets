"use strict";

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const PetSchema = new Schema({
    name: { type: String, required: true },
    birthday: { type: String, required: true },
    species: { type: String, required: true },
    picUrl: { type: String },
    picUrlSq: { type: String },
    avatarUrl: { type: String, required: true },
    favoriteFood: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, minlength: 140, required: true }
}, {
    timestamps: true
});

// Adding text index without weights
PetSchema.index({ name: 'text', species: 'text', favoriteFood: 'text', description: 'text' });

// Adding text index with weights
PetSchema.index(
    { name: 'text', species: 'text', favoriteFood: 'text', description: 'text' },
    { name: 'My text index', weights: { name: 10, species: 4, favoriteFood: 2, description: 1 } }
);

mongoosePaginate.paginate.options = { limit: 3 };
PetSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Pet', PetSchema);
