var $ = require('jquery');
var Backbone = require('backbone');
var handlebars = require('handlebars');

//list view
var ContactView = Backbone.View.extend({
  id: 'contact-list',

  // Put event listeners within the initialize method
  initialize: function(){

    this.listenTo(this.collection, "on", this.render());
    console.log('Its working');
  },
  render: function(){
    return this;
  },
  renderContactItem: function(contact){
    var view = new ContactView({model: contact});
    this.$el.append(view.render().el);
  }

}); //AAAHHHHHHHHHH!!!!!!!

//Individual Item Listing
var ContactInfoView = Backbone.View.extend({
  template: handlebars.compile($('#contact-list').html()),
  events: {
    "click": 'complete'
  },
  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
    this.listenTo(this.model, 'visible', this.toggleVisible);
  },
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  }
})

module.exports = {
  'ContactView': ContactView,
  'ContactInfoView': ContactInfoView
}
