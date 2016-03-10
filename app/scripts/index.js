console.log("Hello World!");
var $ = require('jquery');
var Backbone = require('backbone');
var model = require('./models/model');
var handlebars = require('handlebars');

var contactsCollection = new model.ContactInfo();
console.log(contactsCollection);

$('.submit-button').on('click', function(){



  // var  = (planet.get('name'));//set as variable
  // var source   = $("#contact-list").html();
  // var template = handlebars.compile(source);
  // var html = template(planet.toJSON());
  // $('.content-container').append(html);

  // $('.inserts').submit(function(event){
  //   console.log( $( this ).serializeArray() );
  //   event.preventDefault();
  // });
  // $.fn.serializeObject = function(e) {
  //   e.preventDefault();
  //   return this.serializeArray().reduce(function(acum, i) {
  //   acum[i.name] = i.value;
  //   return acum;
  // }, {});
  // };
  //
  // var postDetails = $(event.currentTarget).serializeObject();
  // console.log(postDetails);
});
