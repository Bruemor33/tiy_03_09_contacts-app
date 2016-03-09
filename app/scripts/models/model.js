var Backbone = require('backbone');
var $ = require('jquery');

var Contact = Backbone.Model.extend({

});

var ContactInfo = Backbone.Collection.extend({
  model: Contact
});

module.exports = {
  'Contact': Contact,
  'ContactInfo': ContactInfo
}
