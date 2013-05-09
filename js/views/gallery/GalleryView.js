define( function(require){
 var $ = require('jquery'),
      _ = require('underscore'),
      Backbone = require('backbone'),
      galleryTemplate = require('text!templates/gallery/galleryTemplate.html');

  var GalleryView = Backbone.View.extend({
    el: $("#content"),

    render: function(){
      this.$el.html(galleryTemplate);
    }

  });

  return GalleryView;
  
});
