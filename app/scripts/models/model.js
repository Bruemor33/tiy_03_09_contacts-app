var Backbone = require('backbone');
var $ = require('jquery');

var Contact = Backbone.Model.extend({

});

//AAAHHHHHHHHHH!!!!!!!

var ContactInfo = Backbone.Collection.extend({
  model: Contact,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/contact-app'
});

var ContactData = new Contact();

module.exports = {
  'Contact': Contact,
  'ContactInfo': ContactInfo
}
