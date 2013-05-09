define( function(require){
 var $ = require('jquery'),
      _ = require('underscore'),
      Backbone = require('backbone'),
      homeTemplate = require('text!templates/home/homeTemplate.html');

  var HomeView = Backbone.View.extend({
    el: $("#content"),

    render: function(){
      this.$el.html(homeTemplate);
    }

  });

  return HomeView;
  
});
