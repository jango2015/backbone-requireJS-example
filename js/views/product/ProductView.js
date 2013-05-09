define( function(require){
   var $ = require('jquery'),
      _ = require('underscore'),
      Backbone = require('backbone'),
      productTemplate = require('text!templates/product/productTemplate.html');

  var Color = function ( color ) {
    if ( color.color == 'red' ) {
      var next = 'brown';
      var prev = 'grey';
    } else if ( color.color == 'grey' ) {
      var next = 'red';
      var prev = 'brown';
    } else {
      var next = 'grey';
      var prev = 'red';
    }
    var col = color;
    return { color: col.color, next: next, prev: prev };
  };

  var ProductView = Backbone.View.extend({
    el: $("#content"),

    render: function( options ){
      var that = this;
      if ( options.color ) {
        var color = new Color({ color: options.color });
        this.$el.html(_.template(productTemplate, {color: color}));
      }
    }

  });

  return ProductView;
  
});