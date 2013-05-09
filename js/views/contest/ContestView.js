define( function(require){
 var $ = require('jquery'),
      _ = require('underscore'),
      Backbone = require('backbone'),
      contestTemplate = require('text!templates/contest/contestTemplate.html');

  var ContestView = Backbone.View.extend({
    el: $("#content"),

    render: function(){
      this.$el.html(contestTemplate);
    }

  });

  return ContestView;
  
});
