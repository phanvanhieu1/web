// models/user.model.js
// load những thư viện chúng ta cần
var mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

const mongooseDelete = require('mongoose-delete');

// định nghĩ cấu trúc user model
var Schema = mongoose.Schema;
var products = new Schema({
   
    image: {type: String, required: true},
    name: {type: String, required: true},
    cateID: {type: String, required: false},
    quantity: {type: String, required: true},
    note: {type: String, required: true},
    price: {type: String, required: true},//giá
    date: {type: Date},
    //chi tiết
    slug: { type: String, slug: 'name', unique: true },
    videoid: { type: String, maxlength: 200 },
    height: { type: String, maxlength: 200 },
    weight: { type: String, maxlength: 200 },
    color: { type: String, maxlength: 200 },
    engine: { type: String, maxlength: 200 },
    wattage: { type: String, maxlength: 200 },
    capacity: { type: String, maxlength: 200 },
    seat: { type: String, maxlength: 200 },
    

}); 
//add plugin
mongoose.plugin(slug);  // plugin slug
products.plugin(mongooseDelete,{
    deletedAt : true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('products', products);
