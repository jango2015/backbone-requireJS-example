// Filename: router.js
define(function(require){

  var $ = require('jquery'),
      _ = require('underscore'),
      Backbone = require('backbone'),
      HomeView = require('views/home/HomeView'),
      ProductView = require('views/product/ProductView'),
      GalleryView = require('views/gallery/GalleryView'),
      ComingView = require('views/comingSoon/ComingView')
      ContestView = require('views/contest/ContestView'),
      bootstrap = require('bootstrap');
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'gallery': 'showGallery',
      'contest': 'showContest',
      'coming': 'showComing',
      'products/:color': 'showProduct',
      // Default
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;
    
    app_router.on('route:showGallery', function(){
   
        var galleryView = new GalleryView();
        galleryView.render();
    });

    app_router.on('route:showContest', function () {
      
        var contestView = new ContestView();
        contestView.render();
    });

    app_router.on('route:defaultAction', function (actions) {
    
        var homeView = new HomeView();
        homeView.render();
    });

    app_router.on('route:showComing', function () {
     
        var comingView = new ComingView();
        comingView.render();
    });

    app_router.on('route:showProduct', function( color ) {
  
      var product = new ProductView();
      product.render( { color: color } );
    });

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
