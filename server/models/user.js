var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose47', { useNewUrlParser: true });

mongoose.Promise = global.Promise;

var RateSchema = new mongoose.Schema({
    stars: { type: Number,required: true},
    comment: { type: String}
   }, {timestamps: true})

var CakeSchema = new mongoose.Schema({
    name: { type: String,required: true, minlength: 2},
    url: { type: String, required: true},
    time: { type: Boolean, default: true },
    Reviews: [RateSchema]
   }, {timestamps: true})



   mongoose.model('Cakes', CakeSchema);
   mongoose.model('Rates', RateSchema);

   module.exports = { 
    Cakes: mongoose.model("Cakes"),
    Rates: mongoose.model("Rates")
}

