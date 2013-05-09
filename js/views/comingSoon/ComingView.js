define( function(require){
 var $ = require('jquery'),
      _ = require('underscore'),
      Backbone = require('backbone'),
      comingTemplate = require('text!templates/comingSoon/comingTemplate.html');

  var ComingView = Backbone.View.extend({
    el: $("#content"),

    render: function(){
      this.$el.html(comingTemplate);
    }

  });

  return ComingView;
  
});
