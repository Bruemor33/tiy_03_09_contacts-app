var $ = require('jquery');
var Backbone = require('backbone');
var handlebars = require('handlebars');

var ContactView = Backbone.View.extend({
  className: 'content-container',

  // Put event listeners within the initialize method
  initialize: function(){

    this.listenTo(this.collection, "on", this.render());
    console.log('Its working');
  }

})

module.exports = ContactView;
